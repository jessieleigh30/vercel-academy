'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Blog post error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-8">
      <div className="text-center max-w-2xl">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="text-[8rem] leading-none">⚠️</div>
          <div className="h-2 w-32 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Error Message */}
        <h1
          className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Failed to Load Post
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          We couldn't load this blog post. This might be a temporary issue.
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-900 break-all">{error.message}</p>
            {error.digest && <p className="text-xs text-red-700 mt-2">Error ID: {error.digest}</p>}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide text-white bg-blue-600 rounded-none hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide text-gray-900 bg-white border-2 border-gray-900 rounded-none hover:bg-gray-900 hover:text-white transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
