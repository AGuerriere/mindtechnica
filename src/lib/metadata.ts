import type { Metadata } from 'next'
import { RSS_DESCRIPTION, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './site'

export const DEFAULT_SOCIAL_IMAGE = '/images/Asset1.png'

type PageDetails = {
  title: string
  description: string
  keywords?: string[]
  noIndex?: boolean
}

// One source for page metadata and the sitemap. Keep utility pages out of search.
export const SITE_PAGES: Record<string, PageDetails> = {
  '/': {
    title: 'Bespoke Software, AI & AWS Cloud Services',
    description: SITE_DESCRIPTION,
    keywords: ['bespoke software development', 'AI integrations', 'bespoke AI solutions', 'AWS cloud management', 'Northern Ireland'],
  },
  '/services': {
    title: 'Our Services: Bespoke Software, AI & AWS',
    description: 'Explore bespoke software development, AI integrations and bespoke AI solutions, and AWS cloud management from Mind Technica.',
    keywords: ['bespoke software', 'AI integrations', 'AI solutions', 'AWS cloud services'],
  },
  '/aws-cloud-services': {
    title: 'AWS Cloud Services & Management',
    description: 'AWS design, migration, cost optimisation, security and managed support from Mind Technica, with an AWS-certified Solutions Architect on the team.',
    keywords: ['AWS cloud management', 'AWS architecture', 'AWS migration', 'AWS cost optimisation', 'Amazon Bedrock', 'disaster recovery'],
  },
  '/kitchen-quotation-workflow': {
    title: 'Bespoke Software & AI for KBB Sales & Quotes',
    description: 'Explore bespoke software and AI for clients, quotes and follow-ups. Book a free sales workflow call for your kitchen, bathroom or bedroom business.',
    keywords: ['kitchen quotation software', 'KBB sales software', 'client and quote tracking', 'sales workflow consultation'],
  },
  '/about': {
    title: 'About Our Team',
    description: 'Meet Mind Technica, a Northern Ireland consultancy building bespoke software and AI solutions, integrating business systems and managing AWS infrastructure.',
    keywords: ['Mind Technica team', 'Antonio Guerriere', 'software consultancy Northern Ireland', 'AI consultancy'],
  },
  '/book-a-call': {
    title: 'Book a Free Consultation',
    description: 'Discuss your bespoke software project, AI integration or AWS cloud requirements with Mind Technica. Book a free consultation to explore the next steps.',
  },
  '/careers': {
    title: 'Careers in Software, AI & Cloud Engineering',
    description: 'Explore opportunities with Mind Technica, working on bespoke software, AI integrations and solutions, and AWS cloud infrastructure.',
  },
  '/news': {
    title: 'Insights on Software, AI & AWS',
    description: RSS_DESCRIPTION,
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'How Mind Technica collects and handles personal data from website visitors, enquiries and consultation bookings, and how to contact us about your data.',
  },
  '/success': {
    title: 'Booking Confirmation',
    description: 'Thank you for booking a consultation with Mind Technica. We look forward to discussing your project.',
    noIndex: true,
  },
}

type MetadataOptions = PageDetails & {
  path: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function createMetadata({ title, description, path, keywords, noIndex = false, image = DEFAULT_SOCIAL_IMAGE, publishedTime, modifiedTime, author }: MetadataOptions): Metadata {
  const pageTitle = `${title} | ${SITE_NAME}`
  const url = new URL(path, SITE_URL).href
  const imageUrl = new URL(image, SITE_URL).href
  return {
    title: pageTitle,
    description,
    keywords: [SITE_NAME, ...(keywords || [])],
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': `${SITE_URL}/rss.xml` },
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [{ url: imageUrl, alt: publishedTime ? title : 'Mind Technica' }],
      ...(publishedTime
        ? { type: 'article' as const, publishedTime, ...(modifiedTime && { modifiedTime }), ...(author && { authors: [author] }) }
        : { type: 'website' as const }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [{ url: imageUrl, alt: publishedTime ? title : 'Mind Technica' }],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export function pageMetadata(path: string): Metadata {
  const page = SITE_PAGES[path]
  if (!page) throw new Error(`Missing metadata for ${path}`)
  return createMetadata({ ...page, path })
}
