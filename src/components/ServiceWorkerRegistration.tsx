'use client'

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });

          // #COMPLETION_DRIVE_IMPL: Enhanced service worker lifecycle management
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available - could show update notification
                  console.log('New service worker available');
                  
                  // Auto-update after 5 seconds or user interaction
                  setTimeout(() => {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                  }, 5000);
                }
              });
            }
          });

          // Handle service worker updates
          let refreshing = false;
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
              refreshing = true;
              window.location.reload();
            }
          });

          console.log('Service Worker registered successfully:', registration.scope);
          
          // #COMPLETION_DRIVE_INTEGRATION: Periodic sync registration for forms
          if ('sync' in registration) {
            try {
              await (registration as any).sync.register('contact-form');
              console.log('Background sync registered');
            } catch (error) {
              console.log('Background sync registration failed:', error);
            }
          }

          // #SUGGEST_ERROR_HANDLING: Web Push subscription (optional enhancement)
          if ('PushManager' in window && 'Notification' in window) {
            // Could implement push notifications here if needed
            console.log('Push notifications supported');
          }

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      // Register service worker after page load for better performance
      if (document.readyState === 'loading') {
        window.addEventListener('load', registerServiceWorker);
      } else {
        registerServiceWorker();
      }

      // Cleanup function
      return () => {
        window.removeEventListener('load', registerServiceWorker);
      };
    }
  }, []);

  // Performance monitoring integration
  useEffect(() => {
    if ('performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // #COMPLETION_DRIVE_INTEGRATION: Could send metrics to analytics
          console.log(`${entry.name}: ${entry.startTime}`);
        });
      });
      
      try {
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      } catch (e) {
        // Older browsers might not support all entry types
        console.log('Performance observer not fully supported');
      }

      return () => observer.disconnect();
    }
  }, []);

  return null; // This component doesn't render anything visible
}