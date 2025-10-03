export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header Skeleton */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <div className="h-20 w-96 bg-gray-200 rounded animate-pulse" />
            <div className="space-y-3">
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout Skeleton */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form Skeleton */}
            <div className="lg:col-span-2 space-y-6">
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-32 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Contact Info Skeleton */}
            <div className="lg:col-span-1 space-y-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
