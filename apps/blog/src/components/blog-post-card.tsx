import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@repo/api/blog';
import { Card } from './card';
import { Button } from './button';

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
    <Card className="group relative overflow-hidden flex flex-col h-full">
      {/* Cover Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-200">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Author & Date */}
        <div className="flex items-center mb-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={32}
            height={32}
            className="rounded-full ring-2 ring-gray-200"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <p className="text-xs text-gray-600">{formatDate(post.publishedAt)}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 border border-blue-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta Info & CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>{post.readingTime} min read</span>
            <span>{formatNumber(post.views)} views</span>
            <span>{formatNumber(post.likes)} likes</span>
          </div>
          <Button
            href={`/${post.slug}`}
            variant="outline"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Read More
          </Button>
        </div>
      </div>
    </Card>
  );
}
