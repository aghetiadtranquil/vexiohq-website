/**
 * Microsoft Clarity Integration
 * Provides heatmap tracking, session recording, and user behavior analytics
 */

declare global {
  interface Window {
    clarity?: (...args: any[]) => void;
    _clarityInitialized?: boolean;
    _clarityConfig?: {
      projectId: string;
      uploadUrl?: string;
      debug?: boolean;
    };
  }
}

interface ClarityConfig {
  projectId: string;
  cookieConsent: boolean;
  enableHeatmaps: boolean;
  enableSessionRecording: boolean;
  maskSensitiveContent: boolean;
  disableOnSensitivepages: string[];
  customTags?: Record<string, string>;
}

interface SessionRecordingOptions {
  maskInputs: boolean;
  maskTextContent: boolean;
  blockSelectors: string[];
  ignoreSelectors: string[];
  samplingRate: number;
}

class ClarityAnalytics {
  private initialized = false;
  private config: ClarityConfig;
  private recordingOptions: SessionRecordingOptions;
  private isRecording = false;
  private sessionId: string | null = null;

  constructor() {
    this.config = {
      projectId: process.env.NEXT_PUBLIC_CLARITY_ID || '',
      cookieConsent: true,
      enableHeatmaps: true,
      enableSessionRecording: true,
      maskSensitiveContent: true,
      disableOnSensitivepages: [
        '/checkout',
        '/payment',
        '/account',
        '/profile',
        '/settings',
        '/admin',
      ],
      customTags: {},
    };

    this.recordingOptions = {
      maskInputs: true,
      maskTextContent: false,
      blockSelectors: [
        '[data-clarity-mask]',
        '[data-sensitive]',
        '.sensitive-content',
        'input[type="password"]',
        'input[type="email"]',
        'input[type="tel"]',
        'input[type="credit-card"]',
        '[data-testid*="password"]',
        '[data-testid*="email"]',
      ],
      ignoreSelectors: [
        '.clarity-ignore',
        '[data-clarity-ignore]',
      ],
      samplingRate: 100, // Percentage of sessions to record
    };

    if (typeof window !== 'undefined') {
      this.sessionId = this.generateSessionId();
    }
  }

