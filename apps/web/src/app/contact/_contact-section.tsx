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
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Contact Details */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We're here to help you with any questions or inquiries you may have. Drop us a line!
                        </p>
                        
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            {/* Email */}
                            <div className="group">
                                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    Email
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    <a 
                                        href={`mailto:${contactInfo.email}`}
                                        className="hover:text-purple-400 transition-colors duration-200 group-hover:underline"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </p>
                            </div>
                            
                            {/* Phone */}
                            <div className="group">
                                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    Phone
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    <a 
                                        href={`tel:${contactInfo.phone}`}
                                        className="hover:text-blue-400 transition-colors duration-200 group-hover:underline"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </p>
                            </div>
                            
                            {/* Address */}
                            <div className="sm:col-span-2">
                                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    Office
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {contactInfo.address.street}<br />
                                    {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}<br />
                                    {contactInfo.address.country}
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h3 className="text-sm font-semibold text-foreground">Follow Us</h3>
                            <div className="mt-4 flex space-x-4">
                                {contactInfo.socialMedia.twitter && (
                                    <a
                                        href={contactInfo.socialMedia.twitter}
                                        className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-200 text-sm font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </a>
                                )}
                                {contactInfo.socialMedia.linkedin && (
                                    <a
                                        href={contactInfo.socialMedia.linkedin}
                                        className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300 transition-all duration-200 text-sm font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                )}
                                {contactInfo.socialMedia.github && (
                                    <a
                                        href={contactInfo.socialMedia.github}
                                        className="px-4 py-2 rounded-full bg-gray-600/20 text-gray-400 hover:bg-gray-600/30 hover:text-gray-300 transition-all duration-200 text-sm font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            Business Hours
                        </h3>
                        <dl className="mt-4 space-y-3">
                            {businessHours.map(({ day, time }) => (
                                <div key={day} className="flex justify-between text-sm">
                                    <dt className="font-medium text-foreground">{day}</dt>
                                    <dd className={`${time === 'Closed' ? 'text-red-400' : 'text-green-400'} font-medium`}>
                                        {time}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}