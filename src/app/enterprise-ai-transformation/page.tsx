import { Metadata } from 'next'
import Link from 'next/link'
// Icons object with inline SVGs
const icons = {
  arrowRight: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>,
  checkCircle: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  trendingUp: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  building2: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  cpu: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
  users: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
  shield: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  barChart3: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  lightbulb: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  clock: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  target: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.97-.01-2.2-1.9-2.96-3.65-3.22z" /></svg>,
  zap: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  brain: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
};

export const metadata: Metadata = {
  title: 'Enterprise AI Transformation Services | Fortune 500 AI Strategy - Vantage AI',
  description: 'Transform your enterprise with AI. Proven methodology for Fortune 500 companies. 312% average ROI. From strategy to implementation in 12 weeks. Get started today.',
  keywords: 'enterprise AI transformation, enterprise AI, AI transformation, digital transformation, Fortune 500 AI, enterprise artificial intelligence, AI strategy enterprise, corporate AI implementation',
  openGraph: {
    title: 'Enterprise AI Transformation - Fortune 500 Proven Methodology',
    description: 'Transform your enterprise with AI. 312% average ROI. Trusted by Fortune 500 companies.',
    url: 'https://datatranquil.com/enterprise-ai-transformation',
    type: 'website',
    images: [{
      url: '/images/enterprise-ai-transformation.jpg',
      width: 1200,
      height: 630,
      alt: 'Enterprise AI Transformation by Vantage AI'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Transformation - Vantage AI',
    description: 'Transform your Fortune 500 company with AI. Proven methodology. 312% ROI.',
    images: ['/images/enterprise-ai-transformation.jpg']
  },
  alternates: {
    canonical: 'https://datatranquil.com/enterprise-ai-transformation'
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise AI Transformation",
  "provider": {
    "@type": "Organization",
    "name": "Vantage AI",
    "url": "https://datatranquil.com"
  },
  "description": "Comprehensive enterprise AI transformation services for Fortune 500 companies. From strategy to implementation.",
  "serviceType": "Enterprise AI Transformation",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise AI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Readiness Assessment",
          "description": "Comprehensive evaluation of enterprise AI readiness"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Strategy Development",
          "description": "Custom AI strategy aligned with business objectives"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Implementation",
          "description": "End-to-end AI solution implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Change Management",
          "description": "Organizational transformation and adoption"
        }
      }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Transform Your Enterprise with AI",
  "description": "Step-by-step guide to enterprise AI transformation",
  "step": [
    {
      "@type": "HowToStep",
      "name": "AI Readiness Assessment",
      "text": "Evaluate current state, data infrastructure, and organizational readiness for AI"
    },
    {
      "@type": "HowToStep",
      "name": "Strategy Development",
      "text": "Create comprehensive AI strategy aligned with business objectives"
    },
    {
      "@type": "HowToStep",
      "name": "Pilot Implementation",
      "text": "Launch pilot projects to prove value and refine approach"
    },
    {
      "@type": "HowToStep",
      "name": "Scale & Optimize",
      "text": "Scale successful pilots across the enterprise and continuously optimize"
    }
  ],
  "totalTime": "PT2160H",
  "supply": ["AI Strategy Team", "Data Infrastructure", "Executive Sponsorship"],
  "tool": ["AI Platforms", "Data Analytics Tools", "Project Management Software"]
}

export default function EnterpriseAITransformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-blue-400 mb-4">
                {icons.building2}
                <span className="text-sm font-semibold uppercase tracking-wider">Enterprise Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Enterprise AI Transformation That Delivers Results
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Join Fortune 500 leaders who've achieved 312% average ROI through strategic AI transformation. We turn AI potential into enterprise value in just 12 weeks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/ai-readiness-assessment" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg text-white transition-colors">
                  Start Your Transformation
                  {icons.arrowRight}
                </Link>
                <Link href="/enterprise-ai-guide" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold text-lg text-white transition-colors border border-white/20">
                  Download Enterprise AI Guide
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">312%</p>
                  <p className="text-sm text-slate-400">Average ROI</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">12 Weeks</p>
                  <p className="text-sm text-slate-400">To Value</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">99.7%</p>
                  <p className="text-sm text-slate-400">Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">150+</p>
                  <p className="text-sm text-slate-400">Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-600 mb-8">Trusted by Fortune 500 Leaders</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {/* Placeholder for client logos */}
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
            </div>
          </div>
        </section>

        {/* What is Enterprise AI Transformation */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What is Enterprise AI Transformation?
              </h2>
              <p className="text-xl text-slate-600">
                Enterprise AI transformation is the systematic integration of artificial intelligence across your organization to drive innovation, efficiency, and competitive advantage at scale.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Beyond Digital Transformation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Strategic AI Integration</h4>
                      <p className="text-slate-600">Embed AI into core business processes, not just IT systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Cultural Transformation</h4>
                      <p className="text-slate-600">Build AI-first mindset across all levels of the organization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Measurable Outcomes</h4>
                      <p className="text-slate-600">Focus on ROI-driven initiatives with clear success metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Continuous Innovation</h4>
                      <p className="text-slate-600">Create sustainable AI capabilities that evolve with technology</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Enterprise AI Maturity Model</h4>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                      <h5 className="ml-3 font-semibold">AI Aware</h5>
                    </div>
                    <p className="ml-11 text-sm text-slate-600">Exploring AI possibilities</p>
                  </div>
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">2</div>
                      <h5 className="ml-3 font-semibold">AI Active</h5>
                    </div>
                    <p className="ml-11 text-sm text-slate-600">Running pilot projects</p>
                  </div>
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-sm font-semibold text-blue-700">3</div>
                      <h5 className="ml-3 font-semibold">AI Operational</h5>
                    </div>
                    <p className="ml-11 text-sm text-slate-600">AI in production systems</p>
                  </div>
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-semibold text-white">4</div>
                      <h5 className="ml-3 font-semibold">AI Transformed</h5>
                    </div>
                    <p className="ml-11 text-sm text-slate-600">AI-first organization</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Most enterprises are at Level 1-2</p>
                  <p className="text-sm text-blue-700 mt-1">We help you reach Level 4 in 12-18 months</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Enterprise AI Opportunity */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The $15.7 Trillion AI Opportunity
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                According to PwC, AI will contribute $15.7 trillion to the global economy by 2030. 
                Early adopters will capture disproportionate value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">45%</h3>
                <p className="text-lg font-semibold text-slate-900 mb-2">Profit Gains</p>
                <p className="text-slate-600">
                  Enterprises using AI report average profit increases of 45% in affected business areas
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">70%</h3>
                <p className="text-lg font-semibold text-slate-900 mb-2">Time Reduction</p>
                <p className="text-slate-600">
                  AI-powered automation reduces process time by 70% on average across operations
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">3.5x</h3>
                <p className="text-lg font-semibold text-slate-900 mb-2">Revenue Growth</p>
                <p className="text-slate-600">
                  AI leaders grow revenues 3.5x faster than AI laggards in the same industry
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Cost of Waiting
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  Every month of delay in AI adoption costs enterprises an average of $2.3M in lost opportunities 
                  and competitive disadvantage. Early movers are already capturing market share.
                </p>
                <Link href="/ai-readiness-assessment" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors">
                  Assess Your AI Readiness
                  {icons.arrowRight}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Enterprise AI Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Comprehensive Enterprise AI Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                End-to-end transformation services designed for enterprise scale and complexity
              </p>
            </div>

            <div className="space-y-24">
              {/* AI Readiness Assessment */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">AI Readiness Assessment</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Comprehensive evaluation of your organization's AI maturity, identifying opportunities 
                    and gaps across technology, data, processes, and culture.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Current state analysis across 50+ dimensions</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">AI opportunity mapping with ROI projections</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Customized transformation roadmap</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Executive readout and recommendations</span>
                    </div>
                  </div>
                  <Link href="/ai-readiness-assessment" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Learn about our assessment process
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h4 className="font-semibold text-slate-900 mb-4">Assessment Deliverables</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-slate-900">AI Maturity Score</p>
                        <p className="text-sm text-slate-600">Benchmark against industry leaders</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-slate-900">Opportunity Heat Map</p>
                        <p className="text-sm text-slate-600">Prioritized use cases by impact</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-slate-900">Investment Analysis</p>
                        <p className="text-sm text-slate-600">Required resources and expected ROI</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-slate-900">90-Day Quick Wins</p>
                        <p className="text-sm text-slate-600">Immediate actions for early value</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">Typical Duration: 2-4 weeks</p>
                    <p className="text-sm text-blue-700">Investment: $50,000 - $150,000</p>
                  </div>
                </div>
              </div>

              {/* AI Strategy Development */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Strategy Components</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h5 className="font-medium text-purple-900 mb-1">Vision & Objectives</h5>
                        <p className="text-sm text-purple-700">AI vision aligned with business strategy</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h5 className="font-medium text-purple-900 mb-1">Use Case Portfolio</h5>
                        <p className="text-sm text-purple-700">Prioritized AI initiatives with business cases</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h5 className="font-medium text-purple-900 mb-1">Operating Model</h5>
                        <p className="text-sm text-purple-700">Governance, processes, and team structure</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h5 className="font-medium text-purple-900 mb-1">Technology Blueprint</h5>
                        <p className="text-sm text-purple-700">Platform architecture and tool selection</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">AI Strategy Development</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Create a comprehensive AI strategy that aligns with your business objectives and 
                    provides a clear path to value realization.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Executive workshops and stakeholder alignment</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Detailed use case development and prioritization</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Technology and data architecture design</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Change management and adoption planning</span>
                    </div>
                  </div>
                  <Link href="/ai-strategy-consulting" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Explore strategy development
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </div>

              {/* AI Implementation & Integration */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">AI Implementation & Integration</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Turn strategy into reality with our proven implementation methodology that ensures 
                    successful deployment and adoption of AI solutions.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Agile development with 2-week sprints</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Custom model development and training</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Enterprise system integration</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Production deployment and monitoring</span>
                    </div>
                  </div>
                  <Link href="/ai-implementation-services" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                    View implementation approach
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                  <h4 className="font-semibold text-slate-900 mb-6">Implementation Phases</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">1</div>
                      <div>
                        <p className="font-medium text-slate-900">Foundation (Weeks 1-4)</p>
                        <p className="text-sm text-slate-600">Data preparation and infrastructure setup</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">2</div>
                      <div>
                        <p className="font-medium text-slate-900">Development (Weeks 5-8)</p>
                        <p className="text-sm text-slate-600">Model building and system integration</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">3</div>
                      <div>
                        <p className="font-medium text-slate-900">Deployment (Weeks 9-10)</p>
                        <p className="text-sm text-slate-600">Production rollout and testing</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">4</div>
                      <div>
                        <p className="font-medium text-slate-900">Optimization (Weeks 11-12)</p>
                        <p className="text-sm text-slate-600">Performance tuning and scaling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Change Management & Adoption */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h4 className="font-semibold text-slate-900 mb-6">Adoption Success Factors</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Executive Sponsorship</span>
                          <span className="text-sm text-slate-600">Critical</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">User Training</span>
                          <span className="text-sm text-slate-600">Essential</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Process Integration</span>
                          <span className="text-sm text-slate-600">Important</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">Success Metrics</span>
                          <span className="text-sm text-slate-600">Vital</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Change Management & Adoption</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Ensure successful AI adoption with comprehensive change management that addresses 
                    people, processes, and culture.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Stakeholder engagement and communication</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Role-based training programs</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Process redesign and optimization</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-700">Success measurement and reinforcement</span>
                    </div>
                  </div>
                  <Link href="/change-management" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
                    Learn about our approach
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Proven Transformation Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                12-week journey from strategy to value realization
              </p>
            </div>

            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-300"></div>
              
              <div className="space-y-12">
                {/* Week 1-3 */}
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks 1-3: Discovery & Strategy</h3>
                    <p className="text-slate-600">Assess current state, identify opportunities, and develop comprehensive AI strategy</p>
                  </div>
                  <div className="md:col-start-2">
                    <div className="bg-blue-50 rounded-lg p-6 ml-8">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>Stakeholder interviews</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>Data assessment</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>Use case prioritization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>

                {/* Week 4-6 */}
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:col-start-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks 4-6: Foundation Building</h3>
                    <p className="text-slate-600">Set up infrastructure, prepare data, and begin pilot development</p>
                  </div>
                  <div className="md:col-start-1 md:row-start-1">
                    <div className="bg-purple-50 rounded-lg p-6 mr-8">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-purple-600 mr-2">{icons.checkCircle}</div>
                          <span>Infrastructure setup</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-purple-600 mr-2">{icons.checkCircle}</div>
                          <span>Data pipeline creation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-purple-600 mr-2">{icons.checkCircle}</div>
                          <span>Team onboarding</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>

                {/* Week 7-9 */}
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks 7-9: Implementation Sprint</h3>
                    <p className="text-slate-600">Rapid development and deployment of pilot AI solutions</p>
                  </div>
                  <div className="md:col-start-2">
                    <div className="bg-green-50 rounded-lg p-6 ml-8">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-green-600 mr-2">{icons.checkCircle}</div>
                          <span>Model development</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-green-600 mr-2">{icons.checkCircle}</div>
                          <span>System integration</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-green-600 mr-2">{icons.checkCircle}</div>
                          <span>User testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                </div>

                {/* Week 10-12 */}
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:col-start-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks 10-12: Scale & Optimize</h3>
                    <p className="text-slate-600">Production deployment, optimization, and planning for scale</p>
                  </div>
                  <div className="md:col-start-1 md:row-start-1">
                    <div className="bg-orange-50 rounded-lg p-6 mr-8">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-orange-600 mr-2">{icons.checkCircle}</div>
                          <span>Production rollout</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-orange-600 mr-2">{icons.checkCircle}</div>
                          <span>Performance optimization</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-4 w-4 text-orange-600 mr-2">{icons.checkCircle}</div>
                          <span>Scale planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/transformation-process" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg text-white transition-colors">
                View Detailed Process
                {icons.arrowRight}
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Enterprise Transformation Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real results from Fortune 500 companies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">Financial Services</p>
                  <p className="text-2xl font-bold">Global Banking Leader</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    AI-Powered Risk Management
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Risk Detection</span>
                      <span className="font-semibold text-green-600">+94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">False Positives</span>
                      <span className="font-semibold text-green-600">-67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Annual Savings</span>
                      <span className="font-semibold">$127M</span>
                    </div>
                  </div>
                  <Link href="/case-studies/global-bank" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center">
                    Read full case study
                    <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">Retail</p>
                  <p className="text-2xl font-bold">Fortune 500 Retailer</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Intelligent Supply Chain
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Forecast Accuracy</span>
                      <span className="font-semibold text-green-600">+89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Inventory Costs</span>
                      <span className="font-semibold text-green-600">-43%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Revenue Impact</span>
                      <span className="font-semibold">+$89M</span>
                    </div>
                  </div>
                  <Link href="/case-studies/retail-transformation" className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center">
                    Read full case study
                    <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">Healthcare</p>
                  <p className="text-2xl font-bold">Major Health System</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Clinical Decision Support
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Diagnostic Accuracy</span>
                      <span className="font-semibold text-green-600">+37%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Patient Outcomes</span>
                      <span className="font-semibold text-green-600">+28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cost per Patient</span>
                      <span className="font-semibold text-green-600">-31%</span>
                    </div>
                  </div>
                  <Link href="/case-studies/healthcare-ai" className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center">
                    Read full case study
                    <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                View all success stories
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Enterprises Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Fortune 500 Companies Choose Vantage AI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Enterprise-grade capabilities with startup agility
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Enterprise DNA</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Bank-Grade Security</h4>
                      <p className="text-slate-600">SOC2 Type II certified, GDPR compliant, enterprise security protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Fortune 500 Experience</h4>
                      <p className="text-slate-600">36,000+ hours working with complex enterprise environments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Executive Engagement</h4>
                      <p className="text-slate-600">Direct access to senior leadership throughout engagement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Innovation Edge</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">12-Week Transformation</h4>
                      <p className="text-slate-600">Strategy to production in weeks, not years</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Cutting-Edge AI</h4>
                      <p className="text-slate-600">Latest models including GPT-4, Claude, custom ML</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">ROI Guarantee</h4>
                      <p className="text-slate-600">Performance-based engagements with success metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Lead Your Industry with AI?
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Join the enterprises achieving extraordinary results through AI transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-colors">
                  Schedule Executive Briefing
                  {icons.arrowRight}
                </Link>
                <Link href="/ai-readiness-assessment" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                  Take AI Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}