import { NextRequest, NextResponse } from 'next/server';

// Rate limiting for analytics
const RATE_LIMIT_WINDOW = 10 * 1000; // 10 seconds
const MAX_EVENTS_PER_WINDOW = 50; // Higher limit for analytics
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// In-memory storage for analytics - replace with database/analytics service in production
const analyticsEvents = new Map<string, any>();
const sessions = new Map<string, any>();

// Event types
const VALID_EVENT_TYPES = [
  'page_view',
  'click',
  'scroll',
  'form_start',
  'form_submit',
  'form_error',
  'cta_click',
  'video_play',
  'video_complete',
  'download',
  'search',
  'share',
  'newsletter_signup',
  'contact_submit',
  'error',
  'performance',
  'conversion',
  'engagement',
  'exit_intent',
  'time_on_page',
  // New event types for comprehensive tracking
  'user_behavior',
  'heatmap_event',
  'ab_test_assignment',
  'ab_test_conversion',
  'funnel_step',
  'timing_complete',
  'social',
  'custom'
];

// Integration flags
const INTEGRATIONS = {
  GA4_ENABLED: !!process.env.NEXT_PUBLIC_GA_ID,
  CLARITY_ENABLED: !!process.env.NEXT_PUBLIC_CLARITY_ID,
  CUSTOM_BACKEND: process.env.ANALYTICS_BACKEND_URL || null,
  PRIVACY_MODE: process.env.ANALYTICS_PRIVACY_MODE === 'true',
};

// Helper function to get client IP
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || real || 'unknown';
  return ip.trim();
}

// Generate session ID
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Generate event ID
function generateEventId(): string {
  return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Rate limiting check
function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }
  
  if (limit.count >= MAX_EVENTS_PER_WINDOW) {
    const retryAfter = Math.ceil((limit.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  limit.count++;
  return { allowed: true };
}

// Sanitize input
function sanitizeInput(input: any, maxLength: number = 500): string {
  if (typeof input !== 'string') return '';
  
  return input
    .slice(0, maxLength)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

// Parse user agent for device info
function parseUserAgent(userAgent: string) {
  const ua = userAgent.toLowerCase();
  
  // Detect device type
  let deviceType = 'desktop';
  if (/mobile|android|iphone/i.test(ua)) deviceType = 'mobile';
  else if (/tablet|ipad/i.test(ua)) deviceType = 'tablet';
  
  // Detect OS
  let os = 'unknown';
  if (/windows/i.test(ua)) os = 'windows';
  else if (/mac/i.test(ua)) os = 'macos';
  else if (/linux/i.test(ua)) os = 'linux';
  else if (/android/i.test(ua)) os = 'android';
  else if (/ios|iphone|ipad/i.test(ua)) os = 'ios';
  
  // Detect browser
  let browser = 'unknown';
  if (/chrome/i.test(ua) && !/edge/i.test(ua)) browser = 'chrome';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'safari';
  else if (/firefox/i.test(ua)) browser = 'firefox';
  else if (/edge/i.test(ua)) browser = 'edge';
  
  return { deviceType, os, browser };
}

// Forward event to external analytics services
async function forwardToExternalServices(
  eventType: string,
  eventData: any,
  sessionId: string,
  userId?: string
): Promise<void> {
  const promises: Promise<any>[] = [];
  
  // Forward to custom backend if configured
  if (INTEGRATIONS.CUSTOM_BACKEND) {
    promises.push(
      fetch(INTEGRATIONS.CUSTOM_BACKEND, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType,
          eventData,
          sessionId,
          userId,
          timestamp: new Date().toISOString(),
          source: 'nextjs-api',
        }),
      }).catch(err => console.error('Custom backend error:', err))
    );
  }
  
  // Wait for all forwards to complete (non-blocking)
  Promise.all(promises).catch(err => 
    console.error('Error forwarding to external services:', err)
  );
}

// Anonymize sensitive data for privacy compliance
function anonymizeData(data: any): any {
  if (!INTEGRATIONS.PRIVACY_MODE) return data;
  
  const anonymized = { ...data };
  
  // Remove or hash sensitive fields
  const sensitiveFields = ['email', 'phone', 'name', 'address', 'ip_address'];
  sensitiveFields.forEach(field => {
    if (anonymized[field]) {
      // Hash the value instead of removing
      anonymized[field] = 'REDACTED';
    }
  });
  
  // Anonymize nested objects
  Object.keys(anonymized).forEach(key => {
    if (typeof anonymized[key] === 'object' && anonymized[key] !== null) {
      anonymized[key] = anonymizeData(anonymized[key]);
    }
  });
  
  return anonymized;
}

