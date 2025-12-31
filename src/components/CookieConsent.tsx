'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already set preferences
    if (typeof window !== 'undefined') {
      const savedPreferences = localStorage.getItem('cookiePreferences');
      const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');
      
      if (!savedPreferences || !consentTimestamp) {
        // Show banner after a small delay for better UX
        setTimeout(() => setShowBanner(true), 1000);
      } else {
        // Apply saved preferences
        const prefs = JSON.parse(savedPreferences);
        applyPreferences(prefs);
      }
    }
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    // Apply Google Analytics based on preferences
    if (typeof window !== 'undefined' && window.gtag) {
      if (prefs.analytics) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      } else {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }

      if (prefs.marketing) {
        window.gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_personalization': 'granted',
          'ad_user_data': 'granted'
        });
      } else {
        window.gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_personalization': 'denied',
          'ad_user_data': 'denied'
        });
      }
    }
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    savePreferences(allAccepted);
    setShowBanner(false);
  };

  const declineOptionalCookies = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    savePreferences(onlyNecessary);
    setShowBanner(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    localStorage.setItem('cookieConsentVersion', '1.0');
    
    setPreferences(prefs);
    applyPreferences(prefs);
    
    // Track consent event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cookie_consent', {
        necessary: prefs.necessary,
        analytics: prefs.analytics,
        marketing: prefs.marketing,
        functional: prefs.functional,
      });
    }
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-[9999] animate-slide-up">
          <div className="max-w-7xl mx-auto p-6 md:p-8">
            <div className="md:flex md:items-start md:justify-between">
              <div className="mb-4 md:mb-0 md:mr-8 flex-1">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  VexioHQ uses cookies to better understand how visitors use our site, to collect and 
                  analyze information on site performance and usage, and for targeted advertising purposes. 
                  <Link href="/cookie-notice" className="text-blue-600 hover:underline ml-1">
                    Cookie Notice
                  </Link>
                </p>
                <p className="text-sm md:text-base text-gray-700 mt-2">
                  We do not sell personal information, but we may share your personal data with third parties for cross-context behavioral advertising.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Please see our 
                  <Link href="/privacy-notice" className="text-blue-600 hover:underline mx-1">
                    Privacy Notice
                  </Link>
                  for more information.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:ml-4">
                <button
                  onClick={acceptAllCookies}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={declineOptionalCookies}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Decline optional cookies
                </button>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={openPreferences}
                className="text-blue-600 hover:underline text-sm md:text-base font-medium"
              >
                Manage my preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000] p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Cookie Preferences</h2>
              
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border-b pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Necessary Cookies</h3>
                      <p className="text-gray-600 text-sm">
                        These cookies are essential for the website to function properly. They enable basic 
                        functions like page navigation and access to secure areas of the website. The website 
                        cannot function properly without these cookies.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="w-5 h-5 text-blue-600 rounded cursor-not-allowed opacity-50"
                      />
                      <span className="block text-xs text-gray-500 mt-1">Always On</span>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border-b pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Analytics Cookies</h3>
                      <p className="text-gray-600 text-sm">
                        These cookies help us understand how visitors interact with our website by collecting 
                        and reporting information anonymously. This helps us improve our website and services.
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Providers: Google Analytics, Hotjar
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border-b pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Marketing Cookies</h3>
                      <p className="text-gray-600 text-sm">
                        These cookies are used to track visitors across websites to display ads that are 
                        relevant and engaging for individual users. They help us measure the effectiveness 
                        of our advertising campaigns.
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Providers: Google Ads, LinkedIn, Facebook
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Functional Cookies</h3>
                      <p className="text-gray-600 text-sm">
                        These cookies enable enhanced functionality and personalization, such as videos and 
                        live chats. They may be set by us or by third party providers whose services we have 
                        added to our pages.
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Providers: YouTube, Vimeo, Intercom
                      </p>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end mt-8">
                <button
                  onClick={closePreferences}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setPreferences({
                      necessary: true,
                      analytics: false,
                      marketing: false,
                      functional: false,
                    });
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={() => {
                    setPreferences({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                      functional: true,
                    });
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}