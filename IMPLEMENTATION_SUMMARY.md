# DataTranquil Website Implementation Summary

## 📋 Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Technology Stack & Patterns](#technology-stack--patterns)
3. [Current Implementation](#current-implementation)
4. [Reusable Patterns](#reusable-patterns)
5. [Content Update Guidelines](#content-update-guidelines)
6. [SEO Optimization Checklist](#seo-optimization-checklist)
7. [Regular Maintenance](#regular-maintenance)

---

## 🏗️ Architecture Overview

### System Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                        Frontend (Next.js 14)                     │
├─────────────────────────────────────────────────────────────────┤
│  App Router │ React 18 │ TypeScript │ Tailwind CSS │ Framer    │
├─────────────────────────────────────────────────────────────────┤
│                         API Routes                               │
│  /api/contact │ /api/newsletter │ /api/analytics │ /api/auth    │
├─────────────────────────────────────────────────────────────────┤
│                     External Services                            │
│  Clerk Auth │ Resend Email │ MongoDB │ GA4 │ MS Clarity        │
├─────────────────────────────────────────────────────────────────┤
│                      Deployment (Docker)                         │
│  GitHub Actions → Docker Build → Deploy to VPS (72.60.27.165)   │
└─────────────────────────────────────────────────────────────────┘
```

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Public pages
│   ├── api/              # API endpoints
│   ├── portal/           # Protected portal pages
│   └── [features]/       # Feature pages
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   └── forms/            # Form components
├── lib/                   # Utilities and helpers
├── styles/               # Global styles
└── data/                 # Static data files
```

### Key Technologies
- **Framework**: Next.js 14.2.32 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4 + custom components
- **UI Library**: Framer Motion for animations
- **Authentication**: Clerk
- **Email**: Resend API
- **Database**: MongoDB (for contact forms)
- **Analytics**: Google Analytics 4, Microsoft Clarity
- **Deployment**: Docker + GitHub Actions CI/CD
- **Hosting**: VPS with Traefik reverse proxy

---

## 🔄 Technology Stack & Patterns

### Frontend Patterns

#### Component Structure
```tsx
// Pattern: Feature-based component with TypeScript
export default function ComponentName({ 
  prop1, 
  prop2 
}: ComponentProps) {
  // Hooks at the top
  const [state, setState] = useState()
  
  // Effects after hooks
  useEffect(() => {}, [])
  
  // Event handlers
  const handleAction = () => {}
  
  // Render
  return (
    <div className="tailwind-classes">
      {/* Component JSX */}
    </div>
  )
}
```

#### Page Structure Pattern
```tsx
// app/[feature]/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | DataTranquil',
  description: 'SEO description',
}

export default function PageName() {
  return (
    <>
      <SchemaMarkup data={schema} />
      <Hero />
      <MainContent />
      <CTA />
    </>
  )
}
```

#### API Route Pattern
```tsx
// app/api/[endpoint]/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Validate input
    // Process request
    // Return response
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
```

### Styling Patterns

#### Tailwind Component Classes
```tsx
// Button variants
const buttonStyles = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
  secondary: 'bg-white text-gray-900 border border-gray-200',
  ghost: 'text-gray-600 hover:text-gray-900'
}

// Container pattern
const containerClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

// Section pattern
const sectionClass = 'py-16 sm:py-20 lg:py-24'
```

#### Animation Patterns (Framer Motion)
```tsx
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

<motion.div {...fadeInUp}>
  {/* Content */}
</motion.div>
```

### Data Patterns

#### Static Data Files
```tsx
// src/data/services.ts
export const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy Consulting',
    description: '...',
    icon: IconComponent,
    href: '/services/ai-strategy'
  },
  // ...
]
```

#### Dynamic Data Fetching
```tsx
// Server Component pattern
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // Cache for 1 hour
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <Component data={data} />
}
```

---

## 🎯 Reusable Patterns

### 1. SEO Component Pattern
```tsx
// Pattern for SEO-optimized pages
import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    images: ['/og-image.jpg']
  }
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  // Schema properties
}

export default function Page() {
  return (
    <>
      <SchemaMarkup data={schema} />
      {/* Page content */}
    </>
  )
}
```

### 2. Form Handling Pattern
```tsx
// Reusable form pattern with validation
export default function ContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        // Success handling
      }
    } catch (error) {
      // Error handling
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return <form onSubmit={handleSubmit}>...</form>
}
```

### 3. Hero Section Pattern
```tsx
// Reusable hero section structure
export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            {title}
          </h1>
          <p className="mt-6 text-xl text-blue-100">
            {description}
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Button variant="primary">{primaryCTA}</Button>
            <Button variant="secondary">{secondaryCTA}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### 4. Card Grid Pattern
```tsx
// Reusable grid layout for cards
export default function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}
```

### 5. API Integration Pattern
```tsx
// Reusable API client
class APIClient {
  private baseURL = process.env.NEXT_PUBLIC_API_URL
  
  async post(endpoint: string, data: any) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    
    return response.json()
  }
}

export const apiClient = new APIClient()
```

### 6. Loading State Pattern
```tsx
// Consistent loading states
export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
    </div>
  )
}

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
}
```

### 7. Error Handling Pattern
```tsx
// Consistent error boundaries
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-4 btn-primary"
      >
        Try again
      </button>
    </div>
  )
}