  /**
   * Initialize Microsoft Clarity
   */
  public initialize(): void {
    if (typeof window === 'undefined' || this.initialized) return;

    if (!this.config.projectId) {
      console.warn('Microsoft Clarity Project ID not configured');
      return;
    }

    // Check for user consent
    if (!this.hasUserConsent()) {
      console.info('Clarity initialization deferred - awaiting user consent');
      this.setupConsentListener();
      return;
    }

    // Check if on sensitive page
    if (this.isOnSensitivePage()) {
      console.info('Clarity disabled on sensitive page');
      return;
    }

    // Clarity initialization script
    (function(c: any, l: any, a: any, r: any, i: any) {
      let t: any, y: any;
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r);
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", this.config.projectId);

    // Set initial configuration
    if (window.clarity) {
      // Set custom tags
      if (this.config.customTags) {
        Object.entries(this.config.customTags).forEach(([key, value]) => {
          this.setCustomTag(key, value);
        });
      }

      // Configure recording options
      this.configureRecording();

      // Set up event listeners
      this.setupEventListeners();
    }

    this.initialized = true;
    window._clarityInitialized = true;

    console.log('Microsoft Clarity initialized');
  }

  /**
   * Start session recording
   */
  public startRecording(): void {
    if (!this.initialized || this.isRecording) return;
    
    // Check sampling rate
    if (!this.shouldRecord()) {
      console.log('Session not selected for recording based on sampling rate');
      return;
    }

    if (window.clarity) {
      window.clarity("start");
      this.isRecording = true;
      
      // Track recording start
      this.trackEvent('recording_started', {
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * Stop session recording
   */
  public stopRecording(): void {
    if (!this.initialized || !this.isRecording) return;

    if (window.clarity) {
      window.clarity("stop");
      this.isRecording = false;
      
      // Track recording stop
      this.trackEvent('recording_stopped', {
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * Pause recording temporarily
   */
  public pauseRecording(): void {
    if (!this.initialized || !this.isRecording) return;

    if (window.clarity) {
      window.clarity("pause");
      
      this.trackEvent('recording_paused', {
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * Resume recording
   */
  public resumeRecording(): void {
    if (!this.initialized || !this.isRecording) return;

    if (window.clarity) {
      window.clarity("resume");
      
      this.trackEvent('recording_resumed', {
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
      });
    }
  }

  /**
   * Set custom tags for segmentation
   */
  public setCustomTag(key: string, value: string): void {
    if (!this.initialized || !window.clarity) return;

    // Clarity custom tags for filtering sessions
    window.clarity("set", key, value);
    
    // Store in config
    this.config.customTags = {
      ...this.config.customTags,
      [key]: value,
    };
  }

  /**
   * Identify user
   */
  public identify(userId: string, sessionId?: string, customTags?: Record<string, string>): void {
    if (!this.initialized || !window.clarity) return;

    // Set user ID
    window.clarity("identify", userId, sessionId || this.sessionId, customTags);
    
    // Set additional user tags
    if (customTags) {
      Object.entries(customTags).forEach(([key, value]) => {
        this.setCustomTag(key, value);
      });
    }
  }

  /**
   * Track custom events
   */
  public trackEvent(eventName: string, eventData?: any): void {
    if (!this.initialized || !window.clarity) return;

    // Send custom event to Clarity
    window.clarity("event", eventName, eventData);
  }

  /**
   * Upgrade session (trigger recording for specific users)
   */
  public upgradeSession(): void {
    if (!this.initialized || !window.clarity) return;

    window.clarity("upgrade", "force");
    
    this.trackEvent('session_upgraded', {
      sessionId: this.sessionId,
      reason: 'manual_trigger',
    });
  }

  /**
   * Set consent status
   */
  public setConsent(granted: boolean): void {
    if (!window.clarity) return;

    window.clarity("consent", granted);
    
    if (granted && !this.initialized) {
      this.initialize();
    } else if (!granted && this.initialized) {
      this.stopRecording();
    }
  }

  /**
   * Mask sensitive content dynamically
   */
  public maskContent(selector: string): void {
    if (typeof document === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.setAttribute('data-clarity-mask', 'true');
    });
  }

  /**
   * Unmask content
   */
  public unmaskContent(selector: string): void {
    if (typeof document === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.removeAttribute('data-clarity-mask');
    });
  }

  /**
   * Track heatmap data
   */
  public trackHeatmapEvent(eventType: 'click' | 'move' | 'scroll', data: {
    x?: number;
    y?: number;
    element?: string;
    scrollDepth?: number;
  }): void {
    if (!this.initialized) return;

    const heatmapData = {
      type: eventType,
      ...data,
      pageUrl: window.location.href,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
    };

    // Send to custom analytics as well
    this.sendToAnalytics('heatmap_event', heatmapData);
  }

  /**
   * Get recording status
   */
  public getRecordingStatus(): {
    initialized: boolean;
    isRecording: boolean;
    sessionId: string | null;
    config: ClarityConfig;
  } {
    return {
      initialized: this.initialized,
      isRecording: this.isRecording,
      sessionId: this.sessionId,
      config: this.config,
    };
  }

  /**
   * Private helper methods
   */

  private configureRecording(): void {
    if (!window.clarity) return;

    // Configure masking
    if (this.recordingOptions.maskInputs) {
      window.clarity("set", "maskInputs", true);
    }

    if (this.recordingOptions.maskTextContent) {
      window.clarity("set", "maskTextContent", true);
    }

    // Apply block selectors
    this.recordingOptions.blockSelectors.forEach(selector => {
      this.maskContent(selector);
    });
  }

  private setupEventListeners(): void {
    if (typeof document === 'undefined') return;

    // Listen for navigation changes
    window.addEventListener('popstate', () => {
      this.handlePageChange();
    });

    // Listen for SPA navigation
    const originalPushState = history.pushState;
    history.pushState = function() {
      originalPushState.apply(history, arguments as any);
      clarity.handlePageChange();
    };

    // Monitor for sensitive content
    this.setupSensitiveContentMonitor();

    // Setup heatmap tracking
    this.setupHeatmapTracking();
  }

  private handlePageChange(): void {
    // Check if navigated to sensitive page
    if (this.isOnSensitivePage()) {
      this.pauseRecording();
    } else if (this.isRecording) {
      this.resumeRecording();
    }

    // Update page context
    if (window.clarity) {
      window.clarity("set", "page", window.location.pathname);
    }
  }

  private setupSensitiveContentMonitor(): void {
    if (typeof MutationObserver === 'undefined') return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const element = node as HTMLElement;
              
              // Check for sensitive attributes
              if (element.hasAttribute('data-sensitive') || 
                  element.classList.contains('sensitive-content')) {
                element.setAttribute('data-clarity-mask', 'true');
              }
              
              // Check children
              const sensitiveChildren = element.querySelectorAll('[data-sensitive], .sensitive-content');
              sensitiveChildren.forEach(child => {
                child.setAttribute('data-clarity-mask', 'true');
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  private setupHeatmapTracking(): void {
    if (!this.config.enableHeatmaps) return;

    let lastMoveTime = 0;
    const MOVE_THROTTLE = 100; // ms

    // Track clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      this.trackHeatmapEvent('click', {
        x: e.clientX,
        y: e.clientY,
        element: this.getElementSelector(target),
      });
    }, { passive: true });

    // Track mouse movement (throttled)
    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastMoveTime > MOVE_THROTTLE) {
        this.trackHeatmapEvent('move', {
          x: e.clientX,
          y: e.clientY,
        });
        lastMoveTime = now;
      }
    }, { passive: true });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = this.getScrollDepth();
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackHeatmapEvent('scroll', {
          scrollDepth: scrollDepth,
        });
      }
    }, { passive: true });
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`;
    }
    
    if (element.className) {
      const classes = element.className.split(' ').filter(c => c).join('.');
      if (classes) {
        return `.${classes}`;
      }
    }
    
    return element.tagName.toLowerCase();
  }

  private getScrollDepth(): number {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const scrollableHeight = documentHeight - windowHeight;
    if (scrollableHeight <= 0) return 100;
    
    return Math.round((scrollTop / scrollableHeight) * 100);
  }

  private hasUserConsent(): boolean {
    if (typeof window === 'undefined') return false;
    
    const consent = window._userConsent || {
      analytics: true,
      marketing: false,
      functional: true,
    };

    return consent.analytics && consent.functional;
  }

  private setupConsentListener(): void {
    window.addEventListener('consentGranted', () => {
      if (!this.initialized) {
        this.initialize();
      }
    });
  }

  private isOnSensitivePage(): boolean {
    const currentPath = window.location.pathname;
    return this.config.disableOnSensitivepages.some(page => 
      currentPath.startsWith(page)
    );
  }

  private shouldRecord(): boolean {
    // Implement sampling logic
    const random = Math.random() * 100;
    return random <= this.recordingOptions.samplingRate;
  }

  private generateSessionId(): string {
    return `clarity_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  private async sendToAnalytics(eventName: string, data: any): Promise<void> {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventType: eventName,
          eventData: data,
          sessionId: this.sessionId,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to send heatmap data:', error);
    }
  }
}

// Export singleton instance
export const clarity = new ClarityAnalytics();

// Auto-initialize on load if consent exists
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    clarity.initialize();
  });
}