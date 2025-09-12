import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// import CookieConsent from "@/components/CookieConsent";
// import Footer from "@/components/Footer";
// import ErrorBoundary from "@/components/ErrorBoundary";
import SimpleFooter from "@/components/SimpleFooter";
// import SimpleCookieConsent from "@/components/SimpleCookieConsent";
import CookiePreferenceCenter from "@/components/CookiePreferenceCenter";
import StableMegaMenu from "@/components/StableMegaMenu";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
// import Footer from "@/components/FooterSimple";
// import Navigation from "@/components/Navigation";
// Removed Vercel analytics imports as deploying to own server

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://datatranquil.com'),
  title: {
    default: "AI Consulting San Francisco | DataTranquil - Strategic AI Advisory",
    template: "%s | DataTranquil AI Consulting"
  },
  description: "Top AI consulting firm in San Francisco. Transform your business with strategic AI implementation, machine learning solutions, and data analytics. Trusted by Fortune 500.",
  keywords: "AI consulting San Francisco, strategic AI advisory, AI transformation consulting, machine learning consultants bay area, enterprise AI implementation, data analytics consulting, AI strategy consulting, machine learning implementation",
  authors: [{ name: "DataTranquil", url: "https://datatranquil.com" }],
  creator: "DataTranquil",
  publisher: "DataTranquil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DataTranquil - #1 AI Consulting Firm in San Francisco",
    description: "Transform your business with San Francisco's leading AI consulting firm. Strategic AI advisory, implementation, and transformation services.",
    url: "https://datatranquil.com",
    siteName: "DataTranquil",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://datatranquil.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DataTranquil - AI Consulting San Francisco",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataTranquil - Strategic AI Advisory San Francisco",
    description: "Leading AI consulting and transformation services in the Bay Area",
    site: "@datatranquil",
    creator: "@datatranquil",
    images: ["https://datatranquil.com/twitter-image.jpg"],
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
    google: "google-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  alternates: {
    canonical: "https://datatranquil.com",
    languages: {
      'en-US': 'https://datatranquil.com',
    },
  },
  category: 'technology',
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DataTranquil",
  "alternateName": "DataTranquil Strategic AI Advisory",
  "url": "https://datatranquil.com",
  "logo": "https://datatranquil.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-415-255-5501",
    "contactType": "sales",
    "email": "support@datatranquil.com",
    "areaServed": ["US", "San Francisco", "Bay Area", "Silicon Valley"],
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/datatranquil",
    "https://twitter.com/datatranquil"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "priceRange": "$$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://datatranquil.com",
  "name": "DataTranquil",
  "description": "Strategic AI Advisory and Consulting Services",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://datatranquil.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Consulting Services",
  "provider": {
    "@type": "Organization",
    "name": "DataTranquil"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "San Francisco"
    },
    {
      "@type": "State",
      "name": "California"
    },
    {
      "@type": "Country",
      "name": "United States"
    }
  ],
  "serviceType": "AI Consulting and Implementation",
  "category": ["Artificial Intelligence", "Machine Learning", "Data Analytics", "Digital Transformation"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Transformation Services",
    "itemListElement": [
      {
        "@type": "Service",
        "@id": "https://datatranquil.com/services/strategic-ai-advisory",
        "name": "Strategic AI Advisory",
        "description": "C-suite AI strategy consulting and roadmap development for enterprise transformation",
        "serviceType": "Strategic Consulting",
        "provider": {
          "@type": "Organization",
          "name": "DataTranquil"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://datatranquil.com/contact"
        }
      },
      {
        "@type": "Service",
        "@id": "https://datatranquil.com/services/ai-implementation",
        "name": "AI Implementation",
        "description": "End-to-end AI solution deployment and integration with existing systems",
        "serviceType": "Implementation Services",
        "provider": {
          "@type": "Organization",
          "name": "DataTranquil"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://datatranquil.com/contact"
        }
      },
      {
        "@type": "Service",
        "@id": "https://datatranquil.com/services/machine-learning",
        "name": "Machine Learning Consulting",
        "description": "Custom ML model development and optimization for business outcomes",
        "serviceType": "Technical Consulting",
        "provider": {
          "@type": "Organization",
          "name": "DataTranquil"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://datatranquil.com/contact"
        }
      },
      {
        "@type": "Service",
        "@id": "https://datatranquil.com/services/data-analytics",
        "name": "Data Analytics Transformation",
        "description": "Enterprise data strategy and analytics implementation for informed decision making",
        "serviceType": "Data Services",
        "provider": {
          "@type": "Organization",
          "name": "DataTranquil"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://datatranquil.com/contact"
        }
      }
    ]
  }
};

