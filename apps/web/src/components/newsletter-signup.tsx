'use client'

import { useState } from 'react'
import { subscribeNewsletter } from '@repo/api/brand'
import { Button } from './button'

interface NewsletterSignupProps {
  className?: string
  variant?: 'default' | 'compact' | 'dark'
}

export function NewsletterSignup({ className = '', variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) return
    
    setStatus('loading')
    
    try {
      const result = await subscribeNewsletter(email.trim())
      setStatus('success')
      setMessage(result.message)
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setMessage('')
  }

  if (variant === 'dark') {
    return (
      <div className={`${className}`}>
        {status === 'success' ? (
          <div>
            <div className="text-green-400 mb-2" style={{ fontFamily: 'var(--font-body)' }}>Success!</div>
            <p className="text-sm text-gray-300 mb-4" style={{ fontFamily: 'var(--font-body)' }}>{message}</p>
            <button
              onClick={resetForm}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              style={{ fontFamily: 'var(--font-body)' }}
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || !email.trim()}
              className="px-6 py-3 bg-white text-gray-900 font-black uppercase tracking-wide hover:bg-gray-100 transition-colors disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-2 text-sm text-red-400" style={{ fontFamily: 'var(--font-body)' }}>{message}</p>
        )}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        {status === 'success' ? (
          <div className="text-center">
            <div className="text-green-400 mb-2">Success!</div>
            <p className="text-sm text-gray-300 mb-4">{message}</p>
            <button
              onClick={resetForm}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status === 'loading'}
            />
            <Button
              type="submit"
              disabled={status === 'loading' || !email.trim()}
              size="sm"
              className="px-4 py-2 rounded-lg"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </Button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-2 text-sm text-red-400">{message}</p>
        )}
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Stay in the Loop!
        </h3>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Get the latest updates, tips, and exclusive content delivered straight to your inbox!
        </p>
      </div>

      {status === 'success' ? (
        <div className="mx-auto mt-8 max-w-md text-center">
          <div className="text-green-400 text-2xl mb-4">Success!</div>
          <h4 className="text-xl font-semibold text-white mb-2">Success!</h4>
          <p className="text-gray-300 mb-6">{message}</p>
          <Button
            onClick={resetForm}
            variant="primary"
          >
            Subscribe Another Email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              disabled={status === 'loading'}
            />
            <Button
              type="submit"
              disabled={status === 'loading' || !email.trim()}
              size="lg"
              className="px-8 py-4"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          {status === 'error' && (
            <p className="mt-4 text-center text-red-400">{message}</p>
          )}
          <p className="mt-4 text-center text-sm text-gray-400">
            No spam, unsubscribe at any time. We respect your privacy!
          </p>
        </form>
      )}
    </div>
  )
}