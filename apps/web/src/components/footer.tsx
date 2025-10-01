import Link from 'next/link'
import { fetchContactInfo } from '@repo/api/brand'
import { NewsletterSignup } from './newsletter-signup'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'Cloud Solutions', href: '#' },
    { name: 'Consulting', href: '#' },
  ],
}

export async function Footer() {
  const contactInfo = await fetchContactInfo()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                ACME
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-body)' }}>
                Building the future, one pixel at a time. We create amazing digital experiences that make people smile.
              </p>
              <div className="mt-8 h-1 w-24 bg-blue-600"></div>
            </div>

            {/* Newsletter Integration */}
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Stay Updated
              </h3>
              <NewsletterSignup variant="dark" className="max-w-sm" />
            </div>
          </div>

          {/* Contact & Navigation - Right Side */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-blue-400 transition-colors text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="group">
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="text-gray-300 text-base" style={{ fontFamily: 'var(--font-body)' }}>
                    <div>{contactInfo.address.street}</div>
                    <div>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}</div>
                    <div>{contactInfo.address.country}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Follow Us
                </h4>
                <div className="flex space-x-6">
                  {contactInfo.socialMedia.twitter && (
                    <a
                      href={contactInfo.socialMedia.twitter}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg font-medium"
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
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg font-medium"
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
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium"
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
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-lg font-medium"
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

            {/* Navigation & Business Hours */}
            <div className="space-y-10">
              {/* Navigation */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Navigation
                </h3>
                <ul className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Services
                </h3>
                <ul className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:order-2">
              <p className="text-base text-gray-400 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                Made with love and lots of coffee ☕
              </p>
            </div>
            <p className="mt-4 text-base text-gray-400 md:order-1 md:mt-0" style={{ fontFamily: 'var(--font-body)' }}>
              &copy; {new Date().getFullYear()} ACME Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}