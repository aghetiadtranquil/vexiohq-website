import { Metadata } from 'next'
import Link from 'next/link'
// Icons object with inline SVGs
const icons = {
  arrowRight: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>,
  checkCircle: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  trendingUp: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  shield: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  users: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
  zap: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  brain: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  barChart3: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  lightbulb: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  award: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
};

export const metadata: Metadata = {
  title: 'AI Consulting Services | Enterprise AI Transformation - Vantage AI',
  description: 'Transform your enterprise with AI consulting services from Vantage AI. 36,000+ hours experience. 312% average ROI. Fortune 500 trusted. Get your free AI assessment today.',
  keywords: 'AI consulting services, AI consulting, artificial intelligence consulting, enterprise AI, AI transformation, AI strategy, machine learning consulting, AI implementation',
  openGraph: {
    title: 'AI Consulting Services - Transform Your Enterprise with AI',
    description: 'Expert AI consulting services with 36,000+ hours experience. Proven 312% ROI. Fortune 500 trusted.',
    url: 'https://datatranquil.com/ai-consulting-services',
    type: 'website',
    images: [{
      url: '/images/ai-consulting-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Vantage AI - Enterprise AI Consulting Services'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting Services - Vantage AI',
    description: 'Transform your enterprise with expert AI consulting. 36,000+ hours experience. Proven ROI.',
    images: ['/images/ai-consulting-hero.jpg']
  },
  alternates: {
    canonical: 'https://datatranquil.com/ai-consulting-services'
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Vantage AI - AI Consulting Services",
  "description": "Enterprise AI consulting services with proven ROI. Transform your business with artificial intelligence.",
  "url": "https://datatranquil.com/ai-consulting-services",
  "telephone": "415-255-5501",
  "email": "support@datatranquil.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "priceRange": "$$$",
  "serviceType": ["AI Consulting", "Machine Learning Consulting", "AI Strategy", "AI Implementation"],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Strategy Consulting",
          "description": "Develop comprehensive AI strategy aligned with business goals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Implementation Services",
          "description": "End-to-end AI solution implementation with proven frameworks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Machine Learning Consulting",
          "description": "Custom ML model development and optimization"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5"
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI consulting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI consulting helps enterprises leverage artificial intelligence to transform operations, improve decision-making, and gain competitive advantage. Our AI consultants provide strategy, implementation, and optimization services."
      }
    },
    {
      "@type": "Question",
      "name": "How much do AI consulting services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI consulting costs vary based on project scope. Typical engagements range from $50,000 for strategy assessments to $500,000+ for full implementations. We provide custom quotes based on your specific needs and expected ROI."
      }
    },
    {
      "@type": "Question",
      "name": "How long does AI implementation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most AI implementations take 3-6 months from strategy to deployment. We use agile methodologies to deliver value incrementally, with initial results often visible within 4-6 weeks."
      }
    }
  ]
}

