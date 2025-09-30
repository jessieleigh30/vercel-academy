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
  primary: 'bg-gray-900 text-white shadow-sm hover:bg-gray-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'
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