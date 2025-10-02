import { fetchServices, fetchCompanyStats, fetchTestimonials, fetchClients } from '@repo/api/brand'
import { Hero } from '@repo/ui/components/hero'
import { StatsSection } from '../components/stats-section'
import { Services } from '../components/services'
import { Testimonials } from '../components/testimonials'
import { ClientShowcase } from '../components/client-showcase'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACME Corporation - Building the Future',
  description: 'We\'re a creative agency focused on bold design and innovative solutions. Building the future, one pixel at a time.',
  openGraph: {
    title: 'ACME Corporation - Building the Future',
    description: 'We\'re a creative agency focused on bold design and innovative solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACME Corporation - Building the Future',
    description: 'We\'re a creative agency focused on bold design and innovative solutions.',
  },
}

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


      <Services services={services} />
        <StatsSection stats={companyStats} />
        <Testimonials testimonials={testimonials} />
        <ClientShowcase clients={clients} />

    </main>
  );
}
