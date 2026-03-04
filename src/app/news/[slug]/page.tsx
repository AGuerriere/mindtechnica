import { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import MDXComponents from '@/components/mdx/MDXComponents'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  const { title, description, image, date } = post.frontmatter

  return {
    title: `${title} | Mind Technica`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `https://mindtechnica.com/news/${params.slug}`,
      siteName: 'Mind Technica',
      ...(image && { images: [{ url: image }] }),
    },
    alternates: {
      canonical: `/news/${params.slug}`,
    },
  }
}

export default function NewsPost({ params }: PageProps) {
  const post = getPostBySlug(params.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: {
      '@type': 'Organization',
      name: post.frontmatter.author || 'Mind Technica',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mind Technica',
      url: 'https://mindtechnica.com',
    },
    url: `https://mindtechnica.com/news/${params.slug}`,
    ...(post.frontmatter.image && { image: post.frontmatter.image }),
  }

  return (
    <>
      <Navbar />
      <main className="mt-16 mb-20 max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Link
          href="/news"
          className="text-sm text-grey hover:text-green transition-colors mb-8 inline-block"
        >
          &larr; Back to News
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-grey">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
            {post.frontmatter.author && (
              <>
                <span>·</span>
                <span>{post.frontmatter.author}</span>
              </>
            )}
          </div>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.frontmatter.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-greenFaded text-green"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <article className="prose prose-invert prose-green max-w-none prose-headings:text-white prose-p:text-greyLight02 prose-a:text-green hover:prose-a:text-green/80 prose-strong:text-white prose-code:text-green prose-pre:bg-bgBlack prose-pre:border prose-pre:border-grey/20 prose-li:text-greyLight02 prose-blockquote:border-green prose-blockquote:text-mediumGrey prose-img:rounded-lg">
          <MDXRemote source={post.content} components={MDXComponents} />
        </article>
      </main>
      <Footer />
    </>
  )
}
