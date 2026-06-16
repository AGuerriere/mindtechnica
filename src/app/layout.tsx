import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import {
  SITE_DESCRIPTION,
  SITE_EXPERTISE,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_SERVICES,
  SITE_SHORT_DESCRIPTION,
  SITE_URL,
} from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `${SITE_NAME} | Engineering Intelligence for Real-World Impact`,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: './icon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: './images/Asset1.png',
    title: `${SITE_NAME} | Engineering Intelligence for Real-World Impact`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Engineering Intelligence for Real-World Impact`,
    description: SITE_DESCRIPTION,
    images: './images/Asset1.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17934161576"
          strategy="afterInteractive"
        />
        <Script id="google-ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17934161576');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_NAME,
              alternateName: ['MindTechnica', 'Mind-Technica'],
              url: SITE_URL,
              logo: `${SITE_URL}/images/Asset1.png`,
              description: SITE_SHORT_DESCRIPTION,
              knowsAbout: [...SITE_SERVICES, ...SITE_EXPERTISE],
              makesOffer: SITE_SERVICES.map(service => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service,
                },
              })),
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
                addressRegion: 'Northern Ireland',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'projects@mindtechnica.com',
                contactType: 'sales',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} text-greyLight02 ml-5 mr-5 md:ml-24 md:mr-24`}>{children}</body>
    </html>
  )
}
