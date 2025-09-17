import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Simple in-memory storage for development - replace with database in production
const subscribers = new Map<string, any>();

// Email validation regex - more comprehensive
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Blocked email domains (disposable email services)
const BLOCKED_DOMAINS = [
  'mailinator.com',
  'guerrillamail.com',
  '10minutemail.com',
  'throwaway.email',
  'tempmail.com'
];

// Helper function to get client IP
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || real || 'unknown';
  return ip.trim();
}

// Rate limiting check
function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }
  
  if (limit.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((limit.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  limit.count++;
  return { allowed: true };
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Validate email domain
function isValidEmailDomain(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;
  
  // Check against blocked domains
  if (BLOCKED_DOMAINS.includes(domain)) {
    return false;
  }
  
  // Additional domain validation could be added here
  // e.g., DNS lookup, MX record check
  
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimitCheck = checkRateLimit(clientIp);
    
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimitCheck.retryAfter 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(rateLimitCheck.retryAfter || 60)
          }
        }
      );
    }
    
    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    
    const { email, source, timestamp, url, utm_source, utm_medium, utm_campaign } = body;

    // Comprehensive email validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Trim and lowercase email
    const normalizedEmail = email.trim().toLowerCase();
    
    // Length validation
    if (normalizedEmail.length < 3 || normalizedEmail.length > 254) {
      return NextResponse.json(
        { error: 'Email address is invalid' },
        { status: 400 }
      );
    }
    
    // Format validation
    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    // Domain validation
    if (!isValidEmailDomain(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please use a valid email domain' },
        { status: 400 }
      );
    }
    
    // Validate optional fields
    const validatedSource = source && typeof source === 'string' ? sanitizeInput(source.slice(0, 50)) : 'website';
    const validatedUrl = url && typeof url === 'string' ? sanitizeInput(url.slice(0, 500)) : '';
    const validatedUtmSource = utm_source && typeof utm_source === 'string' ? sanitizeInput(utm_source.slice(0, 50)) : null;
    const validatedUtmMedium = utm_medium && typeof utm_medium === 'string' ? sanitizeInput(utm_medium.slice(0, 50)) : null;
    const validatedUtmCampaign = utm_campaign && typeof utm_campaign === 'string' ? sanitizeInput(utm_campaign.slice(0, 100)) : null;

    // Check if already subscribed
    const existingSubscriber = subscribers.get(normalizedEmail);
    if (existingSubscriber) {
      // Check if subscriber is inactive and wants to resubscribe
      if (existingSubscriber.status === 'unsubscribed') {
        existingSubscriber.status = 'active';
        existingSubscriber.resubscribedAt = new Date().toISOString();
        existingSubscriber.resubscribeCount = (existingSubscriber.resubscribeCount || 0) + 1;
        
        return NextResponse.json({
          success: true,
          message: 'Welcome back! You have been resubscribed to our newsletter.'
        });
      }
      
      return NextResponse.json(
        { success: true, message: 'You are already subscribed to our newsletter!' }
      );
    }

    // Store subscription data with enhanced tracking
    const subscriptionData = {
      email: normalizedEmail,
      source: validatedSource,
      timestamp: timestamp || new Date().toISOString(),
      url: validatedUrl,
      utm_source: validatedUtmSource,
      utm_medium: validatedUtmMedium,
      utm_campaign: validatedUtmCampaign,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      confirmed: false, // Would be set to true after email confirmation
      ipAddress: clientIp,
      userAgent: request.headers.get('user-agent')?.slice(0, 500) || 'unknown',
      locale: request.headers.get('accept-language')?.split(',')[0] || 'en',
      referrer: request.headers.get('referer') || null,
      gdprConsent: true, // Should be explicitly collected from user
      emailPreferences: {
        newsletter: true,
        productUpdates: false,
        marketing: false
      }
    };

    // Store the subscription
    subscribers.set(normalizedEmail, subscriptionData);
    
    // Clean up old rate limit entries periodically
    if (Math.random() < 0.1) { // 10% chance to clean up
      const now = Date.now();
      Array.from(rateLimitMap.entries()).forEach(([ip, limit]) => {
        if (now > limit.resetTime + RATE_LIMIT_WINDOW) {
          rateLimitMap.delete(ip);
        }
      });
    }

    // #COMPLETION_DRIVE_INTEGRATION: In production, you would:
    // 1. Save to database (e.g., PostgreSQL, MongoDB)
    // 2. Add to email service provider (e.g., Mailchimp, ConvertKit, SendGrid)
    // 3. Send welcome email
    // 4. Add to CRM with proper lead scoring
    // 5. Track in analytics
    // 6. Trigger marketing automation workflows
    
    /* Example production implementation:
    
    // Save to database
    await db.subscribers.create({
      data: subscriptionData
    });
    
    // Add to email service provider
    await emailProvider.addSubscriber({
      email,
      tags: [source, 'newsletter'],
      customFields: {
        source,
        utm_source,
        utm_medium,
        utm_campaign
      }
    });
    
    // Send welcome email
    await sendWelcomeEmail({
      to: email,
      template: 'newsletter-welcome',
      data: { 
        firstName: extractFirstName(email),
        source 
      }
    });
    
    // Track in analytics
    await analytics.track('newsletter_signup', {
      email,
      source,
      url
    });
    
    */

    // Log subscription (in production, use proper logging service)
    console.log('New newsletter subscription:', {
      email: normalizedEmail.replace(/(.{3}).*@/, '$1***@'), // Mask for privacy
      source: validatedSource,
      timestamp: subscriptionData.subscribedAt
    });

    // Set secure response headers
    const response = NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
      data: {
        email: normalizedEmail.replace(/(.{3}).*@/, '$1***@'), // Masked email
        subscribed: true
      }
    });
    
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    
    return response;

  } catch (error) {
    // Detailed error logging (in production, use proper error tracking)
    console.error('Newsletter subscription error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      ip: getClientIp(request)
    });
    
    // Generic error message to avoid information leakage
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your subscription. Please try again later.',
        code: 'SUBSCRIPTION_ERROR'
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve subscription stats (for admin purposes)
export async function GET(request: NextRequest) {
  try {
    // Basic authentication check (in production, use proper auth)
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.NEWSLETTER_API_KEY || 'dev-key-12345';
    
    // Simple Bearer token authentication
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401, headers: { 'WWW-Authenticate': 'Bearer' } }
      );
    }
    
    const token = authHeader.substring(7);
    if (token !== apiKey) {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 403 }
      );
    }
    
    const url = new URL(request.url);
    const action = url.searchParams.get('action');
    const format = url.searchParams.get('format') || 'json';

    // Handle different actions
    switch (action) {
      case 'count':
        const subscriberArray = Array.from(subscribers.values());
        return NextResponse.json({
          success: true,
          data: {
            total: subscribers.size,
            active: subscriberArray.filter(sub => sub.status === 'active').length,
            unsubscribed: subscriberArray.filter(sub => sub.status === 'unsubscribed').length,
            confirmed: subscriberArray.filter(sub => sub.confirmed).length,
            unconfirmed: subscriberArray.filter(sub => !sub.confirmed).length
          }
        });
        
      case 'export':
        // Export subscribers (CSV format)
        if (format === 'csv') {
          const csv = [
            'Email,Source,Status,Subscribed At,Confirmed',
            ...Array.from(subscribers.values()).map(sub => 
              `"${sub.email}","${sub.source}","${sub.status}","${sub.subscribedAt}","${sub.confirmed}"`
            )
          ].join('\n');
          
          return new NextResponse(csv, {
            status: 200,
            headers: {
              'Content-Type': 'text/csv',
              'Content-Disposition': 'attachment; filename="subscribers.csv"'
            }
          });
        }
        
        // JSON export
        return NextResponse.json({
          success: true,
          data: Array.from(subscribers.values()).map(sub => ({
            ...sub,
            email: sub.email.replace(/(.{3}).*@/, '$1***@'), // Mask for privacy
            ipAddress: 'hidden' // Hide IP for privacy
          }))
        });
        
      case 'stats':
        // Detailed statistics
        const subs = Array.from(subscribers.values());
        const sources = subs.reduce((acc, sub) => {
          acc[sub.source] = (acc[sub.source] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        return NextResponse.json({
          success: true,
          data: {
            overview: {
              total: subscribers.size,
              active: subs.filter(s => s.status === 'active').length,
              confirmed: subs.filter(s => s.confirmed).length
            },
            sources,
            recentActivity: {
              last24h: subs.filter(s => {
                const subTime = new Date(s.subscribedAt).getTime();
                return Date.now() - subTime < 24 * 60 * 60 * 1000;
              }).length,
              last7days: subs.filter(s => {
                const subTime = new Date(s.subscribedAt).getTime();
                return Date.now() - subTime < 7 * 24 * 60 * 60 * 1000;
              }).length
            }
          }
        });
        
      default:
        // Return recent subscriptions (last 10)
        const recentSubscriptions = Array.from(subscribers.values())
          .sort((a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime())
          .slice(0, 10)
          .map(sub => ({
            email: sub.email.replace(/(.{3}).*@/, '$1***@'), // Mask email
            source: sub.source,
            subscribedAt: sub.subscribedAt,
            status: sub.status,
            confirmed: sub.confirmed
          }));

        return NextResponse.json({
          success: true,
          data: {
            count: subscribers.size,
            recent: recentSubscriptions
          }
        });
    }
  } catch (error) {
    console.error('Newsletter GET error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve subscription data' },
      { status: 500 }
    );
  }
}

// DELETE endpoint for unsubscribing
export async function DELETE(request: NextRequest) {
  try {
    const { email, token } = await request.json();
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    const normalizedEmail = email.trim().toLowerCase();
    const subscriber = subscribers.get(normalizedEmail);
    
    if (!subscriber) {
      return NextResponse.json(
        { error: 'Subscription not found' },
        { status: 404 }
      );
    }
    
    // In production, verify unsubscribe token
    // if (token !== generateUnsubscribeToken(normalizedEmail)) {
    //   return NextResponse.json(
    //     { error: 'Invalid unsubscribe token' },
    //     { status: 403 }
    //   );
    // }
    
    // Mark as unsubscribed instead of deleting
    subscriber.status = 'unsubscribed';
    subscriber.unsubscribedAt = new Date().toISOString();
    
    return NextResponse.json({
      success: true,
      message: 'You have been successfully unsubscribed.'
    });
    
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to unsubscribe' },
      { status: 500 }
    );
  }
}