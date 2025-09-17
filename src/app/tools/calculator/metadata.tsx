import { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo-metadata'

// SEO Metadata for Business Transformation ROI Calculator
export const calculatorMetadata: Metadata = generateSEOMetadata({
  title: 'Business Transformation ROI Calculator | DataTranquil',
  description: 'Calculate your potential ROI from digital transformation initiatives. Get personalized insights for your industry with our free AI-powered ROI calculator.',
  keywords: [
    'ROI calculator',
    'digital transformation ROI',
    'business transformation calculator',
    'AI ROI calculator',
    'transformation cost calculator',
    'digital transformation metrics',
    'business value calculator',
    'AI implementation ROI',
    'enterprise transformation ROI',
    'technology ROI calculator'
  ],
  openGraph: {
    title: 'Business Transformation ROI Calculator - Free Tool',
    description: 'Calculate your potential ROI from digital transformation initiatives. Get personalized insights for your industry.',
    type: 'website',
    images: [
      {
        url: 'https://datatranquil.com/images/tools/roi-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DataTranquil Business Transformation ROI Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculate Your Digital Transformation ROI',
    description: 'Free calculator to estimate ROI from digital transformation initiatives. Get industry-specific insights.',
    images: ['https://datatranquil.com/images/tools/roi-calculator-twitter.jpg']
  },
  canonical: 'https://datatranquil.com/tools/calculator',
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1
  },
  alternates: {
    canonical: 'https://datatranquil.com/tools/calculator'
  }
})

// Alternative metadata exports for different variations if needed
export const alternativeMetadata = {
  // Shorter version for mobile
  mobileTitle: 'ROI Calculator | DataTranquil',
  
  // Extended description for search results
  extendedDescription: 'Calculate your potential ROI from digital transformation and AI initiatives. Our free calculator provides personalized insights based on your industry, company size, and transformation goals. Get detailed cost-benefit analysis and implementation timelines.',
  
  // Industry-specific keywords
  industryKeywords: {
    finance: ['financial services transformation ROI', 'banking digital transformation calculator', 'fintech ROI'],
    healthcare: ['healthcare digital transformation ROI', 'medical AI ROI calculator', 'health tech investment calculator'],
    retail: ['retail transformation ROI', 'e-commerce ROI calculator', 'retail AI investment'],
    manufacturing: ['manufacturing digital transformation ROI', 'industry 4.0 calculator', 'smart factory ROI']
  },
  
  // Schema.org metadata suggestions
  schemaOrgType: 'WebApplication',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
}