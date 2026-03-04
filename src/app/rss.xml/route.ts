import { getAllPosts } from '@/lib/blog'

export function GET() {
  const baseUrl = 'https://mindtechnica.com'
  const posts = getAllPosts()

  const itemsXml = posts
    .map(
      post => `    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${baseUrl}/news/${post.slug}</link>
      <description>${escapeXml(post.frontmatter.description)}</description>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/news/${post.slug}</guid>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mind Technica News</title>
    <link>${baseUrl}/news</link>
    <description>Insights on AI, automation, and data systems from the Mind Technica team.</description>
    <language>en-gb</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
