import { fetchServices, fetchCompanyStats, fetchTestimonials, fetchClients } from '@repo/api/brand'
import { StatsCard, StatsGrid } from '../components/stats-card'
import { Hero } from '@repo/ui/components/hero'
import { Testimonials } from '../components/testimonials'
import { Services } from '../components/services'
import { ClientShowcase } from '../components/client-showcase'

export default async function HomePage() {
    const [services, companyStats, testimonials, clients] = await Promise.all([
        fetchServices(6),
        fetchCompanyStats(),
        fetchTestimonials(6, true), // Featured testimonials only
        fetchClients(12, true) // Featured clients only
    ]);

  return (
    <main className="min-h-screen bg-white">
      <Hero 
        title="Welcome to ACME"
        description="Building the future, one pixel at a time. We're a creative agency focused on bold design and innovative solutions."
        layout="split"
        primaryButton={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Learn more",
          href: "/about"
        }}
      />

      {/* Stats */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                Why Choose ACME?
              </h2>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                Numbers that tell our story
              </p>
            </div>
            <StatsGrid columns={6} className="">
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
      <Services services={services} />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Client Showcase */}
      <ClientShowcase clients={clients} />

    </main>
  );
}
