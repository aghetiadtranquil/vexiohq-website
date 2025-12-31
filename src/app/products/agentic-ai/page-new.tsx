import { Metadata } from 'next'
import AgenticAIClient from './AgenticAIClient'
import { ProductSchema } from '@/components/StructuredData'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateProductMetadata } from '@/lib/seo-metadata'

// Server component with metadata export
export const metadata: Metadata = generateProductMetadata({
  name: 'Agentic AI Platform',
  description: 'Build, deploy, and manage autonomous AI agents that work 24/7. Enterprise-grade platform for intelligent automation and decision-making.',
  slug: 'agentic-ai',
  category: 'AI Platform',
  image: 'https://vexiohq.com/images/products/agentic-ai.jpg'
})

export default function AgenticAIPlatformPage() {
  const breadcrumbItems = [
    { name: 'Products', url: '/products' },
    { name: 'Agentic AI Platform', url: '/products/agentic-ai' }
  ]

  return (
    <>
      {/* SEO Components */}
      <ProductSchema
        name="Agentic AI Platform"
        description="Enterprise-grade platform for building and deploying autonomous AI agents. Features include multi-agent orchestration, tool integration, and real-time monitoring."
        image="https://vexiohq.com/images/products/agentic-ai.jpg"
        offers={{
          price: "Contact for pricing",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }}
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 127
        }}
      />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      {/* Client Component with all interactive features */}
      <AgenticAIClient />
    </>
  )
}