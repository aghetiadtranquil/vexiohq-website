// Google Analytics 4 Implementation
// This file handles all GA4 tracking for the VexioHQ website

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Replace with your actual GA4 Measurement ID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Check if GA is enabled
export const isGAEnabled = () => {
  return typeof window !== 'undefined' && 
         GA_TRACKING_ID && 
         GA_TRACKING_ID !== 'G-XXXXXXXXXX' &&
         process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
};

// Initialize Google Analytics
export const initGA = () => {
  if (!isGAEnabled()) return;
  
  // Add gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag?.('js', new Date());
  
  // Configure GA4 with enhanced settings
  window.gtag?.('config', GA_TRACKING_ID, {
    page_path: window.location.pathname,
    cookie_domain: 'vexiohq.com',
    cookie_flags: 'SameSite=None;Secure',
    allow_google_signals: true,
    allow_ad_personalization_signals: false,
    send_page_view: true
  });
};

// Log page views
export const pageview = (url: string) => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag?.('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value, parameters = {} }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
  parameters?: Record<string, any>;
}) => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    ...parameters
  });
};

// Enhanced Ecommerce Events
export const trackPurchase = (transactionData: {
  transaction_id: string;
  value: number;
  currency: string;
  items: Array<{
    item_id: string;
    item_name: string;
    price: number;
    quantity: number;
  }>;
}) => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag?.('event', 'purchase', transactionData);
};

// Lead Generation Events
export const trackLead = (leadData: {
  value?: number;
  currency?: string;
  lead_type: string;
  form_name: string;
}) => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag?.('event', 'generate_lead', {
    value: leadData.value || 100,
    currency: leadData.currency || 'USD',
    lead_type: leadData.lead_type,
    form_name: leadData.form_name
  });
};

// Custom Events for VexioHQ

// Track contact form submission
export const trackContactForm = (formData: {
  company?: string;
  industry?: string;
  company_size?: string;
}) => {
  event({
    action: 'contact_form_submit',
    category: 'Lead Generation',
    label: formData.industry || 'general',
    value: 500,
    parameters: formData
  });
  
  // Also track as a lead
  trackLead({
    value: 500,
    lead_type: 'contact',
    form_name: 'contact_form'
  });
};

// Track newsletter signup
export const trackNewsletterSignup = (email?: string) => {
  event({
    action: 'newsletter_signup',
    category: 'Engagement',
    label: 'footer',
    value: 50
  });
  
  window.gtag?.('event', 'sign_up', {
    method: 'newsletter'
  });
};

// Track calculator usage
export const trackCalculatorUsage = (calculatorType: string, result?: number) => {
  event({
    action: 'calculator_complete',
    category: 'Tools',
    label: calculatorType,
    value: result,
    parameters: {
      calculator_type: calculatorType,
      calculated_value: result
    }
  });
};

// Track resource downloads
export const trackDownload = (fileName: string, fileType: string) => {
  window.gtag?.('event', 'file_download', {
    file_name: fileName,
    file_extension: fileType,
    link_text: fileName
  });
  
  event({
    action: 'download',
    category: 'Resources',
    label: fileName,
    value: 100
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage
  });
};

// Track video engagement
export const trackVideo = (action: 'play' | 'pause' | 'complete', videoTitle: string, currentTime?: number) => {
  window.gtag?.('event', `video_${action}`, {
    video_title: videoTitle,
    video_current_time: currentTime,
    video_percent: currentTime ? Math.round((currentTime / 100) * 100) : 0
  });
};

// Track CTA clicks
export const trackCTA = (ctaName: string, ctaLocation: string) => {
  event({
    action: 'cta_click',
    category: 'Engagement',
    label: `${ctaName}_${ctaLocation}`,
    value: 1,
    parameters: {
      cta_name: ctaName,
      cta_location: ctaLocation
    }
  });
};

// Track search
export const trackSiteSearch = (searchTerm: string, resultsCount?: number) => {
  window.gtag?.('event', 'search', {
    search_term: searchTerm,
    results_count: resultsCount
  });
};

// Track errors
export const trackError = (errorMessage: string, errorLocation: string) => {
  event({
    action: 'exception',
    category: 'Error',
    label: errorLocation,
    parameters: {
      description: errorMessage,
      fatal: false
    }
  });
};

// Track timing (performance)
export const trackTiming = (category: string, variable: string, time: number, label?: string) => {
  window.gtag?.('event', 'timing_complete', {
    name: variable,
    value: time,
    event_category: category,
    event_label: label
  });
};

// Set user properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag?.('set', 'user_properties', properties);
};

// Update consent
export const updateConsent = (analyticsConsent: boolean, adsConsent: boolean = false) => {
  if (!window.gtag) return;
  
  window.gtag?.('consent', 'update', {
    'analytics_storage': analyticsConsent ? 'granted' : 'denied',
    'ad_storage': adsConsent ? 'granted' : 'denied',
    'ad_user_data': adsConsent ? 'granted' : 'denied',
    'ad_personalization': adsConsent ? 'granted' : 'denied'
  });
};

// Initialize consent (should be called before GA initialization)
export const initConsent = () => {
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };
  }
  
  // Default to denied until user gives consent
  window.gtag?.('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500 // Wait 500ms for consent update
  });
};