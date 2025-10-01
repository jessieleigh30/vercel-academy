interface ClientProps {
  id: string
  name: string
  logo: string
  industry?: string
  projectType?: string
  featured?: boolean
}

interface ClientShowcaseProps {
  clients: ClientProps[]
  title?: string
  subtitle?: string
  className?: string
}

export function ClientShowcase({ 
  clients, 
  title = "Trusted by Amazing Companies",
  subtitle = "We're proud to work with industry leaders and innovative startups!",
  className = "" 
}: ClientShowcaseProps) {
  // Split clients into featured and regular
  const featuredClients = clients.filter(client => client.featured).slice(0, 3)
  const regularClients = clients.filter(client => !client.featured).slice(0, 9)
  
  const getClientCard = (client: ClientProps, index: number, isFeatured: boolean) => {
    if (isFeatured) {
      return (
        <div key={client.id} className="group relative bg-white border border-gray-100 hover:border-blue-200 transition-all duration-500 min-h-[280px] hover:scale-[1.02]">
          <div className="p-8 lg:p-12 h-full flex flex-col justify-between">
            {/* Logo */}
            <div className="mb-8">
              <img
                className="h-16 w-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0"
                src={client.logo}
                alt={client.name}
              />
            </div>
            
            {/* Company Name - Large Typography */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-gray-900 group-hover:text-blue-600 leading-none transition-colors duration-500" style={{ fontFamily: 'var(--font-display)' }}>
                {client.name}
              </h3>
              {client.industry && (
                <p className="mt-4 text-lg text-gray-600 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  {client.industry}
                </p>
              )}
            </div>
            
            {/* Project Teaser on Hover */}
            {client.projectType && (
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-1 w-16 bg-blue-600 mb-4"></div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600" style={{ fontFamily: 'var(--font-display)' }}>
                  {client.projectType}
                </p>
              </div>
            )}
          </div>
        </div>
      )
    } else {
      return (
        <div key={client.id} className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 transition-all duration-300 min-h-[160px]">
          <div className="p-6 h-full flex flex-col justify-center text-center">
            <img
              className="h-8 w-auto object-contain mx-auto mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              src={client.logo}
              alt={client.name}
            />
            <p className="text-lg font-bold uppercase tracking-wide text-gray-700 group-hover:text-gray-900 leading-tight transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
              {client.name}
            </p>
            {client.industry && (
              <p className="mt-2 text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>
                {client.industry}
              </p>
            )}
          </div>
        </div>
      )
    }
  }

  return (
    <div className={`bg-gray-50 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {subtitle}
          </p>
          <div className="mt-8 h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        {/* Featured Clients - Large Layout */}
        {featuredClients.length > 0 && (
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {featuredClients.map((client, index) => getClientCard(client, index, true))}
            </div>
          </div>
        )}

        {/* Regular Clients - Smaller Grid */}
        {regularClients.length > 0 && (
          <div>
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-700" style={{ fontFamily: 'var(--font-display)' }}>
                And Many More
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {regularClients.map((client, index) => getClientCard(client, index, false))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}