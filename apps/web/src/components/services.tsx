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
  // Split services into two columns
  const midpoint = Math.ceil(services.length / 2)
  const leftServices = services.slice(0, midpoint)
  const rightServices = services.slice(midpoint)

  return (
    <div className={`bg-white py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mobile: Stacked layout with sticky title */}
        <div className="lg:hidden">
          {/* Sticky Title */}
          <div className="sticky top-0 z-10 bg-white py-8 mb-8">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h2>
          </div>

          {/* All Services */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Three column layout with sticky center title */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Left Column - Services */}
          <div className="space-y-16">
            {leftServices.map((service) => (
              <div key={service.id} className="border-b border-gray-200 pb-16 last:border-b-0">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Sticky Title */}
          <div className="relative">
            <div className="sticky top-24 flex items-start justify-center">
              <h2 className="text-5xl xl:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-none text-center" style={{ fontFamily: 'var(--font-display)' }}>
                {title}
              </h2>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-16">
            {rightServices.map((service) => (
              <div key={service.id} className="border-b border-gray-200 pb-16 last:border-b-0">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}