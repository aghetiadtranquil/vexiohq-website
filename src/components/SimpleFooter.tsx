'use client';

export default function SimpleFooter() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">VexioHQ</h3>
                <p className="text-xs text-slate-400">AI-Powered Business Solutions</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Building AI-powered software that helps businesses work smarter.
            </p>
            <p className="text-xs text-slate-500 mt-2">A Datatranquil Inc. company</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/strategy" className="text-slate-400 hover:text-white transition-colors">AI Strategy</a></li>
              <li><a href="/services/implementation" className="text-slate-400 hover:text-white transition-colors">AI Implementation</a></li>
              <li><a href="/services/custom-ai" className="text-slate-400 hover:text-white transition-colors">Software Development</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/guides" className="text-slate-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="/roi-calculator" className="text-slate-400 hover:text-white transition-colors">ROI Calculator</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>team@vexiohq.com</li>
              <li>+1 (415) 390-5748</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2025 VexioHQ, a Datatranquil Inc. company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-notice" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</a>
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }
                }}
                className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}