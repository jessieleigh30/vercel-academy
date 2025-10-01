import type { Metadata } from 'next'
import { NotFound as NotFoundComponent } from '@repo/ui/components/not-found'

export const metadata: Metadata = {
  title: '404 - Page Not Found | ACME',
  description: 'The page you are looking for could not be found.'
}

export default function NotFound() {
  return <NotFoundComponent variant="web" homeHref="/" homeLabel="Back to Home" />
}
