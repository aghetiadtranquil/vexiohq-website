'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icons } from './Icons';

const menuData = {
  products: {
    title: 'Products',
    columns: [
      {
        title: 'AI PLATFORMS',
        color: 'blue',
        items: [
          {
            icon: Icons.agenticAI,
            title: 'Agentic AI Platform',
            description: 'Autonomous AI agents for intelligent automation',
            href: '/products/agentic-ai',
            badge: 'New',
            badgeColor: 'bg-blue-100 text-blue-700'
          },
          {
            icon: Icons.machineLearning,
            title: 'ML Operations Suite',
            description: 'End-to-end machine learning lifecycle management',
            href: '/products/mlops'
          },
          {
            icon: Icons.dataAnalytics,
            title: 'Analytics Engine',
            description: 'Real-time data processing and insights',
            href: '/products/analytics'
          },
          {
            icon: Icons.aiTransformation,
            title: 'Transformation Hub',
            description: 'Complete AI transformation toolkit',
            href: '/products/transformation'
          }
        ]
      },
      {
        title: 'SOLUTIONS',
        color: 'purple',
        items: [
          {
            icon: Icons.optimization,
            title: 'Process Automation',
            description: 'Automate complex business processes',
            href: '/solutions/automation'
          },
          {
            icon: Icons.search,
            title: 'Intelligent Search',
            description: 'AI-powered enterprise search',
            href: '/solutions/search'
          },
          {
            icon: Icons.benchmark,
            title: 'Predictive Analytics',
            description: 'Forecast trends and outcomes',
            href: '/solutions/predictive'
          },
          {
            icon: Icons.assessment,
            title: 'Computer Vision',
            description: 'Visual recognition and analysis',
            href: '/solutions/vision'
          }
        ]
      },
      {
        title: 'DEPLOYMENT',
        color: 'green',
        items: [
          {
            icon: Icons.implementation,
            title: 'Cloud Deployment',
            description: 'Deploy on AWS, Azure, or GCP',
            href: '/deployment/cloud'
          },
          {
            icon: Icons.manufacturing,
            title: 'On-Premise',
            description: 'Secure on-premise installation',
            href: '/deployment/on-premise'
          },
          {
            icon: Icons.partner,
            title: 'Hybrid Solutions',
            description: 'Best of cloud and on-premise',
            href: '/deployment/hybrid'
          },
          {
            icon: Icons.energy,
            title: 'Edge Computing',
            description: 'AI at the edge for real-time processing',
            href: '/deployment/edge'
          }
        ]
      }
    ]
  },
  services: {
    title: 'Services',
    columns: [
      {
        title: 'CONSULTING',
        color: 'indigo',
        items: [
          {
            icon: Icons.strategy,
            title: 'AI Strategy',
            description: 'Develop your AI roadmap',
            href: '/services/strategy'
          },
          {
            icon: Icons.implementation,
            title: 'Implementation',
            description: 'End-to-end deployment services',
            href: '/services/implementation'
          },
          {
            icon: Icons.optimization,
            title: 'Optimization',
            description: 'Maximize AI performance',
            href: '/services/optimization'
          },
          {
            icon: Icons.training,
            title: 'Training Programs',
            description: 'Upskill your team',
            href: '/services/training'
          }
        ]
      },
      {
        title: 'INDUSTRIES',
        color: 'teal',
        items: [
          {
            icon: Icons.healthcare,
            title: 'Healthcare & Life Sciences',
            description: 'Medical AI and diagnostics',
            href: '/industries/healthcare'
          },
          {
            icon: Icons.finance,
            title: 'Financial Services',
            description: 'Risk analysis and fraud detection',
            href: '/industries/finance'
          },
          {
            icon: Icons.manufacturing,
            title: 'Manufacturing',
            description: 'Smart factory and quality control',
            href: '/industries/manufacturing'
          },
          {
            icon: Icons.retail,
            title: 'Retail & E-commerce',
            description: 'Personalization and inventory',
            href: '/industries/retail'
          }
        ]
      },
      {
        title: 'MORE INDUSTRIES',
        color: 'cyan',
        items: [
          {
            icon: Icons.energy,
            title: 'Energy & Utilities',
            description: 'Grid optimization and forecasting',
            href: '/industries/energy'
          },
          {
            icon: Icons.education,
            title: 'Education',
            description: 'Personalized learning systems',
            href: '/industries/education'
          },
          {
            icon: Icons.innovation,
            title: 'Technology',
            description: 'Next-gen tech solutions',
            href: '/industries/technology'
          },
          {
            icon: Icons.partner,
            title: 'Government',
            description: 'Public sector AI solutions',
            href: '/industries/government'
          }
        ]
      }
    ]
  },
  resources: {
    title: 'Resources',
    columns: [
      {
        title: 'LEARNING CENTER',
        color: 'emerald',
        items: [
          {
            icon: Icons.blog,
            title: 'Blog',
            description: 'Latest AI insights and trends',
            href: '/blog'
          },
          {
            icon: Icons.webinar,
            title: 'Webinars',
            description: 'Live sessions with experts',
            href: '/webinars'
          },
          {
            icon: Icons.caseStudy,
            title: 'Case Studies',
            description: 'Real-world success stories',
            href: '/case-studies'
          },
          {
            icon: Icons.whitepaper,
            title: 'Research Papers',
            description: 'In-depth technical analysis',
            href: '/research'
          }
        ]
      },
      {
        title: 'TOOLS & UTILITIES',
        color: 'orange',
        items: [
          {
            icon: Icons.calculator,
            title: 'ROI Calculator',
            description: 'Calculate your AI investment return',
            href: '/tools/roi-calculator'
          },
          {
            icon: Icons.assessment,
            title: 'Maturity Assessment',
            description: 'Evaluate AI readiness',
            href: '/tools/assessment'
          },
          {
            icon: Icons.search,
            title: 'Solution Finder',
            description: 'Find the right AI solution',
            href: '/tools/solution-finder'
          },
          {
            icon: Icons.benchmark,
            title: 'Benchmark Tool',
            description: 'Compare with industry standards',
            href: '/tools/benchmark'
          }
        ]
      },
      {
        title: 'COMMUNITY',
        color: 'pink',
        items: [
          {
            icon: Icons.partner,
            title: 'Partner Network',
            description: 'Join our ecosystem',
            href: '/partners'
          },
          {
            icon: Icons.academy,
            title: 'AI Academy',
            description: 'Certification programs',
            href: '/academy'
          },
          {
            icon: Icons.innovation,
            title: 'Innovation Lab',
            description: 'Experimental AI projects',
            href: '/lab'
          },
          {
            icon: Icons.events,
            title: 'Events & Meetups',
            description: 'Connect with AI community',
            href: '/events'
          }
        ]
      }
    ]
  },
  company: {
    title: 'Company',
    columns: [
      {
        title: 'ABOUT US',
        color: 'violet',
        items: [
          {
            icon: Icons.partner,
            title: 'Our Story',
            description: 'How we started',
            href: '/about/story'
          },
          {
            icon: Icons.academy,
            title: 'Leadership',
            description: 'Meet our team',
            href: '/about/team'
          },
          {
            icon: Icons.innovation,
            title: 'Mission & Values',
            description: 'What drives us',
            href: '/about/mission'
          },
          {
            icon: Icons.events,
            title: 'Careers',
            description: 'Join our team',
            href: '/careers',
            badge: 'Hiring',
            badgeColor: 'bg-green-100 text-green-700'
          }
        ]
      },
      {
        title: 'NEWS & MEDIA',
        color: 'rose',
        items: [
          {
            icon: Icons.blog,
            title: 'Press Releases',
            description: 'Latest announcements',
            href: '/press'
          },
          {
            icon: Icons.webinar,
            title: 'Media Kit',
            description: 'Brand resources',
            href: '/media-kit'
          },
          {
            icon: Icons.caseStudy,
            title: 'In the News',
            description: 'Media coverage',
            href: '/news'
          },
          {
            icon: Icons.whitepaper,
            title: 'Awards',
            description: 'Recognition & achievements',
            href: '/awards'
          }
        ]
      }
    ]
  }
};

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:bg-blue-100' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', hover: 'hover:bg-purple-100' },
      green: { bg: 'bg-green-50', text: 'text-green-600', hover: 'hover:bg-green-100' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'hover:bg-indigo-100' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', hover: 'hover:bg-teal-100' },
      cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', hover: 'hover:bg-cyan-100' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'hover:bg-emerald-100' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'hover:bg-orange-100' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-600', hover: 'hover:bg-pink-100' },
      violet: { bg: 'bg-violet-50', text: 'text-violet-600', hover: 'hover:bg-violet-100' },
      rose: { bg: 'bg-rose-50', text: 'text-rose-600', hover: 'hover:bg-rose-100' },
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
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
                Products
                <span className={`transition-transform ${activeMenu === 'products' ? 'rotate-180' : ''}`}>
                  {Icons.arrow}
                </span>
              </button>
              
              {activeMenu === 'products' && (
                <div className="absolute top-full left-0 w-screen max-w-6xl -ml-20 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-blue-600">
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {menuData.products.columns.map((column, idx) => {
                        const colorClasses = getColorClasses(column.color);
                        return (
                          <div key={idx}>
                            <h3 className={`text-xs font-bold ${colorClasses.text} uppercase tracking-wider mb-4`}>
                              {column.title}
                            </h3>
                            <div className="space-y-2">
                              {column.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className={`flex items-start gap-3 p-3 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-2 rounded-lg mt-0.5`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                        {item.title}
                                      </h4>
                                      {item.badge && (
                                        <span className={`px-2 py-0.5 ${item.badgeColor} text-xs rounded-full font-medium`}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-0.5">
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
                <div className="absolute top-full left-0 w-screen max-w-6xl -ml-20 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-indigo-600">
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {menuData.services.columns.map((column, idx) => {
                        const colorClasses = getColorClasses(column.color);
                        return (
                          <div key={idx}>
                            <h3 className={`text-xs font-bold ${colorClasses.text} uppercase tracking-wider mb-4`}>
                              {column.title}
                            </h3>
                            <div className="space-y-2">
                              {column.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className={`flex items-start gap-3 p-3 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-2 rounded-lg mt-0.5`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                      {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-0.5">
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
                    <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Need help choosing?</span>
                        <Link href="/consultation" className="text-blue-600 hover:text-blue-700 font-medium">
                          Get expert consultation →
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
                <div className="absolute top-full left-0 w-screen max-w-6xl -ml-40 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-emerald-600">
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {menuData.resources.columns.map((column, idx) => {
                        const colorClasses = getColorClasses(column.color);
                        return (
                          <div key={idx}>
                            <h3 className={`text-xs font-bold ${colorClasses.text} uppercase tracking-wider mb-4`}>
                              {column.title}
                            </h3>
                            <div className="space-y-2">
                              {column.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className={`flex items-start gap-3 p-3 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-2 rounded-lg mt-0.5`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                      {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-0.5">
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

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('company')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
                Company
                <span className={`transition-transform ${activeMenu === 'company' ? 'rotate-180' : ''}`}>
                  {Icons.arrow}
                </span>
              </button>
              
              {activeMenu === 'company' && (
                <div className="absolute top-full right-0 w-screen max-w-4xl -mr-20 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-violet-600">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {menuData.company.columns.map((column, idx) => {
                        const colorClasses = getColorClasses(column.color);
                        return (
                          <div key={idx}>
                            <h3 className={`text-xs font-bold ${colorClasses.text} uppercase tracking-wider mb-4`}>
                              {column.title}
                            </h3>
                            <div className="space-y-2">
                              {column.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className={`flex items-start gap-3 p-3 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-2 rounded-lg mt-0.5`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                        {item.title}
                                      </h4>
                                      {item.badge && (
                                        <span className={`px-2 py-0.5 ${item.badgeColor} text-xs rounded-full font-medium`}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-0.5">
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
            <Link href="/pricing" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Docs
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
            <Link href="/get-started" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started →
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