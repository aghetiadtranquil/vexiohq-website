/**
 * ClientPageWrapper - A pattern for handling metadata with client components
 * 
 * This wrapper allows us to export metadata from server components
 * while keeping the actual page logic in client components.
 * 
 * Usage:
 * 1. Create a server component page.tsx that exports metadata
 * 2. Import and render the client component inside the server component
 * 3. Pass any necessary props from server to client component
 */

import { ReactNode } from 'react'

interface ClientPageWrapperProps {
  children: ReactNode
  metadata?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

export default function ClientPageWrapper({ children, metadata }: ClientPageWrapperProps) {
  // This component can be used to wrap client components
  // while metadata is handled at the server component level
  return <>{children}</>
}

/**
 * Example usage in a page.tsx file:
 * 
 * // app/products/example/page.tsx (Server Component)
 * import { Metadata } from 'next'
 * import ExampleClientComponent from './ExampleClientComponent'
 * 
 * export const metadata: Metadata = {
 *   title: 'Example Product',
 *   description: 'Description for SEO'
 * }
 * 
 * export default function ExamplePage() {
 *   return <ExampleClientComponent />
 * }
 * 
 * // app/products/example/ExampleClientComponent.tsx (Client Component)
 * 'use client'
 * 
 * export default function ExampleClientComponent() {
 *   // Client-side logic here
 *   return <div>Interactive content</div>
 * }
 */