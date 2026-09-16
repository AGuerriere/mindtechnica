import type { Metadata } from 'next'
import { inter } from '@/lib/fonts'
import './globals.css'
import Script from 'next/script'
import {
  SITE_DESCRIPTION,
  SITE_EXPERTISE,
  SITE_NAME,
  SITE_SERVICES,
  SITE_SHORT_DESCRIPTION,
  SITE_URL,
} from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  description: SITE_DESCRIPTION,
  title: `${SITE_NAME} | Bespoke Software, AI & AWS Cloud Services`,
  icons: {
    icon: '/icon.ico',
    apple: '/apple-touch-icon.png',
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
              '@id': `${SITE_URL}/#organization`,
              legalName: 'Mind Technica Ltd',
              name: SITE_NAME,
              alternateName: ['MindTechnica', 'Mind-Technica'],
              url: SITE_URL,
              logo: `${SITE_URL}/images/Asset1.png`,
              description: SITE_SHORT_DESCRIPTION,
              knowsAbout: [...SITE_SERVICES, ...SITE_EXPERTISE],
              makesOffer: SITE_SERVICES.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service,
                  url: new URL(['/services#bespoke-software', '/services#ai-solutions', '/aws-cloud-services'][index], SITE_URL).href,
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