export default function PageWithErrorBoundary() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <PageContent />
    </ErrorBoundary>
  )
}
```

### 8. Responsive Image Pattern
```tsx
// Optimized image loading
import Image from 'next/image'

export function ResponsiveImage({ src, alt }: ImageProps) {
  return (
    <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 ratio */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
```

---

## 🏗️ Current Implementation

### Website Statistics
- **Total Pages**: 65+ pages
- **Components**: 41 custom React components
- **Blog Articles**: 5+ thought leadership pieces
- **API Endpoints**: 6 backend routes
- **Interactive Tools**: 2 calculators (AI ROI, Business Transformation)

### Implemented Features

#### ✅ Core Features
- [x] Homepage with hero, services grid, testimonials
- [x] About page with company information
- [x] Services pages (AI Strategy, Implementation, Analytics)
- [x] Products section (Agentic AI, MLOps, Analytics)
- [x] Solutions by industry
- [x] Blog system with articles
- [x] Contact forms
- [x] Newsletter subscription
- [x] Resource library
- [x] Case studies

#### ✅ Technical Features
- [x] SEO optimization (meta tags, schema markup, sitemap)
- [x] Mobile responsive design
- [x] Image optimization
- [x] Performance optimization
- [x] Google Analytics 4 integration (client & server-side)
- [x] Microsoft Clarity analytics
- [x] GDPR-compliant cookie consent system
- [x] Privacy preference center
- [x] Authentication setup (Clerk)
- [x] API routes for contact, newsletter, analytics
- [x] Docker deployment ready
- [x] CI/CD with GitHub Actions

#### ✅ Special Pages
- [x] AI ROI Calculator (`/ai-roi-calculator`)
- [x] Enterprise AI Transformation Guide
- [x] Agentic AI Platform
- [x] Data Quality Solutions
- [x] Pricing page
- [x] Get Started flow

---

## 📝 Content Update Guidelines

### Where to Update Content for SEO & LLM Optimization

#### 1. **Blog Content** (`/src/app/blog/`)
**Update Frequency**: Weekly
- Add new articles in subdirectories
- Include reading time, author info
- Add related content links
- Use schema markup for articles

```tsx
// Example: Creating a new blog post
src/app/blog/new-ai-trends-2025/page.tsx
- Include metadata
- Add schema markup
- Include social sharing
- Add newsletter signup
```

#### 2. **Meta Tags & SEO** (`/src/app/*/metadata.ts`)
**Update Frequency**: Monthly
- Title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags
- Twitter Cards
- Canonical URLs

```tsx
export const metadata: Metadata = {
  title: 'AI Consulting Services | DataTranquil',
  description: 'Enterprise AI consulting...',
  openGraph: { ... }
}
```

#### 3. **Schema Markup** (`/src/components/SchemaMarkup.tsx`)
**Update Frequency**: As needed
- Organization schema
- Article schema for blogs
- FAQ schema
- Product schema
- Service schema

#### 4. **Sitemap** (`/src/app/sitemap.ts`)
**Update Frequency**: When adding new pages
- Add new page URLs
- Set proper priorities
- Update changeFrequency

#### 5. **Landing Pages** (`/src/app/`)
**Update Frequency**: Quarterly
- Update hero content
- Refresh statistics
- Update testimonials
- Add new case studies

#### 6. **Resource Library** (`/public/downloads/`)
**Update Frequency**: Monthly
- Add new whitepapers
- Update guides
- Add case studies PDFs
- Update templates

---

## 🔍 SEO Optimization Checklist

### For New Content
- [ ] **Keywords**: Research and include target keywords
- [ ] **Title**: Optimize title tag (50-60 chars)
- [ ] **Description**: Write meta description (150-160 chars)
- [ ] **Headings**: Use proper H1, H2, H3 hierarchy
- [ ] **Images**: Add alt text to all images
- [ ] **Links**: Include internal links to related content
- [ ] **Schema**: Add appropriate schema markup
- [ ] **URL**: Use SEO-friendly URLs with keywords
- [ ] **Mobile**: Test mobile responsiveness
- [ ] **Speed**: Check page load speed (<2s)

### For LLM Optimization
- [ ] **Structured Data**: Use schema.org markup
- [ ] **Clear Headings**: Descriptive section headers
- [ ] **FAQ Sections**: Add Q&A format content
- [ ] **Lists & Tables**: Use structured formats
- [ ] **Definitions**: Include glossary terms
- [ ] **Examples**: Provide code/implementation examples
- [ ] **Summaries**: Add TLDR sections
- [ ] **Categories**: Clear content categorization

---

## 🔧 Regular Maintenance Tasks

### Daily
- Monitor site uptime
- Check form submissions
- Review analytics data
- Respond to inquiries

### Weekly
- [ ] Publish new blog article
- [ ] Update social media links
- [ ] Review and respond to newsletter signups
- [ ] Check for broken links
- [ ] Update testimonials/reviews

### Monthly
- [ ] Update meta descriptions
- [ ] Refresh homepage content
- [ ] Add new case studies
- [ ] Update resource library
- [ ] Review SEO performance
- [ ] Update pricing if needed
- [ ] Add new testimonials

### Quarterly
- [ ] Major content refresh
- [ ] Update all statistics
- [ ] Review and update all CTAs
- [ ] Comprehensive SEO audit
- [ ] Performance optimization
- [ ] Security updates
- [ ] Update documentation

---

## 📊 Key Files to Update Regularly

### Content Files
```
src/app/page.tsx                    # Homepage
src/app/blog/*/page.tsx            # Blog articles
src/app/case-studies/*/page.tsx    # Case studies
src/app/resources/page.tsx         # Resources
src/data/blogArticles.ts           # Blog data
```

### SEO Files
```
src/app/sitemap.ts                 # XML sitemap
src/app/robots.txt                 # Robots.txt
src/app/*/metadata.ts              # Page metadata
src/components/SchemaMarkup.tsx    # Schema markup
```

### Configuration Files
```
.env.local                          # Environment variables
next.config.js                      # Next.js config
package.json                        # Dependencies
```

---

## 🚀 Quick Update Commands

### Adding a New Blog Post
```bash
# Create new blog directory
mkdir src/app/blog/your-article-title

# Create page file
touch src/app/blog/your-article-title/page.tsx

# Update blog index
# Edit src/app/blog/page.tsx
```

### Updating Meta Tags
```bash
# Edit metadata for specific page
vim src/app/[page-name]/metadata.ts

# Test locally
npm run dev

# Build and check
npm run build
```

### Adding Schema Markup
```tsx
// In your page component
import { SchemaMarkup } from '@/components/SchemaMarkup';

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  // ... schema properties
};

<SchemaMarkup data={schema} />
```

---

## 📈 Performance Metrics to Track

### SEO Metrics
- Organic traffic growth
- Keyword rankings
- Page load speed
- Core Web Vitals
- Bounce rate
- Time on page

### Content Metrics
- Blog engagement
- Newsletter signups
- Resource downloads
- Form submissions
- Social shares

### Technical Metrics
- Lighthouse scores
- Build time
- Bundle size
- Error rate
- API response time

---

## 🔗 Important URLs

### Production
- Website: https://datatranquil.com
- API: https://datatranquil.com/api

### Development
- Local: http://localhost:3002
- Staging: [Add staging URL]

### Tools
- Analytics: [Google Analytics URL]
- Search Console: [Google Search Console URL]
- GitHub: https://github.com/DataTranquil/comapny-website

---

## 🔧 Testing & Validation

### Analytics Testing Checklist
- [ ] GA4 DebugView shows events
- [ ] Consent banner appears on first visit
- [ ] Cookie preferences persist
- [ ] Analytics loads only with consent
- [ ] Server-side events tracking
- [ ] Conversion events firing
- [ ] Custom dimensions populated
- [ ] Cross-domain tracking (if applicable)

### Privacy Testing
- [ ] Cookie consent required before tracking
- [ ] Preferences saved correctly
- [ ] Opt-out mechanisms working
- [ ] Data deletion requests processed
- [ ] GDPR compliance verified

---

## 📞 Support & Contact

For questions about implementation:
- Technical Issues: Create GitHub issue
- Analytics Setup: See `/scripts/setup-google-analytics.md`
- Privacy/GDPR: Check compliance documentation
- Content Updates: Contact content team
- SEO Questions: Contact marketing team
- Emergency: support@datatranquil.com

---

## 🔒 Privacy & Compliance Implementation

### GDPR Cookie Consent System

#### Cookie Preference Center (`/src/components/CookiePreferenceCenter.tsx`)
- **McKinsey-style design** with clean, professional UI
- **Granular control** over cookie categories:
  - Necessary (always enabled)
  - Performance (analytics)
  - Functional (preferences)
  - Targeting (marketing)
- **Persistent preferences** stored in localStorage
- **Consent timestamp** tracking for compliance

#### Cookie Categories Implementation
```typescript
// Cookie consent integration with GA4
if (preferences.performance) {
  // Load Google Analytics
  gtag.updateConsent(true, false);
}

if (preferences.functional) {
  // Load user preference features
  loadUserPreferences();
}

if (preferences.targeting) {
  // Load marketing pixels
  loadMarketingTools();
}
```

### Google Analytics 4 Integration

#### Client-Side Tracking (`/src/lib/gtag.ts`)
- **Consent-aware** initialization
- **Enhanced measurement** for all interactions
- **Custom events** for business metrics:
  - Lead generation ($500 value)
  - Newsletter signups ($50 value)
  - Calculator completions ($200 value)
  - Resource downloads ($100 value)
- **Scroll depth** tracking (25%, 50%, 75%, 90%)
- **Time on page** metrics
- **Web Vitals** reporting

#### Server-Side Tracking (`/src/app/api/analytics/track/route.ts`)
- **Measurement Protocol** implementation
- **Secure API** for backend events
- **User ID** tracking for cross-device
- **Enhanced e-commerce** support
- **Custom dimensions** for business data

#### GA4 Configuration Required
```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX        # Your GA4 Measurement ID
GA_API_SECRET=your-api-secret-here    # For server-side tracking
NEXT_PUBLIC_ENABLE_ANALYTICS=true     # Feature flag
```

### Privacy Features

#### Data Protection
- **IP anonymization** enabled by default
- **Consent mode** v2 implementation
- **Data retention** controls
- **User data deletion** API ready
- **Cookie flags**: SameSite=None; Secure

#### Compliance Tools
- **Privacy policy** page at `/privacy`
- **Cookie policy** at `/cookie-notice`
- **Data request** forms
- **Opt-out mechanisms**
- **Consent audit trail**

### Microsoft Clarity Integration
```typescript
// Clarity tracking (consent-aware)
if (preferences.performance && process.env.NEXT_PUBLIC_CLARITY_ID) {
  clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID);
}
```

---

## 📊 Analytics Implementation Details

### Event Tracking Architecture

#### Automatic Events (Enhanced Measurement)
- Page views
- Scrolls
- Outbound clicks
- Site search
- Video engagement
- File downloads
- Form interactions

#### Custom Business Events
```typescript
// Lead Generation
gtag.trackLead({
  value: 500,
  lead_type: 'contact_form',
  form_name: 'main_contact'
});