export default function AIConsultingServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI Consulting Services That Transform Enterprises
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Leverage 36,000+ hours of AI implementation experience. We've helped Fortune 500 companies achieve 312% average ROI through strategic AI transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors">
                  Get Free AI Assessment
                  {icons.arrowRight}
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                  View Case Studies
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>99.7% Project Success Rate</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  <span>312% Average ROI</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span>Fortune 500 Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">36,000+</p>
                <p className="text-slate-600">Hours of Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">150+</p>
                <p className="text-slate-600">AI Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">312%</p>
                <p className="text-slate-600">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                <p className="text-slate-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is AI Consulting */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What is AI Consulting?
              </h2>
              <p className="text-xl text-slate-600">
                AI consulting bridges the gap between cutting-edge artificial intelligence technology and real-world business value. We help enterprises navigate the complex AI landscape to implement solutions that drive measurable results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
                <p className="text-slate-600 mb-4">
                  We analyze your business objectives and identify high-impact AI opportunities that align with your strategic goals.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>AI readiness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Use case prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>ROI modeling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Technical Implementation</h3>
                <p className="text-slate-600 mb-4">
                  Our experts design and build custom AI solutions using proven frameworks and cutting-edge technologies.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Machine learning models</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Data pipeline architecture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Integration with existing systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Optimization</h3>
                <p className="text-slate-600 mb-4">
                  We ensure your AI solutions deliver ongoing value through monitoring, optimization, and scaling support.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Model retraining</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Scaling strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our AI Consulting Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our AI Consulting Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your enterprise needs
              </p>
            </div>

            <div className="space-y-16">
              {/* AI Strategy Consulting */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    AI Strategy Consulting
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Build a comprehensive AI strategy that aligns with your business objectives and delivers measurable value.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <div>
                        <h4 className="font-semibold text-slate-900">AI Opportunity Assessment</h4>
                        <p className="text-slate-600">Identify high-impact use cases across your organization</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <div>
                        <h4 className="font-semibold text-slate-900">Roadmap Development</h4>
                        <p className="text-slate-600">Create phased implementation plan with clear milestones</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <div>
                        <h4 className="font-semibold text-slate-900">ROI Modeling</h4>
                        <p className="text-slate-600">Quantify expected returns and business impact</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/ai-strategy-consulting" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Learn more about AI Strategy
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <p className="text-2xl font-bold text-slate-900 mb-2">Case Study</p>
                      <p className="text-slate-600 mb-4">Fortune 500 Retailer</p>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Revenue Impact</span>
                          <span className="font-semibold">+$47M annually</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Efficiency Gain</span>
                          <span className="font-semibold">+67%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Time to Value</span>
                          <span className="font-semibold">12 weeks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Implementation Services */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    AI Implementation Services
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    End-to-end implementation of AI solutions with our proven methodology and experienced team.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0">{icons.zap}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Custom Model Development</h4>
                        <p className="text-slate-600">Build ML models tailored to your specific needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0">{icons.zap}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Data Pipeline Architecture</h4>
                        <p className="text-slate-600">Design scalable data infrastructure for AI</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0">{icons.zap}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">System Integration</h4>
                        <p className="text-slate-600">Seamlessly integrate AI with existing systems</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/ai-implementation-services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Explore Implementation Services
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <p className="text-2xl font-bold text-slate-900 mb-2">Implementation Stats</p>
                      <p className="text-slate-600 mb-4">Average across all projects</p>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Time to Production</span>
                          <span className="font-semibold">3-6 months</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Model Accuracy</span>
                          <span className="font-semibold">94.7%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Cost Reduction</span>
                          <span className="font-semibold">-43%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Machine Learning Consulting */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Machine Learning Consulting
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Expert guidance on machine learning model development, optimization, and deployment at scale.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Zap className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Model Selection & Design</h4>
                        <p className="text-slate-600">Choose the right algorithms for your use case</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Training & Optimization</h4>
                        <p className="text-slate-600">Maximize model performance and efficiency</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">MLOps & Deployment</h4>
                        <p className="text-slate-600">Production-ready deployment with monitoring</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/machine-learning-consulting" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                    Discover ML Consulting
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <p className="text-2xl font-bold text-slate-900 mb-2">ML Expertise</p>
                      <p className="text-slate-600 mb-4">Our capabilities</p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-slate-50 rounded px-3 py-2">Deep Learning</div>
                        <div className="bg-slate-50 rounded px-3 py-2">NLP</div>
                        <div className="bg-slate-50 rounded px-3 py-2">Computer Vision</div>
                        <div className="bg-slate-50 rounded px-3 py-2">Reinforcement Learning</div>
                        <div className="bg-slate-50 rounded px-3 py-2">Time Series</div>
                        <div className="bg-slate-50 rounded px-3 py-2">Recommender Systems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Vantage AI */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Vantage AI for AI Consulting?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We combine deep technical expertise with business acumen to deliver AI solutions that drive real results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-slate-600">
                  150+ successful AI implementations with 99.7% project success rate and 312% average ROI
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Experience</h3>
                <p className="text-slate-600">
                  36,000+ hours working with Fortune 500 companies across industries
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapid Time to Value</h3>
                <p className="text-slate-600">
                  See measurable results within 4-6 weeks using our agile implementation methodology
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cutting-Edge Expertise</h3>
                <p className="text-slate-600">
                  Masters of the latest AI technologies including GPT-4, Claude, and custom ML models
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-slate-600">
                  Bank-grade security and compliance with GDPR, CCPA, SOC2, and industry standards
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">ROI Focused</h3>
                <p className="text-slate-600">
                  Every recommendation backed by data and focused on delivering measurable business value
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Industries We Transform with AI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Deep domain expertise across key sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/industries/financial-services" className="group bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Financial Services
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Risk assessment, fraud detection, algorithmic trading, customer analytics
                </p>
                <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </Link>

              <Link href="/industries/healthcare" className="group bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Healthcare
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Clinical decision support, drug discovery, patient outcomes, operational efficiency
                </p>
                <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </Link>

              <Link href="/industries/retail" className="group bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Retail & E-commerce
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Demand forecasting, personalization, inventory optimization, pricing strategy
                </p>
                <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </Link>

              <Link href="/industries/manufacturing" className="group bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Manufacturing
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Predictive maintenance, quality control, supply chain optimization, process automation
                </p>
                <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                  Learn more
                  <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* AI Consulting Process */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our AI Consulting Process
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                A proven methodology that delivers results in weeks, not years
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-slate-300">
                  Understand your business, challenges, and AI readiness
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-slate-300">
                  Develop AI roadmap with prioritized use cases and ROI projections
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-slate-300">
                  Build and deploy AI solutions with agile methodology
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimization</h3>
                <p className="text-slate-300">
                  Monitor, improve, and scale for maximum impact
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/our-process" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg">
                Learn more about our process
                {icons.arrowRight}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about AI consulting services
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  What is AI consulting?
                </h3>
                <p className="text-slate-600">
                  AI consulting helps enterprises leverage artificial intelligence to transform operations, improve decision-making, and gain competitive advantage. Our AI consultants provide strategy, implementation, and optimization services to ensure you get maximum value from AI investments.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  How much do AI consulting services cost?
                </h3>
                <p className="text-slate-600">
                  AI consulting costs vary based on project scope and complexity. Typical engagements range from $50,000 for strategy assessments to $500,000+ for full implementations. We provide custom quotes based on your specific needs and expected ROI. Most clients see positive ROI within 6-12 months.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  How long does AI implementation take?
                </h3>
                <p className="text-slate-600">
                  Most AI implementations take 3-6 months from strategy to deployment. We use agile methodologies to deliver value incrementally, with initial results often visible within 4-6 weeks. The exact timeline depends on project complexity and your organization's readiness.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  What makes Vantage AI different from other AI consultants?
                </h3>
                <p className="text-slate-600">
                  We combine 36,000+ hours of enterprise experience with cutting-edge AI expertise. Our 99.7% project success rate and 312% average ROI speak to our results-focused approach. We don't just recommend solutions—we implement them and ensure they deliver measurable business value.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Do you work with companies of all sizes?
                </h3>
                <p className="text-slate-600">
                  While we specialize in enterprise AI transformation for Fortune 500 companies, we also work with ambitious mid-market companies ready to leverage AI for competitive advantage. The key requirement is commitment to AI-driven transformation and sufficient data/resources for implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free AI readiness assessment and discover how AI can drive growth for your enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-colors">
                Get Free Assessment
                {icons.arrowRight}
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                View Success Stories
              </Link>
            </div>
            <p className="mt-8 text-sm text-blue-100">
              No commitment required. We'll provide actionable insights in our first meeting.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}