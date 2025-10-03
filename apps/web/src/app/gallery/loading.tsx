import { HeroSkeleton, CardSkeleton } from '@repo/ui/components/skeletons';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <HeroSkeleton />

      {/* Category Filter Skeleton */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="h-8 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
            <div className="mt-4 h-1 w-16 bg-gray-200 mx-auto animate-pulse" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-12 w-24 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Work Skeleton */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-1 w-24 bg-gray-200 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} imageAspect="video" textLines={2} />
            ))}
          </div>
        </div>
      </div>

      {/* All Work Skeleton */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-1 w-24 bg-gray-200 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <CardSkeleton key={i} imageAspect="video" textLines={1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
