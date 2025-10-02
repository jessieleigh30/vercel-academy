'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './button';

export interface NavigationItem {
  name: string;
  href: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  brandName?: string;
  brandHref?: string;
  ctaButton?: {
    text: string;
    href: string;
  };
}

export function Navigation({
  items,
  brandName = 'ACME',
  brandHref = '/',
  ctaButton = { text: 'Get Started', href: '/contact' },
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={brandHref} className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-gray-900">{brandName}</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {items.map((item) => {
            const isExternal = item.href.startsWith('http');
            return isExternal ? (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
            <div className="flex items-center justify-between">
              <Link href={brandHref} className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-gray-900">{brandName}</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {items.map((item) => {
                    const isExternal = item.href.startsWith('http');
                    return isExternal ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="py-6">
                  <Link
                    href={ctaButton.href}
                    className="-mx-3 block w-full px-3 py-2 text-center text-base font-semibold leading-7 text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {ctaButton.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
