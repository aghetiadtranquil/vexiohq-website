export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is VexioHQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VexioHQ is a strategic AI advisory firm specializing in enterprise transformation through intelligent automation, advanced analytics, and AI implementation. We partner with executive teams to unlock transformative value and drive sustainable growth."
        }
      },
      {
        "@type": "Question",
        "name": "What services does VexioHQ offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VexioHQ offers three core services: 1) AI Strategy & Implementation - helping enterprises develop and deploy AI solutions, 2) Data & Analytics Excellence - transforming raw data into strategic assets, and 3) Digital Transformation - end-to-end transformation programs with process optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What is MoneyTrail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VexioExpense (formerly MoneyTrail) is VexioHQ's AI-powered expense management platform currently in development. It aims to streamline expense tracking and reporting with intelligent automation."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact VexioHQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact VexioHQ via email at team@vexiohq.com or by phone at (415) 390-5748. Our team is available Monday through Friday, 9AM-6PM PST, and we typically respond to emails within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does VexioHQ serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VexioHQ serves organizations across various industries including financial services, healthcare, retail, and technology sectors. We build AI-powered software products and provide consulting services."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}