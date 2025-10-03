import type { Metadata } from 'next';
import { Prata, Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

import './globals.css';

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: true,
  preload: true,
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BLOG_URL || 'http://localhost:3001'),
  title: {
    default: 'ACME Blog - Insights from Our Team',
    template: '%s | ACME Blog',
  },
  description: 'Insights, tutorials, and stories from the ACME team. Building the future, one post at a time.',
  keywords: ['ACME', 'blog', 'tech insights', 'tutorials', 'web development', 'design'],
  authors: [{ name: 'ACME Team' }],
  creator: 'ACME Corporation',
  publisher: 'ACME Corporation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'ACME Blog',
    title: 'ACME Blog - Insights from Our Team',
    description: 'Insights, tutorials, and stories from the ACME team.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ACME Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACME Blog - Insights from Our Team',
    description: 'Insights, tutorials, and stories from the ACME team.',
    images: ['/og-image.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prata.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
