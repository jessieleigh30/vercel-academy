import Link from 'next/link'
import { forwardRef } from 'react'

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg hover:from-blue-400 hover:to-green-400',
  secondary: 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white',
  outline: 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', href, onClick, disabled = false, type = 'button', className = '', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
    const variantClasses = buttonVariants[variant]
    const sizeClasses = buttonSizes[size]
    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()

    if (href && !disabled) {
      return (
        <Link
          href={href}
          className={combinedClasses}
          {...props}
        >
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'