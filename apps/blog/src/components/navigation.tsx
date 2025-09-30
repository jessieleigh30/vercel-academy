import { Navigation as SharedNavigation } from '@repo/ui/components/navigation'

const navigationItems = [
  { name: 'Home', href: process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000' },
  { name: 'About', href: `${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/about` },
  { name: 'Gallery', href: `${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/gallery` },
  { name: 'Contact', href: `${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/contact` },
  { name: 'Blog', href: '/' },
]

export function Navigation() {
  return (
    <SharedNavigation 
      items={navigationItems}
      brandName="ACME"
      brandHref={process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}
      ctaButton={{ 
        text: 'Get Started', 
        href: `${process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000'}/contact` 
      }}
    />
  )
}