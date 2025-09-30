import { ContactSection } from "./_contact-section"
import { ContactForm } from "./_contact-form"
import { fetchTeamMembers, fetchContactInfo } from '@repo/api/brand'
import { TeamSection } from '../../components/ui/team-section'

export default async function Contact() {
    const [members, contactInfo] = await Promise.all([
        fetchTeamMembers(4),
        fetchContactInfo()
    ])

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            Contact Us
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Get in touch with our team. We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <ContactSection contactInfo={contactInfo} />
            
            {/* Contact Form */}
            <ContactForm />
            
            {/* Team Section */}
            <TeamSection 
              members={members} 
              title="Our Amazing Team 🌟"
              description="Meet the awesome people behind ACME Corporation 👋"
              showContactButton={true}
              className="bg-gradient-to-br from-green-900/20 to-teal-900/20 py-16 sm:py-24"
            />
        </main>
    )
}
