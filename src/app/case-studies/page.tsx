import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies | DataTranquil AI Solutions',
  description: 'Explore real-world success stories of how DataTranquil has helped enterprises transform with AI and data solutions.',
}

const caseStudies = [
  {
    id: 1,
    title: 'Fortune 500 Retailer: 40% Revenue Increase with AI-Powered Analytics',
    industry: 'Retail',
    challenge: 'Struggled with inventory management and customer behavior prediction',
    solution: 'Implemented predictive analytics and AI-driven demand forecasting',
    results: '40% increase in revenue, 25% reduction in inventory costs',
    image: '/images/case-study-retail.jpg',
  },
  {
    id: 2,
    title: 'Healthcare Provider: 60% Reduction in Diagnostic Time',
    industry: 'Healthcare',
    challenge: 'Long patient wait times and inefficient diagnostic processes',
    solution: 'Deployed AI-powered diagnostic assistance and workflow automation',
    results: '60% faster diagnostics, 30% improvement in patient satisfaction',
    image: '/images/case-study-healthcare.jpg',
  },
  {
    id: 3,
    title: 'Financial Services: $10M Saved Through Fraud Detection',
    industry: 'Finance',
    challenge: 'High fraud rates and false positive alerts',
    solution: 'Implemented advanced AI fraud detection system',
    results: '$10M saved annually, 85% reduction in false positives',
    image: '/images/case-study-finance.jpg',
  },
  {
    id: 4,
    title: 'Manufacturing: 35% Increase in Production Efficiency',
    industry: 'Manufacturing',
    challenge: 'Frequent equipment failures and production downtime',
    solution: 'Deployed predictive maintenance and quality control AI',
    results: '35% efficiency increase, 50% reduction in downtime',
    image: '/images/case-study-manufacturing.jpg',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories & Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading enterprises have transformed their operations and achieved 
            remarkable results with DataTranquil's AI solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600 mt-2">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">40%</div>
              <div className="text-gray-600 mt-2">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$50M+</div>
              <div className="text-gray-600 mt-2">Value Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600 mt-2">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                  <div className="text-white text-center px-6">
                    <div className="text-sm uppercase tracking-wide mb-2">{study.industry}</div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="text-green-600 font-semibold">{study.results}</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the ranks of industry leaders who have transformed their business with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}