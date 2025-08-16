export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DataTranquil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DataTranquil is a strategic AI advisory firm specializing in enterprise transformation through intelligent automation, advanced analytics, and AI implementation. We partner with executive teams to unlock transformative value and drive sustainable growth."
        }
      },
      {
        "@type": "Question",
        "name": "What services does DataTranquil offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DataTranquil offers three core services: 1) AI Strategy & Implementation - helping enterprises develop and deploy AI solutions, 2) Data & Analytics Excellence - transforming raw data into strategic assets, and 3) Digital Transformation - end-to-end transformation programs with process optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What is MoneyTrail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MoneyTrail is DataTranquil's flagship AI-powered expense management platform. It demonstrates the transformative power of intelligent automation with 90% processing time reduction, 99.7% OCR accuracy, and an average of $2.4M annual savings per client."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact DataTranquil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact DataTranquil via email at support@datatranquil.com or by phone at (415) 255-5501. Our team is available Monday through Friday, 9AM-6PM PST, and we typically respond to emails within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does DataTranquil serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DataTranquil serves forward-thinking organizations across various industries, with particular expertise in financial services, healthcare, retail, and technology sectors. We've analyzed over 500M data points and deployed 150+ AI models for enterprises globally."
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