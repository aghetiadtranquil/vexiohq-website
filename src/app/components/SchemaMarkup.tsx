export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VexioHQ",
    "alternateName": "VexioHQ Strategic AI Advisory",
    "url": "https://vexiohq.com",
    "logo": "https://vexiohq.com/logo.png",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-415-390-5748",
      "contactType": "sales",
      "email": "team@vexiohq.com",
      "areaServed": "US",
      "availableLanguage": ["en"]
    }],
    "sameAs": [
      "https://www.linkedin.com/company/vexiohq",
      "https://twitter.com/vexiohq"
    ],
    "description": "VexioHQ is a strategic AI advisory firm specializing in enterprise transformation through intelligent automation, advanced analytics, and AI implementation."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VexioHQ",
    "url": "https://vexiohq.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vexiohq.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting and Digital Transformation",
    "provider": {
      "@type": "Organization",
      "name": "VexioHQ"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI and Data Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Strategy & Implementation",
            "description": "Enterprise-grade AI transformation strategies from roadmap development to full-scale deployment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data & Analytics Excellence",
            "description": "Transform raw data into strategic assets with advanced analytics and predictive modeling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "End-to-end digital transformation programs with process optimization and technology integration"
          }
        }
      ]
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MoneyTrail",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "url": "https://moneytrail.vexiohq.com",
    "description": "AI-powered expense management platform for modern enterprises seeking financial clarity and control",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}