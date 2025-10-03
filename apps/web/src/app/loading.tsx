import { HeroSkeleton, CardSkeleton } from '@repo/ui/components/skeletons';

export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <HeroSkeleton />

      {/* Services Section Skeleton */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-1 w-24 bg-gray-200 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} showImage={false} textLines={2} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section Skeleton */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="h-16 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
                <div className="h-6 w-24 bg-gray-200 rounded mx-auto animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Skeleton */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-1 w-24 bg-gray-200 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
