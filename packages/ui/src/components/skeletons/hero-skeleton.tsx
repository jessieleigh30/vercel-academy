export function HeroSkeleton() {
  return (
    <div className="bg-white animate-pulse">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">
          <div className="max-w-4xl space-y-6">
            <div className="h-12 w-48 bg-gray-200 rounded" />
            <div className="h-16 w-full bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-6 w-4/5 bg-gray-200 rounded" />
            <div className="flex gap-4 mt-8">
              <div className="h-12 w-32 bg-gray-200 rounded" />
              <div className="h-12 w-32 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-full h-96 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
