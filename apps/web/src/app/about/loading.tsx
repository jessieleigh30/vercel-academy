import { HeroSkeleton } from '@repo/ui/components/skeletons';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <HeroSkeleton />

      {/* Team Section Skeleton */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-48 bg-gray-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-64 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-1 w-24 bg-gray-200 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-64 w-full bg-gray-200 rounded-lg mb-6 animate-pulse" />
                <div className="h-6 w-32 bg-gray-200 rounded mx-auto mb-2 animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded mx-auto mb-3 animate-pulse" />
                <div className="h-3 w-full bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-3 w-5/6 bg-gray-200 rounded mx-auto animate-pulse" />
              </div>
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
    </div>
  );
}
