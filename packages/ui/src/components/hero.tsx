interface HeroProps {
  title: string
  description: string
  primaryButton?: {
    text: string
    href: string
    variant?: 'primary' | 'secondary' | 'outline'
  }
  secondaryButton?: {
    text: string
    href: string
    isTextLink?: boolean
  }
  className?: string
}

export function Hero({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton, 
  className = '' 
}: HeroProps) {
  return (
    <div className={`bg-gray-50 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
          
          {(primaryButton || secondaryButton) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 px-8 py-4 text-base ${
                    primaryButton.variant === 'secondary'
                      ? 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm'
                      : primaryButton.variant === 'outline'
                      ? 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      : 'bg-gray-900 text-white shadow-sm hover:bg-gray-700'
                  }`}
                >
                  {primaryButton.text}
                </a>
              )}
              
              {secondaryButton && (
                <a 
                  href={secondaryButton.href} 
                  className={
                    secondaryButton.isTextLink 
                      ? "text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      : `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 px-8 py-4 text-base border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900`
                  }
                >
                  {secondaryButton.text}
                  {secondaryButton.isTextLink && <span aria-hidden="true">→</span>}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}