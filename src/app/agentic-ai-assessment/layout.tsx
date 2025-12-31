import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | Evaluate Your Organization | VexioHQ',
  description: 'Take our comprehensive AI readiness assessment to evaluate your organization\'s preparedness for agentic AI implementation. Get personalized recommendations and a detailed maturity report.',
  keywords: 'AI readiness assessment, AI maturity assessment, organizational AI assessment, agentic AI readiness, enterprise AI evaluation, AI adoption assessment, AI implementation readiness',
  openGraph: {
    title: 'AI Readiness Assessment - Evaluate Your AI Maturity | VexioHQ',
    description: 'Take our comprehensive AI readiness assessment to evaluate your organization\'s preparedness for agentic AI. Get personalized recommendations.',
    url: 'https://vexiohq.com/agentic-ai-assessment',
    type: 'website',
    images: [
      {
        url: 'https://vexiohq.com/og-ai-assessment.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Readiness Assessment Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Assessment - Evaluate Your AI Maturity',
    description: 'Take our comprehensive AI readiness assessment. Get personalized recommendations for your AI journey.',
    images: ['https://vexiohq.com/twitter-ai-assessment.jpg'],
  },
  alternates: {
    canonical: 'https://vexiohq.com/agentic-ai-assessment',
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

export default function AgenticAIAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}