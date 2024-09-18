import './globals.css';
import './utilities.css'; // Add this line
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Univation',
  description: 'Connect with university students in seconds.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logos/univation-circle-logo.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [
      { url: '/logos/univation-circle-logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createClientComponentClient();

  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <body className="flex min-h-screen w-full flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
