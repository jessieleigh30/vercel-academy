interface ServiceProps {
  id: string
  name: string
  description: string
  icon: string
  features: string[]
  price?: {
    amount: number
    currency: string
    period?: string
  }
  popular?: boolean
}

interface ServicesProps {
  services: ServiceProps[]
  title?: string
  subtitle?: string
  className?: string
}

export function Services({ 
  services, 
  title = "What We Do Best",
  subtitle = "From creative designs to powerful code - we've got you covered!",
  className = "" 
}: ServicesProps) {
  const getServiceCardClass = (index: number, isPopular: boolean) => {
    const baseClass = "group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
    
    // Create different heights for masonry effect
    const heightVariants = [
      "min-h-[280px]", // Short
      "min-h-[350px]", // Medium  
      "min-h-[320px]", // Medium-short
      "min-h-[380px]", // Tall
      "min-h-[300px]", // Medium-short
      "min-h-[360px]", // Medium-tall
    ]
    
    const heightClass = heightVariants[index % heightVariants.length]
    
    if (isPopular) {
      return `${baseClass} ${heightClass} bg-gradient-to-br from-blue-600 to-blue-800 text-white`
    }
    
    // Alternating background colors
    const bgVariants = [
      "bg-white border border-gray-100 hover:border-blue-200",
      "bg-gray-50 border border-gray-100 hover:border-blue-200", 
      "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    ]
    
    return `${baseClass} ${heightClass} ${bgVariants[index % bgVariants.length]}`
  }

  const getTextColor = (index: number, isPopular: boolean) => {
    if (isPopular) return "text-white"
    if (index % 3 === 2) return "text-white" // Dark gradient cards
    return "text-gray-900"
  }

  const getSecondaryTextColor = (index: number, isPopular: boolean) => {
    if (isPopular) return "text-blue-100"
    if (index % 3 === 2) return "text-gray-300" // Dark gradient cards
    return "text-gray-600"
  }

  return (
    <div className={`bg-gray-50 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {subtitle}
          </p>
          <div className="mt-8 h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={getServiceCardClass(index, service.popular || false)}
            >
              <div className="p-6 lg:p-8 h-full flex flex-col">
                {/* Icon/Visual */}
                <div className="mb-6">
                  {service.popular ? (
                    <div className="w-16 h-16 bg-white/20 rounded-none flex items-center justify-center">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                  ) : (
                    <div className={`text-5xl ${index % 3 === 2 ? 'opacity-80' : 'text-blue-600'}`}>
                      {service.icon}
                    </div>
                  )}
                </div>

                {/* Service Name */}
                <h3 className={`text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-tight mb-4 ${getTextColor(index, service.popular || false)}`} 
                    style={{ fontFamily: 'var(--font-display)' }}>
                  {service.name}
                </h3>

                {/* Description */}
                <p className={`text-base leading-relaxed mb-6 ${getSecondaryTextColor(index, service.popular || false)}`} 
                   style={{ fontFamily: 'var(--font-body)' }}>
                  {service.description.slice(0, 150)}...
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-none ${
                        service.popular 
                          ? 'bg-white/20 text-white' 
                          : index % 3 === 2 
                            ? 'bg-white/10 text-white' 
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                {service.price && (
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-black tracking-tighter ${getTextColor(index, service.popular || false)}`} 
                            style={{ fontFamily: 'var(--font-display)' }}>
                        ${service.price.amount.toLocaleString()}
                      </span>
                      <span className={`text-sm font-medium uppercase ${getSecondaryTextColor(index, service.popular || false)}`} 
                            style={{ fontFamily: 'var(--font-body)' }}>
                        {service.price.currency}
                        {service.price.period && ` / ${service.price.period}`}
                      </span>
                    </div>
                  </div>
                )}

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="inline-flex items-center px-4 py-2 text-xs font-black uppercase tracking-wider text-blue-600 bg-white rounded-none shadow-lg" 
                          style={{ fontFamily: 'var(--font-display)' }}>
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}