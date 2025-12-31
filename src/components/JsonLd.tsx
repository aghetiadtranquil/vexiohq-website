import Script from 'next/script'

// Base types for common schema properties
interface BaseSchema {
  '@context': 'https://schema.org'
  '@type': string
}

interface WithId {
  '@id'?: string
}

// Organization Schema
export interface OrganizationSchema extends BaseSchema, WithId {
  '@type': 'Organization'
  name: string
  alternateName?: string
  url: string
  logo?: string | ImageObject
  description?: string
  email?: string
  telephone?: string
  address?: PostalAddress
  sameAs?: string[]
  contactPoint?: ContactPoint | ContactPoint[]
  founder?: Person | Person[]
  foundingDate?: string
  aggregateRating?: AggregateRating
  areaServed?: string | string[] | Place | Place[]
  brand?: Brand | Brand[]
}

// Person Schema
export interface PersonSchema extends BaseSchema, WithId {
  '@type': 'Person'
  name: string
  jobTitle?: string
  image?: string | ImageObject
  url?: string
  sameAs?: string[]
  email?: string
  telephone?: string
  worksFor?: Organization
}

// Article Schema
export interface ArticleSchema extends BaseSchema, WithId {
  '@type': 'Article' | 'BlogPosting' | 'NewsArticle' | 'TechArticle'
  headline: string
  description?: string
  image?: string | string[] | ImageObject | ImageObject[]
  datePublished: string
  dateModified?: string
  author: Person | Person[] | Organization
  publisher: Organization
  mainEntityOfPage?: string | WebPage
  keywords?: string | string[]
  articleSection?: string
  wordCount?: number
  inLanguage?: string
  potentialAction?: ReadAction
}

// Product Schema
export interface ProductSchema extends BaseSchema, WithId {
  '@type': 'Product' | 'SoftwareApplication' | 'Service'
  name: string
  description?: string
  image?: string | string[] | ImageObject | ImageObject[]
  brand?: Brand | Organization
  offers?: Offer | Offer[]
  aggregateRating?: AggregateRating
  review?: Review | Review[]
  sku?: string
  mpn?: string
  gtin?: string
  category?: string
  manufacturer?: Organization
}

// Service Schema
export interface ServiceSchema extends BaseSchema, WithId {
  '@type': 'Service' | 'ProfessionalService'
  name: string
  description?: string
  provider: Organization | Person
  serviceType?: string
  areaServed?: string | string[] | Place | Place[]
  hasOfferCatalog?: OfferCatalog
  aggregateRating?: AggregateRating
  availableChannel?: ServiceChannel | ServiceChannel[]
  category?: string
  offers?: Offer | Offer[]
}

// FAQ Schema
export interface FAQPageSchema extends BaseSchema, WithId {
  '@type': 'FAQPage'
  mainEntity: Question[]
}

// Breadcrumb Schema
export interface BreadcrumbListSchema extends BaseSchema, WithId {
  '@type': 'BreadcrumbList'
  itemListElement: ListItem[]
}

// WebPage Schema
export interface WebPageSchema extends BaseSchema, WithId {
  '@type': 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage'
  name?: string
  description?: string
  url?: string
  datePublished?: string
  dateModified?: string
  inLanguage?: string
  isPartOf?: WebSite
  breadcrumb?: BreadcrumbList | string
  mainEntity?: any
  primaryImageOfPage?: ImageObject | string
  relatedLink?: string[]
  significantLink?: string[]
  speakable?: SpeakableSpecification | string[]
}

// Local Business Schema
export interface LocalBusinessSchema extends BaseSchema, WithId {
  '@type': 'LocalBusiness' | 'ProfessionalService'
  name: string
  description?: string
  url?: string
  telephone?: string
  email?: string
  address: PostalAddress
  geo?: GeoCoordinates
  openingHoursSpecification?: OpeningHoursSpecification[]
  priceRange?: string
  image?: string | string[] | ImageObject | ImageObject[]
  aggregateRating?: AggregateRating
  review?: Review | Review[]
  areaServed?: string | string[] | Place | Place[]
}

