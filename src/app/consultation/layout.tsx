import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free AI Consultation | Expert Strategy Session | DataTranquil',
  description: 'Schedule a free 60-minute AI consultation with DataTranquil experts. Get personalized recommendations for your AI transformation journey. Expert guidance on AI implementation, strategy, and ROI optimization.',
  keywords: 'AI consultation, free AI consultation, expert consultation, book demo, DataTranquil consultation, AI strategy session, AI transformation consultation, enterprise AI consulting',
  openGraph: {
    title: 'Book a Free AI Consultation - Expert Strategy Session',
    description: 'Schedule your free 60-minute AI consultation. Get expert guidance on AI implementation, strategy, and ROI optimization for your enterprise.',
    url: 'https://datatranquil.com/consultation',
    type: 'website',
    images: [
      {
        url: 'https://datatranquil.com/og-consultation.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Your Free AI Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free AI Consultation - Expert Strategy Session',
    description: 'Schedule your free 60-minute AI consultation. Get expert guidance on AI implementation and strategy.',
    images: ['https://datatranquil.com/twitter-consultation.jpg'],
  },
  alternates: {
    canonical: 'https://datatranquil.com/consultation',
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
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}