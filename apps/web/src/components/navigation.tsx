import { Navigation as SharedNavigation } from '@repo/ui/components/navigation'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: process.env.NEXT_PUBLIC_BLOG_URL || 'http://localhost:3001' },
]

export function Navigation() {
  return (
    <SharedNavigation 
      items={navigationItems}
      brandName="ACME"
      brandHref="/"
      ctaButton={{ text: 'Get Started', href: '/contact' }}
    />
  )
}