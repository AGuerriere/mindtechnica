import { Metadata } from 'next'
import { Bayon } from 'next/font/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Insights & Lab Notes | Mind Technica',
  description:
    'Thinking on AI, automation, and data systems — from the work we do and the problems we find interesting.',
  openGraph: {
    title: 'Insights & Lab Notes | Mind Technica',
    description:
      'Thinking on AI, automation, and data systems — from the work we do and the problems we find interesting.',
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

      <div className="2xl:flex 2xl:justify-center">
        <main className="2xl:w-[1400px]">

          {/* Top shapes — positioned to viewport edges */}
          <div>
            <Image
              src="/images/polygon.svg"
              width={61}
              height={105}
              alt=""
              className="absolute left-0 -z-50"
            />
            <Image
              src="/images/rectangle.svg"
              width={156}
              height={312}
              alt=""
              className="absolute right-0 -z-50"
            />
          </div>

          {/* Hero */}
          <section className="mt-16 md:mt-24 mb-16 md:mb-24">
            <h1 className={`${bayon.className} uppercase text-4xl md:text-[4.5vw] leading-relaxed text-center`}>
              Insights &amp; <span className={`${bayon.className} highlightsTitle`}>Lab Notes</span>
            </h1>
            <p className={`${inter.className} text-center text-stone-300 text-base md:text-2xl font-normal leading-9 max-w-3xl mx-auto mt-6`}>
              Thinking on AI, automation, and data systems — from the work we do and the problems we find interesting.
            </p>
          </section>

          {/* Mid-page shape */}
          <div className="h-16">
            <Image
              src="/images/triangle2.svg"
              width={70}
              height={70}
              alt=""
              className="absolute left-0 -z-50"
            />
          </div>

          {/* Posts */}
          <section className="mb-16 md:mb-24">
            {posts.length === 0 ? (
              <p className={`${inter.className} text-grey`}>No posts yet. Check back soon.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {posts.map(post => (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="group flex flex-row items-center border border-grey/20 rounded-xl p-6 md:p-8 hover:border-green/40 transition-colors gap-6"
                  >
                    <div className="flex-1 min-w-0">
                      <div className={`${inter.className} flex items-center gap-3 text-sm text-grey mb-3`}>
                        <time dateTime={post.frontmatter.date}>
                          {new Date(post.frontmatter.date).toLocaleDateString(
                            'en-GB',
                            { day: 'numeric', month: 'long', year: 'numeric' }
                          )}
                        </time>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <h2 className={`${bayon.className} text-2xl md:text-3xl text-white group-hover:text-green transition-colors mb-2`}>
                        {post.frontmatter.title}
                      </h2>
                      <p className={`${inter.className} text-stone-300 text-sm md:text-base leading-relaxed`}>
                        {post.frontmatter.description}
                      </p>
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
                    </div>
                    {post.frontmatter.image && (
                      <div className="relative flex-shrink-0 w-40 md:w-56 aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={post.frontmatter.image}
                          alt={post.frontmatter.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
