import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'News | Mind Technica',
  description:
    'Insights on AI, automation, and data systems from the Mind Technica team.',
  openGraph: {
    title: 'News | Mind Technica',
    description:
      'Insights on AI, automation, and data systems from the Mind Technica team.',
    url: 'https://mindtechnica.com/news',
    siteName: 'Mind Technica',
  },
  alternates: {
    canonical: '/news',
  },
}

export default function NewsIndex() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="mt-16 mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">News</h1>
        <p className="text-mediumGrey mb-12">
          Insights on AI, automation, and data systems.
        </p>

        {posts.length === 0 ? (
          <p className="text-grey">No posts yet. Check back soon.</p>
        ) : (
          <div className="flex flex-col gap-10">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group block border border-grey/20 rounded-lg p-6 hover:border-green/40 transition-colors"
              >
                <div className="flex items-center gap-3 text-sm text-grey mb-3">
                  <time dateTime={post.frontmatter.date}>
                    {new Date(post.frontmatter.date).toLocaleDateString(
                      'en-GB',
                      { day: 'numeric', month: 'long', year: 'numeric' }
                    )}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-white group-hover:text-green transition-colors mb-2">
                  {post.frontmatter.title}
                </h2>
                <p className="text-mediumGrey text-sm leading-relaxed">
                  {post.frontmatter.description}
                </p>
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
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
