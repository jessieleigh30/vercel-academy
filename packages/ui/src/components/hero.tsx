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
  backgroundImage?: string
  layout?: 'centered' | 'split' | 'overlay'
  className?: string
}

export function Hero({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  backgroundImage,
  layout = 'split',
  className = '' 
}: HeroProps) {
  if (layout === 'overlay' && backgroundImage) {
    return (
      <div className={`relative min-h-screen flex items-center ${className}`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-900"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-display-sm sm:text-display-md lg:text-display-lg font-black uppercase text-white tracking-tighter leading-none">
              {title}
            </h1>
            <p className="mt-12 text-xl sm:text-2xl font-body leading-relaxed text-gray-100 font-normal max-w-2xl">
              {description}
            </p>
            
            {(primaryButton || secondaryButton) && (
              <div className="mt-12 flex items-center gap-x-6">
                {primaryButton && (
                  <a
                    href={primaryButton.href}
                    className="bg-blue-600 text-white font-display font-bold px-10 py-5 rounded-none uppercase tracking-wide text-sm hover:bg-blue-700 transition-colors duration-200"
                  >
                    {primaryButton.text}
                  </a>
                )}
                
                {secondaryButton && (
                  <a 
                    href={secondaryButton.href} 
                    className="text-white font-display font-bold uppercase tracking-wide text-sm hover:text-blue-400 transition-colors duration-200 border-b-2 border-white hover:border-blue-400"
                  >
                    {secondaryButton.text}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'split') {
    return (
      <div className={`bg-white ${className}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Text Content */}
              <div className="lg:order-1">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-gray-900 tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                  {title}
                </h1>
                <p className="mt-12 text-xl sm:text-2xl leading-relaxed text-gray-600 font-normal" style={{ fontFamily: 'var(--font-body)' }}>
                  {description}
                </p>
                
                {(primaryButton || secondaryButton) && (
                  <div className="mt-12 flex items-center gap-x-6">
                    {primaryButton && (
                      <a
                        href={primaryButton.href}
                        className="bg-blue-600 text-white font-display font-bold px-10 py-5 rounded-none uppercase tracking-wide text-sm hover:bg-blue-700 transition-colors duration-200"
                      >
                        {primaryButton.text}
                      </a>
                    )}
                    
                    {secondaryButton && (
                      <a 
                        href={secondaryButton.href} 
                        className="text-gray-900 font-display font-bold uppercase tracking-wide text-sm hover:text-blue-600 transition-colors duration-200 border-b-2 border-gray-900 hover:border-blue-600"
                      >
                        {secondaryButton.text}
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              {/* Image/Visual Space */}
              <div className="lg:order-2">
                {backgroundImage ? (
                  <div className="aspect-square bg-gray-900 rounded-none overflow-hidden">
                    <img 
                      src={backgroundImage} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-none flex items-center justify-center">
                    <div className="text-6xl font-black text-white opacity-20">ACME</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Fallback to centered layout
  return (
    <div className={`bg-white py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-display text-display-sm sm:text-display-md lg:text-display-lg font-black uppercase text-gray-900 tracking-tighter leading-none">
            {title}
          </h1>
          <p className="mt-12 text-xl sm:text-2xl font-body leading-relaxed text-gray-600 font-normal max-w-3xl mx-auto">
            {description}
          </p>
          
          {(primaryButton || secondaryButton) && (
            <div className="mt-12 flex items-center justify-center gap-x-6">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  className="bg-blue-600 text-white font-display font-bold px-10 py-5 rounded-none uppercase tracking-wide text-sm hover:bg-blue-700 transition-colors duration-200"
                >
                  {primaryButton.text}
                </a>
              )}
              
              {secondaryButton && (
                <a 
                  href={secondaryButton.href} 
                  className="text-gray-900 font-display font-bold uppercase tracking-wide text-sm hover:text-blue-600 transition-colors duration-200 border-b-2 border-gray-900 hover:border-blue-600"
                >
                  {secondaryButton.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}