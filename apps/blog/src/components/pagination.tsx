import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category?: string;
  searchQuery?: string;
}

export function Pagination({ currentPage, totalPages, category, searchQuery }: PaginationProps) {
  // Build URL with preserved query params
  const buildUrl = (page: number) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (searchQuery) params.set('search', searchQuery);
    if (page > 1) params.set('page', page.toString());

    const queryString = params.toString();
    return queryString ? `?${queryString}` : '/';
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust range if at beginning or end
      if (currentPage <= 3) {
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={buildUrl(currentPage - 1)}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 bg-white border border-gray-300 rounded-none hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-label="Previous page"
        >
          ← Prev
        </Link>
      ) : (
        <span
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-400 bg-gray-100 border border-gray-200 rounded-none cursor-not-allowed"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-disabled="true"
        >
          ← Prev
        </span>
      )}

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center gap-2">
        {pageNumbers.map((page, index) =>
          typeof page === 'number' ? (
            <Link
              key={index}
              href={buildUrl(page)}
              className={`inline-flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-bold uppercase tracking-wide rounded-none transition-all duration-200 ${
                page === currentPage
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
              aria-label={page === currentPage ? `Current page, page ${page}` : `Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </Link>
          ) : (
            <span
              key={index}
              className="inline-flex items-center justify-center min-w-[40px] h-10 text-gray-400"
              aria-hidden="true"
            >
              {page}
            </span>
          )
        )}
      </div>

      {/* Mobile: Current Page Indicator */}
      <div className="sm:hidden px-4 py-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>
        Page {currentPage} of {totalPages}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={buildUrl(currentPage + 1)}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 bg-white border border-gray-300 rounded-none hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-label="Next page"
        >
          Next →
        </Link>
      ) : (
        <span
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase tracking-wide text-gray-400 bg-gray-100 border border-gray-200 rounded-none cursor-not-allowed"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-disabled="true"
        >
          Next →
        </span>
      )}
    </nav>
  );
}
