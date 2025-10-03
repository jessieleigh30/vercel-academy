import Image from 'next/image';
import Link from 'next/link';

export interface FeaturedCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  imageUrl: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
}

export function FeaturedCard({ title, description, category, tags = [], imageUrl, imageAlt, href, featured = false }: FeaturedCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:scale-[1.02]">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <Link href={href}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={300}
            className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          {featured && (
            <span
              className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-900 text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Featured
            </span>
          )}
          <span
            className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {category}
          </span>
        </div>
        <Link href={href}>
          <h3
            className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h3>
        </Link>
        <p className="text-base text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-900 bg-gray-100 border border-gray-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
