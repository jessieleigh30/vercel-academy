import type { Metadata } from 'next';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

import './globals.css';

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
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
