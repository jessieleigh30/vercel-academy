import type { Metadata } from 'next';
import { Prata, Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  title: 'ACME Blog - Insights from Our Team',
  description: 'Insights, tutorials, and stories from the ACME team. Building the future, one post at a time.',
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
      </body>
    </html>
  );
}
