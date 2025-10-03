'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1
            className="text-6xl sm:text-8xl font-black uppercase tracking-tighter text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Oops!
          </h1>
          <div className="h-2 w-32 bg-gray-900 mx-auto mb-8" />
        </div>

        <h2
          className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Something went wrong
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          We encountered an unexpected error while loading this page. Don't worry, it's not your fault!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wide text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wide text-gray-900 bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Back to Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-900 break-words">{error.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