// POST endpoint to track events
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimitCheck = checkRateLimit(clientIp);
    
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded',
          retryAfter: rateLimitCheck.retryAfter 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(rateLimitCheck.retryAfter || 10)
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
        { error: 'Invalid JSON' },
        { status: 400 }
      );
    }
    
    const {
      eventType,
      eventData,
      sessionId,
      userId,
      pageUrl,
      referrer,
      timestamp,
      metadata
    } = body;
    
    // Validate event type (allow custom events with prefix)
    if (!eventType) {
      return NextResponse.json(
        { error: 'Event type is required' },
        { status: 400 }
      );
    }
    
    // Allow custom events with 'custom_' prefix
    const isValidEvent = VALID_EVENT_TYPES.includes(eventType) || 
                        eventType.startsWith('custom_') ||
                        eventType.startsWith('ab_test_') ||
                        eventType.startsWith('experiment_');
    
    if (!isValidEvent) {
      return NextResponse.json(
        { error: 'Invalid event type' },
        { status: 400 }
      );
    }
    
    // Get or create session
    let session;
    if (sessionId && sessions.has(sessionId)) {
      session = sessions.get(sessionId);
      session.lastActivity = new Date().toISOString();
      session.eventCount++;
    } else {
      const newSessionId = sessionId || generateSessionId();
      const userAgent = request.headers.get('user-agent') || '';
      const deviceInfo = parseUserAgent(userAgent);
      
      session = {
        id: newSessionId,
        startTime: new Date().toISOString(),
        lastActivity: new Date().toISOString(),
        userId: userId || null,
        ipAddress: clientIp,
        userAgent: userAgent.slice(0, 500),
        ...deviceInfo,
        locale: request.headers.get('accept-language')?.split(',')[0] || 'en',
        referrer: referrer || request.headers.get('referer') || null,
        eventCount: 1,
        pages: new Set(),
        duration: 0
      };
      
      sessions.set(newSessionId, session);
    }
    
    // Track unique pages
    if (pageUrl) {
      session.pages.add(sanitizeInput(pageUrl, 500));
    }
    
    // Anonymize data if privacy mode is enabled
    const processedEventData = INTEGRATIONS.PRIVACY_MODE 
      ? anonymizeData(eventData || {})
      : (eventData || {});
    
    const processedMetadata = INTEGRATIONS.PRIVACY_MODE
      ? anonymizeData(metadata || {})
      : (metadata || {});
    
    // Create analytics event
    const eventId = generateEventId();
    const event = {
      id: eventId,
      type: eventType,
      sessionId: session.id,
      userId: userId || null,
      timestamp: timestamp || new Date().toISOString(),
      pageUrl: pageUrl ? sanitizeInput(pageUrl, 500) : null,
      referrer: referrer ? sanitizeInput(referrer, 500) : null,
      ipAddress: INTEGRATIONS.PRIVACY_MODE ? 'anonymized' : clientIp,
      deviceType: session.deviceType,
      os: session.os,
      browser: session.browser,
      locale: session.locale,
      data: processedEventData,
      metadata: processedMetadata,
      // Add integration tracking
      integrations: {
        ga4: INTEGRATIONS.GA4_ENABLED,
        clarity: INTEGRATIONS.CLARITY_ENABLED,
        custom: !!INTEGRATIONS.CUSTOM_BACKEND,
      }
    };
    
    // Store event
    analyticsEvents.set(eventId, event);
    
    // Forward to external services (non-blocking)
    forwardToExternalServices(
      eventType,
      processedEventData,
      session.id,
      userId
    );
    
    // Special handling for specific events
    switch (eventType) {
      case 'page_view':
        // Track page views
        event.data.timeOnPage = 0;
        event.data.scrollDepth = 0;
        break;
        
      case 'conversion':
        // Track conversions
        event.data.conversionValue = eventData?.value || 0;
        event.data.conversionType = eventData?.type || 'unknown';
        break;
        
      case 'error':
        // Log errors
        console.error('Client error tracked:', {
          error: eventData?.message || 'Unknown error',
          url: pageUrl,
          sessionId: session.id
        });
        break;
        
      case 'performance':
        // Track performance metrics
        event.data.metrics = {
          loadTime: eventData?.loadTime || null,
          renderTime: eventData?.renderTime || null,
          interactiveTime: eventData?.interactiveTime || null
        };
        break;
        
      case 'ab_test_assignment':
      case 'ab_test_conversion':
        // Track A/B testing events
        event.data.experiment = {
          experimentId: eventData?.experiment_id,
          variantId: eventData?.variant_id,
          goalId: eventData?.goal_id,
        };
        break;
        
      case 'heatmap_event':
        // Track heatmap data
        event.data.heatmap = {
          type: eventData?.type,
          coordinates: {
            x: eventData?.x,
            y: eventData?.y,
          },
          element: eventData?.element,
          scrollDepth: eventData?.scrollDepth,
        };
        break;
        
      case 'funnel_step':
        // Track funnel progression
        event.data.funnel = {
          name: eventData?.funnel_name,
          step: eventData?.funnel_step,
          stepName: eventData?.step_name,
        };
        break;
    }
    
    // Clean up old data periodically
    if (Math.random() < 0.05) { // 5% chance
      const now = Date.now();
      const oneHourAgo = now - 60 * 60 * 1000;
      
      // Clean rate limits
      Array.from(rateLimitMap.entries()).forEach(([ip, limit]) => {
        if (now > limit.resetTime + RATE_LIMIT_WINDOW) {
          rateLimitMap.delete(ip);
        }
      });
      
      // Clean old sessions (inactive for > 30 minutes)
      Array.from(sessions.entries()).forEach(([id, sess]) => {
        const lastActivity = new Date(sess.lastActivity).getTime();
        if (now - lastActivity > 30 * 60 * 1000) {
          sess.duration = (lastActivity - new Date(sess.startTime).getTime()) / 1000;
          // In production, save to database before removing
        }
      });
    }
    
    // Return response with integration status
    return NextResponse.json({
      success: true,
      data: {
        eventId,
        sessionId: session.id,
        tracked: true,
        integrations: {
          ga4: INTEGRATIONS.GA4_ENABLED,
          clarity: INTEGRATIONS.CLARITY_ENABLED,
          custom: !!INTEGRATIONS.CUSTOM_BACKEND,
        }
      }
    }, {
      headers: {
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
        'X-Analytics-Version': '2.0',
      }
    });
    
  } catch (error) {
    console.error('Analytics error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}

// GET endpoint for analytics data (admin only)
export async function GET(request: NextRequest) {
  try {
    // Authentication
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.ANALYTICS_API_KEY || 'dev-key-analytics-54321';
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401, headers: { 'WWW-Authenticate': 'Bearer' } }
      );
    }
    
    const token = authHeader.substring(7);
    if (token !== apiKey) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 403 }
      );
    }
    
    const url = new URL(request.url);
    const action = url.searchParams.get('action');
    const period = url.searchParams.get('period') || '24h';
    const eventType = url.searchParams.get('eventType');
    
    // Calculate time range
    const now = Date.now();
    let startTime = now;
    
    switch (period) {
      case '1h': startTime = now - 60 * 60 * 1000; break;
      case '24h': startTime = now - 24 * 60 * 60 * 1000; break;
      case '7d': startTime = now - 7 * 24 * 60 * 60 * 1000; break;
      case '30d': startTime = now - 30 * 24 * 60 * 60 * 1000; break;
      default: startTime = now - 24 * 60 * 60 * 1000;
    }
    
    // Filter events by time
    const events = Array.from(analyticsEvents.values()).filter(e => {
      const eventTime = new Date(e.timestamp).getTime();
      return eventTime >= startTime && (!eventType || e.type === eventType);
    });
    
    const activeSessions = Array.from(sessions.values()).filter(s => {
      const sessionTime = new Date(s.startTime).getTime();
      return sessionTime >= startTime;
    });
    
    switch (action) {
      case 'summary':
        // Calculate summary statistics
        const pageViews = events.filter(e => e.type === 'page_view').length;
        const uniqueVisitors = INTEGRATIONS.PRIVACY_MODE 
          ? activeSessions.length // Don't use IP for unique visitors in privacy mode
          : new Set(activeSessions.map(s => s.ipAddress)).size;
        const conversions = events.filter(e => e.type === 'conversion').length;
        const errors = events.filter(e => e.type === 'error').length;
        const abTestEvents = events.filter(e => e.type.startsWith('ab_test_')).length;
        const heatmapEvents = events.filter(e => e.type === 'heatmap_event').length;
        
        // Device breakdown
        const devices = activeSessions.reduce((acc, s) => {
          acc[s.deviceType] = (acc[s.deviceType] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        // Browser breakdown
        const browsers = activeSessions.reduce((acc, s) => {
          acc[s.browser] = (acc[s.browser] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        // Top pages
        const pageCounts: Record<string, number> = {};
        events.filter(e => e.type === 'page_view').forEach(e => {
          if (e.pageUrl) {
            pageCounts[e.pageUrl] = (pageCounts[e.pageUrl] || 0) + 1;
          }
        });
        
        const topPages = Object.entries(pageCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([url, count]) => ({ url, count }));
        
        return NextResponse.json({
          success: true,
          data: {
            period,
            summary: {
              pageViews,
              uniqueVisitors,
              sessions: activeSessions.length,
              conversions,
              conversionRate: pageViews > 0 ? (conversions / pageViews * 100).toFixed(2) + '%' : '0%',
              errors,
              abTestEvents,
              heatmapEvents,
              avgSessionDuration: activeSessions.length > 0 
                ? Math.round(activeSessions.reduce((sum, s) => sum + (s.duration || 0), 0) / activeSessions.length) 
                : 0
            },
            devices,
            browsers,
            topPages,
            integrations: INTEGRATIONS,
            privacyMode: INTEGRATIONS.PRIVACY_MODE,
          }
        });
        
      case 'events':
        // Return raw events (limited and anonymized)
        const limitedEvents = events
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .slice(0, 100)
          .map(e => ({
            ...e,
            ipAddress: 'hidden',
            userId: e.userId ? 'user_' + e.userId.substring(0, 8) : null, // Partially hide user ID
            data: INTEGRATIONS.PRIVACY_MODE ? anonymizeData(e.data) : e.data,
          }));
        
        return NextResponse.json({
          success: true,
          data: {
            events: limitedEvents,
            total: events.length
          }
        });
        
      case 'realtime':
        // Real-time data (last 5 minutes)
        const fiveMinutesAgo = now - 5 * 60 * 1000;
        const realtimeEvents = events.filter(e => 
          new Date(e.timestamp).getTime() >= fiveMinutesAgo
        );
        const realtimeSessions = activeSessions.filter(s =>
          new Date(s.lastActivity).getTime() >= fiveMinutesAgo
        );
        
        return NextResponse.json({
          success: true,
          data: {
            activeUsers: realtimeSessions.length,
            recentEvents: realtimeEvents.length,
            eventsPerMinute: Math.round(realtimeEvents.length / 5),
            currentPages: Array.from(new Set(
              realtimeEvents
                .filter(e => e.pageUrl)
                .map(e => e.pageUrl)
            ))
          }
        });
        
      case 'export':
        // Export data as CSV
        const csv = [
          'Event ID,Type,Session ID,Timestamp,Page URL,Device,Browser,OS',
          ...events.map(e => 
            `"${e.id}","${e.type}","${e.sessionId}","${e.timestamp}","${e.pageUrl || ''}","${e.deviceType}","${e.browser}","${e.os}"`
          )
        ].join('\n');
        
        return new NextResponse(csv, {
          status: 200,
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="analytics_${period}.csv"`
          }
        });
        
      default:
        return NextResponse.json({
          success: true,
          data: {
            totalEvents: analyticsEvents.size,
            totalSessions: sessions.size,
            periodEvents: events.length,
            periodSessions: activeSessions.length
          }
        });
    }
    
  } catch (error) {
    console.error('Analytics GET error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve analytics' },
      { status: 500 }
    );
  }
}

// DELETE endpoint to clear analytics data (admin only)
export async function DELETE(request: NextRequest) {
  try {
    // Authentication
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.ANALYTICS_API_KEY || 'dev-key-analytics-54321';
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const token = authHeader.substring(7);
    if (token !== apiKey) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 403 }
      );
    }
    
    const { type } = await request.json();
    
    if (type === 'all') {
      analyticsEvents.clear();
      sessions.clear();
      rateLimitMap.clear();
      
      return NextResponse.json({
        success: true,
        message: 'All analytics data cleared'
      });
    }
    
    if (type === 'old') {
      // Clear data older than 30 days
      const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
      
      Array.from(analyticsEvents.entries()).forEach(([id, event]) => {
        if (new Date(event.timestamp).getTime() < thirtyDaysAgo) {
          analyticsEvents.delete(id);
        }
      });
      
      Array.from(sessions.entries()).forEach(([id, session]) => {
        if (new Date(session.startTime).getTime() < thirtyDaysAgo) {
          sessions.delete(id);
        }
      });
      
      return NextResponse.json({
        success: true,
        message: 'Old analytics data cleared'
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid clear type' },
      { status: 400 }
    );
    
  } catch (error) {
    console.error('Analytics DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to clear analytics' },
      { status: 500 }
    );
  }
}