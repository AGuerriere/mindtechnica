import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { SITE_PAGES } from '@/lib/metadata'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.entries(SITE_PAGES)
    .filter(([, page]) => !page.noIndex)
    .map(([path]) => ({ url: new URL(path, SITE_URL).href }))

  const postRoutes = getAllPosts().map(post => ({
    url: `${SITE_URL}/news/${post.slug}`,
    // Only report an editorial update date, never the time of an unrelated build.
    ...(post.frontmatter.updated && { lastModified: new Date(post.frontmatter.updated) }),
  }))

  return [...staticRoutes, ...postRoutes]
}
