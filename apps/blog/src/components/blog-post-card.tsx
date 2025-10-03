import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@repo/api/blog';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="group relative bg-white border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:scale-[1.02]">
      {/* Cover Image */}
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <Link href={`/${post.slug}`}>
          <Image
            src={post.coverImage}
            alt={post.title}
            width={400}
            height={300}
            className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/${post.slug}`}>
          <h3
            className="text-xl font-black uppercase tracking-tighter text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-base text-gray-600 mb-4 leading-relaxed line-clamp-3" style={{ fontFamily: 'var(--font-body)' }}>
          {post.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center gap-3 mb-4 text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
          <Image src={post.author.avatar} alt={post.author.name} width={32} height={32} className="rounded-full" />
          <div>
            <p className="font-semibold text-gray-900">{post.author.name}</p>
            <p className="text-xs">{formatDate(post.publishedAt)} • {post.readingTime} min read</p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-600 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          <span>{formatNumber(post.views)} views</span>
          <span>•</span>
          <span>{formatNumber(post.likes)} likes</span>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-900 bg-gray-100 border border-gray-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
