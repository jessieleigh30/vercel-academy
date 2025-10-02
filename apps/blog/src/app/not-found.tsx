import type { Metadata } from 'next';
import { NotFound as NotFoundComponent } from '@repo/ui/components/not-found';

export const metadata: Metadata = {
  title: '404 - Page Not Found | ACME Blog',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return <NotFoundComponent variant="blog" homeHref="/" homeLabel="Back to Blog" />;
}
