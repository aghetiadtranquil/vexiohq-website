import { Metadata } from 'next'
import Link from 'next/link'
// Icons object with inline SVGs
const icons = {
  arrowRight: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>,
  checkCircle: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  trendingUp: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  building2: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  brain: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  target: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>,
  layers: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
  database: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
  users: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
  gitBranch: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  cog: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  shield: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  lineChart: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  award: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  clock: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  rocket: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
};

export const metadata: Metadata = {
  title: 'AI Implementation Strategy for Enterprises | Proven Framework - Vantage AI',
  description: 'Master AI implementation with our enterprise-proven strategy framework. From planning to deployment in 90 days. 96% success rate. Free strategy guide included.',
  keywords: 'AI implementation strategy, AI implementation, artificial intelligence implementation, AI deployment strategy, enterprise AI implementation, AI strategy framework, AI implementation plan, AI implementation roadmap',
  openGraph: {
    title: 'AI Implementation Strategy - Enterprise Framework & Best Practices',
    description: 'Proven AI implementation strategy used by Fortune 500 companies. 96% success rate. Free guide.',
    url: 'https://datatranquil.com/ai-implementation-strategy',
    type: 'website',
    images: [{
      url: '/images/ai-implementation-strategy.jpg',
      width: 1200,
      height: 630,
      alt: 'AI Implementation Strategy Framework by Vantage AI'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Implementation Strategy - Vantage AI',
    description: 'Enterprise-proven AI implementation framework. 90-day deployment. 96% success rate.',
    images: ['/images/ai-implementation-strategy.jpg']
  },
  alternates: {
    canonical: 'https://datatranquil.com/ai-implementation-strategy'
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Implementation Strategy",
  "provider": {
    "@type": "Organization",
    "name": "Vantage AI",
    "url": "https://datatranquil.com"
  },
  "description": "Comprehensive AI implementation strategy services for enterprises. From planning to successful deployment.",
  "serviceType": "AI Implementation Strategy Consulting",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Implementation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Strategy Development",
          "description": "Comprehensive AI implementation strategy aligned with business goals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementation Planning",
          "description": "Detailed roadmap and project planning for AI initiatives"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Risk Assessment",
          "description": "Identify and mitigate AI implementation risks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Change Management",
          "description": "Organizational readiness and adoption strategies"
        }
      }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create an AI Implementation Strategy",
  "description": "Step-by-step guide to developing a successful AI implementation strategy",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Define Business Objectives",
      "text": "Identify clear business goals and KPIs for AI implementation"
    },
    {
      "@type": "HowToStep",
      "name": "Assess Readiness",
      "text": "Evaluate organizational readiness, data infrastructure, and technical capabilities"
    },
    {
      "@type": "HowToStep",
      "name": "Prioritize Use Cases",
      "text": "Select high-impact, feasible AI use cases for initial implementation"
    },
    {
      "@type": "HowToStep",
      "name": "Develop Roadmap",
      "text": "Create phased implementation plan with milestones and success metrics"
    },
    {
      "@type": "HowToStep",
      "name": "Execute and Iterate",
      "text": "Implement pilots, measure results, and scale successful initiatives"
    }
  ],
  "totalTime": "PT2160H",
  "supply": ["Leadership Commitment", "Cross-functional Team", "Data Infrastructure"],
  "tool": ["AI Platform", "Project Management Tools", "Analytics Software"]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI implementation strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI implementation strategy is a comprehensive plan that outlines how an organization will integrate artificial intelligence into its operations. It includes technology selection, use case prioritization, resource allocation, risk management, and change management to ensure successful AI adoption and value realization."
      }
    },
    {
      "@type": "Question",
      "name": "How long does AI implementation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI implementation timelines vary based on complexity and scope. Simple pilot projects can be deployed in 6-12 weeks, while enterprise-wide implementations typically take 6-18 months. Our proven framework enables initial value delivery within 90 days through phased deployment."
      }
    },
    {
      "@type": "Question",
      "name": "What are the key components of an AI implementation strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key components include: business case development, technology architecture, data strategy, governance framework, team structure, implementation roadmap, risk mitigation plan, change management approach, success metrics, and scaling strategy."
      }
    },
    {
      "@type": "Question",
      "name": "What are common AI implementation challenges?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common challenges include: lack of quality data, unclear ROI expectations, resistance to change, skills gaps, integration complexity, scalability issues, and governance concerns. Our strategy framework addresses each of these systematically."
      }
    },
    {
      "@type": "Question",
      "name": "How much does AI implementation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI implementation costs vary widely based on scope and complexity. Pilot projects may start at $50,000-$200,000, while enterprise implementations can range from $500,000 to several million. Our strategy includes detailed cost-benefit analysis and phased investment planning."
      }
    }
  ]
}

