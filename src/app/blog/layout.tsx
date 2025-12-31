import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Data Insights Blog | VexioHQ",
  description: "Expert insights on AI transformation, Agentic AI, data analytics, and enterprise technology. Learn from 36,000+ hours of real-world experience.",
  keywords: "AI blog, data analytics insights, enterprise AI, machine learning articles, digital transformation blog, Agentic AI resources",
  openGraph: {
    title: "VexioHQ Blog - AI & Enterprise Technology Insights",
    description: "Deep insights from Oracle BI to Agentic AI. Real experiences helping Fortune 500 companies transform.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}