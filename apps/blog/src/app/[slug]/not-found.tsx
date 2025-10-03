import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Post Not Found | ACME Blog',
  description: 'The blog post you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1
            className="text-8xl sm:text-9xl font-black uppercase tracking-tighter text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            404
          </h1>
          <div className="h-2 w-32 bg-gray-900 mx-auto mb-8" />
        </div>

        <h2
          className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Post Not Found
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          The blog post you're looking for doesn't exist or has been moved. Let's get you back to reading great content!
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wide text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
