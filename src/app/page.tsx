import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaMarkup, organizationSchema, serviceSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "AI Consulting San Francisco | VexioHQ - Strategic AI Advisory",
  description: "Leading AI consulting firm in San Francisco. Transform your business with strategic AI implementation, machine learning solutions, and data analytics. Trusted by Fortune 500 companies.",
  keywords: "AI consulting San Francisco, strategic AI advisory, AI transformation consulting, machine learning consultants bay area, enterprise AI implementation, data analytics consulting, AI strategy consulting",
  openGraph: {
    title: "VexioHQ - #1 AI Consulting Firm in San Francisco",
    description: "Transform your business with San Francisco's leading AI consulting firm. Strategic AI advisory, implementation, and transformation services.",
    images: [
      {
        url: "https://vexiohq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VexioHQ - AI Consulting San Francisco",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VexioHQ - Strategic AI Advisory San Francisco",
    description: "Leading AI consulting and transformation services in the Bay Area",
    images: ["https://vexiohq.com/twitter-image.jpg"],
  },
};

export default function HomePage() {
  const mainServiceSchema = serviceSchema({
    name: "AI Consulting Services",
    description: "Strategic AI advisory and implementation services for enterprise transformation",
    serviceType: "Technology Consulting",
    areaServed: "San Francisco Bay Area"
  });

  return (
    <div className="min-h-screen">
      <SchemaMarkup data={organizationSchema} />
      <SchemaMarkup data={mainServiceSchema} />
      {/* Simple Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Trusted by Fortune 500 Companies
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Next-Gen AI Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              AI-powered software and consulting to help businesses work smarter,
              sell better, and grow faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your AI Journey →
              </Link>
              <Link 
                href="/case-studies"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">70+</div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div className="text-blue-200">AI Products</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Scrolling Logos Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 mb-8 text-sm uppercase tracking-wider">Trusted by 20,000+ customers worldwide</p>
          
          {/* Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 pr-16">
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Sunrun</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Wind River</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Cree</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Boar&apos;s Head</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">IAEA</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">SIDBI</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Oracle</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">SAP</div>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="flex items-center space-x-16 pr-16">
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Sunrun</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Wind River</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Cree</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Boar&apos;s Head</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">IAEA</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">SIDBI</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">Oracle</div>
                <div className="text-slate-500 text-2xl font-bold whitespace-nowrap">SAP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI consulting services that deliver measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  <svg className="w-7 h-7 text-white group-hover:text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white">Agentic AI Systems</h3>
                <p className="text-gray-600 group-hover:text-blue-100">Build autonomous AI agents that revolutionize your operations with intelligent decision-making.</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  <svg className="w-7 h-7 text-white group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white">Data Analytics</h3>
                <p className="text-gray-600 group-hover:text-green-100">Transform raw data into strategic insights with advanced analytics and ML models.</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  <svg className="w-7 h-7 text-white group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white">AI Transformation</h3>
                <p className="text-gray-600 group-hover:text-purple-100">End-to-end AI implementation and change management for enterprise-wide adoption.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help transform your business with proven AI solutions
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}