import { CardSkeleton, HeroSkeleton } from '@repo/ui/components/skeletons';

export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      {/* Featured Article Skeleton */}
      <HeroSkeleton />

      {/* Category Filter Skeleton */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="h-8 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
            <div className="mt-4 h-1 w-16 bg-gray-200 mx-auto animate-pulse" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-12 w-24 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid Skeleton */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-48 bg-gray-200 rounded mx-auto mb-8 animate-pulse" />
            <div className="h-1 w-24 bg-gray-200 mx-auto animate-pulse" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} imageAspect="video" textLines={3} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
