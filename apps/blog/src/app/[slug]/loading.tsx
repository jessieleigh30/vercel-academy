import { BaseSkeleton } from '@repo/ui/components/skeletons';

export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image Skeleton */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-4xl w-full px-6 lg:px-8 pb-16">
            <div className="h-8 w-32 bg-gray-300 rounded mb-6" />
            <div className="h-16 w-3/4 bg-gray-300 rounded" />
          </div>
        </div>
      </div>

      {/* Article Content Skeleton */}
      <article className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        {/* Author Info Skeleton */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <div className="h-16 w-16 bg-gray-200 rounded-full animate-pulse" />
            <div className="ml-4 space-y-2">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Excerpt Skeleton */}
        <div className="mb-12 space-y-3">
          <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4 mb-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Tags Skeleton */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <div className="h-4 w-16 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* Post Stats Skeleton */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-center space-y-2">
                <div className="h-10 w-16 bg-gray-200 rounded animate-pulse mx-auto" />
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="text-center space-y-2">
                <div className="h-10 w-16 bg-gray-200 rounded animate-pulse mx-auto" />
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </article>
    </main>
  );
}
