import { NextRequest, NextResponse } from 'next/server';
import { trackServerEvent } from '@/lib/analytics';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Stricter for contact forms
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// In-memory storage for development - replace with database in production
const contactSubmissions = new Map<string, any>();

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Phone validation regex (international format)
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

// Blocked email domains
const BLOCKED_DOMAINS = [
  'mailinator.com',
  'guerrillamail.com',
  '10minutemail.com',
  'throwaway.email',
  'tempmail.com'
];

// Spam detection keywords
const SPAM_KEYWORDS = [
  'viagra', 'casino', 'lottery', 'winner', 'prize',
  'click here', 'buy now', 'limited time', 'act now'
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
    .replace(/\//g, '&#x2F;')
    .trim();
}

// Validate email domain
function isValidEmailDomain(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;
  
  if (BLOCKED_DOMAINS.includes(domain)) {
    return false;
  }
  
  return true;
}

// Check for spam content
function checkForSpam(content: string): boolean {
  const lowerContent = content.toLowerCase();
  return SPAM_KEYWORDS.some(keyword => lowerContent.includes(keyword));
}

// Generate unique ID
function generateId(): string {
  return `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimitCheck = checkRateLimit(clientIp);
    
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many submissions. Please try again later.',
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
    
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    
    const { 
      name, 
      email, 
      phone, 
      company, 
      message, 
      subject,
      contactType,
      budget,
      timeline,
      referralSource,
      gdprConsent 
    } = body;
    
    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required (minimum 2 characters)' },
        { status: 400 }
      );
    }
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message is required (minimum 10 characters)' },
        { status: 400 }
      );
    }
    
    // Sanitize and validate inputs
    const sanitizedName = sanitizeInput(name.slice(0, 100));
    const normalizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = sanitizeInput(message.slice(0, 5000));
    const sanitizedSubject = subject ? sanitizeInput(subject.slice(0, 200)) : 'Contact Form Submission';
    const sanitizedCompany = company ? sanitizeInput(company.slice(0, 100)) : null;
    const sanitizedPhone = phone ? sanitizeInput(phone.slice(0, 30)) : null;
    
    // Name validation (no numbers or special characters except spaces, hyphens, apostrophes)
    if (!/^[a-zA-Z\s\-']+$/.test(sanitizedName)) {
      return NextResponse.json(
        { error: 'Please enter a valid name' },
        { status: 400 }
      );
    }
    
    // Email validation
    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    if (!isValidEmailDomain(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please use a valid email domain' },
        { status: 400 }
      );
    }
    
    // Phone validation (if provided)
    if (sanitizedPhone && !PHONE_REGEX.test(sanitizedPhone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }
    
    // Message length validation
    if (sanitizedMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Message too long (maximum 5000 characters)' },
        { status: 400 }
      );
    }
    
    // Spam check
    const combinedContent = `${sanitizedSubject} ${sanitizedMessage}`;
    if (checkForSpam(combinedContent)) {
      // Silently accept but flag as spam
      console.log('Potential spam detected:', { email: normalizedEmail, ip: clientIp });
    }
    
    // GDPR consent validation
    if (gdprConsent !== true) {
      return NextResponse.json(
        { error: 'Please accept the privacy policy to submit the form' },
        { status: 400 }
      );
    }
    
    // Check for duplicate submissions (same email + message in last 5 minutes)
    const recentKey = `${normalizedEmail}_${sanitizedMessage.slice(0, 50)}`;
    const existingSubmission = Array.from(contactSubmissions.values()).find(
      sub => {
        const timeDiff = Date.now() - new Date(sub.submittedAt).getTime();
        return sub.email === normalizedEmail && 
               sub.message.slice(0, 50) === sanitizedMessage.slice(0, 50) &&
               timeDiff < 5 * 60 * 1000; // 5 minutes
      }
    );
    
    if (existingSubmission) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Your message has already been received. We will respond soon.',
          id: existingSubmission.id
        }
      );
    }
    
    // Create contact submission
    const submissionId = generateId();
    const submissionData = {
      id: submissionId,
      name: sanitizedName,
      email: normalizedEmail,
      phone: sanitizedPhone,
      company: sanitizedCompany,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      contactType: contactType || 'general',
      budget: budget || null,
      timeline: timeline || null,
      referralSource: referralSource || 'website',
      submittedAt: new Date().toISOString(),
      status: 'new',
      ipAddress: clientIp,
      userAgent: request.headers.get('user-agent')?.slice(0, 500) || 'unknown',
      locale: request.headers.get('accept-language')?.split(',')[0] || 'en',
      referrer: request.headers.get('referer') || null,
      gdprConsent: true,
      spamScore: checkForSpam(combinedContent) ? 1 : 0,
      responded: false,
      notes: []
    };
    
    // Store submission
    contactSubmissions.set(submissionId, submissionData);
    
    // Track to Google Analytics (server-side)
    try {
      const clientGAId = request.cookies.get('_ga')?.value?.replace('GA1.1.', '');
      await trackServerEvent(
        'generate_lead',
        {
          value: budget === 'enterprise' ? 1000 : budget === 'mid-market' ? 500 : 200,
          currency: 'USD',
          lead_type: contactType || 'general',
          lead_source: referralSource || 'website',
          company_size: company ? 'has_company' : 'individual',
          timeline: timeline || 'not_specified',
          has_phone: !!sanitizedPhone,
          message_length: sanitizedMessage.length,
          spam_score: submissionData.spamScore
        },
        clientGAId,
        normalizedEmail
      );
    } catch (analyticsError) {
      // Don't fail the contact form if analytics fails
      console.log('GA tracking failed:', analyticsError);
    }
    
    // Clean up old rate limit entries
    if (Math.random() < 0.1) {
      const now = Date.now();
      Array.from(rateLimitMap.entries()).forEach(([ip, limit]) => {
        if (now > limit.resetTime + RATE_LIMIT_WINDOW) {
          rateLimitMap.delete(ip);
        }
      });
    }
    
    // In production, you would:
    // 1. Save to database
    // 2. Send email notification to team
    // 3. Send confirmation email to user
    // 4. Add to CRM
    // 5. Trigger Slack/Teams notification
    
    console.log('New contact submission:', {
      id: submissionId,
      name: sanitizedName,
      email: normalizedEmail.replace(/(.{3}).*@/, '$1***@'),
      subject: sanitizedSubject
    });
    
    // Return success response
    const response = NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
      data: {
        id: submissionId,
        estimatedResponseTime: '24 hours'
      }
    });
    
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    
    return response;
    
  } catch (error) {
    console.error('Contact form error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      ip: getClientIp(request)
    });
    
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your submission. Please try again.',
        code: 'CONTACT_ERROR'
      },
      { status: 500 }
    );
  }
}

// GET endpoint for admin to retrieve submissions
export async function GET(request: NextRequest) {
  try {
    // Authentication check
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.CONTACT_API_KEY || 'dev-key-contact-67890';
    
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
    const status = url.searchParams.get('status');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    
    const submissions = Array.from(contactSubmissions.values());
    
    switch (action) {
      case 'count':
        return NextResponse.json({
          success: true,
          data: {
            total: submissions.length,
            new: submissions.filter(s => s.status === 'new').length,
            inProgress: submissions.filter(s => s.status === 'in_progress').length,
            resolved: submissions.filter(s => s.status === 'resolved').length,
            spam: submissions.filter(s => s.spamScore > 0).length
          }
        });
        
      case 'export':
        const csv = [
          'ID,Name,Email,Company,Subject,Status,Submitted At',
          ...submissions.map(s => 
            `"${s.id}","${s.name}","${s.email}","${s.company || ''}","${s.subject}","${s.status}","${s.submittedAt}"`
          )
        ].join('\n');
        
        return new NextResponse(csv, {
          status: 200,
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': 'attachment; filename="contact_submissions.csv"'
          }
        });
        
      default:
        // Filter by status if provided
        let filtered = status 
          ? submissions.filter(s => s.status === status)
          : submissions;
        
        // Sort by newest first and limit
        const results = filtered
          .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
          .slice(0, limit)
          .map(s => ({
            ...s,
            email: s.email.replace(/(.{3}).*@/, '$1***@'),
            ipAddress: 'hidden',
            message: s.message.slice(0, 100) + (s.message.length > 100 ? '...' : '')
          }));
        
        return NextResponse.json({
          success: true,
          data: {
            submissions: results,
            total: filtered.length,
            showing: results.length
          }
        });
    }
    
  } catch (error) {
    console.error('Contact GET error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve contact submissions' },
      { status: 500 }
    );
  }
}

// PATCH endpoint to update submission status
export async function PATCH(request: NextRequest) {
  try {
    // Authentication check
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.CONTACT_API_KEY || 'dev-key-contact-67890';
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const token = authHeader.substring(7);
    if (token !== apiKey) {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 403 }
      );
    }
    
    const { id, status, notes } = await request.json();
    
    if (!id || !contactSubmissions.has(id)) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }
    
    const submission = contactSubmissions.get(id);
    
    if (status) {
      const validStatuses = ['new', 'in_progress', 'resolved', 'spam'];
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          { error: 'Invalid status' },
          { status: 400 }
        );
      }
      submission.status = status;
      submission.updatedAt = new Date().toISOString();
    }
    
    if (notes) {
      submission.notes.push({
        text: sanitizeInput(notes),
        addedAt: new Date().toISOString()
      });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Submission updated successfully',
      data: {
        id: submission.id,
        status: submission.status
      }
    });
    
  } catch (error) {
    console.error('Contact PATCH error:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}