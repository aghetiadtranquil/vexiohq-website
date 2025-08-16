export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataTranquil",
    "alternateName": "DataTranquil Strategic AI Advisory",
    "url": "https://datatranquil.com",
    "logo": "https://datatranquil.com/logo.png",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-415-255-5501",
      "contactType": "sales",
      "email": "support@datatranquil.com",
      "areaServed": "US",
      "availableLanguage": ["en"]
    }],
    "sameAs": [
      "https://www.linkedin.com/company/datatranquil",
      "https://twitter.com/datatranquil"
    ],
    "description": "DataTranquil is a strategic AI advisory firm specializing in enterprise transformation through intelligent automation, advanced analytics, and AI implementation."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DataTranquil",
    "url": "https://datatranquil.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://datatranquil.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Consulting and Digital Transformation",
    "provider": {
      "@type": "Organization",
      "name": "DataTranquil"
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
    "url": "https://moneytrail.datatranquil.com",
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