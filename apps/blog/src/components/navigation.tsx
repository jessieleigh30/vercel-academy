'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'

const navigation = [
  { name: 'Home', href: process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000' },
  { name: 'Blog', href: '/' },
  { name: 'About', href: `${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/about` },
  { name: 'Contact', href: `${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/contact` },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'} className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              ACME
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const isExternal = item.href.startsWith('http')
            return isExternal ? (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            href={`${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/contact`}
            size="sm"
          >
            Get Started
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-between">
              <Link href={process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'} className="-m-1.5 p-1.5">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  ACME
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isExternal = item.href.startsWith('http')
                    return isExternal ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6">
                  <Button
                    href={`${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/contact`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}