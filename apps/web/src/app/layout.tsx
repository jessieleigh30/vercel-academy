import type { Metadata } from 'next';
import { Prata, Inter, JetBrains_Mono } from 'next/font/google';

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
  title: 'ACME Corporation - Building the Future',
  description:
    "We create amazing digital experiences that make people smile! From creative designs to powerful code - we've got you covered.",
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
      </body>
    </html>
  );
}
