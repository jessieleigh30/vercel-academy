import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchPostBySlug, fetchPosts } from '@repo/api/blog';

export const revalidate = 3600; // Revalidate every hour

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | ACME Blog',
    };
  }

  return {
    title: `${post.title} | ACME Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
    <main className="min-h-screen bg-white">
      {/* Hero Image with Overlay */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full overflow-hidden bg-gray-900">
        <Image src={post.coverImage} alt={post.title} fill priority className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-4xl w-full px-6 lg:px-8 pb-16">
            <div className="mb-6">
              <span
                className="inline-flex items-center rounded-full bg-gray-1000 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {post.category}
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        {/* Author Info */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full ring-4 ring-gray-200"
            />
            <div className="ml-4">
              <p className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                {post.author.name}
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                {post.author.bio}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-2 text-sm text-gray-600">
            <time dateTime={post.publishedAt.toISOString()}>{formatDate(post.publishedAt)}</time>
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        {/* Mobile Meta */}
        <div className="sm:hidden flex items-center justify-between mb-8 text-sm text-gray-600">
          <time dateTime={post.publishedAt.toISOString()}>{formatDate(post.publishedAt)}</time>
          <span>{post.readingTime} min read</span>
        </div>

        {/* Excerpt */}
        <div className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            {post.excerpt}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-12" style={{ fontFamily: 'var(--font-body)' }}>
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <h3
            className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Post Stats */}
        <div className="flex items-center justify-between mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                {formatNumber(post.views)}
              </p>
              <p className="text-sm text-gray-600 uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                Views
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                {formatNumber(post.likes)}
              </p>
              <p className="text-sm text-gray-600 uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                Likes
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wide text-white bg-gray-900 rounded-none hover:bg-gray-700 transition-colors duration-200 shadow-lg"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