// ROI Calculator
gtag.trackCalculatorUsage('ai_roi', calculatedValue);

// Content Engagement
gtag.trackDownload('ai-guide.pdf', 'pdf');
```

### Conversion Tracking Setup

| Event | Value | Trigger |
|-------|--------|----------|
| generate_lead | $500 | Contact form submission |
| sign_up | $50 | Newsletter signup |
| calculator_complete | $200 | Calculator completion |
| file_download | $100 | Resource download |
| demo_request | $1000 | Demo booking |

### Custom Dimensions

| Dimension | Scope | Purpose |
|-----------|-------|----------|
| user_type | User | Segment by customer type |
| industry | Event | Track industry vertical |
| company_size | Event | B2B segmentation |
| content_depth | Event | Engagement tracking |
| lead_score | User | Lead qualification |

---

## 🚀 Deployment Architecture

### CI/CD Pipeline
```yaml
# GitHub Actions Workflow
1. Push to main branch
2. GitHub Actions triggered
3. Build Docker image
4. Push to registry
5. Deploy to VPS
6. Traefik routes traffic
```

### Docker Configuration
```dockerfile
# Production Dockerfile pattern
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables Pattern
```bash
# .env.local structure
NEXT_PUBLIC_SITE_URL=https://datatranquil.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (server-side only)
CLERK_SECRET_KEY=sk_live_xxxxx
RESEND_API_KEY=re_xxxxx
MONGODB_URI=mongodb://xxxxx

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CHAT=false
```

