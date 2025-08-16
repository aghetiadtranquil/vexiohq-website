import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting San Francisco | #1 AI Consultants Bay Area | DataTranquil",
  description: "Leading AI consulting firm in San Francisco. Transform your business with strategic AI implementation. 40% cost reduction, 150+ projects delivered. Fortune 500 trusted.",
  keywords: "AI consulting San Francisco, AI consultants Bay Area, machine learning consulting SF, artificial intelligence consulting Silicon Valley, enterprise AI transformation",
  openGraph: {
    title: "AI Consulting San Francisco - Transform Your Business with DataTranquil",
    description: "San Francisco's premier AI consulting firm. Strategic AI advisory, machine learning implementation, and enterprise transformation. Get your free consultation.",
    url: "https://datatranquil.com/ai-consulting-san-francisco",
    type: "article",
    images: [
      {
        url: "https://datatranquil.com/images/ai-consulting-sf.jpg",
        width: 1200,
        height: 630,
        alt: "AI Consulting Services in San Francisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting San Francisco | DataTranquil",
    description: "Transform your business with SF's leading AI consultants. Strategic advisory & implementation.",
  },
  alternates: {
    canonical: "https://datatranquil.com/ai-consulting-san-francisco",
  },
};

export default function AIConsultingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}