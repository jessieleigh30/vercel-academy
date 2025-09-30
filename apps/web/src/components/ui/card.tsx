import { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  variant?: 'default' | 'glass' | 'elevated'
  hover?: boolean
  className?: string
}

const cardVariants = {
  default: 'bg-gray-800/50 border border-gray-700',
  glass: 'bg-gray-800/50 backdrop-blur-sm border border-gray-700',
  elevated: 'bg-gray-800 border border-gray-600 shadow-lg'
}

export function Card({ 
  children, 
  variant = 'glass', 
  hover = true, 
  className = '' 
}: CardProps) {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300'
  const variantClasses = cardVariants[variant]
  const hoverClasses = hover ? 'hover:bg-gray-800/70 hover:scale-105' : ''
  const combinedClasses = `${baseClasses} ${variantClasses} ${hoverClasses} ${className}`.trim()

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}

export interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  )
}

export interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}