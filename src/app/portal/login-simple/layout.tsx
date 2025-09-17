import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | DataTranquil Portal',
  description: 'Secure login to your DataTranquil customer portal',
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