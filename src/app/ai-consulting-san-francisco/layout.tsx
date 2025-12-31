import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting San Francisco | #1 AI Consultants Bay Area | VexioHQ",
  description: "Leading AI consulting firm in San Francisco. Transform your business with strategic AI implementation. 70+ projects delivered.",
  keywords: "AI consulting San Francisco, AI consultants Bay Area, machine learning consulting SF, artificial intelligence consulting Silicon Valley, enterprise AI transformation",
  openGraph: {
    title: "AI Consulting San Francisco - Transform Your Business with VexioHQ",
    description: "San Francisco's premier AI consulting firm. Strategic AI advisory, machine learning implementation, and enterprise transformation. Get your free consultation.",
    url: "https://vexiohq.com/ai-consulting-san-francisco",
    type: "article",
    images: [
      {
        url: "https://vexiohq.com/images/ai-consulting-sf.jpg",
        width: 1200,
        height: 630,
        alt: "AI Consulting Services in San Francisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting San Francisco | VexioHQ",
    description: "Transform your business with SF's leading AI consultants. Strategic advisory & implementation.",
  },
  alternates: {
    canonical: "https://vexiohq.com/ai-consulting-san-francisco",
  },
};

export default function AIConsultingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}