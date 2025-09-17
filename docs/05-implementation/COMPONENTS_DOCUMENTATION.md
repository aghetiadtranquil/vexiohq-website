# Component Documentation

## Overview
This document provides detailed documentation for all new components added to the DataTranquil website during the recent development phases.

## Component Index

1. [NewsletterSignup](#newslettersignup)
2. [ReadingTime](#readingtime)
3. [RelatedContent](#relatedcontent)
4. [SocialSharing](#socialsharing)
5. [ComingSoonTemplate](#comingsoontemplate)

---

## NewsletterSignup

### Purpose
Captures email addresses for newsletter subscriptions and lead generation.

### Location
`/src/components/NewsletterSignup.tsx`

### Props
```typescript
interface NewsletterSignupProps {
  variant?: 'default' | 'inline' | 'modal';
  theme?: 'light' | 'dark';
  showPrivacy?: boolean;
}
```

### Features
- Email validation (regex pattern)
- Loading states during submission
- Success/error message display
- GDPR compliance messaging
- Responsive design
- API integration ready

### Usage Example
```tsx
import NewsletterSignup from '@/components/NewsletterSignup';

// Default usage
<NewsletterSignup />

// With custom props
<NewsletterSignup 
  variant="inline" 
  theme="dark" 
  showPrivacy={true} 
/>
```

### API Integration
- **Endpoint**: `/api/newsletter`
- **Method**: POST
- **Payload**: `{ email: string }`
- **Response**: `{ success: boolean, message: string }`

### Styling
- Uses Tailwind CSS classes
- Customizable through variant prop
- Responsive breakpoints included
- Animation on hover/focus

---

## ReadingTime

### Purpose
Calculates and displays estimated reading time for articles.

### Location
`/src/components/ReadingTime.tsx`

### Props
```typescript
interface ReadingTimeProps {
  content: string;
  wordsPerMinute?: number; // Default: 200
  showIcon?: boolean;
  className?: string;
}
```

### Features
- Automatic word count calculation
- Configurable reading speed
- Formatted display (e.g., "5 min read")
- Optional icon display
- Lightweight and performant

### Usage Example
```tsx
import ReadingTime from '@/components/ReadingTime';

// Basic usage
<ReadingTime content={articleContent} />

// With custom reading speed
<ReadingTime 
  content={articleContent} 
  wordsPerMinute={250}
  showIcon={true}
/>
```

### Algorithm
```typescript
const wordCount = content.trim().split(/\s+/).length;
const readingTime = Math.ceil(wordCount / wordsPerMinute);
```

---

## RelatedContent

### Purpose
Displays related articles or content recommendations to increase engagement.

### Location
`/src/components/RelatedContent.tsx`

### Props
```typescript
interface RelatedContentProps {
  currentArticleId: string;
  category?: string;
  tags?: string[];
  limit?: number; // Default: 3
  layout?: 'grid' | 'list';
}
```

### Features
- Smart content matching algorithm
- Category and tag-based filtering
- Excludes current article
- Responsive grid/list layouts
- Thumbnail image support
- Reading time display

### Usage Example
```tsx
import RelatedContent from '@/components/RelatedContent';

// Basic usage
<RelatedContent 
  currentArticleId="ai-implementation-guide"
  category="AI Strategy"
/>

// With tags and custom limit
<RelatedContent 
  currentArticleId="current-id"
  tags={['AI', 'Enterprise', 'Strategy']}
  limit={4}
  layout="grid"
/>
```

### Content Matching Algorithm
1. Filters articles by matching category
2. Scores articles by tag overlap
3. Sorts by relevance score
4. Returns top N articles (limit)

---

## SocialSharing

### Purpose
Provides social media sharing functionality for content pages.

### Location
`/src/components/SocialSharing.tsx`

### Props
```typescript
interface SocialSharingProps {
  url: string;
  title: string;
  description?: string;
  platforms?: ('twitter' | 'linkedin' | 'facebook' | 'email')[];
  layout?: 'horizontal' | 'vertical' | 'floating';
  showLabels?: boolean;
}
```

### Features
- Multiple platform support
- Custom share messages
- URL encoding
- Click tracking ready
- Responsive design
- Floating/fixed positioning option

### Usage Example
```tsx
import SocialSharing from '@/components/SocialSharing';

// Basic usage
<SocialSharing 
  url="https://datatranquil.com/blog/article"
  title="Check out this article"
/>

// With specific platforms and layout
<SocialSharing 
  url={articleUrl}
  title={articleTitle}
  description={articleExcerpt}
  platforms={['twitter', 'linkedin']}
  layout="floating"
  showLabels={true}
/>
```

### Platform URLs
```typescript
const shareUrls = {
  twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  email: `mailto:?subject=${title}&body=${description}%0A%0A${url}`
};
```

---

## ComingSoonTemplate

### Purpose
Placeholder template for pages under development.

### Location
`/src/components/ComingSoonTemplate.tsx`

### Props
```typescript
interface ComingSoonTemplateProps {
  title: string;
  description?: string;
  launchDate?: string;
  showNewsletter?: boolean;
  features?: string[];
  contactEmail?: string;
}
```

### Features
- Countdown timer (optional)
- Newsletter signup integration
- Feature list preview
- Contact information
- Responsive design
- SEO-friendly

### Usage Example
```tsx
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

// Basic usage
<ComingSoonTemplate 
  title="AI Assessment Tool"
  description="Our comprehensive AI readiness assessment is coming soon"
/>

// With full features
<ComingSoonTemplate 
  title="Enterprise Portal"
  description="Access your AI implementation dashboard"
  launchDate="2025-01-15"
  showNewsletter={true}
  features={[
    'Real-time analytics',
    'Project tracking',
    'Team collaboration',
    'Resource library'
  ]}
  contactEmail="portal@datatranquil.com"
/>
```

### Countdown Timer Logic
```typescript
const calculateTimeLeft = () => {
  const difference = +new Date(launchDate) - +new Date();
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};
```

---

## Component Best Practices

### 1. Import Organization
```tsx
// External imports first
import React from 'react';
import { useState, useEffect } from 'react';

// Internal imports
import styles from './Component.module.css';

// Type imports
import type { ComponentProps } from './types';
```

### 2. Error Handling
All components include proper error handling:
```tsx
try {
  // Component logic
} catch (error) {
  console.error('Component error:', error);
  // Fallback UI
}
```

### 3. Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### 4. Performance
- Lazy loading where appropriate
- Memoization for expensive calculations
- Debouncing for user inputs
- Code splitting for large components

### 5. Testing Considerations
Each component is designed to be testable:
```tsx
// Component exports for testing
export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Test data attributes
<button data-testid="submit-button">Submit</button>
```

---

## Styling Guidelines

### Tailwind CSS Classes
All components use Tailwind CSS with consistent patterns:

```tsx
// Base classes
const baseStyles = "px-4 py-2 rounded-lg transition-all duration-200";

// Variant classes
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
};

// Responsive classes
const responsive = "w-full md:w-auto lg:max-w-md";
```

### Dark Mode Support
Components include dark mode variants:
```tsx
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  {/* Content */}
</div>
```

---

## API Integration

### Standard Response Format
All component APIs follow this format:
```typescript
interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
```

### Error States
Components handle these error states:
1. Network errors
2. Validation errors
3. Server errors (500)
4. Rate limiting (429)
5. Not found (404)

---

## Future Enhancements

### Planned Features
1. **NewsletterSignup**
   - Double opt-in flow
   - Preference management
   - A/B testing variants

2. **ReadingTime**
   - Audio version time estimate
   - Complexity scoring
   - Multi-language support

3. **RelatedContent**
   - AI-powered recommendations
   - User behavior tracking
   - Personalization

4. **SocialSharing**
   - More platforms (Reddit, WhatsApp)
   - Share count display
   - Custom styling themes

5. **ComingSoonTemplate**
   - Progress indicators
   - Beta signup flow
   - Waitlist management

---

## Maintenance Notes

### Dependencies
```json
{
  "react": "^18.2.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "lucide-react": "^0.263.1"
}
```

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Metrics
- Bundle size: < 10KB per component
- First paint: < 100ms
- Interactive: < 200ms

---

**Document Version**: 1.0  
**Last Updated**: December 13, 2024  
**Author**: DataTranquil Development Team