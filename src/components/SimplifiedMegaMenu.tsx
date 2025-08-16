'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icons } from './Icons';

const menuData = {
  services: {
    title: 'Services',
    columns: [
      {
        title: 'AI CONSULTING',
        color: 'blue',
        items: [
          {
            icon: Icons.strategy,
            title: 'AI Strategy & Roadmap',
            description: 'Define your AI transformation journey',
            href: '/services/strategy'
          },
          {
            icon: Icons.implementation,
            title: 'AI Implementation',
            description: 'End-to-end deployment and integration',
            href: '/services/implementation'
          },
          {
            icon: Icons.optimization,
            title: 'AI Optimization',
            description: 'Improve existing AI systems',
            href: '/services/optimization'
          },
          {
            icon: Icons.training,
            title: 'Training & Support',
            description: 'Upskill your team on AI',
            href: '/services/training'
          }
        ]
      },
      {
        title: 'SOFTWARE DEVELOPMENT',
        color: 'purple',
        items: [
          {
            icon: Icons.agenticAI,
            title: 'Custom AI Solutions',
            description: 'Tailored AI applications for your business',
            href: '/services/custom-ai'
          },
          {
            icon: Icons.machineLearning,
            title: 'Machine Learning Models',
            description: 'Build and train custom ML models',
            href: '/services/ml-development'
          },
          {
            icon: Icons.dataAnalytics,
            title: 'Data Pipeline Development',
            description: 'Build robust data infrastructure',
            href: '/services/data-pipeline'
          },
          {
            icon: Icons.innovation,
            title: 'API & Integration',
            description: 'Connect AI to your existing systems',
            href: '/services/api-integration'
          }
        ]
      },
      {
        title: 'INDUSTRIES',
        color: 'teal',
        items: [
          {
            icon: Icons.healthcare,
            title: 'Healthcare',
            description: 'Medical AI and diagnostics',
            href: '/industries/healthcare'
          },
          {
            icon: Icons.finance,
            title: 'Finance',
            description: 'Risk analysis and fraud detection',
            href: '/industries/finance'
          },
          {
            icon: Icons.retail,
            title: 'Retail',
            description: 'Customer analytics and personalization',
            href: '/industries/retail'
          },
          {
            icon: Icons.manufacturing,
            title: 'Manufacturing',
            description: 'Predictive maintenance and quality',
            href: '/industries/manufacturing'
          }
        ]
      }
    ]
  },
  resources: {
    title: 'Resources',
    columns: [
      {
        title: 'LEARN',
        color: 'emerald',
        items: [
          {
            icon: Icons.blog,
            title: 'Blog',
            description: 'AI insights and tutorials',
            href: '/blog'
          },
          {
            icon: Icons.caseStudy,
            title: 'Case Studies',
            description: 'Client success stories',
            href: '/case-studies'
          },
          {
            icon: Icons.whitepaper,
            title: 'Guides',
            description: 'AI implementation guides',
            href: '/guides'
          }
        ]
      },
      {
        title: 'TOOLS',
        color: 'orange',
        items: [
          {
            icon: Icons.calculator,
            title: 'ROI Calculator',
            description: 'Calculate AI investment returns',
            href: '/roi-calculator'
          },
          {
            icon: Icons.assessment,
            title: 'AI Readiness Assessment',
            description: 'Check your AI maturity',
            href: '/assessment'
          },
          {
            icon: Icons.search,
            title: 'Solution Finder',
            description: 'Find the right AI solution',
            href: '/solution-finder'
          }
        ]
      }
    ]
  }
};

function SimplifiedMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string; border: string } } = {
      blue: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        hover: 'hover:bg-blue-100',
        border: 'border-blue-600'
      },
      purple: { 
        bg: 'bg-purple-50', 
        text: 'text-purple-600', 
        hover: 'hover:bg-purple-100',
        border: 'border-purple-600'
      },
      teal: { 
        bg: 'bg-teal-50', 
        text: 'text-teal-600', 
        hover: 'hover:bg-teal-100',
        border: 'border-teal-600'
      },
      emerald: { 
        bg: 'bg-emerald-50', 
        text: 'text-emerald-600', 
        hover: 'hover:bg-emerald-100',
        border: 'border-emerald-600'
      },
      orange: { 
        bg: 'bg-orange-50', 
        text: 'text-orange-600', 
        hover: 'hover:bg-orange-100',
        border: 'border-orange-600'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">DT</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DataTranquil
              </span>
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
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
                Services
                <span className={`transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`}>
                  {Icons.arrow}
                </span>
              </button>
              
              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 w-screen max-w-5xl -ml-20 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-blue-600">
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {menuData.services.columns.map((column, idx) => {
                        const colorClasses = getColorClasses(column.color);
                        return (
                          <div key={idx}>
                            <h3 className={`text-xs font-bold ${colorClasses.text} uppercase tracking-wider mb-3`}>
                              {column.title}
                            </h3>
                            <div className="space-y-2">
                              {column.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className={`flex items-start gap-3 p-2.5 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-1.5 rounded-lg mt-0.5`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 text-sm">Need a custom solution?</span>
                        <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Let's discuss your project →
                        </Link>
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
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
                Resources
                <span className={`transition-transform ${activeMenu === 'resources' ? 'rotate-180' : ''}`}>
                  {Icons.arrow}
                </span>
              </button>
              
              {activeMenu === 'resources' && (
                <div className="absolute top-full left-0 w-screen max-w-3xl -ml-20 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-emerald-600">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {menuData.resources.columns.map((column, idx) => {
                        const colorClasses = getColorClasses(column.color);
                        return (
                          <div key={idx}>
                            <h3 className={`text-xs font-bold ${colorClasses.text} uppercase tracking-wider mb-3`}>
                              {column.title}
                            </h3>
                            <div className="space-y-2">
                              {column.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className={`flex items-start gap-3 p-2.5 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-1.5 rounded-lg mt-0.5`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/case-studies" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/portal/login" className="hidden md:inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              </svg>
              Login
            </Link>
            <Link href="/contact" className="hidden md:inline-flex px-5 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm">
              Contact Us
            </Link>
            <Link href="/consultation" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm">
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default SimplifiedMegaMenu;