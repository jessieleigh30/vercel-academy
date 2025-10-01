import { fetchServices, fetchCompanyStats, fetchTestimonials, fetchClients } from '@repo/api/brand'
import { Hero } from '@repo/ui/components/hero'
import { StatsSection } from '../components/stats-section'
import { Services } from '../components/services'
import { Testimonials } from '../components/testimonials'
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
        title="ACME"
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
      <StatsSection stats={companyStats} />

      {/* Services */}
      <Services services={services} />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Client Showcase */}
      <ClientShowcase clients={clients} />

    </main>
  );
}
