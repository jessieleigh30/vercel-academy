
import { fetchGalleryItems, fetchGalleryCategories } from '@repo/api/brand'
import Image from 'next/image'
import { Hero } from '@repo/ui/components/hero'

export default async function GalleryPage() {
    const [galleryItems, categories] = await Promise.all([
        fetchGalleryItems(24),
        fetchGalleryCategories()
    ])

    // Group items by category for display
    const featuredItems = galleryItems.filter(item => item.featured)
    const regularItems = galleryItems.filter(item => !item.featured)

    return (
        <div className="min-h-screen bg-white">
            <Hero 
                title="Portfolio"
                description="Explore our work, team, and company journey through images"
            />

            {/* Categories */}
            <div className="bg-white py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <span
                                key={category}
                                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 cursor-pointer border border-blue-200"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            {featuredItems.length > 0 && (
                <div className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
                            Featured
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredItems.slice(0, 6).map((item) => (
                                <div key={item.id} className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <Image
                                            src={item.thumbnailUrl}
                                            alt={item.title}
                                            width={400}
                                            height={300}
                                            className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 border border-blue-200">
                                                Featured
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 border border-gray-200">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 border border-blue-200"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Regular Gallery Grid */}
            <div className="bg-gradient-to-br from-indigo-900/10 to-purple-900/10 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Gallery 🇺️
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {regularItems.map((item) => (
                            <div key={item.id} className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src={item.thumbnailUrl}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-flex items-center rounded-full bg-gray-500/20 px-2 py-1 text-xs font-medium text-gray-400 border border-gray-500/30">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-foreground mb-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-400 border border-blue-500/30"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}