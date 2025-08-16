'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ModernIcons } from './ModernIcons';

const menuData = {
  products: {
    title: 'Products',
    columns: [
      {
        title: 'AI PLATFORMS',
        color: 'blue',
        items: [
          {
            icon: ModernIcons.agenticAI,
            title: 'Agentic AI Platform',
            description: 'Autonomous AI agents for intelligent automation',
            href: '/agentic-ai-platform',
            badge: 'New',
            badgeColor: 'bg-blue-100 text-blue-700'
          },
          {
            icon: ModernIcons.mlPlatform,
            title: 'ML Operations Suite',
            description: 'End-to-end machine learning lifecycle management',
            href: '/products/mlops'
          },
          {
            icon: ModernIcons.dataAnalytics,
            title: 'Analytics Engine',
            description: 'Real-time data processing and insights',
            href: '/products/analytics'
          },
          {
            icon: ModernIcons.aiTransformation,
            title: 'Transformation Hub',
            description: 'Complete AI transformation toolkit',
            href: '/enterprise-ai-transformation'
          }
        ]
      },
      {
        title: 'SOLUTIONS',
        color: 'purple',
        items: [
          {
            icon: ModernIcons.processAutomation,
            title: 'Process Automation',
            description: 'Automate complex business processes',
            href: '/solutions/automation'
          },
          {
            icon: ModernIcons.intelligentSearch,
            title: 'Intelligent Search',
            description: 'AI-powered enterprise search',
            href: '/solutions/search'
          },
          {
            icon: ModernIcons.predictiveAnalytics,
            title: 'Predictive Analytics',
            description: 'Forecast trends and outcomes',
            href: '/solutions/predictive'
          },
          {
            icon: ModernIcons.computerVision,
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
            icon: ModernIcons.cloudDeploy,
            title: 'Cloud Deployment',
            description: 'Deploy on AWS, Azure, or GCP',
            href: '/deployment/cloud'
          },
          {
            icon: ModernIcons.onPremise,
            title: 'On-Premise',
            description: 'Secure on-premise installation',
            href: '/deployment/on-premise'
          },
          {
            icon: ModernIcons.hybrid,
            title: 'Hybrid Solutions',
            description: 'Best of cloud and on-premise',
            href: '/deployment/hybrid'
          },
          {
            icon: ModernIcons.edgeComputing,
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
            icon: ModernIcons.strategy,
            title: 'AI Strategy & Roadmap',
            description: 'Develop your AI transformation roadmap',
            href: '/ai-implementation-strategy'
          },
          {
            icon: ModernIcons.implementation,
            title: 'Implementation Services',
            description: 'End-to-end deployment and integration',
            href: '/services/implementation'
          },
          {
            icon: ModernIcons.optimization,
            title: 'Optimization & Performance',
            description: 'Maximize AI system performance',
            href: '/services/optimization'
          },
          {
            icon: ModernIcons.training,
            title: 'Training & Enablement',
            description: 'Upskill your team on AI technologies',
            href: '/services/training'
          }
        ]
      },
      {
        title: 'INDUSTRIES',
        color: 'teal',
        items: [
          {
            icon: ModernIcons.healthcare,
            title: 'Healthcare & Life Sciences',
            description: 'Medical AI, diagnostics, drug discovery',
            href: '/industries/healthcare'
          },
          {
            icon: ModernIcons.finance,
            title: 'Financial Services',
            description: 'Risk analysis, fraud detection, trading',
            href: '/industries/finance'
          },
          {
            icon: ModernIcons.manufacturing,
            title: 'Manufacturing',
            description: 'Smart factory, quality control, maintenance',
            href: '/industries/manufacturing'
          },
          {
            icon: ModernIcons.retail,
            title: 'Retail & E-commerce',
            description: 'Personalization, inventory, customer analytics',
            href: '/industries/retail'
          }
        ]
      },
      {
        title: 'MORE INDUSTRIES',
        color: 'cyan',
        items: [
          {
            icon: ModernIcons.energy,
            title: 'Energy & Utilities',
            description: 'Grid optimization, demand forecasting',
            href: '/industries/energy'
          },
          {
            icon: ModernIcons.education,
            title: 'Education',
            description: 'Personalized learning, assessment AI',
            href: '/industries/education'
          },
          {
            icon: ModernIcons.technology,
            title: 'Technology',
            description: 'Next-gen tech solutions, SaaS AI',
            href: '/industries/technology'
          },
          {
            icon: ModernIcons.government,
            title: 'Government',
            description: 'Public sector AI, civic tech solutions',
            href: '/industries/government'
          }
        ]
      },
      {
        title: 'SPECIALIZED',
        color: 'orange',
        items: [
          {
            icon: ModernIcons.dataAnalytics,
            title: 'Data Quality Solutions',
            description: 'Ensure data integrity for AI',
            href: '/data-quality-ai-solutions'
          },
          {
            icon: ModernIcons.agenticAI,
            title: 'Custom AI Development',
            description: 'Tailored AI solutions for unique needs',
            href: '/services/custom-ai'
          },
          {
            icon: ModernIcons.mlPlatform,
            title: 'Machine Learning Models',
            description: 'Build and train custom ML models',
            href: '/services/ml-development'
          },
          {
            icon: ModernIcons.cloudDeploy,
            title: 'API & Integration',
            description: 'Connect AI to existing systems',
            href: '/services/api-integration'
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
            icon: ModernIcons.blog,
            title: 'Blog',
            description: 'Latest AI insights and trends',
            href: '/blog'
          },
          {
            icon: ModernIcons.webinar,
            title: 'Webinars',
            description: 'Live sessions with AI experts',
            href: '/webinars'
          },
          {
            icon: ModernIcons.caseStudy,
            title: 'Case Studies',
            description: 'Real-world success stories',
            href: '/case-studies'
          },
          {
            icon: ModernIcons.whitepaper,
            title: 'Research Papers',
            description: 'In-depth technical analysis',
            href: '/resources/research'
          }
        ]
      },
      {
        title: 'TOOLS & UTILITIES',
        color: 'orange',
        items: [
          {
            icon: ModernIcons.calculator,
            title: 'ROI Calculator',
            description: 'Calculate your AI investment return',
            href: '/ai-roi-calculator'
          },
          {
            icon: ModernIcons.assessment,
            title: 'Maturity Assessment',
            description: 'Evaluate AI readiness',
            href: '/tools/assessment'
          },
          {
            icon: ModernIcons.solutionFinder,
            title: 'Solution Finder',
            description: 'Find the right AI solution',
            href: '/tools/solution-finder'
          },
          {
            icon: ModernIcons.benchmark,
            title: 'Benchmark Tool',
            description: 'Compare with industry standards',
            href: '/tools/benchmark'
          }
        ]
      },
      {
        title: 'DOCUMENTATION',
        color: 'purple',
        items: [
          {
            icon: ModernIcons.whitepaper,
            title: 'API Documentation',
            description: 'Technical API guides',
            href: '/docs/api'
          },
          {
            icon: ModernIcons.blog,
            title: 'Integration Guides',
            description: 'Step-by-step integration',
            href: '/docs/integration'
          },
          {
            icon: ModernIcons.caseStudy,
            title: 'Best Practices',
            description: 'AI implementation best practices',
            href: '/docs/best-practices'
          },
          {
            icon: ModernIcons.whitepaper,
            title: 'Security & Compliance',
            description: 'Security guidelines and compliance',
            href: '/docs/security'
          }
        ]
      },
      {
        title: 'COMMUNITY',
        color: 'pink',
        items: [
          {
            icon: ModernIcons.partner,
            title: 'Partner Network',
            description: 'Join our ecosystem',
            href: '/partners'
          },
          {
            icon: ModernIcons.academy,
            title: 'AI Academy',
            description: 'Certification programs',
            href: '/academy'
          },
          {
            icon: ModernIcons.innovation,
            title: 'Innovation Lab',
            description: 'Experimental AI projects',
            href: '/lab'
          },
          {
            icon: ModernIcons.events,
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
            icon: ModernIcons.team,
            title: 'Our Story',
            description: 'How we started',
            href: '/about/story'
          },
          {
            icon: ModernIcons.team,
            title: 'Leadership Team',
            description: 'Meet our executives',
            href: '/about/team'
          },
          {
            icon: ModernIcons.mission,
            title: 'Mission & Values',
            description: 'What drives us forward',
            href: '/about/mission'
          },
          {
            icon: ModernIcons.careers,
            title: 'Careers',
            description: 'Join our growing team',
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
            icon: ModernIcons.press,
            title: 'Press Releases',
            description: 'Latest announcements',
            href: '/press'
          },
          {
            icon: ModernIcons.press,
            title: 'Media Kit',
            description: 'Brand resources',
            href: '/media-kit'
          },
          {
            icon: ModernIcons.blog,
            title: 'In the News',
            description: 'Media coverage',
            href: '/news'
          },
          {
            icon: ModernIcons.awards,
            title: 'Awards & Recognition',
            description: 'Our achievements',
            href: '/awards'
          }
        ]
      },
      {
        title: 'CONNECT',
        color: 'blue',
        items: [
          {
            icon: ModernIcons.partner,
            title: 'Contact Us',
            description: 'Get in touch',
            href: '/contact'
          },
          {
            icon: ModernIcons.team,
            title: 'Support Center',
            description: '24/7 support',
            href: '/support'
          },
          {
            icon: ModernIcons.events,
            title: 'Schedule Demo',
            description: 'See our platform in action',
            href: '/demo'
          },
          {
            icon: ModernIcons.partner,
            title: 'Become a Partner',
            description: 'Partnership opportunities',
            href: '/partnership'
          }
        ]
      }
    ]
  }
};

