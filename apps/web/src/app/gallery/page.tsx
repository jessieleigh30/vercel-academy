
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
            <div className="bg-gray-50 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                            Categories
                        </h2>
                        <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <span
                                key={category}
                                className="inline-flex items-center px-6 py-3 text-sm font-bold uppercase tracking-wider bg-white text-gray-900 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-600"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            {featuredItems.length > 0 && (
                <div className="bg-white py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                                Featured Work
                            </h2>
                            <div className="mt-6 h-1 w-24 bg-blue-600 mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredItems.slice(0, 6).map((item) => (
                                <div key={item.id} className="group relative bg-white border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-[1.02]">
                                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                        <Image
                                            src={item.thumbnailUrl}
                                            alt={item.title}
                                            width={400}
                                            height={300}
                                            className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                                                Featured
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700" style={{ fontFamily: 'var(--font-display)' }}>
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200"
                                                    style={{ fontFamily: 'var(--font-body)' }}
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
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                            All Work
                        </h2>
                        <div className="mt-6 h-1 w-24 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {regularItems.map((item) => (
                            <div key={item.id} className="group relative bg-white border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02]">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                    <Image
                                        src={item.thumbnailUrl}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700" style={{ fontFamily: 'var(--font-display)' }}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold uppercase tracking-tight text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200"
                                                style={{ fontFamily: 'var(--font-body)' }}
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