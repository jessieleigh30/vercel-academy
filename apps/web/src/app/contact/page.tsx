import { ContactSection } from "./_contact-section"
import { ContactForm } from "./_contact-form"
import {  fetchContactInfo } from '@repo/api/brand'
import { Hero } from '@repo/ui/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - ACME Corporation',
  description: 'Get in touch with our team. We\'d love to hear from you and discuss how we can help with your next project.',
  openGraph: {
    title: 'Contact Us - ACME Corporation',
    description: 'Get in touch with our team. We\'d love to hear from you.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - ACME Corporation',
    description: 'Get in touch with our team. We\'d love to hear from you.',
  },
}

export default async function Contact() {
    const [ contactInfo] = await Promise.all([
        fetchContactInfo()
    ])

    return (
        <main className="min-h-screen bg-white">
            <Hero 
                title="Contact Us"
                description="Get in touch with our team. We'd love to hear from you."
            />
            <ContactForm />
            <ContactSection contactInfo={contactInfo} />
        </main>
    )
}
