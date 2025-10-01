import { fetchPosts, fetchCategories, fetchPostsByCategory, searchPosts } from '@repo/api/blog'
import { BlogPostCard } from '../components/blog-post-card'
import { CategoryFilter } from '../components/category-filter'
import { SearchBar } from '../components/search-bar'
import { Button } from '../components/button'
import { Hero } from '@repo/ui/components/hero'

interface HomePageProps {
  searchParams: {
    category?: string
    search?: string
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const category = searchParams.category
  const searchQuery = searchParams.search
  
  const [posts, categories] = await Promise.all([
    searchQuery 
      ? searchPosts(searchQuery, 12)
      : category 
      ? fetchPostsByCategory(category, 12) 
      : fetchPosts(12),
    fetchCategories()
  ])

  const getPageTitle = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`
    if (category) return `${category.charAt(0).toUpperCase() + category.slice(1)} Posts`
    return 'Latest Posts'
  }

  return (
    <main className="min-h-screen bg-white">
      <Hero 
        title="ACME Blog"
        description="Insights, tutorials, and stories from our amazing team"
      />

      {/* Search & Filter */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
              Find Content
            </h2>
            <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SearchBar initialQuery={searchQuery} />
            <CategoryFilter categories={categories} />
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              {getPageTitle()}
            </h2>
            <p className="mt-6 text-xl text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
              {posts.length === 0 
                ? 'No posts found' 
                : `${posts.length} post${posts.length !== 1 ? 's' : ''} found`
              }
            </p>
            <div className="mt-8 h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-8 opacity-50">📝</div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                No Posts Found
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                {searchQuery 
                  ? `Try adjusting your search terms or browse by category instead.`
                  : `Check back soon for new content in this category.`
                }
              </p>
              <Button 
                href="/"
                variant="primary"
              >
                View All Posts
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