export default function AIImplementationStrategyPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                {icons.brain}
                <span className="text-sm font-semibold uppercase tracking-wider">AI Strategy & Implementation</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Implementation Strategy That Delivers Results
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Transform your AI vision into reality with our enterprise-proven implementation framework. 96% success rate. From strategy to deployment in 90 days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/ai-strategy-consultation" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg text-white transition-colors">
                  Get Implementation Strategy
                  {icons.arrowRight}
                </Link>
                <Link href="/resources/ai-implementation-guide" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold text-lg text-white transition-colors border border-white/20">
                  Download Strategy Guide
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">96%</p>
                  <p className="text-sm text-slate-400">Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">90 Days</p>
                  <p className="text-sm text-slate-400">To Deployment</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">3.2x</p>
                  <p className="text-sm text-slate-400">Faster ROI</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-sm text-slate-400">Implementations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-600 mb-8">Trusted by Industry Leaders</p>
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

        {/* What is AI Implementation Strategy */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What is AI Implementation Strategy?
              </h2>
              <p className="text-xl text-slate-600">
                An AI implementation strategy is your roadmap from AI concept to operational reality—ensuring successful deployment, adoption, and value realization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Beyond Technology Deployment
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Strategic Alignment</h4>
                      <p className="text-slate-600">Connect AI initiatives directly to business objectives and KPIs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Risk Mitigation</h4>
                      <p className="text-slate-600">Proactively address technical, operational, and ethical risks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Organizational Readiness</h4>
                      <p className="text-slate-600">Ensure teams, processes, and culture support AI success</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Scalable Foundation</h4>
                      <p className="text-slate-600">Build for growth with flexible architecture and governance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Strategy Components</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                    <span className="font-medium">Business Case & ROI Model</span>
                  </div>
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <svg className="h-5 w-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                    <span className="font-medium">Technology Architecture</span>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                    <span className="font-medium">Data & Infrastructure Plan</span>
                  </div>
                  <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                    <svg className="h-5 w-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
                    <span className="font-medium">Team & Governance Model</span>
                  </div>
                  <div className="flex items-center p-4 bg-pink-50 rounded-lg">
                    <svg className="h-5 w-5 text-pink-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="font-medium">Implementation Roadmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI Implementation Strategy Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why 70% of AI Projects Fail (And How to Be in the 30%)
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Most AI initiatives fail due to poor planning, not technology. Our strategy framework addresses the root causes of failure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="text-red-600 mr-3">✗</span>
                  Common Failure Points
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">Unclear objectives</p>
                      <p className="text-sm text-slate-600">No connection between AI and business goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">Poor data quality</p>
                      <p className="text-sm text-slate-600">Insufficient or unstructured data foundation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">Technology-first approach</p>
                      <p className="text-sm text-slate-600">Focusing on AI capabilities vs. business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">No change management</p>
                      <p className="text-sm text-slate-600">Underestimating organizational resistance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Our Success Framework
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">Business-driven approach</p>
                      <p className="text-sm text-slate-600">Start with value, work backward to technology</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">Data readiness assessment</p>
                      <p className="text-sm text-slate-600">Ensure solid data foundation before building</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">Phased implementation</p>
                      <p className="text-sm text-slate-600">Quick wins build momentum and learning</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-slate-900">Change-first mindset</p>
                      <p className="text-sm text-slate-600">People and process before technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Cost of Failed AI Initiatives
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  The average failed AI project costs enterprises $2.8M in direct expenses and lost opportunity. 
                  Strategic planning reduces failure risk by 73%.
                </p>
                <Link href="/ai-readiness-assessment" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors">
                  Assess Your AI Readiness
                  {icons.arrowRight}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our AI Implementation Framework */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The IMPACT Framework: Our Proven Implementation Strategy
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Six phases to successful AI implementation, refined through 500+ enterprise deployments
              </p>
            </div>

            <div className="space-y-8">
              {/* Phase 1: Identify */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">I</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Identify</h3>
                        <p className="text-blue-100">Weeks 1-2</p>
                      </div>
                    </div>
                    <p className="text-blue-100">
                      Define objectives and high-value AI opportunities
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Business Discovery</p>
                          <p className="text-sm text-slate-600">Executive interviews and goal alignment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Use Case Mapping</p>
                          <p className="text-sm text-slate-600">Identify and prioritize AI opportunities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Value Analysis</p>
                          <p className="text-sm text-slate-600">ROI projections and impact assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Success Metrics</p>
                          <p className="text-sm text-slate-600">Define KPIs and measurement framework</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-900">Deliverable: AI Opportunity Report with prioritized use cases</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2: Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">M</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Map</h3>
                        <p className="text-purple-100">Weeks 3-4</p>
                      </div>
                    </div>
                    <p className="text-purple-100">
                      Assess current state and design target architecture
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Data Assessment</p>
                          <p className="text-sm text-slate-600">Evaluate data quality and availability</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Technology Audit</p>
                          <p className="text-sm text-slate-600">Review existing systems and tools</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Skills Gap Analysis</p>
                          <p className="text-sm text-slate-600">Identify team capabilities and needs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Architecture Design</p>
                          <p className="text-sm text-slate-600">Create target state blueprint</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm font-medium text-purple-900">Deliverable: Current State Assessment & Target Architecture</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3: Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-green-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">P</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Plan</h3>
                        <p className="text-green-100">Weeks 5-6</p>
                      </div>
                    </div>
                    <p className="text-green-100">
                      Develop detailed implementation roadmap
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Roadmap Development</p>
                          <p className="text-sm text-slate-600">Phased implementation timeline</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Resource Planning</p>
                          <p className="text-sm text-slate-600">Team structure and budget allocation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Risk Assessment</p>
                          <p className="text-sm text-slate-600">Identify and mitigate key risks</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Governance Model</p>
                          <p className="text-sm text-slate-600">Decision rights and processes</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-900">Deliverable: Implementation Roadmap & Project Charter</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4: Act */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">A</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Act</h3>
                        <p className="text-orange-100">Weeks 7-10</p>
                      </div>
                    </div>
                    <p className="text-orange-100">
                      Execute pilot implementation
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Pilot Development</p>
                          <p className="text-sm text-slate-600">Build and deploy MVP solution</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Integration</p>
                          <p className="text-sm text-slate-600">Connect with existing systems</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">User Training</p>
                          <p className="text-sm text-slate-600">Enable teams for success</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Testing & Validation</p>
                          <p className="text-sm text-slate-600">Ensure quality and performance</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm font-medium text-orange-900">Deliverable: Working AI Pilot with Documented Results</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 5: Check */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-pink-500 to-pink-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">C</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Check</h3>
                        <p className="text-pink-100">Weeks 11-12</p>
                      </div>
                    </div>
                    <p className="text-pink-100">
                      Measure results and optimize
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Performance Analysis</p>
                          <p className="text-sm text-slate-600">Measure against success metrics</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">User Feedback</p>
                          <p className="text-sm text-slate-600">Gather insights for improvement</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">ROI Validation</p>
                          <p className="text-sm text-slate-600">Confirm business value delivery</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Optimization</p>
                          <p className="text-sm text-slate-600">Fine-tune for better results</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                      <p className="text-sm font-medium text-pink-900">Deliverable: Performance Report & Optimization Plan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 6: Transform */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">T</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Transform</h3>
                        <p className="text-indigo-100">Ongoing</p>
                      </div>
                    </div>
                    <p className="text-indigo-100">
                      Scale success across the enterprise
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Scaling Strategy</p>
                          <p className="text-sm text-slate-600">Expand to new use cases</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Platform Building</p>
                          <p className="text-sm text-slate-600">Create reusable AI capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Culture Change</p>
                          <p className="text-sm text-slate-600">Embed AI-first mindset</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Continuous Learning</p>
                          <p className="text-sm text-slate-600">Iterate and improve constantly</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                      <p className="text-sm font-medium text-indigo-900">Deliverable: Enterprise AI Scaling Plan & Governance Framework</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/impact-framework-guide" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg text-white transition-colors">
                Download IMPACT Framework Guide
                {icons.arrowRight}
              </Link>
            </div>
          </div>
        </section>

        {/* Key Implementation Considerations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Critical Success Factors for AI Implementation
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Address these key areas to ensure successful AI deployment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Foundation</h3>
                <p className="text-slate-600 mb-4">
                  Quality data is the fuel for AI. Ensure your data is accessible, clean, and properly governed.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Data quality assessment</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Integration strategy</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Governance framework</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">People & Culture</h3>
                <p className="text-slate-600 mb-4">
                  Success depends on organizational readiness and adoption. Build AI literacy at all levels.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Executive sponsorship</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Change management</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Skills development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Technology & Process</h3>
                <p className="text-slate-600 mb-4">
                  Choose the right tools and integrate AI seamlessly into existing workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Platform selection</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Process integration</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Security & compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-orange-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Risk Management</h3>
                <p className="text-slate-600 mb-4">
                  Proactively address technical, ethical, and operational risks in AI deployment.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Bias mitigation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Privacy protection</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Compliance adherence</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Measurement & ROI</h3>
                <p className="text-slate-600 mb-4">
                  Define clear success metrics and continuously measure value delivery.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>KPI definition</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>ROI tracking</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Continuous optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
                <svg className="h-12 w-12 text-cyan-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Scalability Planning</h3>
                <p className="text-slate-600 mb-4">
                  Build for growth from day one with flexible architecture and processes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Modular architecture</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reusable components</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Growth roadmap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Typical AI Implementation Timeline
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From strategy to scaled deployment: A realistic view of enterprise AI implementation
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-8">
                {/* Month 1-3 */}
                <div className="relative pl-8 border-l-4 border-blue-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Months 1-3: Foundation</h3>
                  <p className="text-slate-600 mb-4">Strategy development and pilot implementation</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-medium text-blue-900">Month 1</p>
                      <p className="text-sm text-blue-700">Discovery & planning</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-medium text-blue-900">Month 2</p>
                      <p className="text-sm text-blue-700">Pilot development</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-medium text-blue-900">Month 3</p>
                      <p className="text-sm text-blue-700">Testing & validation</p>
                    </div>
                  </div>
                </div>

                {/* Month 4-6 */}
                <div className="relative pl-8 border-l-4 border-purple-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Months 4-6: Expansion</h3>
                  <p className="text-slate-600 mb-4">Production deployment and initial scaling</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-medium text-purple-900">Month 4</p>
                      <p className="text-sm text-purple-700">Production rollout</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-medium text-purple-900">Month 5</p>
                      <p className="text-sm text-purple-700">User adoption</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-medium text-purple-900">Month 6</p>
                      <p className="text-sm text-purple-700">Performance optimization</p>
                    </div>
                  </div>
                </div>

                {/* Month 7-12 */}
                <div className="relative pl-8 border-l-4 border-green-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Months 7-12: Scale</h3>
                  <p className="text-slate-600 mb-4">Enterprise-wide deployment and value realization</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-medium text-green-900">Months 7-9</p>
                      <p className="text-sm text-green-700">Expand to new use cases</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-medium text-green-900">Months 10-12</p>
                      <p className="text-sm text-green-700">Platform maturation</p>
                    </div>
                  </div>
                </div>

                {/* Year 2+ */}
                <div className="relative pl-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Year 2+: Transform</h3>
                  <p className="text-slate-600 mb-4">Continuous innovation and competitive advantage</p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="font-medium text-orange-900">Ongoing</p>
                    <p className="text-sm text-orange-700">AI-first organization with continuous learning and innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Implementation Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real results from organizations that followed our implementation strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  <div>
                    <p className="font-semibold text-slate-900">Global Manufacturing Leader</p>
                    <p className="text-sm text-slate-600">Predictive Maintenance AI</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Implementation Time</p>
                    <p className="text-2xl font-bold text-slate-900">12 weeks</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Downtime</p>
                      <p className="font-semibold text-green-600">-68%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Cost Savings</p>
                      <p className="font-semibold">$24M/yr</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">ROI</p>
                      <p className="font-semibold">427%</p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700">
                  "The structured implementation approach made the difference. We had clear milestones and saw value from week 6."
                </blockquote>
                <p className="text-sm text-slate-600 mt-2">- VP of Operations</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">Fortune 500 Retailer</p>
                    <p className="text-sm text-slate-600">Customer Experience AI</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Implementation Time</p>
                    <p className="text-2xl font-bold text-slate-900">16 weeks</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Satisfaction</p>
                      <p className="font-semibold text-green-600">+34%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Revenue Lift</p>
                      <p className="font-semibold">+$67M</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Cart Value</p>
                      <p className="font-semibold">+28%</p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-slate-700">
                  "Following the IMPACT framework gave us confidence. We knew exactly what to expect at each phase."
                </blockquote>
                <p className="text-sm text-slate-600 mt-2">- Chief Digital Officer</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                View all implementation case studies
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Common questions about AI implementation strategy
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What is an AI implementation strategy?
                </h3>
                <p className="text-slate-600">
                  An AI implementation strategy is a comprehensive plan that outlines how an organization will integrate artificial intelligence into its operations. It includes technology selection, use case prioritization, resource allocation, risk management, and change management to ensure successful AI adoption and value realization.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How long does AI implementation take?
                </h3>
                <p className="text-slate-600">
                  AI implementation timelines vary based on complexity and scope. Simple pilot projects can be deployed in 6-12 weeks, while enterprise-wide implementations typically take 6-18 months. Our proven framework enables initial value delivery within 90 days through phased deployment.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What are the key components of an AI implementation strategy?
                </h3>
                <p className="text-slate-600">
                  Key components include: business case development, technology architecture, data strategy, governance framework, team structure, implementation roadmap, risk mitigation plan, change management approach, success metrics, and scaling strategy.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What are common AI implementation challenges?
                </h3>
                <p className="text-slate-600">
                  Common challenges include: lack of quality data, unclear ROI expectations, resistance to change, skills gaps, integration complexity, scalability issues, and governance concerns. Our strategy framework addresses each of these systematically.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How much does AI implementation cost?
                </h3>
                <p className="text-slate-600">
                  AI implementation costs vary widely based on scope and complexity. Pilot projects may start at $50,000-$200,000, while enterprise implementations can range from $500,000 to several million. Our strategy includes detailed cost-benefit analysis and phased investment planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Implement AI Successfully?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert guidance on your AI implementation strategy. Our team has helped 500+ organizations achieve successful AI deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-colors">
                Get Implementation Strategy
                {icons.arrowRight}
              </Link>
              <Link href="/resources/ai-implementation-guide" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg text-white transition-colors">
                Download Free Guide
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <span>96% Success Rate</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>90-Day Implementation</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <span>3.2x Faster ROI</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}