/**
 * Privacy Consent Manager
 * GDPR-compliant consent management for analytics and tracking
 */

// Use dynamic imports to avoid circular dependencies
let analytics: any;
let clarity: any;

if (typeof window !== 'undefined') {
  import('./analytics').then(module => analytics = module.analytics);
  import('./clarity').then(module => clarity = module.clarity);
}

export interface ConsentCategories {
  necessary: boolean; // Always true - required cookies
  analytics: boolean; // Google Analytics, custom analytics
  marketing: boolean; // Marketing and advertising cookies
  functional: boolean; // Enhanced functionality (Clarity, session recording)
  performance: boolean; // Performance monitoring
}

export interface ConsentPreferences {
  categories: ConsentCategories;
  timestamp: string;
  version: string;
  explicit: boolean; // Was consent explicitly given?
}

interface ConsentConfig {
  cookieName: string;
  cookieExpiry: number; // days
  storageKey: string;
  version: string;
  requireExplicitConsent: boolean;
  geolocationApi?: string;
  privacyPolicyUrl: string;
  cookiePolicyUrl: string;
}

class ConsentManager {
  private config: ConsentConfig;
  private preferences: ConsentPreferences | null = null;
  private consentListeners: Set<(consent: ConsentPreferences) => void> = new Set();
  private isEUUserCache: boolean | null = null;

  constructor() {
    this.config = {
      cookieName: 'cookie_consent',
      cookieExpiry: 365,
      storageKey: 'consent_preferences',
      version: '1.0.0',
      requireExplicitConsent: process.env.GDPR_COMPLIANCE_MODE === 'true',
      privacyPolicyUrl: '/privacy-policy',
      cookiePolicyUrl: '/cookie-policy',
    };

    if (typeof window !== 'undefined') {
      this.loadPreferences();
      this.detectGeolocation();
    }
  }

  /**
   * Initialize consent manager
   */
  public async initialize(): Promise<void> {
    // Check if consent is required
    const requiresConsent = await this.requiresConsent();
    
    if (!requiresConsent) {
      // Auto-grant consent for non-EU users (can be customized)
      this.grantAllConsent();
      return;
    }

    // Load saved preferences
    const saved = this.loadPreferences();
    
    if (!saved || this.isConsentExpired() || this.isVersionOutdated()) {
      // Show consent banner
      this.showConsentBanner();
    } else {
      // Apply saved preferences
      this.applyConsent(saved);
    }
  }

  /**
   * Get current consent status
   */
  public getConsent(): ConsentPreferences | null {
    return this.preferences;
  }

  /**
   * Check if specific category has consent
   */
  public hasConsent(category: keyof ConsentCategories): boolean {
    if (!this.preferences) return false;
    return this.preferences.categories[category];
  }

  /**
   * Update consent preferences
   */
  public updateConsent(categories: Partial<ConsentCategories>, explicit: boolean = true): void {
    const newPreferences: ConsentPreferences = {
      categories: {
        necessary: true, // Always true
        analytics: categories.analytics ?? false,
        marketing: categories.marketing ?? false,
        functional: categories.functional ?? false,
        performance: categories.performance ?? false,
      },
      timestamp: new Date().toISOString(),
      version: this.config.version,
      explicit,
    };

    this.preferences = newPreferences;
    this.savePreferences(newPreferences);
    this.applyConsent(newPreferences);
    this.notifyListeners(newPreferences);

    // Track consent change
    this.trackConsentChange(newPreferences);
  }

  /**
   * Grant all consent
   */
  public grantAllConsent(): void {
    this.updateConsent({
      analytics: true,
      marketing: true,
      functional: true,
      performance: true,
    });
  }

  /**
   * Deny all optional consent
   */
  public denyAllConsent(): void {
    this.updateConsent({
      analytics: false,
      marketing: false,
      functional: false,
      performance: false,
    });
  }

  /**
   * Accept selected categories only
   */
  public acceptSelected(categories: Partial<ConsentCategories>): void {
    this.updateConsent(categories);
  }

  /**
   * Withdraw consent
   */
  public withdrawConsent(): void {
    this.denyAllConsent();
    this.deleteAllCookies();
    this.clearStorage();
  }

