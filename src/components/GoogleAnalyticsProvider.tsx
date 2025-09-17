'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '@/lib/gtag';

export default function GoogleAnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (!gtag.isGAEnabled()) return;
    
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    gtag.pageview(url);
  }, [pathname, searchParams]);

  // Initialize GA and set up scroll tracking
  useEffect(() => {
    if (!gtag.isGAEnabled()) return;

    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track 25%, 50%, 75%, and 100% scroll milestones
      if (scrollPercent >= 25 && maxScroll < 25) {
        maxScroll = 25;
        gtag.trackScrollDepth(25);
      } else if (scrollPercent >= 50 && maxScroll < 50) {
        maxScroll = 50;
        gtag.trackScrollDepth(50);
      } else if (scrollPercent >= 75 && maxScroll < 75) {
        maxScroll = 75;
        gtag.trackScrollDepth(75);
      } else if (scrollPercent >= 90 && maxScroll < 90) {
        maxScroll = 90;
        gtag.trackScrollDepth(90);
      }
    };

    // Add scroll listener with debounce
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(trackScroll, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      gtag.trackTiming('Engagement', 'Time on Page', timeOnPage, pathname);
    };

    // Track when user leaves
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Track print events
    const trackPrint = () => {
      gtag.event({
        action: 'print',
        category: 'Engagement',
        label: pathname
      });
    };
    window.addEventListener('beforeprint', trackPrint);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      window.removeEventListener('beforeprint', trackPrint);
      clearTimeout(scrollTimer);
    };
  }, [pathname]);

  // Track Web Vitals
  useEffect(() => {
    if (!gtag.isGAEnabled()) return;

    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      const reportWebVital = ({ name, value, id }: any) => {
        gtag.event({
          action: name,
          category: 'Web Vitals',
          label: id,
          value: Math.round(name === 'CLS' ? value * 1000 : value)
        });
      };

      // Report each metric
      // @ts-ignore
      window.addEventListener('web-vital', reportWebVital);
      
      return () => {
        // @ts-ignore
        window.removeEventListener('web-vital', reportWebVital);
      };
    }
  }, []);

  return null;
}

// Hook for tracking events in components
export function useGoogleAnalytics() {
  return {
    trackEvent: gtag.event,
    trackContactForm: gtag.trackContactForm,
    trackNewsletter: gtag.trackNewsletterSignup,
    trackCalculator: gtag.trackCalculatorUsage,
    trackDownload: gtag.trackDownload,
    trackCTA: gtag.trackCTA,
    trackVideo: gtag.trackVideo,
    trackSearch: gtag.trackSiteSearch,
    trackError: gtag.trackError,
    setUserProperties: gtag.setUserProperties
  };
}