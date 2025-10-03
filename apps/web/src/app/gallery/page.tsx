import { fetchGalleryItems, fetchGalleryCategories } from '@repo/api/brand';
import Image from 'next/image';
import { Hero } from '@repo/ui/components/hero';
import { CategoryFilter } from '@repo/ui/components/category-filter';
import { FeaturedCard } from '@repo/ui/components/featured-card';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Portfolio - ACME Corporation',
  description:
    'Explore our work, team, and company journey through images. View our portfolio of creative projects and innovative solutions.',
  openGraph: {
    title: 'Portfolio - ACME Corporation',
    description: 'Explore our work, team, and company journey through images.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - ACME Corporation',
    description: 'Explore our work, team, and company journey through images.',
  },
};

interface GalleryPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const { category: selectedCategory } = await searchParams;

  const [galleryItems, categories] = await Promise.all([fetchGalleryItems(24), fetchGalleryCategories()]);

  // Filter items by category if one is selected
  const filteredItems = selectedCategory
    ? galleryItems.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
    : galleryItems;

  // Group items by featured status
  const featuredItems = filteredItems.filter((item) => item.featured);
  const regularItems = filteredItems.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Portfolio"
        description="Explore our work, team, and company journey through images"
        layout="split"
        backgroundImage="https://picsum.photos/seed/acme-gallery/800/600"
      />

      {/* Categories */}
      <CategoryFilter categories={categories} title="Categories" />

      {/* Featured Section */}
      {featuredItems.length > 0 && (
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Featured Work
              </h2>
              <div className="mt-6 h-1 w-24 bg-gray-900 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredItems.slice(0, 6).map((item) => (
                <FeaturedCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  tags={item.tags}
                  imageUrl={item.thumbnailUrl}
                  imageAlt={item.title}
                  href="#"
                  featured={true}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Regular Gallery Grid */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              All Work
            </h2>
            <div className="mt-6 h-1 w-24 bg-gray-900 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {regularItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-flex items-center px-2 py-1 text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold uppercase tracking-tight text-gray-900 mb-3 leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-gray-100 border border-gray-300"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
