import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ClerkProvider } from '@clerk/nextjs';
import * as gtag from '@/lib/gtag';
// import CookieConsent from "@/components/CookieConsent";
// import Footer from "@/components/Footer";
// import ErrorBoundary from "@/components/ErrorBoundary";
import SimpleFooter from "@/components/SimpleFooter";
// import SimpleCookieConsent from "@/components/SimpleCookieConsent";
import CookiePreferenceCenter from "@/components/CookiePreferenceCenter";
import StableMegaMenu from "@/components/StableMegaMenu";
// Service Worker disabled - was causing cache issues
// import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from "@/components/StructuredData";
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
  metadataBase: new URL('https://vexiohq.com'),
  title: {
    default: "AI Consulting San Francisco | VexioHQ - Strategic AI Advisory",
    template: "%s | VexioHQ AI Consulting"
  },
  description: "Top AI consulting firm in San Francisco. Transform your business with strategic AI implementation, machine learning solutions, and data analytics. Trusted by Fortune 500.",
  keywords: "AI consulting San Francisco, strategic AI advisory, AI transformation consulting, machine learning consultants bay area, enterprise AI implementation, data analytics consulting, AI strategy consulting, machine learning implementation",
  authors: [{ name: "VexioHQ", url: "https://vexiohq.com" }],
  creator: "VexioHQ",
  publisher: "VexioHQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "VexioHQ - #1 AI Consulting Firm in San Francisco",
    description: "Transform your business with San Francisco's leading AI consulting firm. Strategic AI advisory, implementation, and transformation services.",
    url: "https://vexiohq.com",
    siteName: "VexioHQ",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://vexiohq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VexioHQ - AI Consulting San Francisco",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VexioHQ - Strategic AI Advisory San Francisco",
    description: "Leading AI consulting and transformation services in the Bay Area",
    site: "@vexiohq",
    creator: "@vexiohq",
    images: ["https://vexiohq.com/twitter-image.jpg"],
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
    canonical: "https://vexiohq.com",
    languages: {
      'en-US': 'https://vexiohq.com',
    },
  },
  category: 'technology',
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VexioHQ",
  "alternateName": "VexioHQ Strategic AI Advisory",
  "url": "https://vexiohq.com",
  "logo": "https://vexiohq.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-415-390-5748",
    "contactType": "sales",
    "email": "team@vexiohq.com",
    "areaServed": ["US", "San Francisco", "Bay Area", "Silicon Valley"],
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/vexiohq",
    "https://twitter.com/vexiohq"
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
  "url": "https://vexiohq.com",
  "name": "VexioHQ",
  "description": "Strategic AI Advisory and Consulting Services",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://vexiohq.com/search?q={search_term_string}"
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
    "name": "VexioHQ"
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
        "@id": "https://vexiohq.com/services/strategic-ai-advisory",
        "name": "Strategic AI Advisory",
        "description": "C-suite AI strategy consulting and roadmap development for enterprise transformation",
        "serviceType": "Strategic Consulting",
        "provider": {
          "@type": "Organization",
          "name": "VexioHQ"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://vexiohq.com/contact"
        }
      },
      {
        "@type": "Service",
        "@id": "https://vexiohq.com/services/ai-implementation",
        "name": "AI Implementation",
        "description": "End-to-end AI solution deployment and integration with existing systems",
        "serviceType": "Implementation Services",
        "provider": {
          "@type": "Organization",
          "name": "VexioHQ"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://vexiohq.com/contact"
        }
      },
      {
        "@type": "Service",
        "@id": "https://vexiohq.com/services/machine-learning",
        "name": "Machine Learning Consulting",
        "description": "Custom ML model development and optimization for business outcomes",
        "serviceType": "Technical Consulting",
        "provider": {
          "@type": "Organization",
          "name": "VexioHQ"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://vexiohq.com/contact"
        }
      },
      {
        "@type": "Service",
        "@id": "https://vexiohq.com/services/data-analytics",
        "name": "Data Analytics Transformation",
        "description": "Enterprise data strategy and analytics implementation for informed decision making",
        "serviceType": "Data Services",
        "provider": {
          "@type": "Organization",
          "name": "VexioHQ"
        },
        "potentialAction": {
          "@type": "BuyAction",
          "target": "https://vexiohq.com/contact"
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
      "name": "What industries does VexioHQ serve?",
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
  "@id": "https://vexiohq.com/#localbusiness",
  "name": "VexioHQ",
  "alternateName": "VexioHQ AI Consulting San Francisco",
  "description": "Premier AI consulting firm in San Francisco specializing in enterprise AI transformation",
  "url": "https://vexiohq.com",
  "telephone": "+1-415-390-5748",
  "email": "team@vexiohq.com",
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
      "reviewBody": "VexioHQ transformed our business with their AI implementation. ROI exceeded expectations within 6 months."
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
        <link rel="canonical" href="https://vexiohq.com" />
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
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="/images/hero/ai-consulting-hero-optimized.webp" as="image" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" href="/images/hero/ai-consulting-hero-mobile-optimized.webp" as="image" type="image/webp" media="(max-width: 767px)" />
        
        {/* Prefetch high-probability navigation targets */}
        <link rel="prefetch" href="/ai-consulting-services" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/blog" />
        <link rel="prefetch" href="/enterprise-ai-transformation" />
        <link rel="prefetch" href="/ai-roi-calculator" />
        
        {/* Preload calculator HTML for improved LCP */}
        <link rel="preload" href="/calculators/business-transformation-calculator.html" as="document" />
        
        {/* Module preload for critical JavaScript */}
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main-app.js" />
        
        {/* Preload key fonts to prevent layout shift */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources - Let Next.js handle CSS loading automatically */}
        
        {/* Security headers - CSP temporarily disabled for Clerk debugging */}
        {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com https://*.clerk.accounts.dev https://*.clerk.dev https://*.clearkcdn.dev; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.clerk.accounts.dev https://*.clerk.dev https://*.clearkcdn.dev;" /> */}
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
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && process.env.NEXT_PUBLIC_GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                // Default consent mode
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'wait_for_update': 500
                });
                
                // Configure GA4
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                  cookie_domain: 'vexiohq.com',
                  cookie_flags: 'SameSite=None;Secure'
                });
              `}
            </Script>
          </>
        )}
        
        {/* Google Tag Manager (optional) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        )}
      </head>
      <body className={`${inter.className} antialiased`} itemScope itemType="https://schema.org/WebSite">
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe 
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0" 
              width="0" 
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <ClerkProvider>
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
          {/* Service Worker DISABLED - was causing cache issues */}
          {/* <ServiceWorkerRegistration /> */}
          {/* Core Structured Data Schemas */}
          <OrganizationSchema />
          <LocalBusinessSchema />
          <WebSiteSchema />
          {/* Removed Vercel analytics components as deploying to own server */}
          <noscript>
            <div style={{ padding: '20px', textAlign: 'center', background: '#f0f0f0' }}>
              This website works best with JavaScript enabled for full interactive features.
            </div>
          </noscript>
        </ClerkProvider>
      </body>
    </html>
  );
}