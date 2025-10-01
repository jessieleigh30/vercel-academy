import type { Metadata } from 'next';
import { Prata, Inter } from 'next/font/google';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

import './globals.css';

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
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
      </body>
    </html>
  );
}
