import { Metadata } from 'next'
import Link from 'next/link'
// Icons object with inline SVGs
const icons = {
  arrowRight: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>,
  checkCircle: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  database: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
  shield: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  zap: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  trendingUp: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  alertCircle: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  barChart3: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  brain: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  search: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  filter: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
  refreshCw: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  target: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>,
  award: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  building2: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  clock: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  users: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
  microscope: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5v-16h14v16z" /></svg>,
  gitBranch: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  settings: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  chevronRight: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>,
  activity: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  layers: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
  badgeCheck: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  fileSearch: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  lightbulb: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
};

export const metadata: Metadata = {
  title: 'Data Quality AI Solutions - Achieve 99.7% Accuracy | Vantage AI',
  description: 'Transform data quality with AI-powered solutions. Achieve 99.7% data accuracy, reduce errors by 94%, and save 80% on data cleaning costs. Enterprise-proven AI data quality solutions.',
  keywords: 'data quality AI, AI data quality solutions, data quality artificial intelligence, AI for data quality, data quality automation, AI data cleansing, data quality machine learning, automated data quality management, AI data validation, intelligent data quality',
  openGraph: {
    title: 'AI Data Quality Solutions - 99.7% Accuracy Guaranteed',
    description: 'Enterprise AI solutions for data quality. Reduce errors by 94% and cleaning costs by 80%.',
    url: 'https://datatranquil.com/data-quality-ai-solutions',
    type: 'website',
    images: [{
      url: '/images/data-quality-ai-solutions.jpg',
      width: 1200,
      height: 630,
      alt: 'AI-Powered Data Quality Solutions by Vantage AI'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Quality AI Solutions - Vantage AI',
    description: 'Achieve 99.7% data accuracy with AI. Reduce errors by 94%. Save 80% on data cleaning.',
    images: ['/images/data-quality-ai-solutions.jpg']
  },
  alternates: {
    canonical: 'https://datatranquil.com/data-quality-ai-solutions'
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Data Quality Solutions",
  "provider": {
    "@type": "Organization",
    "name": "Vantage AI",
    "url": "https://datatranquil.com"
  },
  "description": "Enterprise AI solutions for data quality management. Achieve 99.7% data accuracy with automated validation, cleansing, and monitoring.",
  "serviceType": "AI Data Quality Management",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Data Quality AI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Data Validation",
          "description": "Automated validation using machine learning to detect anomalies and errors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intelligent Data Cleansing",
          "description": "AI-powered data cleaning that learns from patterns and improves over time"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real-time Quality Monitoring",
          "description": "Continuous AI monitoring for data quality issues and automatic remediation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Quality Prediction",
          "description": "Predictive analytics to prevent data quality issues before they occur"
        }
      }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How AI Solves Data Quality Problems",
  "description": "Step-by-step process of implementing AI for data quality management",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Data Profiling with AI",
      "text": "AI analyzes your entire data landscape to understand patterns, relationships, and quality issues"
    },
    {
      "@type": "HowToStep",
      "name": "Intelligent Rule Creation",
      "text": "Machine learning automatically generates data quality rules based on discovered patterns"
    },
    {
      "@type": "HowToStep",
      "name": "Automated Validation",
      "text": "AI continuously validates incoming data against learned patterns and business rules"
    },
    {
      "@type": "HowToStep",
      "name": "Smart Cleansing",
      "text": "AI corrects errors, fills gaps, and standardizes data using contextual understanding"
    },
    {
      "@type": "HowToStep",
      "name": "Continuous Learning",
      "text": "The system improves accuracy over time by learning from corrections and feedback"
    }
  ],
  "totalTime": "PT168H",
  "supply": ["Clean historical data", "Business rules documentation", "Data access permissions"],
  "tool": ["AI platform", "Data quality monitoring tools", "Integration APIs"]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are data quality AI solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data quality AI solutions use artificial intelligence and machine learning to automatically detect, correct, and prevent data quality issues. These solutions can identify patterns, anomalies, and errors that traditional rule-based systems miss, achieving up to 99.7% data accuracy through continuous learning and improvement."
      }
    },
    {
      "@type": "Question",
      "name": "How does AI improve data quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI improves data quality through pattern recognition, anomaly detection, predictive analysis, and automated correction. It learns from historical data to understand normal patterns, detects deviations in real-time, predicts potential quality issues, and automatically corrects errors using contextual understanding."
      }
    },
    {
      "@type": "Question",
      "name": "What data quality problems can AI solve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI can solve numerous data quality problems including: duplicate records, missing values, format inconsistencies, outliers and anomalies, referential integrity issues, data standardization, temporal inconsistencies, and cross-system data conflicts. Our clients typically see a 94% reduction in data errors."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can AI data quality solutions show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most organizations see initial improvements within 2-4 weeks of implementation. Significant results, including 80% reduction in manual data cleaning effort, typically occur within 60-90 days. The AI continues to improve accuracy over time, often reaching 99.7% accuracy within 6 months."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ROI of AI data quality solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Organizations typically see 300-500% ROI within the first year through reduced manual effort (80% decrease), fewer data-related errors (94% reduction), improved decision-making, and prevented downstream issues. One client saved $4.2M annually in data cleaning costs alone."
      }
    }
  ]
}

