import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI ROI Calculator - Calculate AI ROI for Your Business | DataTranquil',
  description: 'Use our AI ROI calculator to calculate AI ROI for your organization. Get accurate projections based on industry, company size, and use cases. Calculate your AI return on investment now.',
  keywords: 'AI ROI calculator, calculate AI ROI, AI return on investment, ROI calculator, AI investment calculator, AI cost benefit analysis, calculate ROI AI implementation',
  openGraph: {
    title: 'AI ROI Calculator - Calculate Your AI Return on Investment',
    description: 'Calculate AI ROI instantly with our comprehensive calculator. Industry-specific models, 500+ implementations analyzed. See your potential returns now.',
    url: 'https://datatranquil.com/ai-roi-calculator',
    type: 'website',
    images: [
      {
        url: 'https://datatranquil.com/og-ai-roi-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'AI ROI Calculator - Calculate Your Return on Investment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI ROI Calculator - Calculate Your AI Return on Investment',
    description: 'Calculate AI ROI instantly with our comprehensive calculator. Industry-specific models, 500+ implementations analyzed.',
    images: ['https://datatranquil.com/twitter-ai-roi-calculator.jpg'],
  },
  alternates: {
    canonical: 'https://datatranquil.com/ai-roi-calculator',
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

export default function AIROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}