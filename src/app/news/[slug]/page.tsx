import { bayon, inter } from '@/lib/fonts'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import { createMetadata, DEFAULT_SOCIAL_IMAGE } from '@/lib/metadata'
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
  const { title, description, image, date, updated, tags, author } = getPostBySlug(params.slug).frontmatter
  return createMetadata({
    title, description, image, keywords: tags,
    path: `/news/${params.slug}`,
    publishedTime: date,
    modifiedTime: updated,
    author: author || SITE_NAME,
  })
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
      name: post.frontmatter.author || SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/news/${params.slug}`,
    image: new URL(post.frontmatter.image || DEFAULT_SOCIAL_IMAGE, SITE_URL).href,
    mainEntityOfPage: `${SITE_URL}/news/${params.slug}`,
    ...(post.frontmatter.updated && { dateModified: post.frontmatter.updated }),
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
          <h1 className={`${bayon.className} text-3xl md:text-4xl text-white mb-4`}>
            {post.frontmatter.title}
          </h1>
          <div className={`${inter.className} flex items-center gap-3 text-sm text-grey`}>
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
                  className={`${inter.className} text-xs px-2 py-1 rounded bg-greenFaded text-green`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {post.frontmatter.image && (
          <div className="relative w-full aspect-[2/1] mb-10 rounded-xl overflow-hidden">
            <Image
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert prose-green max-w-none prose-headings:text-white prose-p:text-greyLight02 prose-a:text-green hover:prose-a:text-green/80 prose-strong:text-white prose-code:text-green prose-pre:bg-bgBlack prose-pre:border prose-pre:border-grey/20 prose-li:text-greyLight02 prose-blockquote:border-green prose-blockquote:text-mediumGrey prose-img:rounded-lg">
          <MDXRemote source={post.content} components={MDXComponents} />
        </article>
      </main>
      <Footer />
    </>
  )
}
