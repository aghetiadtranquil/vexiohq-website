import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VexioHQ - Strategic AI Advisory & Digital Transformation Consulting',
  description: 'Transform your enterprise with VexioHQ\'s AI-powered solutions. Expert consulting in AI strategy, data analytics, and digital transformation. Featured: MoneyTrail intelligent expense management platform.',
  openGraph: {
    title: 'VexioHQ - Strategic AI Advisory & Digital Transformation',
    description: 'Partner with executive teams to unlock transformative value through intelligent automation, advanced analytics, and strategic AI implementation. 70+ projects delivered.',
    url: 'https://vexiohq.com',
    siteName: 'VexioHQ',
    type: 'website',
    images: [
      {
        url: 'https://vexiohq.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VexioHQ - Strategic AI Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VexioHQ - Strategic AI Advisory & Digital Transformation',
    description: 'Transform your enterprise with AI. Expert consulting in AI strategy, data analytics & digital transformation. San Francisco based.',
    images: ['https://vexiohq.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://vexiohq.com',
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