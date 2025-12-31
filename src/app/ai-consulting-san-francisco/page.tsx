'use client';

import Link from 'next/link';
// Icons object with inline SVGs
const icons = {
  arrowRight: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>,
  checkCircle: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  trendingUp: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  users: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
  brain: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  barChart3: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  shield: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  award: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
};

export default function AIConsultingSanFrancisco() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vexiohq.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Consulting San Francisco",
        "item": "https://vexiohq.com/ai-consulting-san-francisco"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link></li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-900 font-medium">AI Consulting San Francisco</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              AI Consulting Services in San Francisco
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-4xl">
              Transform your business with San Francisco's leading AI consulting firm. VexioHQ delivers 
              enterprise-grade AI solutions that drive measurable ROI, reduce costs by 40%, and accelerate 
              digital transformation for Fortune 500 companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
              >
                Get AI Strategy Consultation {icons.arrowRight}
              </Link>
              <Link 
                href="#case-studies"
                className="px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose VexioHQ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why San Francisco Enterprises Choose VexioHQ for AI Consulting
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">40%</h3>
                <p className="text-slate-600">Average Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">70+</h3>
                <p className="text-slate-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">4</h3>
                <p className="text-slate-600">AI Products</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">SF</h3>
                <p className="text-slate-600">Based in San Francisco</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What Sets Our AI Consulting Apart in San Francisco
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-3">Bay Area AI Expertise</h4>
                  <p className="text-slate-600 mb-4">
                    Based in San Francisco, we bring cutting-edge AI knowledge directly from
                    Silicon Valley's innovation hub to your enterprise.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-600">Direct access to SF tech ecosystem</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-600">Partnerships with Stanford AI Lab</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-600">Early access to emerging AI technologies</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-3">Enterprise-Ready Solutions</h4>
                  <p className="text-slate-600 mb-4">
                    Unlike boutique consultancies, we specialize in enterprise-scale AI implementations 
                    with proven frameworks for Fortune 500 companies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-600">SOC 2 Type II certified processes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-600">GDPR and CCPA compliant solutions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-slate-600">24/7 enterprise support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Deep Dive */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Comprehensive AI Consulting Services for San Francisco Enterprises
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI transformation services 
              tailored to Bay Area businesses.
            </p>

            <div className="space-y-8">
              {/* AI Strategy Consulting */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Strategic AI Consulting & Roadmap Development
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Our San Francisco AI consultants work directly with your C-suite to develop comprehensive 
                      AI strategies aligned with business objectives. We assess your current capabilities, 
                      identify high-impact use cases, and create actionable roadmaps for AI transformation.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• AI readiness assessment</li>
                          <li>• Use case prioritization matrix</li>
                          <li>• ROI projections and business case</li>
                          <li>• Technology stack recommendations</li>
                          <li>• Implementation timeline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Typical Outcomes:</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• 3-year AI transformation roadmap</li>
                          <li>• 10-15 prioritized use cases</li>
                          <li>• $5-50M identified value potential</li>
                          <li>• Executive alignment on AI vision</li>
                          <li>• Clear implementation phases</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <strong>San Francisco Focus:</strong> Leverage our deep connections in the SF tech 
                        ecosystem to access cutting-edge AI capabilities before your competitors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Machine Learning Implementation */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Machine Learning Implementation & Custom AI Solutions
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Our Bay Area ML engineers build and deploy custom AI models tailored to your specific 
                      business challenges. From predictive analytics to computer vision, we deliver 
                      production-ready solutions that integrate seamlessly with your existing systems.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Predictive Analytics</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Demand forecasting</li>
                          <li>• Customer churn prediction</li>
                          <li>• Risk assessment models</li>
                          <li>• Price optimization</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">NLP Solutions</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Intelligent document processing</li>
                          <li>• Sentiment analysis</li>
                          <li>• Chatbots & virtual assistants</li>
                          <li>• Text summarization</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Computer Vision</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Quality inspection</li>
                          <li>• Object detection</li>
                          <li>• Facial recognition</li>
                          <li>• Medical imaging AI</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                          <span className="text-sm text-slate-600">Enterprise Security</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                          <span className="text-sm text-slate-600">Scalable Architecture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data & Analytics Transformation */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Enterprise Data & Analytics Transformation
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Transform your San Francisco business into a data-driven powerhouse. We architect 
                      modern data platforms that enable real-time analytics, AI/ML workloads, and 
                      data democratization across your organization.
                    </p>
                    
                    <div className="bg-purple-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-purple-900 mb-3">
                        Our Data Transformation Approach:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-purple-800 mb-2">Phase 1: Assessment (2-3 weeks)</p>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Data maturity evaluation</li>
                            <li>• Infrastructure audit</li>
                            <li>• Skills gap analysis</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-purple-800 mb-2">Phase 2: Architecture (4-6 weeks)</p>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Platform design</li>
                            <li>• Technology selection</li>
                            <li>• Governance framework</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-purple-800 mb-2">Phase 3: Implementation (3-6 months)</p>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Data lake/warehouse build</li>
                            <li>• ETL pipeline development</li>
                            <li>• Analytics enablement</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-purple-800 mb-2">Phase 4: Optimization (Ongoing)</p>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Performance tuning</li>
                            <li>• Cost optimization</li>
                            <li>• Capability expansion</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              AI Consulting Expertise Across San Francisco Industries
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Deep domain knowledge combined with AI expertise to solve industry-specific challenges.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Financial Services */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Services</h3>
                <p className="text-slate-600 mb-4">
                  AI solutions for SF's financial district: fraud detection, algorithmic trading, 
                  risk assessment, and regulatory compliance.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Real-time fraud detection reducing losses by 60%</li>
                  <li>• AI-powered credit risk assessment</li>
                  <li>• Automated compliance reporting</li>
                  <li>• Customer service automation</li>
                </ul>
              </div>

              {/* Healthcare */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Healthcare & Biotech</h3>
                <p className="text-slate-600 mb-4">
                  Partnering with Bay Area's biotech leaders for AI-driven drug discovery, 
                  diagnostics, and patient care optimization.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Medical imaging AI with 95% accuracy</li>
                  <li>• Predictive patient monitoring</li>
                  <li>• Drug discovery acceleration</li>
                  <li>• Clinical trial optimization</li>
                </ul>
              </div>

              {/* Technology */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Technology</h3>
                <p className="text-slate-600 mb-4">
                  Help Silicon Valley tech companies leverage AI for product innovation, 
                  user experience, and operational efficiency.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Recommendation engines increasing engagement 40%</li>
                  <li>• AI-powered content moderation</li>
                  <li>• Predictive infrastructure scaling</li>
                  <li>• Intelligent automation</li>
                </ul>
              </div>

              {/* Retail */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Retail & E-commerce</h3>
                <p className="text-slate-600 mb-4">
                  Transform Bay Area retail with AI-driven personalization, inventory 
                  optimization, and customer insights.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Personalization increasing sales 25%</li>
                  <li>• Demand forecasting accuracy 90%+</li>
                  <li>• Dynamic pricing optimization</li>
                  <li>• Visual search capabilities</li>
                </ul>
              </div>

              {/* Manufacturing */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Manufacturing</h3>
                <p className="text-slate-600 mb-4">
                  Smart manufacturing solutions for Bay Area's industrial sector with 
                  predictive maintenance and quality control.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Predictive maintenance reducing downtime 50%</li>
                  <li>• AI quality inspection systems</li>
                  <li>• Supply chain optimization</li>
                  <li>• Energy efficiency improvements</li>
                </ul>
              </div>

              {/* Real Estate */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real Estate</h3>
                <p className="text-slate-600 mb-4">
                  AI solutions for San Francisco's dynamic real estate market: valuation, 
                  market prediction, and portfolio optimization.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• AI property valuation models</li>
                  <li>• Market trend prediction</li>
                  <li>• Automated tenant screening</li>
                  <li>• Portfolio optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Our Proven AI Consulting Process
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              A structured approach that delivers results in weeks, not years.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery & Assessment (Week 1-2)</h3>
                    <p className="text-slate-600">
                      Our San Francisco team conducts on-site workshops to understand your business 
                      challenges, data landscape, and AI readiness. We identify quick wins and 
                      long-term opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Strategy & Roadmap (Week 3-4)</h3>
                    <p className="text-slate-600">
                      Develop comprehensive AI strategy aligned with business objectives. Create 
                      prioritized roadmap with clear ROI projections and implementation phases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pilot Implementation (Week 5-12)</h3>
                    <p className="text-slate-600">
                      Build and deploy pilot AI solution for highest-priority use case. Measure 
                      impact, gather feedback, and refine approach for scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scale & Optimize (Month 4+)</h3>
                    <p className="text-slate-600">
                      Roll out successful pilots across the enterprise. Continuously optimize 
                      performance, expand capabilities, and build internal AI competencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions About AI Consulting in San Francisco
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How much does AI consulting cost in San Francisco?
                </h3>
                <p className="text-slate-600">
                  AI consulting engagements typically range from $50,000 for strategic assessments to 
                  $500,000+ for full implementations. Our San Francisco team provides transparent pricing 
                  based on project scope, with ROI typically exceeding 300% within the first year.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How long does an AI transformation project take?
                </h3>
                <p className="text-slate-600">
                  Timeline varies by scope: Strategy development (2-4 weeks), Pilot implementation (6-12 weeks), 
                  Full deployment (3-6 months). Our Bay Area location enables rapid iteration with 
                  access to top AI talent and technology partners.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What makes VexioHQ different from other SF AI consultants?
                </h3>
                <p className="text-slate-600">
                  Unlike pure strategy firms or technical consultancies, we combine C-suite advisory with 
                  hands-on implementation expertise. Our team includes former Fortune 500 executives and 
                  Silicon Valley AI engineers who deliver end-to-end transformation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you work with companies outside San Francisco?
                </h3>
                <p className="text-slate-600">
                  Yes, while headquartered in San Francisco, we serve clients throughout the Bay Area 
                  and globally. Our hybrid model combines on-site workshops in SF with remote collaboration, 
                  bringing Silicon Valley innovation to enterprises worldwide.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What industries benefit most from AI consulting?
                </h3>
                <p className="text-slate-600">
                  Every industry can benefit from AI, but we see exceptional results in Financial Services 
                  (60% efficiency gains), Healthcare (40% diagnostic improvement), Retail (25% revenue increase), 
                  and Manufacturing (50% downtime reduction). Our SF location gives us unique expertise 
                  in tech and biotech sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join San Francisco's leading enterprises already leveraging AI for competitive advantage. 
              Get your free AI readiness assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14153905748"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold inline-flex items-center justify-center"
              >
                Call (415) 390-5748
              </a>
              <a
                href="mailto:team@vexiohq.com"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold"
              >
                Email Our AI Experts
              </a>
            </div>
            <p className="text-sm text-blue-100 mt-6">
              San Francisco • Silicon Valley • Bay Area • Serving Global Enterprises
            </p>
          </div>
        </section>
      </main>
    </>
  );
}