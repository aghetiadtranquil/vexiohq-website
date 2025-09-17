import Script from 'next/script'

interface BaseStructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: BaseStructuredDataProps) {
  return (
    <Script
      id={`structured-data-${data['@type']}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  )
}

// Organization Schema
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataTranquil",
    "alternateName": "DataTranquil Strategic AI Advisory",
    "url": "https://datatranquil.com",
    "logo": "https://datatranquil.com/logo.png",
    "sameAs": [
      "https://twitter.com/datatranquil",
      "https://linkedin.com/company/datatranquil",
      "https://github.com/datatranquil"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-415-255-5501",
      "contactType": "sales",
      "areaServed": ["US", "CA", "GB", "EU"],
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "DataTranquil Team"
    },
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200
    },
    "slogan": "Transforming Enterprises with Strategic AI",
    "description": "Leading AI consulting firm specializing in enterprise AI transformation, machine learning implementation, and data analytics solutions."
  }
  
  return <StructuredData data={data} />
}

// Product Schema
interface ProductSchemaProps {
  name: string
  description: string
  image?: string
  brand?: string
  offers?: {
    price?: string
    priceCurrency?: string
    availability?: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}

export function ProductSchema({
  name,
  description,
  image = "https://datatranquil.com/og-image.jpg",
  brand = "DataTranquil",
  offers,
  aggregateRating
}: ProductSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "url": "https://datatranquil.com/pricing",
        "priceCurrency": offers.priceCurrency || "USD",
        "price": offers.price || "Contact for pricing",
        "availability": offers.availability || "https://schema.org/InStock"
      }
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount
      }
    })
  }
  
  return <StructuredData data={data} />
}

// Service Schema
interface ServiceSchemaProps {
  name: string
  description: string
  provider?: string
  serviceType?: string
  areaServed?: string[]
  hasOfferCatalog?: {
    name: string
    itemListElement: Array<{
      name: string
      description: string
    }>
  }
}

export function ServiceSchema({
  name,
  description,
  provider = "DataTranquil",
  serviceType,
  areaServed = ["US", "CA", "GB", "EU"],
  hasOfferCatalog
}: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    ...(serviceType && { "serviceType": serviceType }),
    "areaServed": areaServed.map(area => ({
      "@type": "Country",
      "name": area
    })),
    ...(hasOfferCatalog && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": hasOfferCatalog.name,
        "itemListElement": hasOfferCatalog.itemListElement.map((item, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": item.name,
            "description": item.description
          },
          "position": index + 1
        }))
      }
    })
  }
  
  return <StructuredData data={data} />
}

// Article Schema for Blog Posts
interface ArticleSchemaProps {
  title: string
  description: string
  author?: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  wordCount?: number
  keywords?: string[]
}

export function ArticleSchema({
  title,
  description,
  author = "DataTranquil Team",
  datePublished,
  dateModified,
  image = "https://datatranquil.com/og-image.jpg",
  url,
  wordCount,
  keywords = []
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://datatranquil.com/about"
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": image,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "DataTranquil",
      "logo": {
        "@type": "ImageObject",
        "url": "https://datatranquil.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(wordCount && { "wordCount": wordCount }),
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") })
  }
  
  return <StructuredData data={data} />
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
  
  return <StructuredData data={data} />
}

// FAQ Schema
interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
  
  return <StructuredData data={data} />
}

// Local Business Schema
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DataTranquil AI Consulting",
    "image": "https://datatranquil.com/og-image.jpg",
    "@id": "https://datatranquil.com",
    "url": "https://datatranquil.com",
    "telephone": "+1-415-255-5501",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Financial District",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://twitter.com/datatranquil",
      "https://linkedin.com/company/datatranquil"
    ]
  }
  
  return <StructuredData data={data} />
}

// WebSite Schema with Search
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DataTranquil",
    "url": "https://datatranquil.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://datatranquil.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
  
  return <StructuredData data={data} />
}

// Software Application Schema (for products)
interface SoftwareApplicationSchemaProps {
  name: string
  description: string
  applicationCategory: string
  operatingSystem?: string
  offers?: {
    price: string
    priceCurrency: string
  }
  aggregateRating?: {
    ratingValue: number
    ratingCount: number
  }
}

export function SoftwareApplicationSchema({
  name,
  description,
  applicationCategory,
  operatingSystem = "Web",
  offers,
  aggregateRating
}: SoftwareApplicationSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.priceCurrency
      }
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "ratingCount": aggregateRating.ratingCount
      }
    })
  }
  
  return <StructuredData data={data} />
}

// Course Schema (for training/educational content)
interface CourseSchemaProps {
  name: string
  description: string
  provider?: string
  url: string
}

export function CourseSchema({
  name,
  description,
  provider = "DataTranquil",
  url
}: CourseSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "sameAs": "https://datatranquil.com"
    },
    "url": url
  }
  
  return <StructuredData data={data} />
}

// Event Schema (for webinars, workshops)
interface EventSchemaProps {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: string
  url: string
  isOnline?: boolean
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location = "Online",
  url,
  isOnline = true
}: EventSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    ...(endDate && { "endDate": endDate }),
    "url": url,
    "location": isOnline ? {
      "@type": "VirtualLocation",
      "url": url
    } : {
      "@type": "Place",
      "name": location,
      "address": location
    },
    "organizer": {
      "@type": "Organization",
      "name": "DataTranquil",
      "url": "https://datatranquil.com"
    },
    "eventAttendanceMode": isOnline ? 
      "https://schema.org/OnlineEventAttendanceMode" : 
      "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled"
  }
  
  return <StructuredData data={data} />
}