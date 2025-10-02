'use client';

import Link from 'next/link';

interface NotFoundProps {
  variant?: 'blog' | 'web';
  homeHref?: string;
  homeLabel?: string;
}

export function NotFound({ variant = 'web', homeHref = '/', homeLabel = 'Back to Home' }: NotFoundProps) {
  const isBlog = variant === 'blog';

  if (isBlog) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <div className="mb-8">
            <h1
              className="text-[12rem] sm:text-[16rem] font-black uppercase leading-none text-gray-900 tracking-tighter"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              404
            </h1>
            <div className="h-2 w-32 bg-blue-600 mx-auto -mt-8"></div>
          </div>

          {/* Error Message */}
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Page Not Found
          </h2>

          <p
            className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might
            be incorrect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={homeHref}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide text-white bg-blue-600 rounded-none hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ← {homeLabel}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide text-gray-900 bg-white border-2 border-gray-900 rounded-none hover:bg-gray-900 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Web variant
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 lg:px-8">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[12rem] sm:text-[16rem] font-black uppercase leading-none bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tighter">
            404
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto -mt-8 rounded-full"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-foreground mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Page Not Found
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might
          be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={homeHref}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
          >
            ← {homeLabel}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:bg-card transition-all duration-200"
          >
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4">Need help? Try these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
