'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryFilterProps {
  categories: string[];
  title?: string;
  showAllOption?: boolean;
  allOptionLabel?: string;
}

export function CategoryFilter({
  categories,
  title = 'Categories',
  showAllOption = true,
  allOptionLabel = 'All',
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || '';

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!category) {
      params.delete('category');
      params.delete('page'); // Reset to page 1 when changing category
    } else {
      params.set('category', category);
      params.delete('page'); // Reset to page 1 when changing category
    }

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : window.location.pathname);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            className="text-2xl font-black uppercase tracking-tighter text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-gray-900 mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {showAllOption && (
            <button
              onClick={() => handleCategoryChange('')}
              className={`inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                !currentCategory
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-900 hover:bg-gray-900 hover:text-white border-gray-200 hover:border-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {allOptionLabel}
            </button>
          )}
          {categories.map((category) => {
            const isActive = currentCategory.toLowerCase() === category.toLowerCase();
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category.toLowerCase())}
                className={`inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-900 hover:bg-gray-900 hover:text-white border-gray-200 hover:border-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
