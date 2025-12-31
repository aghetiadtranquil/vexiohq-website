/**
 * Page Template for /tools/calculator
 * 
 * This template provides the complete page structure with SEO optimization.
 * The Dev team can use this as a starting point and add the calculator logic.
 */

import { Metadata } from 'next'
import { calculatorMetadata } from './metadata'
import { 
  CalculatorStructuredData, 
  CalculatorBreadcrumbs, 
  CalculatorFAQ 
} from './structured-data'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQSection from '@/components/FAQSection'

// Export the metadata for Next.js
export const metadata: Metadata = calculatorMetadata

// Main page component
export default function BusinessTransformationCalculator() {
  const breadcrumbItems = [
    { name: 'Tools', url: '/tools' },
    { name: 'ROI Calculator', url: '/tools/calculator' }
  ]
  
  const faqItems = [
    {
      question: "How accurate is the ROI calculator?",
      answer: "Our calculator uses industry benchmarks and data from over 500 successful transformation projects. While results are estimates, they typically fall within 15-20% of actual outcomes when implementation follows best practices."
    },
    {
      question: "What industries does the calculator support?",
      answer: "The calculator supports 15+ industries including Financial Services, Healthcare, Retail, Manufacturing, Technology, Professional Services, Education, Government, and more."
    },
    {
      question: "Can I save my calculation results?",
      answer: "Yes, you can download your results as a PDF report. You can also create a free account to save multiple scenarios and compare different transformation strategies."
    },
    {
      question: "What factors does the calculator consider?",
      answer: "The calculator considers company size, current technology spending, industry benchmarks, transformation scope, implementation timeline, change management costs, training requirements, and expected efficiency gains."
    },
    {
      question: "Is the calculator really free?",
      answer: "Yes, the basic calculator is completely free with no hidden costs. Premium features like detailed industry reports are available with a VexioHQ consultation."
    }
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <CalculatorStructuredData />
      
      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Business Transformation ROI Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Calculate your potential ROI from digital transformation initiatives. 
                Get personalized insights for your industry in under 5 minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free to use
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No signup required
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Industry-specific insights
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Calculator Component */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* 
                TODO: Dev team to add calculator component here
                Example: <ROICalculatorForm />
              */}
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-600">Calculator component will be inserted here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Use Our ROI Calculator?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-gray-600">Based on real transformation data from 500+ projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Results</h3>
                <p className="text-gray-600">Get comprehensive ROI analysis in under 5 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
                <p className="text-gray-600">Download PDF reports for stakeholder presentations</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our ROI Calculator"
          items={faqItems}
          className="bg-white"
        />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for a Deeper Analysis?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get a personalized transformation roadmap from our AI experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/consultation"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}