export default function ComprehensiveMegaMenu() {
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
      green: { 
        bg: 'bg-green-50', 
        text: 'text-green-600', 
        hover: 'hover:bg-green-100',
        border: 'border-green-600'
      },
      indigo: { 
        bg: 'bg-indigo-50', 
        text: 'text-indigo-600', 
        hover: 'hover:bg-indigo-100',
        border: 'border-indigo-600'
      },
      teal: { 
        bg: 'bg-teal-50', 
        text: 'text-teal-600', 
        hover: 'hover:bg-teal-100',
        border: 'border-teal-600'
      },
      cyan: { 
        bg: 'bg-cyan-50', 
        text: 'text-cyan-600', 
        hover: 'hover:bg-cyan-100',
        border: 'border-cyan-600'
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
      },
      pink: { 
        bg: 'bg-pink-50', 
        text: 'text-pink-600', 
        hover: 'hover:bg-pink-100',
        border: 'border-pink-600'
      },
      violet: { 
        bg: 'bg-violet-50', 
        text: 'text-violet-600', 
        hover: 'hover:bg-violet-100',
        border: 'border-violet-600'
      },
      rose: { 
        bg: 'bg-rose-50', 
        text: 'text-rose-600', 
        hover: 'hover:bg-rose-100',
        border: 'border-rose-600'
      },
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
                  {ModernIcons.arrow}
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
                  {ModernIcons.arrow}
                </span>
              </button>
              
              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 w-screen max-w-7xl -ml-20 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-indigo-600">
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-6">
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
                                  className={`flex items-start gap-2 p-2 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-1.5 rounded mt-0.5`}>
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
                  {ModernIcons.arrow}
                </span>
              </button>
              
              {activeMenu === 'resources' && (
                <div className="absolute top-full left-0 w-screen max-w-6xl -ml-40 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-emerald-600">
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-6">
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
                                  className={`flex items-start gap-2 p-2 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-1.5 rounded mt-0.5`}>
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

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('company')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
                Company
                <span className={`transition-transform ${activeMenu === 'company' ? 'rotate-180' : ''}`}>
                  {ModernIcons.arrow}
                </span>
              </button>
              
              {activeMenu === 'company' && (
                <div className="absolute top-full right-0 w-screen max-w-4xl -mr-20 mt-0 bg-white shadow-2xl rounded-b-2xl border-t-4 border-violet-600">
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
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
                                  className={`flex items-start gap-2 p-2 rounded-lg ${colorClasses.hover} transition-all duration-200 group`}
                                >
                                  <div className={`${colorClasses.bg} ${colorClasses.text} p-1.5 rounded mt-0.5`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                                        {item.title}
                                      </h4>
                                      {item.badge && (
                                        <span className={`px-2 py-0.5 ${item.badgeColor} text-xs rounded-full font-medium`}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
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
            <Link href="/docs" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Docs
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/portal/login" className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              </svg>
              Login
            </Link>
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