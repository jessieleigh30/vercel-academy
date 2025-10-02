import { ContactSection } from './_contact-section';
import { ContactForm } from './_contact-form';
import { fetchContactInfo } from '@repo/api/brand';
import type { Metadata } from 'next';

// Enable ISR with 60 second revalidation
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Contact Us - ACME Corporation',
  description:
    "Get in touch with our team. We'd love to hear from you and discuss how we can help with your next project.",
  openGraph: {
    title: 'Contact Us - ACME Corporation',
    description: "Get in touch with our team. We'd love to hear from you.",
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - ACME Corporation',
    description: "Get in touch with our team. We'd love to hear from you.",
  },
};

export default async function Contact() {
  const [contactInfo] = await Promise.all([fetchContactInfo()]);

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-gray-900 tracking-tighter leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get in Touch
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Have a question or want to work with us? We'd love to hear from you and discuss how we can help with your
              next project.
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-1">
              <ContactSection contactInfo={contactInfo} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
