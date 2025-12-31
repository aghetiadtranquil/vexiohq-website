import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | VexioHQ Portal',
  description: 'Secure login to your VexioHQ customer portal',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}