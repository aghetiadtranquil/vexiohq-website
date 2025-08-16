'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icons } from './Icons';

// Design C: Minimal with Micro-interactions
export default function MenuDesignC() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">DT</span>
              </div>
              <span className="text-xl font-bold text-gray-900">DataTranquil</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-4 py-6 text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1.5 transition-colors">
                Services
                <svg className={`w-3.5 h-3.5 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 w-[500px] mt-0 bg-white shadow-xl border border-gray-200">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                      {/* AI Consulting */}
                      <div>
                        <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">AI Consulting</h3>
                        <div className="space-y-1">
                          {[
                            { title: 'Strategy & Roadmap', href: '/services/strategy' },
                            { title: 'Implementation', href: '/services/implementation' },
                            { title: 'Optimization', href: '/services/optimization' },
                            { title: 'Training', href: '/services/training' }
                          ].map((item) => (
                            <Link 
                              key={item.title} 
                              href={item.href} 
                              className="block py-2 text-sm text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200"
                              onMouseEnter={() => setHoveredItem(item.title)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              <span className={`${hoveredItem === item.title ? 'font-medium' : ''}`}>
                                {item.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Software Development */}
                      <div>
                        <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Development</h3>
                        <div className="space-y-1">
                          {[
                            { title: 'Custom AI Solutions', href: '/services/custom-ai' },
                            { title: 'Machine Learning', href: '/services/ml' },
                            { title: 'Data Pipelines', href: '/services/data' },
                            { title: 'API Integration', href: '/services/api' }
                          ].map((item) => (
                            <Link 
                              key={item.title} 
                              href={item.href} 
                              className="block py-2 text-sm text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200"
                              onMouseEnter={() => setHoveredItem(item.title)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              <span className={`${hoveredItem === item.title ? 'font-medium' : ''}`}>
                                {item.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Industries</h3>
                      <div className="flex gap-3">
                        {['Healthcare', 'Finance', 'Retail', 'Manufacturing'].map((industry) => (
                          <Link key={industry} href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
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
              <button className="px-4 py-6 text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1.5 transition-colors">
                Resources
                <svg className={`w-3.5 h-3.5 transition-transform ${activeMenu === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeMenu === 'resources' && (
                <div className="absolute top-full left-0 w-[300px] mt-0 bg-white shadow-xl border border-gray-200">
                  <div className="p-6">
                    <div className="space-y-1">
                      {[
                        { title: 'Blog', href: '/blog' },
                        { title: 'Case Studies', href: '/case-studies' },
                        { title: 'Guides', href: '/guides' },
                        { title: 'ROI Calculator', href: '/roi-calculator' },
                        { title: 'AI Assessment', href: '/assessment' }
                      ].map((item) => (
                        <Link 
                          key={item.title} 
                          href={item.href} 
                          className="block py-2 text-sm text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200"
                          onMouseEnter={() => setHoveredItem(item.title)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <span className={`${hoveredItem === item.title ? 'font-medium' : ''}`}>
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link href="/about" className="px-4 py-6 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              About
            </Link>
            <Link href="/case-studies" className="px-4 py-6 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="px-4 py-6 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Blog
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Contact
            </Link>
            <Link href="/consultation" className="px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}