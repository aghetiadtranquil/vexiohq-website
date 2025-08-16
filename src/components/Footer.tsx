'use client';

import Link from 'next/link';
import { useState } from 'react';
// Inline SVG icons
const icons = {
  ArrowRight: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  ),
  Mail: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Phone: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  MapPin: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Linkedin: ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Twitter: ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ),
  Github: ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Youtube: ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  ChevronUp: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  ),
  Sparkles: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Zap: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Shield: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Award: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEmail('');
    setIsSubscribing(false);
    alert('Thank you for subscribing! Check your email for confirmation.');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Newsletter Section with Modern Gradient */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 md:p-12">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="md:flex md:items-center md:justify-between">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <icons.Sparkles className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-bold">Stay Ahead with AI Insights</h3>
                  </div>
                  <p className="text-slate-300 max-w-md">
                    Get weekly cutting-edge AI strategies and exclusive industry reports delivered to your inbox.
                  </p>
                </div>
                
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 md:min-w-[400px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    <icons.ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-white font-bold text-xl">DT</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">DataTranquil</h3>
                  <p className="text-xs text-slate-400">AI Transformation Leaders</p>
                </div>
              </div>
            </Link>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering Fortune 500 companies with next-generation AI solutions. 
              From strategy to implementation, we deliver measurable ROI.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <icons.Shield className="h-4 w-4 text-green-400" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <icons.Award className="h-4 w-4 text-yellow-400" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <icons.Zap className="h-4 w-4 text-blue-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>

            {/* Social Links with Hover Effects */}
            <div className="flex gap-3">
              <a href="https://linkedin.com/company/datatranquil" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 group">
                <icons.Linkedin className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://twitter.com/datatranquil" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all duration-200 group">
                <icons.Twitter className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://github.com/datatranquil" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-gray-600 hover:border-gray-600 transition-all duration-200 group">
                <icons.Github className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://youtube.com/@datatranquil" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-200 group">
                <icons.Youtube className="h-5 w-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Solutions
            </h4>
            <ul className="space-y-3">
              <li><Link href="/agentic-ai-platform" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Agentic AI Platform</Link></li>
              <li><Link href="/enterprise-ai-transformation" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Enterprise AI</Link></li>
              <li><Link href="/data-quality-ai-solutions" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Data Quality AI</Link></li>
              <li><Link href="/ai-consulting-services" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">AI Consulting</Link></li>
              <li><Link href="/ai-implementation-strategy" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Implementation</Link></li>
              <li><Link href="/ai-roi-calculator" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1">
                ROI Calculator <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">New</span>
              </Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Blog</Link></li>
              <li><Link href="/case-studies" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Case Studies</Link></li>
              <li><Link href="/resources" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Whitepapers</Link></li>
              <li><Link href="/insights" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Industry Insights</Link></li>
              <li><Link href="/webinars" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Webinars</Link></li>
              <li><Link href="/documentation" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Documentation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1">
                Careers <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">Hiring</span>
              </Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Contact</Link></li>
              <li><Link href="/partners" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Partners</Link></li>
              <li><Link href="/press" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Press Room</Link></li>
              <li><Link href="/events" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Events</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+14152555501" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <icons.Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">24/7 Support</p>
                <p className="text-sm font-medium">+1 (415) 255-5501</p>
              </div>
            </a>
            
            <a href="mailto:contact@datatranquil.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <icons.Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Email Us</p>
                <p className="text-sm font-medium">contact@datatranquil.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-3 text-slate-400">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                <icons.MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Headquarters</p>
                <p className="text-sm font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Modern Design */}
      <div className="border-t border-slate-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span>© {new Date().getFullYear()} DataTranquil. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <Link href="/privacy-notice" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookie-notice" className="hover:text-white transition-colors">Cookie Notice</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
              <button 
                onClick={() => {
                  // Trigger cookie consent preferences
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('cookiePreferences');
                    localStorage.removeItem('cookieConsentTimestamp');
                    window.location.reload();
                  }
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Cookie Preferences
              </button>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <icons.ChevronUp className="h-5 w-5 text-slate-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}