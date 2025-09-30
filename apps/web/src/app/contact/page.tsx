import { ContactSection } from "./_contact-section"
import { ContactForm } from "./_contact-form"
import { fetchTeamMembers, fetchContactInfo } from '@repo/api/brand'
import { TeamSection } from '../../components/team-section'
import { Hero } from '@repo/ui/components/hero'

export default async function Contact() {
    const [members, contactInfo] = await Promise.all([
        fetchTeamMembers(4),
        fetchContactInfo()
    ])

    return (
        <main className="min-h-screen bg-white">
            <Hero 
                title="Contact Us"
                description="Get in touch with our team. We'd love to hear from you."
            />

            {/* Contact Information */}
            <ContactSection contactInfo={contactInfo} />
            
            {/* Contact Form */}
            <ContactForm />
            
            {/* Team Section */}
            <TeamSection 
              members={members} 
              title="Our Amazing Team"
              description="Meet the awesome people behind ACME Corporation"
              showContactButton={true}
              className="bg-gray-50 py-16 sm:py-24"
            />
        </main>
    )
}
