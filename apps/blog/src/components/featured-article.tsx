import { BlogPost } from '@repo/api/blog';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedArticleProps {
  post: BlogPost;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">
          {/* Left Column - Content */}
          <div className="max-w-4xl">
            <div className="mb-6">
              <span
                className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gray-900 text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Featured Article
              </span>
            </div>

            <h1
              className="text-4xl sm:text-4xl lg:text-5xl font-black uppercase text-gray-900 tracking-tighter leading-none mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex items-center gap-6 mb-8 text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-gray-900">{post.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishedAt.toISOString()}>{formatDate(post.publishedAt)}</time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${post.slug}`}
              className="inline-block bg-gray-900 text-white font-display font-bold px-10 py-5 rounded-none uppercase tracking-wide text-sm hover:bg-gray-700 transition-colors duration-200"
            >
              Read Article
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block">
            <Link href={`/${post.slug}`}>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
