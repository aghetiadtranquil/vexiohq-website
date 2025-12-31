// Google Analytics 4 Measurement Protocol API
// Server-side event tracking for sensitive or backend events

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// GA4 Measurement Protocol endpoint
const GA_MEASUREMENT_PROTOCOL_URL = 'https://www.google-analytics.com/mp/collect';

// Your GA4 configuration - Replace with actual values
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
const GA_API_SECRET = process.env.GA_API_SECRET || 'your-api-secret';

// Generate a client ID if not provided
const generateClientId = () => {
  return crypto.randomUUID();
};

// Generate session ID
const generateSessionId = () => {
  return Date.now().toString();
};

interface GAEvent {
  name: string;
  params?: Record<string, any>;
}

interface TrackingRequest {
  client_id?: string;
  user_id?: string;
  events: GAEvent[];
  user_properties?: Record<string, any>;
  timestamp_micros?: string;
}

// Server-side tracking function
async function sendEventToGA(data: TrackingRequest) {
  const url = `${GA_MEASUREMENT_PROTOCOL_URL}?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`;
  
  const payload = {
    client_id: data.client_id || generateClientId(),
    user_id: data.user_id,
    timestamp_micros: data.timestamp_micros || (Date.now() * 1000).toString(),
    user_properties: data.user_properties,
    events: data.events.map(event => ({
      name: event.name,
      params: {
        ...event.params,
        session_id: generateSessionId(),
        engagement_time_msec: '100',
      }
    }))
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    // GA4 MP returns 204 No Content on success
    return response.status === 204;
  } catch (error) {
    console.error('Failed to send event to GA4:', error);
    return false;
  }
}

// API Route Handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.events || !Array.isArray(body.events) || body.events.length === 0) {
      return NextResponse.json(
        { error: 'Events array is required' },
        { status: 400 }
      );
    }

    // Get client ID from cookie or generate new one
    const clientId = request.cookies.get('_ga')?.value?.replace('GA1.1.', '') || 
                    body.client_id || 
                    generateClientId();

    // Prepare tracking data
    const trackingData: TrackingRequest = {
      client_id: clientId,
      user_id: body.user_id,
      events: body.events,
      user_properties: body.user_properties
    };

    // Send to GA4
    const success = await sendEventToGA(trackingData);

    if (success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Event tracked successfully',
          client_id: clientId 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to track event' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Predefined event templates for common tracking scenarios
// NOTE: This is not exported from the route file to avoid Next.js build errors
const EventTemplates = {
  // Lead generation from backend
  generateLead: (value: number, leadType: string) => ({
    name: 'generate_lead',
    params: {
      value: value,
      currency: 'USD',
      lead_type: leadType
    }
  }),

  // Purchase/Transaction tracking
  purchase: (transactionId: string, value: number, items: any[]) => ({
    name: 'purchase',
    params: {
      transaction_id: transactionId,
      value: value,
      currency: 'USD',
      items: items
    }
  }),

  // Sign up tracking
  signUp: (method: string) => ({
    name: 'sign_up',
    params: {
      method: method
    }
  }),

  // Custom backend event
  backendEvent: (eventName: string, parameters: Record<string, any>) => ({
    name: eventName,
    params: parameters
  }),

  // API usage tracking
  apiUsage: (endpoint: string, method: string, responseTime: number) => ({
    name: 'api_call',
    params: {
      api_endpoint: endpoint,
      api_method: method,
      response_time_ms: responseTime
    }
  }),

  // Error tracking
  error: (errorMessage: string, errorCode: string, errorLocation: string) => ({
    name: 'exception',
    params: {
      description: errorMessage,
      error_code: errorCode,
      error_location: errorLocation,
      fatal: false
    }
  }),

  // User engagement
  userEngagement: (engagementType: string, engagementValue: number) => ({
    name: 'user_engagement',
    params: {
      engagement_type: engagementType,
      engagement_value: engagementValue
    }
  })
};

// Helper function to track events from other API routes
// NOTE: This is not exported from the route file to avoid Next.js build errors
// If you need this function in other files, move it to a separate utility file
async function trackServerEvent(
  eventName: string, 
  parameters: Record<string, any>,
  clientId?: string,
  userId?: string
) {
  const trackingData: TrackingRequest = {
    client_id: clientId || generateClientId(),
    user_id: userId,
    events: [{
      name: eventName,
      params: parameters
    }]
  };

  return await sendEventToGA(trackingData);
}

// GET method for health check
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'GA4 Analytics Tracking API',
    measurement_id: GA_MEASUREMENT_ID ? 'configured' : 'not_configured'
  });
}