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
    <footer className="bg-gray-900 border-t border-gray-700">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <NewsletterSignup variant="compact" className="max-w-md mx-auto" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                ACME 🚀
              </span>
              <p className="text-gray-300 mt-4 text-sm leading-6">
                Building the future, one pixel at a time. We create amazing digital experiences that make people smile!
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-blue-400">📧</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-green-400">📱</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-orange-400 mt-0.5">📍</span>
                <div>
                  <div>{contactInfo.address.street}</div>
                  <div>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}</div>
                  <div>{contactInfo.address.country}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {contactInfo.socialMedia.twitter && (
                <a
                  href={contactInfo.socialMedia.twitter}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <span className="text-xl">🐦</span>
                </a>
              )}
              {contactInfo.socialMedia.linkedin && (
                <a
                  href={contactInfo.socialMedia.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <span className="text-xl">💼</span>
                </a>
              )}
              {contactInfo.socialMedia.github && (
                <a
                  href={contactInfo.socialMedia.github}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <span className="text-xl">👨‍💻</span>
                </a>
              )}
              {contactInfo.socialMedia.instagram && (
                <a
                  href={contactInfo.socialMedia.instagram}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <span className="text-xl">📸</span>
                </a>
              )}
              {contactInfo.socialMedia.youtube && (
                <a
                  href={contactInfo.socialMedia.youtube}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">YouTube</span>
                  <span className="text-xl">📺</span>
                </a>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Business Hours */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Business Hours 🕒</h3>
              <ul role="list" className="mt-6 space-y-2">
                {Object.entries(contactInfo.businessHours).map(([day, hours]) => (
                  <li key={day} className="flex justify-between text-sm">
                    <span className="text-gray-300 capitalize">{day}</span>
                    <span className={hours === 'closed' ? 'text-red-400' : 'text-green-400'}>
                      {hours === 'closed' ? 'Closed' : `${hours.open} - ${hours.close}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="border-t border-gray-700 pt-6 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-xs leading-5 text-gray-400">
              Made with ❤️ and lots of ☕
            </p>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} ACME Corporation. All rights reserved. ✨
          </p>
        </div>
      </div>
    </footer>
  )
}