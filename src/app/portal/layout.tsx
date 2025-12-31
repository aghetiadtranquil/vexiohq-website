import { Metadata } from 'next'

// Portal pages should NEVER be indexed by search engines
export const metadata: Metadata = {
  title: {
    template: '%s | VexioHQ Portal',
    default: 'Portal | VexioHQ'
  },
  description: 'Access your VexioHQ portal to manage AI projects and analytics',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
    'max-video-preview': -1,
    'max-image-preview': 'none'
  },
  // No social tags for portal pages
  openGraph: undefined,
  twitter: undefined,
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}