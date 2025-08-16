'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  performance: boolean;
  functional: boolean;
  targeting: boolean;
}

export default function CookiePreferenceCenter() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    performance: false,
    functional: false,
    targeting: false,
  });
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (!savedPreferences) {
        setTimeout(() => setShowBanner(true), 1000);
      } else {
        const prefs = JSON.parse(savedPreferences);
        setPreferences(prefs);
      }
    }
  }, []);

  const savePreferences = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
      localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    }
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      performance: true,
      functional: true,
      targeting: true,
    };
    setPreferences(allAccepted);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
      localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    }
    setShowBanner(false);
    setShowPreferences(false);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50">
          <div className="max-w-7xl mx-auto p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Preference Center</h3>
                <p className="text-sm text-gray-700">
                  DataTranquil and our trusted partners use cookies and similar technologies to access and use your data 
                  for the purposes listed below. Please provide your consent for cookie usage on this website. 
                  Enable one or more of the cookie types listed below, and then save your preferences. 
                  <a href="/cookie-notice" className="text-blue-600 hover:underline ml-1">Cookie Notice</a>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  Accept all cookies
                </button>
                <button
                  onClick={() => {
                    setShowBanner(false);
                    setShowPreferences(true);
                  }}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  Manage Consent Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preference Center Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000] p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DT</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Privacy Preference Center</h2>
                </div>
                <button
                  onClick={() => {
                    setShowPreferences(false);
                    setShowBanner(true);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <p className="text-sm text-gray-600 mb-6">
                DataTranquil and our trusted partners use cookies and similar technologies to access and use your data 
                for the purposes listed below. Please provide your consent for cookie usage on this website. 
                Enable one or more of the cookie types listed below, and then save your preferences.
                <a href="/cookie-notice" className="text-blue-600 hover:underline ml-1">Cookie Notice</a>
              </p>

              <div className="space-y-4">
                {/* Performance Cookies */}
                <div className="border rounded-lg">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Performance Cookies</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {preferences.performance ? 'Active' : 'Inactive'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.performance}
                          onChange={(e) => setPreferences({...preferences, performance: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance 
                      of our site and app. They help us to know which pages are the most and least popular and see how visitors 
                      move around the site and app. All information these cookies collect is aggregated and therefore anonymous.
                    </p>
                    <button
                      onClick={() => toggleSection('performance')}
                      className="text-sm text-blue-600 hover:underline mt-2"
                    >
                      Cookie details {expandedSections.performance ? '−' : '+'}
                    </button>
                    {expandedSections.performance && (
                      <div className="mt-3 p-3 bg-gray-50 rounded text-xs text-gray-600">
                        <p className="font-semibold mb-2">Cookies used:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Google Analytics (_ga, _gid, _gat)</li>
                          <li>Hotjar (_hjid, _hjIncludedInSample)</li>
                          <li>Performance monitoring cookies</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border rounded-lg">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {preferences.functional ? 'Active' : 'Inactive'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      These cookies enable the website and app to provide enhanced functionality and personalization. 
                      They may be set by us or by third party providers whose services we have added to our pages.
                    </p>
                    <button
                      onClick={() => toggleSection('functional')}
                      className="text-sm text-blue-600 hover:underline mt-2"
                    >
                      Cookie details {expandedSections.functional ? '−' : '+'}
                    </button>
                    {expandedSections.functional && (
                      <div className="mt-3 p-3 bg-gray-50 rounded text-xs text-gray-600">
                        <p className="font-semibold mb-2">Cookies used:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>User preferences (theme, language)</li>
                          <li>Chat widget (Intercom, Drift)</li>
                          <li>Video players (YouTube, Vimeo)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Targeting Cookies */}
                <div className="border rounded-lg">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Targeting Cookies</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {preferences.targeting ? 'Active' : 'Inactive'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.targeting}
                          onChange={(e) => setPreferences({...preferences, targeting: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      These cookies may be set through our site or app by our advertising partners. They may be used by those 
                      companies to build a profile of your interests and show you relevant adverts on other sites.
                    </p>
                    <button
                      onClick={() => toggleSection('targeting')}
                      className="text-sm text-blue-600 hover:underline mt-2"
                    >
                      Cookie details {expandedSections.targeting ? '−' : '+'}
                    </button>
                    {expandedSections.targeting && (
                      <div className="mt-3 p-3 bg-gray-50 rounded text-xs text-gray-600">
                        <p className="font-semibold mb-2">Cookies used:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Google Ads (IDE, NID)</li>
                          <li>Facebook Pixel (_fbp, fr)</li>
                          <li>LinkedIn Insight Tag (li_mc, lang)</li>
                          <li>Twitter Pixel (personalization_id)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Strictly Necessary Cookies */}
                <div className="border rounded-lg bg-gray-50">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Strictly Necessary Cookies</h3>
                        <p className="text-sm text-green-600 mt-1">Always Active</p>
                      </div>
                      <div className="w-11 h-6 bg-green-600 rounded-full relative">
                        <div className="absolute top-[2px] right-[2px] bg-white rounded-full h-5 w-5"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      These cookies are necessary for the website and app to function and cannot be switched off in our systems. 
                      They are usually only set in response to actions made by you which amount to a request for services.
                    </p>
                    <button
                      onClick={() => toggleSection('necessary')}
                      className="text-sm text-blue-600 hover:underline mt-2"
                    >
                      Cookie details {expandedSections.necessary ? '−' : '+'}
                    </button>
                    {expandedSections.necessary && (
                      <div className="mt-3 p-3 bg-white rounded text-xs text-gray-600">
                        <p className="font-semibold mb-2">Cookies used:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Session cookies (sessionId)</li>
                          <li>Security cookies (CSRF token)</li>
                          <li>Cookie consent preferences</li>
                          <li>Load balancing cookies</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex justify-between items-center">
                <button
                  onClick={acceptAll}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Accept all cookies
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Save my preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}