// Enhanced AI-Ready FAQ Schema
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI consulting and how can it benefit my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI consulting involves strategic advisory services to help businesses implement artificial intelligence and machine learning solutions. Benefits include improved efficiency, better decision-making through data insights, automated processes, and competitive advantages in your market."
      }
    },
    {
      "@type": "Question",
      "name": "How long does AI implementation typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI implementation timelines vary based on project scope and complexity. Simple AI solutions can be deployed in 2-3 months, while enterprise-wide AI transformations typically take 6-18 months. We provide detailed project timelines during our initial consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does DataTranquil serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve various industries including finance, healthcare, retail, manufacturing, technology, and professional services. Our AI solutions are tailored to each industry's specific needs and regulatory requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ROI of AI implementation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI implementation typically delivers ROI of 300-500% within the first two years. Benefits include cost reduction through automation, increased revenue through better insights, and improved customer satisfaction. Use our AI ROI Calculator for a customized estimate."
      }
    }
  ]
};

// Local Business Schema for San Francisco presence
const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://datatranquil.com/#localbusiness",
  "name": "DataTranquil",
  "alternateName": "DataTranquil AI Consulting San Francisco",
  "description": "Premier AI consulting firm in San Francisco specializing in enterprise AI transformation",
  "url": "https://datatranquil.com",
  "telephone": "+1-415-255-5501",
  "email": "support@datatranquil.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94102",
    "addressCountry": "US",
    "streetAddress": "Financial District"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check, Invoice",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewBody": "DataTranquil transformed our business with their AI implementation. ROI exceeded expectations within 6 months."
    }
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Enterprise AI Strategy",
    "AI Implementation",
    "Digital Transformation",
    "Business Intelligence",
    "Predictive Analytics"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "San Francisco Chamber of Commerce"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" itemScope itemType="https://schema.org/WebPage">
      <head>
        <link rel="canonical" href="https://datatranquil.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0070f3" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Advanced Resource Hints for Technical SEO Performance */}
        {/* DNS prefetch for faster domain resolution */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* Preconnect for critical third-party resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Preload critical resources for Core Web Vitals */}
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/hero/ai-consulting-hero-optimized.webp" as="image" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" href="/images/hero/ai-consulting-hero-mobile-optimized.webp" as="image" type="image/webp" media="(max-width: 767px)" />
        
        {/* Prefetch high-probability navigation targets */}
        <link rel="prefetch" href="/ai-consulting-services" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/blog" />
        <link rel="prefetch" href="/enterprise-ai-transformation" />
        <link rel="prefetch" href="/ai-roi-calculator" />
        
        {/* Module preload for critical JavaScript */}
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main-app.js" />
        
        {/* Preload key fonts to prevent layout shift */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources - Let Next.js handle CSS loading automatically */}
        
        {/* Security headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <Script
          id="service-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} itemScope itemType="https://schema.org/WebSite">
        {/* Skip to main content - hidden but accessible */}
        <a 
          href="#main-content" 
          className="absolute -left-full focus:left-4 top-4 bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200 z-[100]"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        {/* Stable Mega Menu Navigation - Simple Design */}
        <StableMegaMenu />
        <main id="main-content" role="main">
          {children}
        </main>
        {/* Simple Footer - Working version */}
        <SimpleFooter />
        {/* Privacy Preference Center - McKinsey-style cookie management */}
        <CookiePreferenceCenter />
        {/* Service Worker Registration for Progressive Enhancement */}
        <ServiceWorkerRegistration />
        {/* Removed Vercel analytics components as deploying to own server */}
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', background: '#f0f0f0' }}>
            This website works best with JavaScript enabled for full interactive features.
          </div>
        </noscript>
      </body>
    </html>
  );
}