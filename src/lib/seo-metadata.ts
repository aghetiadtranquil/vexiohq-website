import { Metadata } from 'next'

interface SEOMetadataProps {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    images?: Array<{
      url: string
      width?: number
      height?: number
      alt?: string
    }>
    type?: 'website' | 'article' | 'product' | 'profile'
  }
  twitter?: {
    title?: string
    description?: string
    images?: string[]
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
  }
  canonical?: string
  robots?: {
    index?: boolean
    follow?: boolean
    noarchive?: boolean
    nosnippet?: boolean
    noimageindex?: boolean
    maxSnippet?: number
    maxImagePreview?: 'none' | 'standard' | 'large'
    maxVideoPreview?: number
  }
  alternates?: {
    canonical?: string
    languages?: Record<string, string>
  }
  authors?: Array<{ name: string; url?: string }>
  category?: string
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
}

const DEFAULT_METADATA: Partial<Metadata> = {
  metadataBase: new URL('https://vexiohq.com'),
  title: {
    template: '%s | VexioHQ AI Consulting',
    default: 'VexioHQ - Strategic AI Advisory & Consulting',
  },
  description: 'Leading AI consulting firm in San Francisco. Transform your business with strategic AI implementation, machine learning solutions, and data analytics.',
  keywords: [
    'AI consulting',
    'machine learning',
    'data analytics',
    'AI transformation',
    'enterprise AI',
    'AI strategy',
    'San Francisco',
    'Bay Area'
  ],
  authors: [{ name: 'VexioHQ', url: 'https://vexiohq.com' }],
  creator: 'VexioHQ',
  publisher: 'VexioHQ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'VexioHQ - Strategic AI Advisory & Consulting',
    description: 'Transform your business with San Francisco\'s leading AI consulting firm.',
    url: 'https://vexiohq.com',
    siteName: 'VexioHQ',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://vexiohq.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VexioHQ - AI Consulting',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VexioHQ - Strategic AI Advisory',
    description: 'Leading AI consulting and transformation services',
    site: '@vexiohq',
    creator: '@vexiohq',
    images: ['https://vexiohq.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://vexiohq.com',
    languages: {
      'en-US': 'https://vexiohq.com',
    },
  },
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  openGraph = {},
  twitter = {},
  canonical,
  robots = {},
  alternates = {},
  authors,
  category,
  publishedTime,
  modifiedTime,
  tags = []
}: SEOMetadataProps): Metadata {
  const url = canonical || 'https://vexiohq.com'
  
  const metadata: Metadata = {
    ...DEFAULT_METADATA,
    title,
    description,
    keywords: [...(DEFAULT_METADATA.keywords as string[] || []), ...keywords],
    ...(authors && { authors }),
    ...(category && { category }),
    openGraph: {
      ...DEFAULT_METADATA.openGraph,
      title: openGraph.title || title,
      description: openGraph.description || description,
      url,
      ...(openGraph.type && { type: openGraph.type }),
      ...(openGraph.images && { images: openGraph.images }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      ...DEFAULT_METADATA.twitter,
      title: twitter.title || title,
      description: twitter.description || description,
      ...(twitter.card && { card: twitter.card }),
      ...(twitter.images && { images: twitter.images }),
    },
    robots: robots || DEFAULT_METADATA.robots,
    alternates: {
      ...DEFAULT_METADATA.alternates,
      ...(canonical && { canonical }),
      ...alternates,
    },
  }
  
  return metadata
}

// Helper function for blog post metadata
export function generateBlogMetadata({
  title,
  description,
  slug,
  author = 'VexioHQ Team',
  publishedTime,
  modifiedTime,
  tags = [],
  image
}: {
  title: string
  description: string
  slug: string
  author?: string
  publishedTime: string
  modifiedTime?: string
  tags?: string[]
  image?: string
}): Metadata {
  const url = `https://vexiohq.com/blog/${slug}`
  
  return generateSEOMetadata({
    title,
    description,
    keywords: tags,
    openGraph: {
      type: 'article',
      title,
      description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined
    },
    canonical: url,
    authors: [{ name: author }],
    publishedTime,
    modifiedTime: modifiedTime || publishedTime,
    tags,
    category: 'Technology'
  })
}

// Helper function for product/service metadata
export function generateProductMetadata({
  name,
  description,
  slug,
  category = 'AI Software',
  image
}: {
  name: string
  description: string
  slug: string
  category?: string
  image?: string
}): Metadata {
  const url = `https://vexiohq.com/products/${slug}`
  
  return generateSEOMetadata({
    title: `${name} - AI Solutions`,
    description,
    keywords: [name, category, 'AI platform', 'enterprise software'],
    openGraph: {
      type: 'product',
      title: name,
      description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: name }] : undefined
    },
    canonical: url,
    category
  })
}

// Helper function for landing page metadata
export function generateLandingPageMetadata({
  title,
  description,
  keywords = [],
  path = ''
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
}): Metadata {
  const url = path ? `https://vexiohq.com${path}` : 'https://vexiohq.com'
  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    canonical: url,
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  })
}

// Generate hreflang tags for international SEO
export function generateHreflangTags(currentPath: string, locales: string[] = ['en-US']) {
  const baseUrl = 'https://vexiohq.com'
  
  return locales.reduce((acc, locale) => {
    const localePath = locale === 'en-US' ? '' : `/${locale.toLowerCase()}`
    acc[locale] = `${baseUrl}${localePath}${currentPath}`
    return acc
  }, {} as Record<string, string>)
}

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://vexiohq.com'
  // Ensure trailing slash for consistency
  const formattedPath = path.endsWith('/') ? path : `${path}/`
  return `${baseUrl}${formattedPath}`
}

// Validate and clean meta description
export function validateMetaDescription(description: string): string {
  // Meta descriptions should be between 120-160 characters
  const cleanDescription = description.trim().replace(/\s+/g, ' ')
  
  if (cleanDescription.length > 160) {
    // Truncate at last complete word before 160 chars
    return cleanDescription.substring(0, 157) + '...'
  }
  
  if (cleanDescription.length < 120) {
    // Add call-to-action if too short
    return `${cleanDescription} Learn more with VexioHQ's AI consulting services.`
  }
  
  return cleanDescription
}

// Generate title tag with proper length
export function generateTitleTag(title: string, suffix = 'VexioHQ'): string {
  const separator = ' | '
  const maxLength = 60
  
  const fullTitle = `${title}${separator}${suffix}`
  
  if (fullTitle.length > maxLength) {
    const availableLength = maxLength - separator.length - suffix.length
    const truncatedTitle = title.substring(0, availableLength - 3) + '...'
    return `${truncatedTitle}${separator}${suffix}`
  }
  
  return fullTitle
}