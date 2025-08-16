'use client';

import Link from 'next/link';
import { Brain, BarChart3, Zap, Database, Cloud, Users, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI Development',
    description: 'Build autonomous AI systems that think, plan, and act independently',
    icon: Brain,
    color: 'purple',
    features: [
      'Custom AI agent architecture design',
      'Multi-agent orchestration systems',
      'Human-in-the-loop workflows',
      'Performance monitoring & optimization'
    ],
    useCases: [
      'Automated customer service',
      'Intelligent process automation',
      'Predictive maintenance',
      'Supply chain optimization'
    ],
    slug: 'agentic-ai-development'
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Roadmapping',
    description: 'Transform your business with a clear, actionable AI strategy',
    icon: Zap,
    color: 'blue',
    features: [
      'AI readiness assessment',
      'Use case identification & prioritization',
      'ROI modeling & business case',
      'Implementation roadmap'
    ],
    useCases: [
      'Enterprise AI transformation',
      'Digital innovation programs',
      'Competitive advantage building',
      'Technology modernization'
    ],
    slug: 'ai-strategy-consulting'
  },
  {
    id: 'data-engineering',
    title: 'Data & Analytics Engineering',
    description: 'Build the foundation for AI with modern data platforms',
    icon: Database,
    color: 'green',
    features: [
      'Data platform architecture',
      'Real-time data pipelines',
      'Data quality & governance',
      'Analytics enablement'
    ],
    useCases: [
      'Data warehouse modernization',
      'Real-time analytics',
      'Data democratization',
      'Regulatory compliance'
    ],
    slug: 'data-analytics-engineering'
  },
  {
    id: 'ml-implementation',
    title: 'Machine Learning Implementation',
    description: 'Deploy production-ready ML models that deliver results',
    icon: BarChart3,
    color: 'indigo',
    features: [
      'Custom model development',
      'MLOps pipeline setup',
      'Model monitoring & retraining',
      'A/B testing frameworks'
    ],
    useCases: [
      'Predictive analytics',
      'Computer vision solutions',
      'NLP & text analysis',
      'Recommendation engines'
    ],
    slug: 'machine-learning-implementation'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud & Infrastructure for AI',
    description: 'Optimize your infrastructure for AI/ML workloads',
    icon: Cloud,
    color: 'orange',
    features: [
      'Cloud architecture design',
      'Cost optimization strategies',
      'Security & compliance',
      'Hybrid cloud solutions'
    ],
    useCases: [
      'GCP/AWS migration',
      'Kubernetes for ML',
      'GPU cluster optimization',
      'Edge AI deployment'
    ],
    slug: 'cloud-infrastructure-ai'
  },
  {
    id: 'training-enablement',
    title: 'AI Training & Enablement',
    description: 'Build internal AI capabilities with hands-on training',
    icon: Users,
    color: 'red',
    features: [
      'Executive AI workshops',
      'Technical team training',
      'Center of Excellence setup',
      'Ongoing mentorship'
    ],
    useCases: [
      'AI literacy programs',
      'Technical upskilling',
      'Change management',
      'Innovation culture'
    ],
    slug: 'ai-training-enablement'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Enterprise AI Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From strategy to implementation, we deliver end-to-end AI transformation. 
              36,000+ hours of experience across Fortune 500 enterprises.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-slate-600">AI Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">40%</div>
              <div className="text-slate-600">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-slate-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.7%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Transform Your Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI services tailored to your industry and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const bgColor = {
                purple: 'bg-purple-100',
                blue: 'bg-blue-100',
                green: 'bg-green-100',
                indigo: 'bg-indigo-100',
                orange: 'bg-orange-100',
                red: 'bg-red-100'
              }[service.color];
              const iconColor = {
                purple: 'text-purple-600',
                blue: 'text-blue-600',
                green: 'text-green-600',
                indigo: 'text-indigo-600',
                orange: 'text-orange-600',
                red: 'text-red-600'
              }[service.color];

              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-8">
                    <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`h-8 w-8 ${iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured approach that delivers results in weeks, not years
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: 'Discovery & Assessment',
                  duration: '2-3 weeks',
                  description: 'Deep dive into your business, data, and objectives. Identify quick wins and long-term opportunities.'
                },
                {
                  phase: 'Strategy & Design',
                  duration: '3-4 weeks',
                  description: 'Develop comprehensive AI strategy, technical architecture, and implementation roadmap.'
                },
                {
                  phase: 'Pilot Implementation',
                  duration: '6-12 weeks',
                  description: 'Build and deploy pilot solution. Measure impact, gather feedback, iterate rapidly.'
                },
                {
                  phase: 'Scale & Optimize',
                  duration: 'Ongoing',
                  description: 'Roll out across enterprise. Continuous optimization and capability expansion.'
                }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{step.phase}</h3>
                      <span className="text-sm text-slate-500">{step.duration}</span>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep domain knowledge across key sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Financial Services',
                experience: 'Wind River, multiple banks',
                capabilities: ['Fraud detection', 'Risk modeling', 'Trading algorithms', 'Compliance automation']
              },
              {
                industry: 'Healthcare & Life Sciences',
                experience: 'IAEA, biotech clients',
                capabilities: ['Clinical analytics', 'Drug discovery', 'Patient care optimization', 'Medical imaging AI']
              },
              {
                industry: 'Retail & E-commerce',
                experience: "Boar's Head, CPG clients",
                capabilities: ['Demand forecasting', 'Personalization', 'Supply chain AI', 'Customer analytics']
              },
              {
                industry: 'Energy & Utilities',
                experience: 'Sunrun, solar industry',
                capabilities: ['Grid optimization', 'Predictive maintenance', 'Energy forecasting', 'Customer acquisition']
              },
              {
                industry: 'Manufacturing',
                experience: 'Cree, industrial clients',
                capabilities: ['Quality control AI', 'Production optimization', 'Predictive maintenance', 'Supply chain']
              },
              {
                industry: 'Technology',
                experience: 'Silicon Valley leaders',
                capabilities: ['Platform AI', 'Developer tools', 'Infrastructure optimization', 'Product intelligence']
              }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.industry}</h3>
                <p className="text-sm text-slate-500 mb-4">{industry.experience}</p>
                <ul className="space-y-2">
                  {industry.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Let's discuss your specific challenges and build a custom solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold"
            >
              Schedule Strategy Session
            </Link>
            <Link 
              href="/resources/ai-readiness-assessment"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold"
            >
              Take AI Readiness Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}