  /**
   * Register consent change listener
   */
  public onConsentChange(callback: (consent: ConsentPreferences) => void): () => void {
    this.consentListeners.add(callback);
    
    // Return unsubscribe function
    return () => {
      this.consentListeners.delete(callback);
    };
  }

  /**
   * Show consent banner
   */
  public showConsentBanner(): void {
    if (typeof document === 'undefined') return;
    
    // Check if banner already exists
    if (document.getElementById('consent-banner')) return;

    const banner = this.createConsentBanner();
    document.body.appendChild(banner);
    
    // Animate in
    requestAnimationFrame(() => {
      banner.classList.add('show');
    });
  }

  /**
   * Hide consent banner
   */
  public hideConsentBanner(): void {
    const banner = document.getElementById('consent-banner');
    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 300);
    }
  }

  /**
   * Show detailed consent settings
   */
  public showConsentSettings(): void {
    const modal = this.createConsentModal();
    document.body.appendChild(modal);
    
    requestAnimationFrame(() => {
      modal.classList.add('show');
    });
  }

  /**
   * Private methods
   */

  private async requiresConsent(): Promise<boolean> {
    // Always require consent if configured
    if (this.config.requireExplicitConsent) {
      return true;
    }

    // Check if user is in EU (GDPR)
    const isEU = await this.isEUUser();
    if (isEU) return true;

    // Check if user is in California (CCPA)
    const isCalifornia = await this.isCaliforniaUser();
    if (isCalifornia) return true;

    return false;
  }

  private async detectGeolocation(): Promise<void> {
    try {
      // Use a geolocation API or CloudFlare headers
      const response = await fetch('/api/geolocation');
      if (response.ok) {
        const data = await response.json();
        this.isEUUserCache = data.isEU || false;
      }
    } catch (error) {
      // Default to requiring consent if detection fails
      this.isEUUserCache = true;
    }
  }

  private async isEUUser(): Promise<boolean> {
    if (this.isEUUserCache !== null) return this.isEUUserCache;
    
    // EU country codes
    const euCountries = [
      'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
      'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
      'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'
    ];
    
    // Check timezone as fallback
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isEuropeanTimezone = timezone.startsWith('Europe/');
    
    return isEuropeanTimezone;
  }

  private async isCaliforniaUser(): Promise<boolean> {
    // Check for California users (CCPA compliance)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezone === 'America/Los_Angeles';
  }

  private loadPreferences(): ConsentPreferences | null {
    if (typeof window === 'undefined') return null;
    
    try {
      // Try localStorage first
      const stored = localStorage.getItem(this.config.storageKey);
      if (stored) {
        this.preferences = JSON.parse(stored);
        return this.preferences;
      }
      
      // Fallback to cookie
      const cookie = this.getCookie(this.config.cookieName);
      if (cookie) {
        this.preferences = JSON.parse(decodeURIComponent(cookie));
        return this.preferences;
      }
    } catch (error) {
      console.error('Failed to load consent preferences:', error);
    }
    
    return null;
  }

  private savePreferences(preferences: ConsentPreferences): void {
    if (typeof window === 'undefined') return;
    
    try {
      // Save to localStorage
      localStorage.setItem(this.config.storageKey, JSON.stringify(preferences));
      
      // Also save as cookie for server-side access
      this.setCookie(
        this.config.cookieName,
        encodeURIComponent(JSON.stringify(preferences)),
        this.config.cookieExpiry
      );
    } catch (error) {
      console.error('Failed to save consent preferences:', error);
    }
  }

  private applyConsent(preferences: ConsentPreferences): void {
    // Update Google Analytics
    if (analytics) {
      analytics.updateConsent({
        analytics: preferences.categories.analytics,
        marketing: preferences.categories.marketing,
        functional: preferences.categories.functional,
      });
    }

    // Update Microsoft Clarity
    if (clarity) {
      clarity.setConsent(preferences.categories.functional);
    }

    // Update gtag consent mode
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.categories.analytics ? 'granted' : 'denied',
        ad_storage: preferences.categories.marketing ? 'granted' : 'denied',
        functionality_storage: preferences.categories.functional ? 'granted' : 'denied',
        personalization_storage: preferences.categories.marketing ? 'granted' : 'denied',
        security_storage: 'granted',
      });
    }

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('consentUpdated', { 
      detail: preferences 
    }));

    // Fire consent granted event if analytics approved
    if (preferences.categories.analytics) {
      window.dispatchEvent(new Event('consentGranted'));
    }
  }

  private notifyListeners(preferences: ConsentPreferences): void {
    this.consentListeners.forEach(listener => {
      try {
        listener(preferences);
      } catch (error) {
        console.error('Consent listener error:', error);
      }
    });
  }

  private trackConsentChange(preferences: ConsentPreferences): void {
    // Track consent changes for compliance
    if (window.gtag && preferences.categories.analytics) {
      window.gtag('event', 'consent_update', {
        consent_categories: Object.keys(preferences.categories)
          .filter(key => preferences.categories[key as keyof ConsentCategories])
          .join(','),
        consent_explicit: preferences.explicit,
      });
    }
  }

  private isConsentExpired(): boolean {
    if (!this.preferences) return true;
    
    const consentDate = new Date(this.preferences.timestamp);
    const expiryDate = new Date(consentDate);
    expiryDate.setDate(expiryDate.getDate() + this.config.cookieExpiry);
    
    return new Date() > expiryDate;
  }

  private isVersionOutdated(): boolean {
    if (!this.preferences) return true;
    return this.preferences.version !== this.config.version;
  }

  private createConsentBanner(): HTMLElement {
    const banner = document.createElement('div');
    banner.id = 'consent-banner';
    banner.className = 'consent-banner';
    banner.innerHTML = `
      <div class="consent-content">
        <div class="consent-text">
          <h3>We value your privacy</h3>
          <p>We use cookies to enhance your experience, analyze site traffic, and personalize content. 
             By clicking "Accept All", you consent to our use of cookies.</p>
          <a href="${this.config.privacyPolicyUrl}" target="_blank">Privacy Policy</a> | 
          <a href="${this.config.cookiePolicyUrl}" target="_blank">Cookie Policy</a>
        </div>
        <div class="consent-actions">
          <button id="consent-settings" class="consent-btn secondary">Settings</button>
          <button id="consent-reject" class="consent-btn secondary">Reject All</button>
          <button id="consent-accept" class="consent-btn primary">Accept All</button>
        </div>
      </div>
    `;

    // Add styles
    this.injectStyles();

    // Add event listeners
    banner.querySelector('#consent-accept')?.addEventListener('click', () => {
      this.grantAllConsent();
      this.hideConsentBanner();
    });

    banner.querySelector('#consent-reject')?.addEventListener('click', () => {
      this.denyAllConsent();
      this.hideConsentBanner();
    });

    banner.querySelector('#consent-settings')?.addEventListener('click', () => {
      this.showConsentSettings();
    });

    return banner;
  }

  private createConsentModal(): HTMLElement {
    const currentConsent = this.preferences?.categories || {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      performance: false,
    };

    const modal = document.createElement('div');
    modal.id = 'consent-modal';
    modal.className = 'consent-modal';
    modal.innerHTML = `
      <div class="consent-modal-content">
        <div class="consent-modal-header">
          <h2>Privacy Settings</h2>
          <button id="consent-close" class="consent-close">&times;</button>
        </div>
        <div class="consent-modal-body">
          <div class="consent-category">
            <label>
              <input type="checkbox" checked disabled>
              <strong>Necessary Cookies</strong>
              <p>Essential for the website to function properly. Always enabled.</p>
            </label>
          </div>
          <div class="consent-category">
            <label>
              <input type="checkbox" id="consent-analytics" ${currentConsent.analytics ? 'checked' : ''}>
              <strong>Analytics Cookies</strong>
              <p>Help us understand how visitors interact with our website.</p>
            </label>
          </div>
          <div class="consent-category">
            <label>
              <input type="checkbox" id="consent-marketing" ${currentConsent.marketing ? 'checked' : ''}>
              <strong>Marketing Cookies</strong>
              <p>Used to deliver personalized advertisements.</p>
            </label>
          </div>
          <div class="consent-category">
            <label>
              <input type="checkbox" id="consent-functional" ${currentConsent.functional ? 'checked' : ''}>
              <strong>Functional Cookies</strong>
              <p>Enable enhanced functionality and personalization.</p>
            </label>
          </div>
          <div class="consent-category">
            <label>
              <input type="checkbox" id="consent-performance" ${currentConsent.performance ? 'checked' : ''}>
              <strong>Performance Cookies</strong>
              <p>Help us improve website performance and user experience.</p>
            </label>
          </div>
        </div>
        <div class="consent-modal-footer">
          <button id="consent-save" class="consent-btn primary">Save Settings</button>
          <button id="consent-accept-all" class="consent-btn secondary">Accept All</button>
        </div>
      </div>
    `;

    // Add event listeners
    modal.querySelector('#consent-close')?.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 300);
    });

    modal.querySelector('#consent-save')?.addEventListener('click', () => {
      const analytics = (document.getElementById('consent-analytics') as HTMLInputElement)?.checked;
      const marketing = (document.getElementById('consent-marketing') as HTMLInputElement)?.checked;
      const functional = (document.getElementById('consent-functional') as HTMLInputElement)?.checked;
      const performance = (document.getElementById('consent-performance') as HTMLInputElement)?.checked;

      this.updateConsent({ analytics, marketing, functional, performance });
      this.hideConsentBanner();
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 300);
    });

    modal.querySelector('#consent-accept-all')?.addEventListener('click', () => {
      this.grantAllConsent();
      this.hideConsentBanner();
      modal.classList.remove('show');
      setTimeout(() => modal.remove(), 300);
    });

    return modal;
  }

  private injectStyles(): void {
    if (document.getElementById('consent-styles')) return;

    const style = document.createElement('style');
    style.id = 'consent-styles';
    style.textContent = `
      .consent-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        z-index: 9999;
        transform: translateY(100%);
        transition: transform 0.3s ease;
        padding: 20px;
      }
      
      .consent-banner.show {
        transform: translateY(0);
      }
      
      .consent-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
      }
      
      .consent-text {
        flex: 1;
        min-width: 300px;
      }
      
      .consent-text h3 {
        margin: 0 0 10px 0;
        font-size: 18px;
      }
      
      .consent-text p {
        margin: 0 0 10px 0;
        color: #666;
      }
      
      .consent-text a {
        color: #0066cc;
        text-decoration: none;
      }
      
      .consent-actions {
        display: flex;
        gap: 10px;
      }
      
      .consent-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: opacity 0.2s;
      }
      
      .consent-btn:hover {
        opacity: 0.9;
      }
      
      .consent-btn.primary {
        background: #0066cc;
        color: white;
      }
      
      .consent-btn.secondary {
        background: #f0f0f0;
        color: #333;
      }
      
      .consent-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .consent-modal.show {
        opacity: 1;
      }
      
      .consent-modal-content {
        background: white;
        border-radius: 8px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
      }
      
      .consent-modal-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .consent-modal-header h2 {
        margin: 0;
      }
      
      .consent-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
      }
      
      .consent-modal-body {
        padding: 20px;
      }
      
      .consent-category {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
      }
      
      .consent-category:last-child {
        border-bottom: none;
      }
      
      .consent-category label {
        display: block;
        cursor: pointer;
      }
      
      .consent-category input {
        margin-right: 10px;
      }
      
      .consent-category strong {
        display: block;
        margin-bottom: 5px;
      }
      
      .consent-category p {
        margin: 0;
        color: #666;
        font-size: 14px;
      }
      
      .consent-modal-footer {
        padding: 20px;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }
      
      @media (max-width: 768px) {
        .consent-content {
          flex-direction: column;
        }
        
        .consent-actions {
          width: 100%;
          justify-content: stretch;
        }
        
        .consent-btn {
          flex: 1;
        }
      }
    `;
    
    document.head.appendChild(style);
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  private setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  }

  private deleteAllCookies(): void {
    document.cookie.split(';').forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      if (name !== this.config.cookieName) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    });
  }

  private clearStorage(): void {
    // Clear localStorage except consent preferences
    const consent = localStorage.getItem(this.config.storageKey);
    localStorage.clear();
    if (consent) {
      localStorage.setItem(this.config.storageKey, consent);
    }
    
    // Clear sessionStorage
    sessionStorage.clear();
  }
}

// Export singleton instance
export const consentManager = new ConsentManager();

// Auto-initialize on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    consentManager.initialize();
  });
}