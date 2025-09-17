'use client';

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import Link from 'next/link';

// Lazy load icon components to reduce initial bundle
const IconComponent = memo(({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    arrow: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    ),
    blog: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    automation: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };
  
  return icons[type] || null;
});

IconComponent.displayName = 'IconComponent';

// Memoize menu data to prevent recreating on each render
const menuData = {
  products: {
    title: 'Products',
    columns: [
      {
        title: 'AI PLATFORMS',
        items: [
          { title: 'Agentic AI Platform', desc: 'Autonomous AI agents', href: '/agentic-ai-platform' },
          { title: 'ML Operations Suite', desc: 'Machine learning lifecycle', href: '/products/mlops' },
          { title: 'Analytics Engine', desc: 'Real-time data insights', href: '/products/analytics' },
          { title: 'Transformation Hub', desc: 'AI transformation toolkit', href: '/enterprise-ai-transformation' }
        ]
      },
      {
        title: 'SOLUTIONS',
        items: [
          { title: 'Process Automation', desc: 'Automate workflows', href: '/solutions/automation' },
          { title: 'Data Analytics', desc: 'AI-powered insights', href: '/solutions/data-analytics' },
          { title: 'AI Strategy', desc: 'Strategic roadmap', href: '/solutions/ai-strategy' }
        ]
      }
    ]
  },
  services: {
    title: 'Services',
    columns: [
      {
        title: 'CONSULTING',
        items: [
          { title: 'AI Strategy', desc: 'Transformation roadmap', href: '/ai-implementation-strategy' },
          { title: 'Implementation', desc: 'End-to-end deployment', href: '/services/implementation' },
          { title: 'Optimization', desc: 'Performance tuning', href: '/services/optimization' }
        ]
      }
    ]
  },
  resources: {
    title: 'Resources',
    columns: [
      {
        title: 'LEARNING',
        items: [
          { title: 'Blog', desc: 'Latest insights', href: '/blog' },
          { title: 'Case Studies', desc: 'Success stories', href: '/case-studies' },
          { title: 'Insights', desc: 'Industry reports', href: '/insights' }
        ]
      }
    ]
  },
  company: {
    title: 'Company',
    columns: [
      {
        title: 'ABOUT',
        items: [
          { title: 'About Us', desc: 'Our story', href: '/about' },
          { title: 'Contact', desc: 'Get in touch', href: '/contact' }
        ]
      }
    ]
  }
};

// Memoized menu item component
const MenuItem = memo(({ item }: { item: { title: string; desc: string; href: string } }) => (
  <Link
    href={item.href}
    className="group flex gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-150"
    prefetch={false}
  >
    <div className="flex-1">
      <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">
        {item.title}
      </div>
      <div className="text-xs text-gray-500 mt-0.5">
        {item.desc}
      </div>
    </div>
  </Link>
));

MenuItem.displayName = 'MenuItem';

// Memoized dropdown panel
const DropdownPanel = memo(({ 
  isOpen, 
  menuKey, 
  data 
}: { 
  isOpen: boolean; 
  menuKey: string; 
  data: typeof menuData[keyof typeof menuData] 
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 w-full mt-1 opacity-100 translate-y-0 transition-all duration-200">
      <div className="relative bg-white rounded-xl shadow-xl border border-gray-100">
        <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
          {data.columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {column.title}
              </h3>
              <div className="space-y-1">
                {column.items.map((item, itemIdx) => (
                  <MenuItem key={itemIdx} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

DropdownPanel.displayName = 'DropdownPanel';

export default function OptimizedMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Debounced hover handlers
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseEnter = useCallback((menuKey: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(menuKey);
    }, 100); // Reduced delay for faster response
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200); // Slightly faster close
  }, []);

  const toggleMenu = useCallback((menuKey: string) => {
    setActiveMenu(prev => prev === menuKey ? null : menuKey);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900" prefetch={false}>
              DataTranquil
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(menuData).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleMenu(key)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    activeMenu === key
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                >
                  {menu.title}
                  <IconComponent type="arrow" />
                </button>
                
                {isClient && (
                  <DropdownPanel 
                    isOpen={activeMenu === key} 
                    menuKey={key} 
                    data={menu}
                  />
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/get-started"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-150 transform hover:scale-105"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {Object.entries(menuData).map(([key, menu]) => (
              <div key={key}>
                <button
                  onClick={() => toggleMenu(key)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {menu.title}
                  <IconComponent type="arrow" />
                </button>
                
                {activeMenu === key && (
                  <div className="mt-2 pl-4 space-y-2">
                    {menu.columns.map((column, idx) => (
                      <div key={idx}>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          {column.title}
                        </div>
                        {column.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="/get-started"
              className="block w-full px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}