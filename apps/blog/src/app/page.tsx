import type { Metadata } from 'next';
import {
  fetchPosts,
  fetchCategories,
  fetchPostsByCategory,
  searchPosts,
  getTotalPostCount,
  getTotalPostCountByCategory,
  getTotalPostCountBySearch,
} from '@repo/api/blog';
import { FeaturedArticle } from '../components/featured-article';
import { BlogPostCard } from '../components/blog-post-card';
import { CategoryFilter } from '@repo/ui/components/category-filter';
import { SearchBar } from '../components/search-bar';
import { Button } from '../components/button';
import { Pagination } from '../components/pagination';

const POSTS_PER_PAGE = 12;

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    page?: string;
  }>;
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const { category, search: searchQuery, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || '1', 10));

  let title = 'ACME Blog';
  let description = 'Insights, tutorials, and stories from our amazing team';

  if (searchQuery) {
    title = `Search: ${searchQuery}${currentPage > 1 ? ` - Page ${currentPage}` : ''} | ACME Blog`;
    description = `Search results for "${searchQuery}" on the ACME Blog`;
  } else if (category) {
    title = `${category.charAt(0).toUpperCase() + category.slice(1)}${currentPage > 1 ? ` - Page ${currentPage}` : ''} | ACME Blog`;
    description = `Browse ${category} posts on the ACME Blog`;
  } else if (currentPage > 1) {
    title = `ACME Blog - Page ${currentPage}`;
  }

  const baseUrl = process.env.NEXT_PUBLIC_BLOG_URL || 'http://localhost:3001';
  const searchParamsString = new URLSearchParams({
    ...(category && { category }),
    ...(searchQuery && { search: searchQuery }),
    ...(currentPage > 1 && { page: currentPage.toString() }),
  }).toString();

  const canonical = `${baseUrl}${searchParamsString ? `?${searchParamsString}` : ''}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
  };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { category, search: searchQuery, page } = await searchParams;

  // Parse and validate page number
  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  // Always show featured article on page 1 (even with category filter, but not search)
  const showFeatured = !searchQuery && currentPage === 1;

  // Fetch featured post separately if needed
  const featuredPostPromise = showFeatured ? fetchPosts(1, 0) : Promise.resolve([]);

  // Adjust offset for main posts if showing featured (skip first post)
  const mainPostsOffset = showFeatured ? offset + 1 : offset;

  // Fetch posts and total count in parallel
  const [featuredPosts, posts, categories, totalCount] = await Promise.all([
    featuredPostPromise,
    searchQuery
      ? searchPosts(searchQuery, POSTS_PER_PAGE, mainPostsOffset)
      : category
        ? fetchPostsByCategory(category, POSTS_PER_PAGE, mainPostsOffset)
        : fetchPosts(POSTS_PER_PAGE, mainPostsOffset),
    fetchCategories(),
    searchQuery
      ? getTotalPostCountBySearch(searchQuery)
      : category
        ? getTotalPostCountByCategory(category)
        : getTotalPostCount(),
  ]);

  const featuredPost = featuredPosts[0] || null;

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);
  const startIndex = offset + 1;
  const endIndex = Math.min(offset + posts.length, totalCount);

  const getPageTitle = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (category) return `${category.charAt(0).toUpperCase() + category.slice(1)} Posts`;
    return 'Latest Posts';
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Featured Article - Only show on homepage without filters */}
      {featuredPost && <FeaturedArticle post={featuredPost} />}

      <CategoryFilter categories={categories} title="Find Content" />

      {/* Blog Posts Grid */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {getPageTitle()}
            </h2>
            <p className="mt-6 text-xl text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
              {posts.length === 0
                ? 'No posts found'
                : `Showing ${startIndex}-${endIndex} of ${totalCount} post${totalCount !== 1 ? 's' : ''}`}
            </p>
            <div className="mt-8 h-1 w-24 bg-gray-900 mx-auto"></div>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-8 opacity-50">📝</div>
              <h3
                className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                No Posts Found
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                {searchQuery
                  ? `Try adjusting your search terms or browse by category instead.`
                  : `Check back soon for new content in this category.`}
              </p>
              <Button href="/" variant="primary">
                View All Posts
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    category={category}
                    searchQuery={searchQuery}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
