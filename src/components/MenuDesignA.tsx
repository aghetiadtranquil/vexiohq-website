'use client';

import { useState } from 'react';
import Link from 'next/link';

// Design A: Glassmorphism with Gradient Borders
export default function MenuDesignA() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
        : 'bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <span className="text-white font-bold text-xl">DT</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  DataTranquil
                </span>
                <p className="text-xs text-gray-500 font-medium">AI Excellence</p>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-5 py-3 text-gray-700 hover:text-blue-600 font-semibold flex items-center gap-2 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50">
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 w-[600px] mt-2 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none" />
                  
                  <div className="relative p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {/* AI Consulting */}
                      <div>
                        <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text uppercase tracking-wider mb-4">
                          AI Consulting
                        </h3>
                        <div className="space-y-3">
                          {[
                            { title: 'AI Strategy', desc: 'Transform your vision', icon: '🎯' },
                            { title: 'Implementation', desc: 'Deploy AI solutions', icon: '🚀' },
                            { title: 'Optimization', desc: 'Enhance performance', icon: '⚡' },
                            { title: 'Training', desc: 'Empower your team', icon: '🎓' }
                          ].map((item, idx) => (
                            <Link key={idx} href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Software Development */}
                      <div>
                        <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text uppercase tracking-wider mb-4">
                          Software Development
                        </h3>
                        <div className="space-y-3">
                          {[
                            { title: 'Custom AI Solutions', desc: 'Tailored applications', icon: '💡' },
                            { title: 'ML Models', desc: 'Advanced algorithms', icon: '🧠' },
                            { title: 'Data Pipelines', desc: 'Robust infrastructure', icon: '🔄' },
                            { title: 'API Integration', desc: 'Seamless connections', icon: '🔗' }
                          ].map((item, idx) => (
                            <Link key={idx} href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Industries Section */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Industries We Serve</h3>
                      <div className="flex gap-3 flex-wrap">
                        {['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Technology'].map((industry) => (
                          <Link key={industry} href="#" className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm font-medium text-gray-700 hover:from-blue-50 hover:to-indigo-100 hover:text-blue-700 transition-all duration-300">
                            {industry}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('resources')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-5 py-3 text-gray-700 hover:text-purple-600 font-semibold flex items-center gap-2 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">
                <span>Resources</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeMenu === 'resources' && (
                <div className="absolute top-full left-0 w-[400px] mt-2 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 pointer-events-none" />
                  
                  <div className="relative p-6">
                    <div className="space-y-3">
                      {[
                        { title: 'Blog', desc: 'Latest AI insights', icon: '📝', color: 'purple' },
                        { title: 'Case Studies', desc: 'Success stories', icon: '📊', color: 'pink' },
                        { title: 'Guides', desc: 'Implementation guides', icon: '📚', color: 'indigo' },
                        { title: 'ROI Calculator', desc: 'Calculate returns', icon: '💰', color: 'green' },
                        { title: 'AI Assessment', desc: 'Check readiness', icon: '✅', color: 'blue' }
                      ].map((item, idx) => (
                        <Link key={idx} href="#" className={`flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-${item.color}-50 hover:to-${item.color}-100 transition-all duration-300 group`}>
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links with Hover Effects */}
            <Link href="/about" className="px-5 py-3 text-gray-700 hover:text-indigo-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50">
              About
            </Link>
            <Link href="/case-studies" className="px-5 py-3 text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50">
              Case Studies
            </Link>
            <Link href="/blog" className="px-5 py-3 text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50">
              Blog
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden md:inline-flex px-6 py-3 border-2 border-gradient-to-r from-blue-200 to-purple-200 text-gray-700 rounded-full font-semibold hover:from-blue-300 hover:to-purple-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/consultation" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}