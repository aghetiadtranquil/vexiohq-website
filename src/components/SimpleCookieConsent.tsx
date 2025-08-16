'use client';

import { useState, useEffect } from 'react';

export default function SimpleCookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setTimeout(() => setShowBanner(true), 1000);
      }
    }
  }, []);

  const acceptAllCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'all');
      localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    }
    setShowBanner(false);
  };

  const acceptNecessaryOnly = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'necessary');
      localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl p-6 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          <div className="mb-4 md:mb-0 md:mr-8 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🍪 Cookie Notice</h3>
            <p className="text-sm text-gray-700 mb-2">
              DataTranquil uses cookies to better understand how visitors use our site, to collect and 
              analyze information on site performance and usage, and for targeted advertising purposes.
            </p>
            {showDetails && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                <p className="mb-2"><strong>Necessary Cookies:</strong> Essential for website functionality</p>
                <p className="mb-2"><strong>Analytics Cookies:</strong> Help us understand how you use our site</p>
                <p className="mb-2"><strong>Marketing Cookies:</strong> Used for targeted advertising</p>
                <p><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</p>
              </div>
            )}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-blue-600 hover:underline mt-2"
            >
              {showDetails ? 'Hide Details' : 'Learn More'}
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptNecessaryOnly}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Necessary Only
            </button>
            <button
              onClick={acceptAllCookies}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <a 
            href="/privacy-notice" 
            className="text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Privacy Policy
          </a>
          <span className="mx-2 text-xs text-gray-400">•</span>
          <a 
            href="/cookie-notice" 
            className="text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}