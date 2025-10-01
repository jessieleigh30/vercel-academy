import { ContactSection } from "./_contact-section"
import { ContactForm } from "./_contact-form"
import {  fetchContactInfo } from '@repo/api/brand'
import { Hero } from '@repo/ui/components/hero'

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
