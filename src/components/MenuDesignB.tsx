'use client';

import { useState } from 'react';
import Link from 'next/link';

// Design B: Dark Mode with Neon Accents
export default function MenuDesignB() {
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
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10' 
        : 'bg-gradient-to-b from-slate-900 to-slate-900/90 backdrop-blur-md'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Neon Glow */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
                <div className="relative w-14 h-14 bg-black border-2 border-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-cyan-400 font-bold text-xl font-mono">DT</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  Data<span className="text-cyan-400">Tranquil</span>
                </span>
                <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Next-Gen AI</p>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-5 py-3 text-gray-300 hover:text-cyan-400 font-medium flex items-center gap-2 transition-all duration-300 hover:bg-slate-800/50 rounded-lg">
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180 text-cyan-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 w-[650px] mt-2 bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-slate-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20 pointer-events-none" />
                  
                  <div className="relative p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {/* AI Consulting */}
                      <div>
                        <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
                          AI Consulting
                        </h3>
                        <div className="space-y-2">
                          {[
                            { title: 'AI Strategy', desc: 'Transform your vision', icon: '⚡' },
                            { title: 'Implementation', desc: 'Deploy AI solutions', icon: '🚀' },
                            { title: 'Optimization', desc: 'Enhance performance', icon: '💎' },
                            { title: 'Training', desc: 'Empower your team', icon: '🎯' }
                          ].map((item, idx) => (
                            <Link key={idx} href="#" className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group">
                              <span className="text-xl opacity-60 group-hover:opacity-100">{item.icon}</span>
                              <div>
                                <h4 className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
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
                        <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-8 h-[2px] bg-gradient-to-r from-purple-400 to-transparent" />
                          Development
                        </h3>
                        <div className="space-y-2">
                          {[
                            { title: 'Custom AI', desc: 'Tailored solutions', icon: '🤖' },
                            { title: 'ML Models', desc: 'Advanced algorithms', icon: '🧠' },
                            { title: 'Data Pipelines', desc: 'Robust infrastructure', icon: '🔄' },
                            { title: 'API Integration', desc: 'Seamless connections', icon: '🔗' }
                          ].map((item, idx) => (
                            <Link key={idx} href="#" className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 group">
                              <span className="text-xl opacity-60 group-hover:opacity-100">{item.icon}</span>
                              <div>
                                <h4 className="font-medium text-gray-200 group-hover:text-purple-400 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Industries with Neon Tags */}
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Industries</h3>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { name: 'Healthcare', color: 'cyan' },
                          { name: 'Finance', color: 'green' },
                          { name: 'Retail', color: 'purple' },
                          { name: 'Manufacturing', color: 'blue' },
                          { name: 'Technology', color: 'pink' }
                        ].map((industry) => (
                          <Link key={industry.name} href="#" className={`px-4 py-2 bg-slate-800 border border-${industry.color}-500/30 rounded-full text-xs font-medium text-${industry.color}-400 hover:bg-${industry.color}-500/20 hover:border-${industry.color}-400 transition-all duration-300`}>
                            {industry.name}
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
              <button className="px-5 py-3 text-gray-300 hover:text-purple-400 font-medium flex items-center gap-2 transition-all duration-300 hover:bg-slate-800/50 rounded-lg">
                <span>Resources</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'resources' ? 'rotate-180 text-purple-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeMenu === 'resources' && (
                <div className="absolute top-full left-0 w-[400px] mt-2 bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-slate-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none" />
                  
                  <div className="relative p-6">
                    <div className="space-y-2">
                      {[
                        { title: 'Blog', desc: 'Latest insights', icon: '📰', glow: 'cyan' },
                        { title: 'Case Studies', desc: 'Success stories', icon: '🏆', glow: 'green' },
                        { title: 'Guides', desc: 'How-to guides', icon: '📖', glow: 'purple' },
                        { title: 'ROI Calculator', desc: 'Calculate returns', icon: '💰', glow: 'yellow' },
                        { title: 'AI Assessment', desc: 'Check readiness', icon: '🎯', glow: 'pink' }
                      ].map((item, idx) => (
                        <Link key={idx} href="#" className={`flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-${item.glow}-500/30 hover:bg-${item.glow}-500/10 transition-all duration-300 group`}>
                          <span className="text-xl opacity-60 group-hover:opacity-100">{item.icon}</span>
                          <div>
                            <h4 className={`font-medium text-gray-200 group-hover:text-${item.glow}-400 transition-colors`}>
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

            {/* Simple Links */}
            <Link href="/about" className="px-5 py-3 text-gray-300 hover:text-pink-400 font-medium transition-all duration-300 hover:bg-slate-800/50 rounded-lg">
              About
            </Link>
            <Link href="/case-studies" className="px-5 py-3 text-gray-300 hover:text-green-400 font-medium transition-all duration-300 hover:bg-slate-800/50 rounded-lg">
              Case Studies
            </Link>
            <Link href="/blog" className="px-5 py-3 text-gray-300 hover:text-yellow-400 font-medium transition-all duration-300 hover:bg-slate-800/50 rounded-lg">
              Blog
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden md:inline-flex px-6 py-3 border border-slate-600 text-gray-300 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-0.5 transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/consultation" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium inline-flex items-center gap-2 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
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