---

## 📚 Development Workflow

### Setting Up New Features

1. **Create Feature Branch**
```bash
git checkout -b feature/new-feature
```

2. **Implement Feature**
   - Add pages in `src/app/[feature]/`
   - Create components in `src/components/`
   - Add API routes if needed
   - Update navigation in `StableMegaMenu.tsx`

3. **Add SEO & Analytics**
   - Add metadata export
   - Include schema markup
   - Update sitemap.ts
   - Add event tracking

4. **Test & Validate**
```bash
npm run dev          # Development
npm run build        # Production build
npm run lint         # Linting
npm run typecheck    # Type checking
```

5. **Deploy**
```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
# Create PR to main
```

### Common Development Tasks

#### Adding a New Page
```bash
# 1. Create page directory and file
mkdir -p src/app/new-feature
touch src/app/new-feature/page.tsx

# 2. Add page component with metadata
# 3. Update navigation if needed
# 4. Add to sitemap.ts
# 5. Test locally
npm run dev
```

#### Creating a Reusable Component
```bash
# 1. Create component file
touch src/components/NewComponent.tsx

# 2. Define TypeScript interface
# 3. Implement component
# 4. Export from components/index.ts
# 5. Use in pages
```

#### Adding an API Endpoint
```bash
# 1. Create API route
mkdir -p src/app/api/new-endpoint
touch src/app/api/new-endpoint/route.ts

# 2. Implement GET/POST/PUT/DELETE handlers
# 3. Add validation and error handling
# 4. Test with curl or Postman
```

---

## 🎨 Design System

### Color Palette
```css
/* Brand Colors - Based on Logo */
--color-primary-gradient-start: #3b82f6;  /* Blue */
--color-primary-gradient-end: #8b5cf6;    /* Purple */
--color-secondary: #06b6d4;               /* Cyan/Teal */

/* Neutral Colors */
--color-gray-50: #f9fafb;
--color-gray-900: #111827;

/* Semantic Colors */
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
```

### Typography Scale
```css
/* Heading Sizes */
.text-6xl: 3.75rem;   /* Hero titles */
.text-4xl: 2.25rem;   /* Page titles */
.text-2xl: 1.5rem;    /* Section titles */
.text-xl: 1.25rem;    /* Subsections */
.text-base: 1rem;     /* Body text */
```

### Spacing System
```css
/* Consistent spacing scale */
spacing-4: 1rem;
spacing-8: 2rem;
spacing-16: 4rem;
spacing-24: 6rem;
spacing-32: 8rem;
```

---

Last Updated: September 16, 2025
Version: 2.0.0