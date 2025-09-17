import Script from 'next/script';

interface SchemaMarkupProps {
  data: any;
}

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DataTranquil",
  "url": "https://datatranquil.com",
  "logo": "https://datatranquil.com/logo.png",
  "description": "Enterprise AI transformation and consulting services",
  "sameAs": [
    "https://twitter.com/datatranquil",
    "https://linkedin.com/company/datatranquil"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0100",
    "contactType": "sales",
    "availableLanguage": ["en"]
  }
};

export const serviceSchema = (service: {
  name: string;
  description: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": service.provider || "DataTranquil"
  },
  "serviceType": service.serviceType || "AI Consulting",
  "areaServed": service.areaServed || "Global"
});

export const productSchema = (product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": product.brand || "DataTranquil"
  },
  "offers": product.offers ? {
    "@type": "Offer",
    "price": product.offers.price,
    "priceCurrency": product.offers.priceCurrency
  } : undefined
});

export const articleSchema = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "publisher": {
    "@type": "Organization",
    "name": "DataTranquil",
    "logo": {
      "@type": "ImageObject",
      "url": "https://datatranquil.com/logo.png"
    }
  },
  "image": article.image
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});