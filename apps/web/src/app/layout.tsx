import type { Metadata } from 'next';

import './globals.css';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

export const metadata: Metadata = {
  title: 'ACME Corporation - Building the Future',
  description: 'We create amazing digital experiences that make people smile! From creative designs to powerful code - we\'ve got you covered.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