// Event Schema
export interface EventSchema extends BaseSchema, WithId {
  '@type': 'Event' | 'BusinessEvent' | 'EducationEvent'
  name: string
  description?: string
  startDate: string
  endDate?: string
  location: Place | VirtualLocation
  organizer?: Organization | Person
  performer?: Person | Person[] | Organization | Organization[]
  offers?: Offer | Offer[]
  eventStatus?: EventStatusType
  eventAttendanceMode?: EventAttendanceModeEnumeration
  image?: string | string[] | ImageObject | ImageObject[]
}

// Course Schema
export interface CourseSchema extends BaseSchema, WithId {
  '@type': 'Course'
  name: string
  description?: string
  provider: Organization | Person
  courseCode?: string
  coursePrerequisites?: string | Course | AlignmentObject
  educationalCredentialAwarded?: string | EducationalOccupationalCredential
  hasCourseInstance?: CourseInstance | CourseInstance[]
  numberOfCredits?: number | StructuredValue
  occupationalCredentialAwarded?: string | EducationalOccupationalCredential
  teaches?: string | DefinedTerm
}

// Supporting Types
interface ImageObject {
  '@type': 'ImageObject'
  url: string
  width?: number
  height?: number
  caption?: string
}

interface PostalAddress {
  '@type': 'PostalAddress'
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry?: string
}

interface ContactPoint {
  '@type': 'ContactPoint'
  telephone?: string
  contactType?: string
  email?: string
  areaServed?: string | string[]
  availableLanguage?: string | string[]
  contactOption?: string | string[]
}

interface AggregateRating {
  '@type': 'AggregateRating'
  ratingValue: number | string
  reviewCount?: number | string
  bestRating?: number | string
  worstRating?: number | string
}

interface Person {
  '@type': 'Person'
  name: string
  url?: string
  image?: string | ImageObject
  jobTitle?: string
  sameAs?: string[]
}

interface Organization {
  '@type': 'Organization'
  name: string
  url?: string
  logo?: string | ImageObject
  sameAs?: string[]
}

interface Brand {
  '@type': 'Brand'
  name: string
  url?: string
  logo?: string | ImageObject
}

interface Offer {
  '@type': 'Offer'
  price?: string | number
  priceCurrency?: string
  availability?: ItemAvailability
  url?: string
  priceValidUntil?: string
  itemCondition?: OfferItemCondition
  seller?: Organization | Person
}

interface Review {
  '@type': 'Review'
  author: Person | Organization
  datePublished?: string
  reviewBody?: string
  reviewRating?: Rating
}

interface Rating {
  '@type': 'Rating'
  ratingValue: number | string
  bestRating?: number | string
  worstRating?: number | string
}

interface Question {
  '@type': 'Question'
  name: string
  acceptedAnswer: Answer
}

interface Answer {
  '@type': 'Answer'
  text: string
}

interface ListItem {
  '@type': 'ListItem'
  position: number
  name: string
  item?: string
}

interface WebSite {
  '@type': 'WebSite'
  url: string
  name?: string
}

interface BreadcrumbList {
  '@type': 'BreadcrumbList'
  itemListElement: ListItem[]
}

interface Place {
  '@type': 'Place'
  name?: string
  address?: PostalAddress | string
  geo?: GeoCoordinates
}

interface VirtualLocation {
  '@type': 'VirtualLocation'
  url?: string
  name?: string
}

interface GeoCoordinates {
  '@type': 'GeoCoordinates'
  latitude: number | string
  longitude: number | string
}

interface OpeningHoursSpecification {
  '@type': 'OpeningHoursSpecification'
  dayOfWeek: string | string[]
  opens?: string
  closes?: string
}

interface OfferCatalog {
  '@type': 'OfferCatalog'
  name: string
  itemListElement?: Service[]
}

interface Service {
  '@type': 'Service'
  name: string
  description?: string
}

interface ServiceChannel {
  '@type': 'ServiceChannel'
  serviceUrl?: string
  servicePhone?: string
  serviceSmsNumber?: string
}

interface SpeakableSpecification {
  '@type': 'SpeakableSpecification'
  cssSelector?: string[]
  xpath?: string[]
}

interface Course {
  '@type': 'Course'
  name: string
  url?: string
}

