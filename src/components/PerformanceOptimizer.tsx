'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface PerformanceOptimizerProps {
  enablePrefetch?: boolean
  criticalCSS?: string
  preconnectDomains?: string[]
}

export default function PerformanceOptimizer({
  enablePrefetch = true,
  criticalCSS,
  preconnectDomains = []
}: PerformanceOptimizerProps) {
  
  useEffect(() => {
    // Enable resource hints for faster loading
    if (enablePrefetch && 'connection' in navigator) {
      const connection = (navigator as any).connection
      
      // Only prefetch on fast connections
      if (connection && !connection.saveData && connection.effectiveType !== 'slow-2g') {
        // Prefetch critical resources
        const criticalResources = [
          '/api/services',
          '/api/resources',
          '/_next/static/css/',
          '/_next/static/chunks/'
        ]
        
        criticalResources.forEach(resource => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = resource
          document.head.appendChild(link)
        })
      }
    }

    // Lazy load non-critical CSS
    const loadNonCriticalCSS = () => {
      const links = document.querySelectorAll('link[data-critical="false"]')
      links.forEach((link: Element) => {
        (link as HTMLLinkElement).media = 'all'
      })
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadNonCriticalCSS)
    } else {
      setTimeout(loadNonCriticalCSS, 1)
    }

    // Progressive image loading
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.removeAttribute('data-src')
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))

    return () => {
      imageObserver.disconnect()
    }
  }, [enablePrefetch])

  return (
    <>
      {/* Critical CSS injection */}
      {criticalCSS && (
        <style
          dangerouslySetInnerHTML={{ __html: criticalCSS }}
          data-critical="true"
        />
      )}

      {/* Preconnect to external domains */}
      {preconnectDomains.map(domain => (
        <link
          key={domain}
          rel="preconnect"
          href={domain}
          crossOrigin="anonymous"
        />
      ))}

      {/* Web Vitals monitoring */}
      <Script id="web-vitals" strategy="afterInteractive">
        {`
          if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                console.log('LCP:', entry.startTime);
                // Send to analytics
                if (window.gtag) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'LCP',
                    value: Math.round(entry.startTime)
                  });
                }
              }
            }).observe({type: 'largest-contentful-paint', buffered: true});

            // First Input Delay
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                const delay = entry.processingStart - entry.startTime;
                console.log('FID:', delay);
                // Send to analytics
                if (window.gtag) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'FID',
                    value: Math.round(delay)
                  });
                }
              }
            }).observe({type: 'first-input', buffered: true});

            // Cumulative Layout Shift
            let clsValue = 0;
            let clsEntries = [];
            let sessionValue = 0;
            let sessionEntries = [];

            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                  const firstSessionEntry = sessionEntries[0];
                  const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                  
                  if (sessionValue &&
                      entry.startTime - lastSessionEntry.startTime < 1000 &&
                      entry.startTime - firstSessionEntry.startTime < 5000) {
                    sessionValue += entry.value;
                    sessionEntries.push(entry);
                  } else {
                    sessionValue = entry.value;
                    sessionEntries = [entry];
                  }

                  if (sessionValue > clsValue) {
                    clsValue = sessionValue;
                    clsEntries = sessionEntries;
                    console.log('CLS:', clsValue);
                    // Send to analytics
                    if (window.gtag) {
                      window.gtag('event', 'web_vitals', {
                        event_category: 'Web Vitals',
                        event_label: 'CLS',
                        value: Math.round(clsValue * 1000)
                      });
                    }
                  }
                }
              }
            }).observe({type: 'layout-shift', buffered: true});
          }
        `}
      </Script>

      {/* Resource hints for fonts */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </>
  )
}

// Export performance utilities
export const performanceUtils = {
  // Debounce function for scroll/resize events
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout
    return (...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  },

  // Throttle function for high-frequency events
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  },

  // Request idle callback with fallback
  requestIdleCallback: (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback)
    } else {
      setTimeout(callback, 1)
    }
  },

  // Measure component render time
  measureRenderTime: (componentName: string) => {
    const startTime = performance.now()
    return () => {
      const endTime = performance.now()
      const renderTime = endTime - startTime
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`)
      return renderTime
    }
  }
}