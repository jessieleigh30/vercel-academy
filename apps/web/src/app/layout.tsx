import type { Metadata } from 'next';
import { Prata, Inter, JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

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

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'),
  title: {
    default: 'ACME Corporation - Building the Future',
    template: '%s | ACME Corporation',
  },
  description:
    "We create amazing digital experiences that make people smile! From creative designs to powerful code - we've got you covered.",
  keywords: ['ACME', 'creative agency', 'web design', 'digital solutions', 'innovative technology'],
  authors: [{ name: 'ACME Corporation' }],
  creator: 'ACME Corporation',
  publisher: 'ACME Corporation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'ACME Corporation',
    title: 'ACME Corporation - Building the Future',
    description: "We're a creative agency focused on bold design and innovative solutions.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ACME Corporation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACME Corporation - Building the Future',
    description: "We're a creative agency focused on bold design and innovative solutions.",
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
    <html lang="en" className={`${prata.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
