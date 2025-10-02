import { ContactInfo } from '@repo/api/brand';

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export function ContactSection({ contactInfo }: ContactSectionProps) {
  const formatBusinessHours = (hours: ContactInfo['businessHours']) => {
    return Object.entries(hours).map(([day, time]) => {
      const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
      const formattedTime = time === 'closed' ? 'Closed' : `${time.open} - ${time.close}`;
      return { day: formattedDay, time: formattedTime };
    });
  };

  const businessHours = formatBusinessHours(contactInfo.businessHours);

  return (
    <div className="bg-gray-50 p-8 lg:sticky lg:top-8">
      <h2
        className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-8"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Contact Info
      </h2>

      <div className="space-y-8">
        {/* Email */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Email
          </h3>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-base text-gray-600 hover:text-gray-900 transition-colors break-all"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {contactInfo.email}
          </a>
        </div>

        {/* Phone */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Phone
          </h3>
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-base text-gray-600 hover:text-gray-900 transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {contactInfo.phone}
          </a>
        </div>

        {/* Address */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Office
          </h3>
          <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {contactInfo.address.street}
            <br />
            {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}
            <br />
            {contactInfo.address.country}
          </p>
        </div>

        {/* Business Hours */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Business Hours
          </h3>
          <dl className="space-y-1">
            {businessHours.map(({ day, time }) => (
              <div key={day} className="flex justify-between text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                <dt className="text-gray-900 font-medium">{day}</dt>
                <dd className="text-gray-600">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Social Links */}
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-3">
            {contactInfo.socialMedia.twitter && (
              <a
                href={contactInfo.socialMedia.twitter}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
  );
}
