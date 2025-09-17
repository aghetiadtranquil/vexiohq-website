'use client';

import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export default function AnalyticsProductPage() {
  return (
    <ComingSoonTemplate
      title="Analytics Platform"
      description="AI-powered analytics platform delivering real-time insights and predictive intelligence for data-driven decision making."
      category="Product"
      launchDate="Available Now"
      features={[
        'Real-time Analytics',
        'Predictive Intelligence',
        'Custom Dashboards',
        'AI-Powered Insights'
      ]}
    />
  );
}