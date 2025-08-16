'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProfessionalIcons } from './ProfessionalIcons';

const menuData = {
  products: {
    title: 'Products',
    icon: ProfessionalIcons.agenticAI,
    columns: [
      {
        title: 'AI PLATFORMS',
        items: [
          { 
            title: 'Agentic AI Platform', 
            desc: 'Autonomous intelligent agents',
            href: '/agentic-ai-platform',
            icon: ProfessionalIcons.agenticAI
          },
          { 
            title: 'ML Operations Suite', 
            desc: 'End-to-end ML lifecycle',
            href: '/products/mlops',
            icon: ProfessionalIcons.mlPlatform
          },
          { 
            title: 'Analytics Engine', 
            desc: 'Real-time data insights',
            href: '/products/analytics',
            icon: ProfessionalIcons.analytics
          },
          { 
            title: 'Transformation Hub', 
            desc: 'Complete AI toolkit',
            href: '/enterprise-ai-transformation',
            icon: ProfessionalIcons.innovation
          }
        ]
      },
      {
        title: 'SOLUTIONS',
        items: [
          { 
            title: 'Process Automation', 
            desc: 'Intelligent workflows',
            href: '/solutions/automation',
            icon: ProfessionalIcons.automation
          },
          { 
            title: 'Predictive Analytics', 
            desc: 'Future forecasting',
            href: '/solutions/predictive',
            icon: ProfessionalIcons.analytics
          },
          { 
            title: 'Computer Vision', 
            desc: 'Visual AI recognition',
            href: '/solutions/vision',
            icon: ProfessionalIcons.innovation
          },
          { 
            title: 'NLP Solutions', 
            desc: 'Language processing',
            href: '/solutions/nlp',
            icon: ProfessionalIcons.data
          }
        ]
      },
      {
        title: 'DEPLOYMENT',
        items: [
          { 
            title: 'Cloud Deployment', 
            desc: 'AWS, Azure, GCP',
            href: '/deployment/cloud',
            icon: ProfessionalIcons.cloudDeploy
          },
          { 
            title: 'On-Premise', 
            desc: 'Secure installation',
            href: '/deployment/on-premise',
            icon: ProfessionalIcons.security
          },
          { 
            title: 'Hybrid Solutions', 
            desc: 'Flexible deployment',
            href: '/deployment/hybrid',
            icon: ProfessionalIcons.api
          },
          { 
            title: 'Edge Computing', 
            desc: 'Real-time processing',
            href: '/deployment/edge',
            icon: ProfessionalIcons.data
          }
        ]
      }
    ]
  },
  services: {
    title: 'Services',
    icon: ProfessionalIcons.innovation,
    columns: [
      {
        title: 'CONSULTING',
        items: [
          { 
            title: 'AI Strategy', 
            desc: 'Transformation roadmap',
            href: '/ai-implementation-strategy',
            icon: ProfessionalIcons.innovation
          },
          { 
            title: 'Implementation', 
            desc: 'End-to-end deployment',
            href: '/services/implementation',
            icon: ProfessionalIcons.automation
          },
          { 
            title: 'Optimization', 
            desc: 'Performance tuning',
            href: '/services/optimization',
            icon: ProfessionalIcons.analytics
          },
          { 
            title: 'Training', 
            desc: 'Team enablement',
            href: '/services/training',
            icon: ProfessionalIcons.security
          }
        ]
      },
      {
        title: 'INDUSTRIES',
        items: [
          { 
            title: 'Healthcare', 
            desc: 'Medical AI solutions',
            href: '/industries/healthcare',
            icon: ProfessionalIcons.security
          },
          { 
            title: 'Finance', 
            desc: 'Risk & fraud detection',
            href: '/industries/finance',
            icon: ProfessionalIcons.analytics
          },
          { 
            title: 'Manufacturing', 
            desc: 'Smart factory AI',
            href: '/industries/manufacturing',
            icon: ProfessionalIcons.automation
          },
          { 
            title: 'Retail', 
            desc: 'Customer analytics',
            href: '/industries/retail',
            icon: ProfessionalIcons.data
          }
        ]
      }
    ]
  },
  resources: {
    title: 'Resources',
    icon: ProfessionalIcons.data,
    columns: [
      {
        title: 'LEARNING',
        items: [
          { 
            title: 'Blog', 
            desc: 'Latest insights',
            href: '/blog',
            icon: ProfessionalIcons.innovation
          },
          { 
            title: 'Case Studies', 
            desc: 'Success stories',
            href: '/case-studies',
            icon: ProfessionalIcons.analytics
          },
          { 
            title: 'Webinars', 
            desc: 'Expert sessions',
            href: '/webinars',
            icon: ProfessionalIcons.agenticAI
          },
          { 
            title: 'Research', 
            desc: 'Technical papers',
            href: '/resources/research',
            icon: ProfessionalIcons.data
          }
        ]
      },
      {
        title: 'TOOLS',
        items: [
          { 
            title: 'ROI Calculator', 
            desc: 'Investment returns',
            href: '/ai-roi-calculator',
            icon: ProfessionalIcons.analytics
          },
          { 
            title: 'AI Assessment', 
            desc: 'Readiness check',
            href: '/tools/assessment',
            icon: ProfessionalIcons.security
          },
          { 
            title: 'Solution Finder', 
            desc: 'Find right fit',
            href: '/tools/solution-finder',
            icon: ProfessionalIcons.innovation
          },
          { 
            title: 'API Playground', 
            desc: 'Test our APIs',
            href: '/tools/api',
            icon: ProfessionalIcons.api
          }
        ]
      }
    ]
  }
};

export default function ModernMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">DT</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  DataTranquil
                </span>
                <span className="block text-xs text-gray-500 font-medium -mt-1">AI Excellence</span>
              </div>
            </Link>
          </div>

          {/* Main Navigation - Better Typography */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(menuData).map(([key, menu]) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium text-[15px] flex items-center gap-2 transition-all duration-200 rounded-lg hover:bg-gray-50">
                  <span className="opacity-70">{menu.icon}</span>
                  <span className="font-inter tracking-tight">{menu.title}</span>
                  <span className={`transition-transform duration-200 ${activeMenu === key ? 'rotate-180' : ''}`}>
                    {ProfessionalIcons.arrow}
                  </span>
                </button>
                
                {activeMenu === key && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                    <div className="p-8">
                      <div className={`grid grid-cols-${menu.columns.length} gap-8`} style={{minWidth: `${menu.columns.length * 280}px`}}>
                        {menu.columns.map((column, idx) => (
                          <div key={idx}>
                            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">
                              {column.title}
                            </h3>
                            <div className="space-y-1">
                              {column.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group"
                                >
                                  <div className="mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 text-[15px] transition-colors">
                                      {item.title}
                                    </div>
                                    <div className="text-[13px] text-gray-500 mt-0.5">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/company" className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors rounded-lg hover:bg-gray-50">
              Company
            </Link>
            <Link href="/docs" className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium text-[15px] transition-colors rounded-lg hover:bg-gray-50">
              Docs
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/portal/login" className="text-gray-600 hover:text-gray-900 font-medium text-[15px] flex items-center gap-2 transition-colors">
              {ProfessionalIcons.user}
              <span>Login</span>
            </Link>
            <Link href="/contact" className="px-5 py-2.5 text-gray-700 border border-gray-300 rounded-full font-medium text-[15px] hover:bg-gray-50 transition-all">
              Contact Sales
            </Link>
            <Link href="/get-started" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-[15px] hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}