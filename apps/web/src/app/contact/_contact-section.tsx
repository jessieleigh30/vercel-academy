import { ContactInfo } from '@repo/api/brand'

interface ContactSectionProps {
    contactInfo: ContactInfo
}

export function ContactSection({ contactInfo }: ContactSectionProps) {
    const formatBusinessHours = (hours: ContactInfo['businessHours']) => {
        return Object.entries(hours).map(([day, time]) => {
            const formattedDay = day.charAt(0).toUpperCase() + day.slice(1)
            const formattedTime = time === 'closed' ? 'Closed' : `${time.open} - ${time.close}`
            return { day: formattedDay, time: formattedTime }
        })
    }

    const businessHours = formatBusinessHours(contactInfo.businessHours)

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Header */}
                    <div className="lg:sticky lg:top-24">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                            Get in Touch
                        </h2>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-16">
                        {/* Email */}
                        <div className="border-b border-gray-200 pb-16">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Email
                            </h3>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-lg text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {contactInfo.email}
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="border-b border-gray-200 pb-16">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Phone
                            </h3>
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="text-lg text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {contactInfo.phone}
                            </a>
                        </div>

                        {/* Address */}
                        <div className="border-b border-gray-200 pb-16">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Office
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                                {contactInfo.address.street}<br />
                                {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}<br />
                                {contactInfo.address.country}
                            </p>
                        </div>

                        {/* Business Hours */}
                        <div className="border-b border-gray-200 pb-16">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Business Hours
                            </h3>
                            <dl className="space-y-2">
                                {businessHours.map(({ day, time }) => (
                                    <div key={day} className="flex justify-between text-base" style={{ fontFamily: 'var(--font-body)' }}>
                                        <dt className="text-gray-900">{day}</dt>
                                        <dd className="text-gray-600">{time}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Social Links */}
                        <div className="border-b border-gray-200 pb-16 last:border-b-0">
                            <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Follow Us
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {contactInfo.socialMedia.twitter && (
                                    <a
                                        href={contactInfo.socialMedia.twitter}
                                        className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        Twitter
                                    </a>
                                )}
                                {contactInfo.socialMedia.linkedin && (
                                    <a
                                        href={contactInfo.socialMedia.linkedin}
                                        className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        LinkedIn
                                    </a>
                                )}
                                {contactInfo.socialMedia.github && (
                                    <a
                                        href={contactInfo.socialMedia.github}
                                        className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        GitHub
                                    </a>
                                )}
                                {contactInfo.socialMedia.instagram && (
                                    <a
                                        href={contactInfo.socialMedia.instagram}
                                        className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        Instagram
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}