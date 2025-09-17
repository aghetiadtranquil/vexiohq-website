'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbSchema } from './StructuredData'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Add home to the beginning if not present
  const breadcrumbItems = items[0]?.url !== '/' 
    ? [{ name: 'Home', url: '/' }, ...items]
    : items

  // Generate structured data items with full URLs
  const structuredDataItems = breadcrumbItems.map(item => ({
    name: item.name,
    url: `https://datatranquil.com${item.url}`
  }))

  return (
    <>
      <BreadcrumbSchema items={structuredDataItems} />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1
          
          return (
            <div key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
              
              {isLast ? (
                <span className="text-gray-600 font-medium" aria-current="page">
                  {item.name === 'Home' ? <Home className="w-4 h-4" /> : item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  {item.name === 'Home' ? <Home className="w-4 h-4" /> : item.name}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </>
  )
}

// Helper function to generate breadcrumbs from URL path
export function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  // Remove trailing slash and split path
  const path = pathname.replace(/\/$/, '')
  const segments = path.split('/').filter(Boolean)
  
  // Generate breadcrumb items
  const items: BreadcrumbItem[] = []
  let currentPath = ''
  
  for (const segment of segments) {
    currentPath += `/${segment}`
    
    // Format segment name (replace hyphens with spaces and capitalize)
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    items.push({
      name,
      url: currentPath
    })
  }
  
  return items
}

// Predefined breadcrumb mappings for better names
const BREADCRUMB_MAPPINGS: Record<string, string> = {
  'ai-consulting-services': 'AI Consulting Services',
  'ai-consulting-san-francisco': 'San Francisco AI Consulting',
  'enterprise-ai-transformation': 'Enterprise AI Transformation',
  'ai-implementation-strategy': 'AI Implementation Strategy',
  'data-quality-ai-solutions': 'Data Quality Solutions',
  'agentic-ai-platform': 'Agentic AI Platform',
  'ai-roi-calculator': 'AI ROI Calculator',
  'case-studies': 'Case Studies',
  'fortune-500-retail-transformation': 'Fortune 500 Retail Transformation',
  'get-started': 'Get Started',
  'products': 'Products',
  'agentic-ai': 'Agentic AI',
  'mlops': 'MLOps',
  'insights': 'Insights',
  'state-of-enterprise-ai-2025': 'State of Enterprise AI 2025',
  'ai-economic-impact-report': 'AI Economic Impact Report',
  'ai-governance-framework': 'AI Governance Framework',
  'financial-services-ml-playbook': 'Financial Services ML Playbook',
  'healthcare-ai-transformation-guide': 'Healthcare AI Guide',
  'mlops-best-practices': 'MLOps Best Practices',
  'blog': 'Blog',
  'resources': 'Resources',
  'services': 'Services',
  'solutions': 'Solutions',
  'about': 'About',
  'contact': 'Contact',
  'pricing': 'Pricing',
  'docs': 'Documentation',
  'privacy-notice': 'Privacy Notice',
  'cookie-notice': 'Cookie Notice'
}

// Enhanced breadcrumb generation with custom names
export function generateEnhancedBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const path = pathname.replace(/\/$/, '')
  const segments = path.split('/').filter(Boolean)
  
  const items: BreadcrumbItem[] = []
  let currentPath = ''
  
  for (const segment of segments) {
    currentPath += `/${segment}`
    
    // Use predefined mapping or format segment name
    const name = BREADCRUMB_MAPPINGS[segment] || 
      segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    
    items.push({
      name,
      url: currentPath
    })
  }
  
  return items
}