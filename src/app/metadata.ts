import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DataTranquil - Strategic AI Advisory & Digital Transformation Consulting',
  description: 'Transform your enterprise with DataTranquil\'s AI-powered solutions. Expert consulting in AI strategy, data analytics, and digital transformation. Featured: MoneyTrail intelligent expense management platform.',
  openGraph: {
    title: 'DataTranquil - Strategic AI Advisory & Digital Transformation',
    description: 'Partner with executive teams to unlock transformative value through intelligent automation, advanced analytics, and strategic AI implementation. 500M+ data points analyzed, 150+ AI models deployed.',
    url: 'https://datatranquil.com',
    siteName: 'DataTranquil',
    type: 'website',
    images: [
      {
        url: 'https://datatranquil.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DataTranquil - Strategic AI Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataTranquil - Strategic AI Advisory & Digital Transformation',
    description: 'Transform your enterprise with AI. Expert consulting in AI strategy, data analytics & digital transformation. 99.7% client satisfaction.',
    images: ['https://datatranquil.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://datatranquil.com',
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