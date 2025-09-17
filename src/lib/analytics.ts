/**
 * Comprehensive Analytics Library with GA4 Integration
 * Includes custom event tracking, user behavior, error tracking, and privacy controls
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _analyticsInitialized?: boolean;
    _userConsent?: {
      analytics: boolean;
      marketing: boolean;
      functional: boolean;
    };
  }
}

// Analytics configuration
export const ANALYTICS_CONFIG = {
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_ID || '',
  DEBUG_MODE: process.env.NODE_ENV === 'development',
  COOKIE_DOMAIN: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || 'auto',
  SEND_PAGE_VIEW: true,
  ANONYMIZE_IP: true, // GDPR compliance
  COOKIE_EXPIRES: 365, // days
  SESSION_TIMEOUT: 30, // minutes
  ENGAGEMENT_TIME_THRESHOLD: 10000, // 10 seconds
};

// Event types for type safety
export enum EventCategory {
  ENGAGEMENT = 'engagement',
  CONVERSION = 'conversion',
  NAVIGATION = 'navigation',
  FORM = 'form',
  ERROR = 'error',
  VIDEO = 'video',
  DOWNLOAD = 'download',
  SEARCH = 'search',
  SOCIAL = 'social',
  ECOMMERCE = 'ecommerce',
}

// Custom event parameters interface
export interface EventParams {
  category?: EventCategory | string;
  label?: string;
  value?: number;
  currency?: string;
  method?: string;
  content_type?: string;
  content_id?: string;
  items?: any[];
  [key: string]: any;
}

// User properties interface
export interface UserProperties {
  user_id?: string;
  user_type?: string;
  subscription_level?: string;
  account_created?: string;
  last_login?: string;
  [key: string]: any;
}

// Conversion funnel stages
export interface FunnelStage {
  name: string;
  value?: number;
  currency?: string;
  items?: any[];
}

class Analytics {
  private initialized = false;
  private userId: string | null = null;
  private sessionId: string | null = null;
  private pageViewQueue: any[] = [];
  private eventQueue: any[] = [];
  private funnelStages: Map<string, FunnelStage[]> = new Map();
  private sessionStartTime: number = Date.now();
  private lastActivityTime: number = Date.now();
  private engagementTime: number = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.sessionId = this.generateSessionId();
      this.setupActivityTracking();
    }
  }

  /**
   * Initialize Google Analytics 4
   */
  public initialize(): void {
    if (typeof window === 'undefined' || this.initialized) return;
    
    if (!ANALYTICS_CONFIG.GA_MEASUREMENT_ID) {
      console.warn('GA4 Measurement ID not configured');
      return;
    }

    // Check for user consent
    if (!this.hasUserConsent()) {
      console.info('Analytics initialization deferred - awaiting user consent');
      this.setupConsentListener();
      return;
    }

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA_MEASUREMENT_ID}`;
    
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer?.push(arguments);
      };

      // Initialize with current timestamp
      window.gtag('js', new Date());

      // Configure GA4 with privacy settings
      window.gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
        cookie_domain: ANALYTICS_CONFIG.COOKIE_DOMAIN,
        cookie_expires: ANALYTICS_CONFIG.COOKIE_EXPIRES * 24 * 60 * 60,
        anonymize_ip: ANALYTICS_CONFIG.ANONYMIZE_IP,
        send_page_view: ANALYTICS_CONFIG.SEND_PAGE_VIEW,
        transport_type: 'beacon',
        debug_mode: ANALYTICS_CONFIG.DEBUG_MODE,
        allow_google_signals: false, // GDPR compliance
        allow_ad_personalization_signals: false, // GDPR compliance
        session_id: this.sessionId,
        session_number: this.getSessionNumber(),
      });

      // Set default consent state
      window.gtag('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        functionality_storage: 'granted',
        personalization_storage: 'denied',
        security_storage: 'granted',
      });

      this.initialized = true;
      window._analyticsInitialized = true;

      // Process queued events
      this.processQueuedEvents();

      if (ANALYTICS_CONFIG.DEBUG_MODE) {
        console.log('GA4 initialized with ID:', ANALYTICS_CONFIG.GA_MEASUREMENT_ID);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Google Analytics');
    };

    document.head.appendChild(script);
  }

  /**
   * Track page view with enhanced data
   */
  public trackPageView(options?: {
    page_path?: string;
    page_title?: string;
    page_location?: string;
    page_referrer?: string;
  }): void {
    const data = {
      page_path: options?.page_path || window.location.pathname,
      page_title: options?.page_title || document.title,
      page_location: options?.page_location || window.location.href,
      page_referrer: options?.page_referrer || document.referrer,
      session_id: this.sessionId,
      engagement_time: this.getEngagementTime(),
    };

    if (!this.initialized) {
      this.pageViewQueue.push(data);
      return;
    }

    this.sendEvent('page_view', data);
    this.resetEngagementTime();
  }

  /**
   * Track custom events with GA4
   */
  public trackEvent(eventName: string, parameters?: EventParams): void {
    const eventData = {
      ...parameters,
      session_id: this.sessionId,
      user_id: this.userId,
      timestamp: Date.now(),
      page_location: window.location.href,
      page_title: document.title,
    };

    if (!this.initialized) {
      this.eventQueue.push({ eventName, parameters: eventData });
      return;
    }

    this.sendEvent(eventName, eventData);
  }

  /**
   * Track click events with detailed context
   */
  public trackClick(element: HTMLElement | string, options?: {
    category?: string;
    label?: string;
    value?: number;
    destination_url?: string;
  }): void {
    const elementText = typeof element === 'string' 
      ? element 
      : element.textContent?.trim() || element.getAttribute('aria-label') || 'Unknown';

    this.trackEvent('click', {
      category: options?.category || EventCategory.ENGAGEMENT,
      label: options?.label || elementText,
      value: options?.value,
      element_text: elementText,
      element_id: typeof element !== 'string' ? element.id : undefined,
      element_classes: typeof element !== 'string' ? element.className : undefined,
      destination_url: options?.destination_url,
    });
  }

  /**
   * Track form interactions
   */
  public trackForm(action: 'start' | 'submit' | 'error' | 'abandon', formName: string, fields?: any): void {
    const eventName = `form_${action}`;
    
    this.trackEvent(eventName, {
      category: EventCategory.FORM,
      form_name: formName,
      form_id: fields?.formId,
      field_count: fields?.fieldCount,
      error_message: fields?.errorMessage,
      time_to_complete: fields?.completionTime,
      validation_errors: fields?.validationErrors,
    });

    // Track as conversion if form submitted successfully
    if (action === 'submit') {
      this.trackConversion('form_submission', {
        form_name: formName,
        value: fields?.value,
      });
    }
  }

  /**
   * Track conversion events with enhanced ecommerce data
   */
  public trackConversion(conversionType: string, data?: {
    value?: number;
    currency?: string;
    transaction_id?: string;
    items?: any[];
    [key: string]: any;
  }): void {
    const conversionData = {
      ...data,
      category: EventCategory.CONVERSION,
      conversion_type: conversionType,
      session_id: this.sessionId,
      user_id: this.userId,
    };

    // Send as both custom event and GA4 conversion
    this.trackEvent('conversion', conversionData);
    
    // Send specific GA4 conversion events
    if (window.gtag && this.initialized) {
      window.gtag('event', 'conversion', {
        send_to: ANALYTICS_CONFIG.GA_MEASUREMENT_ID,
        ...conversionData,
      });
    }
  }

  /**
   * Track errors with context
   */
  public trackError(error: Error | string, context?: {
    fatal?: boolean;
    category?: string;
    action?: string;
    [key: string]: any;
  }): void {
    const errorData = {
      category: EventCategory.ERROR,
      error_message: typeof error === 'string' ? error : error.message,
      error_stack: typeof error !== 'string' ? error.stack : undefined,
      error_type: context?.category || 'javascript_error',
      fatal: context?.fatal || false,
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      ...context,
    };

    this.trackEvent('error', errorData);

    // Also send to error tracking service if configured
    if (ANALYTICS_CONFIG.DEBUG_MODE) {
      console.error('Tracked error:', errorData);
    }
  }

  /**
   * Track user behavior patterns
   */
  public trackUserBehavior(behavior: string, data?: any): void {
    this.trackEvent('user_behavior', {
      category: EventCategory.ENGAGEMENT,
      behavior_type: behavior,
      behavior_data: data,
      engagement_time: this.getEngagementTime(),
      session_duration: this.getSessionDuration(),
    });
  }

  /**
   * Track scroll depth
   */
  public trackScrollDepth(percentage: number): void {
    this.trackEvent('scroll', {
      category: EventCategory.ENGAGEMENT,
      percent_scrolled: percentage,
      page_height: document.documentElement.scrollHeight,
      viewport_height: window.innerHeight,
    });
  }

  /**
   * Track video interactions
   */
  public trackVideo(action: 'play' | 'pause' | 'complete' | 'skip', videoTitle: string, data?: {
    video_duration?: number;
    video_current_time?: number;
    video_percent?: number;
    video_provider?: string;
  }): void {
    this.trackEvent(`video_${action}`, {
      category: EventCategory.VIDEO,
      video_title: videoTitle,
      ...data,
    });
  }

  /**
   * Track search queries
   */
  public trackSearch(searchTerm: string, resultsCount?: number, searchType?: string): void {
    this.trackEvent('search', {
      category: EventCategory.SEARCH,
      search_term: searchTerm,
      results_count: resultsCount,
      search_type: searchType || 'site_search',
    });
  }

  /**
   * Track social interactions
   */
  public trackSocial(action: string, network: string, target?: string): void {
    this.trackEvent('social', {
      category: EventCategory.SOCIAL,
      social_action: action,
      social_network: network,
      social_target: target,
    });
  }

  /**
   * Set user properties for all future events
   */
  public setUserProperties(properties: UserProperties): void {
    if (window.gtag && this.initialized) {
      window.gtag('set', 'user_properties', properties);
    }
    
    // Store user ID if provided
    if (properties.user_id) {
      this.userId = properties.user_id;
      this.setUserId(properties.user_id);
    }
  }

  /**
   * Set user ID for tracking
   */
  public setUserId(userId: string): void {
    this.userId = userId;
    
    if (window.gtag && this.initialized) {
      window.gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
        user_id: userId,
      });
    }
  }

  /**
   * Track conversion funnel progress
   */
  public trackFunnelStep(funnelName: string, step: number, stepName: string, data?: any): void {
    // Initialize funnel if not exists
    if (!this.funnelStages.has(funnelName)) {
      this.funnelStages.set(funnelName, []);
    }

    const funnelData = {
      funnel_name: funnelName,
      funnel_step: step,
      step_name: stepName,
      ...data,
    };

    // Store funnel progress
    const stages = this.funnelStages.get(funnelName)!;
    stages[step - 1] = {
      name: stepName,
      value: data?.value,
      currency: data?.currency,
      items: data?.items,
    };

    // Track as event
    this.trackEvent('funnel_step', funnelData);

    // Track funnel completion
    if (data?.isComplete) {
      this.trackFunnelCompletion(funnelName, stages);
    }
  }

  /**
   * Track funnel completion
   */
  private trackFunnelCompletion(funnelName: string, stages: FunnelStage[]): void {
    const totalValue = stages.reduce((sum, stage) => sum + (stage.value || 0), 0);
    
    this.trackConversion('funnel_complete', {
      funnel_name: funnelName,
      total_steps: stages.length,
      value: totalValue,
      funnel_stages: stages,
    });
  }

  /**
   * Track timing events (performance)
   */
  public trackTiming(category: string, variable: string, time: number, label?: string): void {
    this.trackEvent('timing_complete', {
      category: category,
      timing_variable: variable,
      timing_value: time,
      timing_label: label,
    });
  }

  /**
   * Track exceptions
   */
  public trackException(description: string, fatal: boolean = false): void {
    if (window.gtag && this.initialized) {
      window.gtag('event', 'exception', {
        description: description,
        fatal: fatal,
      });
    }
  }

  /**
   * Update consent status
   */
  public updateConsent(consent: {
    analytics?: boolean;
    marketing?: boolean;
    functional?: boolean;
  }): void {
    window._userConsent = {
      analytics: consent.analytics ?? true,
      marketing: consent.marketing ?? false,
      functional: consent.functional ?? true,
    };

    if (window.gtag && this.initialized) {
      window.gtag('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        functionality_storage: consent.functional ? 'granted' : 'denied',
      });
    }

    // Initialize if consent granted and not initialized
    if (consent.analytics && !this.initialized) {
      this.initialize();
    }
  }

  /**
   * Private helper methods
   */

  private sendEvent(eventName: string, parameters: any): void {
    if (!window.gtag || !this.initialized) return;

    // Clean parameters
    const cleanedParams = this.cleanParameters(parameters);

    window.gtag('event', eventName, cleanedParams);

    if (ANALYTICS_CONFIG.DEBUG_MODE) {
      console.log('GA4 Event:', eventName, cleanedParams);
    }

    // Also send to custom analytics endpoint
    this.sendToCustomEndpoint(eventName, cleanedParams);
  }

  private cleanParameters(params: any): any {
    const cleaned: any = {};
    
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && value !== '') {
        // GA4 has parameter name restrictions
        const cleanKey = key.replace(/[^\w]/g, '_').substring(0, 40);
        
        // Limit string values
        if (typeof value === 'string') {
          cleaned[cleanKey] = value.substring(0, 100);
        } else if (typeof value === 'number') {
          cleaned[cleanKey] = value;
        } else if (typeof value === 'boolean') {
          cleaned[cleanKey] = value;
        } else if (Array.isArray(value)) {
          cleaned[cleanKey] = value.slice(0, 10); // Limit array size
        } else if (typeof value === 'object') {
          cleaned[cleanKey] = JSON.stringify(value).substring(0, 100);
        }
      }
    }
    
    return cleaned;
  }

  private async sendToCustomEndpoint(eventName: string, parameters: any): Promise<void> {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventType: eventName,
          eventData: parameters,
          sessionId: this.sessionId,
          userId: this.userId,
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
        }),
      });
    } catch (error) {
      if (ANALYTICS_CONFIG.DEBUG_MODE) {
        console.error('Failed to send to custom analytics:', error);
      }
    }
  }

  private processQueuedEvents(): void {
    // Process queued page views
    while (this.pageViewQueue.length > 0) {
      const pageView = this.pageViewQueue.shift();
      this.sendEvent('page_view', pageView);
    }

    // Process queued events
    while (this.eventQueue.length > 0) {
      const { eventName, parameters } = this.eventQueue.shift();
      this.sendEvent(eventName, parameters);
    }
  }

  private hasUserConsent(): boolean {
    // Check for consent cookie or localStorage
    if (typeof window === 'undefined') return false;
    
    const consent = window._userConsent || {
      analytics: true, // Default to true, but should be false in production for GDPR
      marketing: false,
      functional: true,
    };

    return consent.analytics;
  }

  private setupConsentListener(): void {
    // Listen for consent changes
    window.addEventListener('consentGranted', () => {
      if (!this.initialized) {
        this.initialize();
      }
    });
  }

  private generateSessionId(): string {
    return `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  private getSessionNumber(): number {
    const stored = localStorage.getItem('ga_session_number');
    const sessionNumber = stored ? parseInt(stored, 10) + 1 : 1;
    localStorage.setItem('ga_session_number', sessionNumber.toString());
    return sessionNumber;
  }

  private setupActivityTracking(): void {
    // Track user activity for engagement time
    let activityTimer: NodeJS.Timeout;

    const trackActivity = () => {
      const now = Date.now();
      const timeSinceLastActivity = now - this.lastActivityTime;
      
      // Only count as engaged if activity within threshold
      if (timeSinceLastActivity < ANALYTICS_CONFIG.ENGAGEMENT_TIME_THRESHOLD) {
        this.engagementTime += timeSinceLastActivity;
      }
      
      this.lastActivityTime = now;
      
      // Clear and reset timer
      clearTimeout(activityTimer);
      activityTimer = setTimeout(() => {
        // User inactive
      }, ANALYTICS_CONFIG.ENGAGEMENT_TIME_THRESHOLD);
    };

    // Track various user activities
    ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, trackActivity, { passive: true });
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.lastActivityTime = 0; // Pause engagement tracking
      } else {
        this.lastActivityTime = Date.now(); // Resume tracking
      }
    });
  }

  private getEngagementTime(): number {
    return Math.round(this.engagementTime / 1000); // Return in seconds
  }

  private resetEngagementTime(): void {
    this.engagementTime = 0;
  }

  private getSessionDuration(): number {
    return Math.round((Date.now() - this.sessionStartTime) / 1000); // Return in seconds
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Auto-initialize on load if consent exists
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    analytics.initialize();
  });
}