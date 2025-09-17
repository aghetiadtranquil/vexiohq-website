import { 
  SoftwareApplicationSchema, 
  BreadcrumbSchema, 
  FAQSchema,
  StructuredData 
} from '@/components/StructuredData'

// Structured Data Components for ROI Calculator Page

export function CalculatorStructuredData() {
  return (
    <>
      {/* Software Application Schema for the Calculator Tool */}
      <SoftwareApplicationSchema
        name="Business Transformation ROI Calculator"
        description="Free online calculator to estimate ROI from digital transformation and AI initiatives. Provides personalized insights based on industry, company size, and transformation goals."
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={{
          price: "0",
          priceCurrency: "USD"
        }}
        aggregateRating={{
          ratingValue: 4.9,
          ratingCount: 384
        }}
      />
      
      {/* WebApplication Schema with more details */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Business Transformation ROI Calculator",
          "url": "https://datatranquil.com/tools/calculator",
          "description": "Calculate potential ROI from digital transformation initiatives with industry-specific insights",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "browserRequirements": "Requires JavaScript enabled",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Industry-specific calculations",
            "Customizable transformation scenarios",
            "Cost-benefit analysis",
            "Implementation timeline estimates",
            "Downloadable PDF reports",
            "Real-time calculations",
            "Benchmark comparisons"
          ],
          "screenshot": "https://datatranquil.com/images/tools/calculator-screenshot.jpg",
          "creator": {
            "@type": "Organization",
            "name": "DataTranquil",
            "url": "https://datatranquil.com"
          },
          "datePublished": "2024-01-15",
          "dateModified": "2024-03-20",
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/UseAction",
            "userInteractionCount": "15234"
          }
        }}
      />
      
      {/* HowTo Schema for Calculator Usage */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Calculate Digital Transformation ROI",
          "description": "Step-by-step guide to using our ROI calculator for transformation initiatives",
          "image": "https://datatranquil.com/images/tools/calculator-guide.jpg",
          "totalTime": "PT5M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "supply": [],
          "tool": {
            "@type": "HowToTool",
            "name": "Business Transformation ROI Calculator"
          },
          "step": [
            {
              "@type": "HowToStep",
              "name": "Select Your Industry",
              "text": "Choose your industry from the dropdown to get sector-specific benchmarks",
              "image": "https://datatranquil.com/images/tools/step1.jpg",
              "url": "https://datatranquil.com/tools/calculator#step1"
            },
            {
              "@type": "HowToStep",
              "name": "Enter Company Details",
              "text": "Provide your company size, annual revenue, and current technology spending",
              "image": "https://datatranquil.com/images/tools/step2.jpg",
              "url": "https://datatranquil.com/tools/calculator#step2"
            },
            {
              "@type": "HowToStep",
              "name": "Select Transformation Areas",
              "text": "Choose which areas you plan to transform: AI/ML, automation, data analytics, etc.",
              "image": "https://datatranquil.com/images/tools/step3.jpg",
              "url": "https://datatranquil.com/tools/calculator#step3"
            },
            {
              "@type": "HowToStep",
              "name": "Review Results",
              "text": "Get your personalized ROI projection, timeline, and implementation recommendations",
              "image": "https://datatranquil.com/images/tools/step4.jpg",
              "url": "https://datatranquil.com/tools/calculator#results"
            },
            {
              "@type": "HowToStep",
              "name": "Download Report",
              "text": "Export your results as a PDF report for stakeholder presentations",
              "image": "https://datatranquil.com/images/tools/step5.jpg",
              "url": "https://datatranquil.com/tools/calculator#download"
            }
          ]
        }}
      />
    </>
  )
}

// Breadcrumbs for Calculator Page
export function CalculatorBreadcrumbs() {
  return (
    <BreadcrumbSchema
      items={[
        { name: 'Home', url: 'https://datatranquil.com' },
        { name: 'Tools', url: 'https://datatranquil.com/tools' },
        { name: 'ROI Calculator', url: 'https://datatranquil.com/tools/calculator' }
      ]}
    />
  )
}

// FAQ Schema for Calculator Page
export function CalculatorFAQ() {
  const faqItems = [
    {
      question: "How accurate is the ROI calculator?",
      answer: "Our calculator uses industry benchmarks and data from over 500 successful transformation projects. While results are estimates, they typically fall within 15-20% of actual outcomes when implementation follows best practices."
    },
    {
      question: "What industries does the calculator support?",
      answer: "The calculator supports 15+ industries including Financial Services, Healthcare, Retail, Manufacturing, Technology, Professional Services, Education, Government, and more. Each industry has specific benchmarks and transformation patterns."
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
      answer: "Yes, the basic calculator is completely free with no hidden costs. Premium features like detailed industry reports and custom scenarios are available with a DataTranquil consultation."
    },
    {
      question: "How long does a typical transformation take?",
      answer: "Based on the calculator's analysis, small initiatives (single department) typically take 3-6 months, medium transformations (multiple departments) take 6-12 months, and enterprise-wide transformations usually require 12-24 months."
    },
    {
      question: "What's included in the ROI calculation?",
      answer: "The ROI calculation includes cost savings from automation, revenue growth from new capabilities, productivity improvements, reduced operational costs, and risk mitigation benefits, minus implementation and ongoing operational costs."
    },
    {
      question: "Can I customize the calculation parameters?",
      answer: "Yes, the advanced mode allows you to adjust over 20 parameters including implementation speed, adoption rates, technology costs, and expected benefits to match your specific situation."
    }
  ]
  
  return <FAQSchema items={faqItems} />
}