export default function DataQualityAISolutionsPage() {
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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-blue-300 mb-4">
                {icons.database}
                <span className="text-sm font-semibold uppercase tracking-wider">AI-Powered Data Quality</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Achieve 99.7% Data Quality with AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Transform your data quality management with AI that detects, corrects, and prevents errors automatically. Reduce cleaning costs by 80% while achieving unprecedented accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/data-quality-assessment" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-blue-50 rounded-lg font-semibold text-lg text-blue-900 transition-colors">
                  Get Data Quality Assessment
                  {icons.arrowRight}
                </Link>
                <Link href="/resources/data-quality-ai-guide" className="inline-flex items-center justify-center px-8 py-4 bg-blue-700/50 hover:bg-blue-700/70 backdrop-blur-sm rounded-lg font-semibold text-lg text-white transition-colors border border-blue-400/30">
                  Download AI Solution Guide
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">99.7%</p>
                  <p className="text-sm text-blue-200">Data Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">94%</p>
                  <p className="text-sm text-blue-200">Error Reduction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">80%</p>
                  <p className="text-sm text-blue-200">Cost Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-blue-200">Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-600 mb-8">Trusted by Data-Driven Enterprises</p>
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

        {/* The Data Quality Crisis */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The Hidden Cost of Poor Data Quality
              </h2>
              <p className="text-xl text-slate-600">
                Bad data costs enterprises $12.9 million annually. Traditional methods can't keep pace with modern data complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Why Traditional Approaches Fail
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Manual Processes Don't Scale</h4>
                      <p className="text-slate-600">Human validation can't keep up with data velocity and volume</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Rule-Based Systems Are Rigid</h4>
                      <p className="text-slate-600">Static rules miss evolving patterns and edge cases</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Reactive, Not Proactive</h4>
                      <p className="text-slate-600">Issues discovered after damage is already done</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Siloed Quality Management</h4>
                      <p className="text-slate-600">Disconnected tools create quality blind spots</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-6">The Impact of Poor Data Quality</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-slate-700">Revenue Loss</span>
                      <span className="text-2xl font-bold text-red-600">$12.9M</span>
                    </div>
                    <div className="w-full bg-red-100 rounded-full h-3">
                      <div className="bg-red-600 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-slate-700">Decision Errors</span>
                      <span className="text-2xl font-bold text-orange-600">47%</span>
                    </div>
                    <div className="w-full bg-orange-100 rounded-full h-3">
                      <div className="bg-orange-600 h-3 rounded-full" style={{width: '47%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-slate-700">Productivity Loss</span>
                      <span className="text-2xl font-bold text-yellow-600">30%</span>
                    </div>
                    <div className="w-full bg-yellow-100 rounded-full h-3">
                      <div className="bg-yellow-600 h-3 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-slate-700">Compliance Risk</span>
                      <span className="text-2xl font-bold text-purple-600">68%</span>
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-3">
                      <div className="bg-purple-600 h-3 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-6 text-center">*Average annual impact per Gartner research</p>
              </div>
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Your Data Quality Reality Check
                </h3>
                <p className="text-lg text-blue-100 mb-8">
                  If you're spending more than 20% of your time on data cleaning, you're not alone. 
                  80% of data scientists report data quality as their biggest challenge.
                </p>
                <Link href="/data-quality-calculator" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-blue-50 rounded-lg font-semibold text-lg text-blue-900 transition-colors">
                  Calculate Your Data Quality Cost
                  {icons.arrowRight}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How AI Transforms Data Quality */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How AI Revolutionizes Data Quality Management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                AI doesn't just fix data—it understands, learns, and prevents quality issues before they impact your business
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5v-16h14v16z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligent Detection</h3>
                <p className="text-slate-600 mb-4">
                  AI discovers quality issues that rules miss by understanding context and relationships
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Anomaly detection across dimensions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Pattern recognition at scale</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Contextual validation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Correction</h3>
                <p className="text-slate-600 mb-4">
                  ML models fix errors intelligently using learned patterns and business context
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Smart data imputation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Format standardization</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Duplicate resolution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proactive Prevention</h3>
                <p className="text-slate-600 mb-4">
                  Predictive models identify and prevent quality issues before they occur
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Quality trend prediction</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Source system monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Real-time alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Capabilities Deep Dive */}
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Advanced AI Capabilities for Data Quality
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Semantic Understanding</h4>
                      <p className="text-sm text-slate-600">AI understands data meaning, not just format—catching errors that look correct but are semantically wrong</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Cross-System Intelligence</h4>
                      <p className="text-sm text-slate-600">Validates data consistency across multiple systems and identifies integration issues automatically</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Adaptive Learning</h4>
                      <p className="text-sm text-slate-600">Continuously improves accuracy by learning from corrections and evolving data patterns</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Intelligent Deduplication</h4>
                      <p className="text-sm text-slate-600">Uses fuzzy matching and ML to identify duplicates even with variations in spelling or format</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Automated Remediation</h4>
                      <p className="text-sm text-slate-600">Fixes common issues automatically while flagging complex problems for human review</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Quality Analytics</h4>
                      <p className="text-sm text-slate-600">Provides deep insights into quality trends, root causes, and improvement opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Path to 99.7% Data Quality
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our proven implementation process delivers measurable results in weeks, not months
              </p>
            </div>

            <div className="space-y-8">
              {/* Week 1-2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Discover</h3>
                        <p className="text-blue-100">Weeks 1-2</p>
                      </div>
                    </div>
                    <p className="text-blue-100">
                      AI analyzes your data landscape to identify quality patterns and issues
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What Happens</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Data Profiling</p>
                          <p className="text-sm text-slate-600">AI scans all data sources and formats</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Quality Assessment</p>
                          <p className="text-sm text-slate-600">Identify current accuracy and issues</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Pattern Recognition</p>
                          <p className="text-sm text-slate-600">ML discovers hidden quality patterns</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Impact Analysis</p>
                          <p className="text-sm text-slate-600">Quantify business impact of issues</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-900">Deliverable: Data Quality Baseline Report with AI Insights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 3-4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Design</h3>
                        <p className="text-purple-100">Weeks 3-4</p>
                      </div>
                    </div>
                    <p className="text-purple-100">
                      Configure AI models and create intelligent quality rules
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What Happens</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Model Training</p>
                          <p className="text-sm text-slate-600">Train AI on your specific data patterns</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Rule Generation</p>
                          <p className="text-sm text-slate-600">AI creates intelligent validation rules</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Workflow Design</p>
                          <p className="text-sm text-slate-600">Create automated quality processes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Integration Planning</p>
                          <p className="text-sm text-slate-600">Map connections to your systems</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm font-medium text-purple-900">Deliverable: Custom AI Models & Quality Framework</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 5-6 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-green-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Deploy</h3>
                        <p className="text-green-100">Weeks 5-6</p>
                      </div>
                    </div>
                    <p className="text-green-100">
                      Launch AI-powered quality management in production
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What Happens</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">System Integration</p>
                          <p className="text-sm text-slate-600">Connect AI to your data pipelines</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Real-time Monitoring</p>
                          <p className="text-sm text-slate-600">Activate 24/7 quality surveillance</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Automated Cleansing</p>
                          <p className="text-sm text-slate-600">Enable AI-driven data correction</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Team Training</p>
                          <p className="text-sm text-slate-600">Empower users with AI tools</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-900">Deliverable: Live AI Quality System with Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 7+ */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Optimize</h3>
                        <p className="text-orange-100">Week 7+</p>
                      </div>
                    </div>
                    <p className="text-orange-100">
                      Continuously improve accuracy through learning
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What Happens</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Performance Tuning</p>
                          <p className="text-sm text-slate-600">Optimize AI models for accuracy</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Feedback Learning</p>
                          <p className="text-sm text-slate-600">AI learns from corrections</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">Scale Expansion</p>
                          <p className="text-sm text-slate-600">Extend to new data sources</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div>
                          <p className="font-medium text-slate-900">ROI Measurement</p>
                          <p className="text-sm text-slate-600">Track and report value delivery</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm font-medium text-orange-900">Deliverable: Optimized System Achieving 99.7% Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Real Results: 99.7% Data Quality Achievement
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how leading enterprises transformed their data quality with AI
              </p>
            </div>

            <div className="space-y-8">
              {/* Case Study 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Global Financial Services Leader</h3>
                        <p className="text-slate-600">Customer Data Management</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600">
                        Managing 50M+ customer records across 12 systems with 23% duplicate rate and 
                        $3.2M annual cost from data errors in compliance reporting.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600">
                        Deployed AI-powered deduplication and validation across all customer touchpoints, 
                        with real-time quality monitoring and automated correction workflows.
                      </p>
                    </div>
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700">
                      "The AI doesn't just find duplicates—it understands our customers. It caught 
                      quality issues we didn't even know existed."
                    </blockquote>
                    <p className="text-sm text-slate-600 mt-2">- Chief Data Officer</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-6 text-center">Results Achieved</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Data Accuracy</span>
                          <span className="text-2xl font-bold text-green-600">99.7%</span>
                        </div>
                        <div className="text-xs text-slate-500">From 77%</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Duplicate Rate</span>
                          <span className="text-2xl font-bold text-green-600">0.3%</span>
                        </div>
                        <div className="text-xs text-slate-500">From 23%</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Cost Savings</span>
                          <span className="text-2xl font-bold text-green-600">$4.2M</span>
                        </div>
                        <div className="text-xs text-slate-500">Annual</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Manual Effort</span>
                          <span className="text-2xl font-bold text-green-600">-87%</span>
                        </div>
                        <div className="text-xs text-slate-500">Reduction</div>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-center">
                          <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                          <span className="font-semibold text-slate-900">8-week implementation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 text-green-600 mr-3">{icons.building2}</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Healthcare Network (500+ Facilities)</h3>
                        <p className="text-slate-600">Patient Data Quality</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600">
                        Critical patient data errors affecting 15% of records, causing treatment delays 
                        and billing issues. Manual validation taking 200+ hours weekly.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600">
                        Implemented AI validation for patient records with semantic understanding of 
                        medical data, real-time error detection, and automated correction suggestions.
                      </p>
                    </div>
                    <blockquote className="border-l-4 border-green-600 pl-4 italic text-slate-700">
                      "AI caught medication conflicts that our rule-based system missed. It's literally 
                      saving lives while saving us time."
                    </blockquote>
                    <p className="text-sm text-slate-600 mt-2">- VP of Clinical Operations</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-6 text-center">Results Achieved</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Data Accuracy</span>
                          <span className="text-2xl font-bold text-green-600">99.8%</span>
                        </div>
                        <div className="text-xs text-slate-500">From 85%</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Error Rate</span>
                          <span className="text-2xl font-bold text-green-600">-96%</span>
                        </div>
                        <div className="text-xs text-slate-500">Reduction</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Time Saved</span>
                          <span className="text-2xl font-bold text-green-600">180hrs</span>
                        </div>
                        <div className="text-xs text-slate-500">Per week</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Patient Safety</span>
                          <span className="text-2xl font-bold text-green-600">+42%</span>
                        </div>
                        <div className="text-xs text-slate-500">Improvement</div>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-center">
                          <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                          <span className="font-semibold text-slate-900">6-week implementation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 text-purple-600 mr-3">{icons.building2}</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">E-commerce Giant</h3>
                        <p className="text-slate-600">Product Catalog Quality</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600">
                        10M+ SKUs with inconsistent data from 5,000+ vendors. Poor data quality 
                        causing 30% cart abandonment and $15M lost revenue annually.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600">
                        AI-powered catalog management with automated standardization, image validation, 
                        and real-time vendor data quality scoring and feedback.
                      </p>
                    </div>
                    <blockquote className="border-l-4 border-purple-600 pl-4 italic text-slate-700">
                      "The AI transformed our messy vendor data into a pristine catalog. Conversion 
                      rates jumped immediately."
                    </blockquote>
                    <p className="text-sm text-slate-600 mt-2">- Head of Product Data</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-6 text-center">Results Achieved</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Data Accuracy</span>
                          <span className="text-2xl font-bold text-green-600">99.6%</span>
                        </div>
                        <div className="text-xs text-slate-500">From 72%</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Revenue Lift</span>
                          <span className="text-2xl font-bold text-green-600">+$22M</span>
                        </div>
                        <div className="text-xs text-slate-500">Annual</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Conversion Rate</span>
                          <span className="text-2xl font-bold text-green-600">+18%</span>
                        </div>
                        <div className="text-xs text-slate-500">Improvement</div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm text-slate-600">Processing Time</span>
                          <span className="text-2xl font-bold text-green-600">-92%</span>
                        </div>
                        <div className="text-xs text-slate-500">Reduction</div>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-center">
                          <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                          <span className="font-semibold text-slate-900">10-week implementation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/case-studies/data-quality" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg">
                View all data quality success stories
                {icons.arrowRight}
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Comprehensive AI Data Quality Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to achieve and maintain 99.7% data accuracy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <svg className="h-12 w-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligent Validation</h3>
                <p className="text-slate-600 mb-4">
                  AI validates data using learned patterns, business rules, and contextual understanding
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Cross-field validation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Semantic checking</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Business rule compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <svg className="h-12 w-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Anomaly Detection</h3>
                <p className="text-slate-600 mb-4">
                  Machine learning identifies outliers and unusual patterns humans would miss
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Statistical anomalies</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Pattern deviations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Temporal inconsistencies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Auto-Correction</h3>
                <p className="text-slate-600 mb-4">
                  AI fixes common errors automatically while learning from manual corrections
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Format standardization</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Missing value imputation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Duplicate merging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <svg className="h-12 w-12 text-orange-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real-time Monitoring</h3>
                <p className="text-slate-600 mb-4">
                  Continuous quality surveillance with instant alerts for critical issues
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Live quality dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Automated alerts</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Trend analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <svg className="h-12 w-12 text-pink-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive Quality</h3>
                <p className="text-slate-600 mb-4">
                  AI predicts and prevents quality issues before they impact your business
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Quality forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Risk scoring</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Preventive recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <svg className="h-12 w-12 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Scale</h3>
                <p className="text-slate-600 mb-4">
                  Handle billions of records across any number of systems and formats
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Distributed processing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Multi-system integration</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span>Flexible deployment</span>
                  </li>
                </ul>
              </div>
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
                Everything you need to know about AI data quality solutions
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What are data quality AI solutions?
                </h3>
                <p className="text-slate-600">
                  Data quality AI solutions use artificial intelligence and machine learning to automatically detect, correct, and prevent data quality issues. These solutions can identify patterns, anomalies, and errors that traditional rule-based systems miss, achieving up to 99.7% data accuracy through continuous learning and improvement.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How does AI improve data quality?
                </h3>
                <p className="text-slate-600">
                  AI improves data quality through pattern recognition, anomaly detection, predictive analysis, and automated correction. It learns from historical data to understand normal patterns, detects deviations in real-time, predicts potential quality issues, and automatically corrects errors using contextual understanding.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What data quality problems can AI solve?
                </h3>
                <p className="text-slate-600">
                  AI can solve numerous data quality problems including: duplicate records, missing values, format inconsistencies, outliers and anomalies, referential integrity issues, data standardization, temporal inconsistencies, and cross-system data conflicts. Our clients typically see a 94% reduction in data errors.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How quickly can AI data quality solutions show results?
                </h3>
                <p className="text-slate-600">
                  Most organizations see initial improvements within 2-4 weeks of implementation. Significant results, including 80% reduction in manual data cleaning effort, typically occur within 60-90 days. The AI continues to improve accuracy over time, often reaching 99.7% accuracy within 6 months.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What is the ROI of AI data quality solutions?
                </h3>
                <p className="text-slate-600">
                  Organizations typically see 300-500% ROI within the first year through reduced manual effort (80% decrease), fewer data-related errors (94% reduction), improved decision-making, and prevented downstream issues. One client saved $4.2M annually in data cleaning costs alone.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How does AI handle different data types and formats?
                </h3>
                <p className="text-slate-600">
                  Modern AI solutions can process structured data (databases, spreadsheets), semi-structured data (JSON, XML), and unstructured data (text, images). The AI learns the specific patterns and rules for each data type, applying appropriate validation and correction techniques automatically.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Is AI data quality suitable for regulated industries?
                </h3>
                <p className="text-slate-600">
                  Yes, AI data quality solutions are designed with compliance in mind. They provide full audit trails, explainable decisions, and configurable rules to meet regulatory requirements in healthcare, finance, and other regulated industries. Many solutions are SOC 2, HIPAA, and GDPR compliant.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What's required to implement AI data quality solutions?
                </h3>
                <p className="text-slate-600">
                  Implementation requires access to your data sources, basic documentation of business rules, and stakeholder involvement for validation. Our AI does the heavy lifting—no need for extensive data science expertise. Most implementations complete in 6-12 weeks with minimal IT resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Achieve 99.7% Data Quality?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading enterprises using AI to transform their data quality. 
              See measurable results in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/data-quality-assessment" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-colors">
                Get Free Data Quality Assessment
                {icons.arrowRight}
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg text-white transition-colors">
                See AI in Action
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                <span>99.7% Accuracy</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>6-Week Deploy</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <span>94% Error Reduction</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}