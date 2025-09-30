import { fetchTeamMembers, fetchServices, fetchContactInfo, fetchCompanyStats, fetchTestimonials, fetchClients } from '@repo/api/brand'
import { StatsCard, StatsGrid } from '../components/ui/stats-card'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export default async function HomePage() {
    const [services, companyStats, testimonials, clients] = await Promise.all([
        fetchServices(6),
        fetchCompanyStats(),
        fetchTestimonials(6, true), // Featured testimonials only
        fetchClients(12, true) // Featured clients only
    ]);

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900/20 to-green-900/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Welcome to ACME
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Building the future, one pixel at a time.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                href="/contact"
                size="lg"
              >
                Get Started
              </Button>
              <a href="/about" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose ACME?
              </h2>
            </div>
            <StatsGrid columns={6} className="mt-16">
              <StatsCard
                value={`${companyStats.yearsInBusiness}+`}
                label="Years Strong"
                icon=""
              />
              <StatsCard
                value={companyStats.employeeCount}
                label="Amazing Team"
                icon=""
              />
              <StatsCard
                value={companyStats.projectsCompleted}
                label="Projects Delivered"
                icon=""
              />
              <StatsCard
                value={companyStats.clientCount}
                label="Happy Clients"
                icon=""
              />
              <StatsCard
                value={`${companyStats.countriesServed}+`}
                label="Countries Served"
                icon=""
              />
              <StatsCard
                value={`${companyStats.satisfactionRate}%`}
                label="Satisfaction Rate"
              />
            </StatsGrid>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gradient-to-br from-green-900/10 to-blue-900/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              What We Do Best
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              From creative designs to powerful code - we've got you covered!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="group relative p-8 flex flex-col">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {service.description.slice(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-md bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400 border border-green-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                {service.price && (
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">
                        ${service.price.amount.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-400">
                        {service.price.currency}
                        {service.price.period && ` / ${service.price.period}`}
                      </span>
                    </div>
                  </div>
                )}
                {service.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-br from-blue-900/10 to-green-900/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Don't just take our word for it - hear from our amazing clients!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="group relative p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-blue-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < Math.floor(testimonial.rating) ? 'text-blue-400' : 'text-gray-600'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">{testimonial.rating}/5</span>
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.content.slice(0, 150)}..."
                </blockquote>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full ring-2 ring-gray-600"
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                  />
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-white">{testimonial.author.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.author.role} at {testimonial.author.company}</div>
                  </div>
                </div>
                {testimonial.featured && (
                  <div className="absolute -top-2 -right-2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-400 to-green-400 px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Trusted by Amazing Companies
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              We're proud to work with industry leaders and innovative startups!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {clients.map((client) => (
              <div key={client.id} className="group">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-70 hover:opacity-100 transition-opacity duration-200 filter grayscale hover:grayscale-0"
                  src={client.logo}
                  alt={client.name}
                  width={158}
                  height={48}
                />
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-200">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
