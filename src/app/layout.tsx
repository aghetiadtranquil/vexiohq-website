import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DataTranquil - AI-Powered Data Solutions',
  description: 'Transform your business with intelligent automation, advanced analytics, and cutting-edge AI technologies.',
  keywords: 'AI, Data Analytics, Automation, Machine Learning, Business Intelligence',
  openGraph: {
    title: 'DataTranquil - AI-Powered Data Solutions',
    description: 'Transform your business with intelligent automation, advanced analytics, and cutting-edge AI technologies.',
    url: 'https://datatranquil.com',
    siteName: 'DataTranquil',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataTranquil - AI-Powered Data Solutions',
    description: 'Transform your business with intelligent automation, advanced analytics, and cutting-edge AI technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}