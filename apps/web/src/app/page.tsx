import { fetchTeamMembers, fetchServices, fetchContactInfo, fetchCompanyStats, fetchTestimonials, fetchClients } from '@repo/api/brand'

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
      <div className="bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Welcome to ACME 🚀
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Building the future, one pixel at a time ✨ We create amazing digital experiences that make people smile! 😊
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:from-violet-400 hover:to-fuchsia-400 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                🎯 Get Started
              </a>
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
                Why Choose ACME? 🌟
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              <div className="flex flex-col bg-gray-800/50 border border-gray-700 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                <dt className="text-sm font-semibold leading-6 text-gray-400">🎂 Years Strong</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {companyStats.yearsInBusiness}+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-800/50 border border-gray-700 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                <dt className="text-sm font-semibold leading-6 text-gray-400">👥 Amazing Team</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {companyStats.employeeCount}
                </dd>
              </div>
              <div className="flex flex-col bg-gray-800/50 border border-gray-700 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                <dt className="text-sm font-semibold leading-6 text-gray-400">✅ Projects Delivered</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {companyStats.projectsCompleted.toLocaleString()}
                </dd>
              </div>
              <div className="flex flex-col bg-gray-800/50 border border-gray-700 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                <dt className="text-sm font-semibold leading-6 text-gray-400">🏢 Happy Clients</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {companyStats.clientCount.toLocaleString()}
                </dd>
              </div>
              <div className="flex flex-col bg-gray-800/50 border border-gray-700 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                <dt className="text-sm font-semibold leading-6 text-gray-400">🌍 Countries Served</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {companyStats.countriesServed}+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-800/50 border border-gray-700 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                <dt className="text-sm font-semibold leading-6 text-gray-400">😍 Satisfaction Rate</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {companyStats.satisfactionRate}%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gradient-to-br from-emerald-900/10 to-teal-900/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              What We Do Best 💪
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              From creative designs to powerful code - we've got you covered! 🎨⚡
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 flex flex-col">
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
                      className="inline-flex items-center rounded-md bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/30"
                    >
                      ✨ {feature}
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
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-xs font-medium text-black">
                      🔥 Popular
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-br from-pink-900/10 to-purple-900/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say 💬
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Don't just take our word for it - hear from our amazing clients! ⭐
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-600'}>
                        ⭐
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
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-3 py-1 text-xs font-medium text-white">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Trusted by Amazing Companies 🤝
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              We're proud to work with industry leaders and innovative startups! 🚀
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