interface AlignmentObject {
  '@type': 'AlignmentObject'
  alignmentType: string
  educationalFramework?: string
  targetName?: string
  targetUrl?: string
}

interface EducationalOccupationalCredential {
  '@type': 'EducationalOccupationalCredential'
  name: string
  url?: string
}

interface CourseInstance {
  '@type': 'CourseInstance'
  name: string
  courseMode?: string
  startDate?: string
  endDate?: string
}

interface StructuredValue {
  '@type': 'StructuredValue'
  value: number | string
  unitText?: string
}

interface DefinedTerm {
  '@type': 'DefinedTerm'
  name: string
  description?: string
}

interface WebPage {
  '@type': 'WebPage'
  '@id': string
  url?: string
}

interface ReadAction {
  '@type': 'ReadAction'
  target?: string | string[]
}

// Enums
type ItemAvailability = 
  | 'https://schema.org/InStock'
  | 'https://schema.org/OutOfStock'
  | 'https://schema.org/PreOrder'
  | 'https://schema.org/BackOrder'
  | 'https://schema.org/Discontinued'
  | 'https://schema.org/InStoreOnly'
  | 'https://schema.org/LimitedAvailability'
  | 'https://schema.org/OnlineOnly'
  | 'https://schema.org/PreSale'
  | 'https://schema.org/SoldOut'

type OfferItemCondition =
  | 'https://schema.org/NewCondition'
  | 'https://schema.org/UsedCondition'
  | 'https://schema.org/RefurbishedCondition'
  | 'https://schema.org/DamagedCondition'

type EventStatusType =
  | 'https://schema.org/EventCancelled'
  | 'https://schema.org/EventMovedOnline'
  | 'https://schema.org/EventPostponed'
  | 'https://schema.org/EventRescheduled'
  | 'https://schema.org/EventScheduled'

type EventAttendanceModeEnumeration =
  | 'https://schema.org/OfflineEventAttendanceMode'
  | 'https://schema.org/OnlineEventAttendanceMode'
  | 'https://schema.org/MixedEventAttendanceMode'

// Component Props
interface JsonLdProps {
  data: any
  id?: string
  strategy?: 'afterInteractive' | 'beforeInteractive' | 'lazyOnload'
}

// Main Component
export default function JsonLd({ data, id = 'json-ld', strategy = 'afterInteractive' }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  )
}

// Helper functions to create schema objects
export const createOrganizationSchema = (data: Partial<OrganizationSchema>): OrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VexioHQ',
  url: 'https://vexiohq.com',
  ...data
})

export const createArticleSchema = (data: Partial<ArticleSchema>): ArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '',
  datePublished: new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: 'VexioHQ',
    url: 'https://vexiohq.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'VexioHQ',
    url: 'https://vexiohq.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vexiohq.com/logo.png'
    }
  },
  ...data
})

export const createServiceSchema = (data: Partial<ServiceSchema>): ServiceSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '',
  provider: {
    '@type': 'Organization',
    name: 'VexioHQ',
    url: 'https://vexiohq.com'
  },
  ...data
})

export const createFAQSchema = (faqs: { question: string; answer: string }[]): FAQPageSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

export const createBreadcrumbSchema = (items: { name: string; url?: string }[]): BreadcrumbListSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

export const createWebPageSchema = (data: Partial<WebPageSchema>): WebPageSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  ...data
})

export const createLocalBusinessSchema = (data: Partial<LocalBusinessSchema>): LocalBusinessSchema => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'VexioHQ',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    addressCountry: 'US'
  },
  ...data
})

export const createProductSchema = (data: Partial<ProductSchema>): ProductSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: '',
  ...data
})

export const createEventSchema = (data: Partial<EventSchema>): EventSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: '',
  startDate: new Date().toISOString(),
  location: {
    '@type': 'Place',
    name: 'VexioHQ Office',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US'
    }
  },
  ...data
})

export const createCourseSchema = (data: Partial<CourseSchema>): CourseSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: '',
  provider: {
    '@type': 'Organization',
    name: 'VexioHQ',
    url: 'https://vexiohq.com'
  },
  ...data
})