import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mind Technica | Engineering Intelligence for Real-World Impact',
  description: 'Mind Technica builds advanced AI, automation and data systems that help organisations scale efficiently by reducing manual work, increasing throughput and enabling faster, more informed decision-making.',
  keywords: [
    'Mind Technica',
    'MindTechnica',
    'AI',
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
    'Automation',
    'Robotics',
    'Custom Software Development',
    'AI Solutions',
    'Data Systems',
    'Intelligent Automation',
    'AI Consulting',
    'ML Engineering',
    'Process Automation',
    'Data Analytics',
    'Business Intelligence',
  ],
  metadataBase: new URL('https://mindtechnica.com'),
  icons: {
    icon: './icon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: './images/Asset1.png',
    title: 'Mind Technica | Engineering Intelligence for Real-World Impact',
    description: 'Mind Technica builds advanced AI, automation and data systems that help organisations scale efficiently by reducing manual work, increasing throughput and enabling faster, more informed decision-making.',
    url: 'https://mindtechnica.com',
    siteName: 'Mind Technica',
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17934161576"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17934161576');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var fired = false;
                window.addEventListener('message', function(e) {
                  var data = e.data;
                  if (data && data.event === 'calendly.event_scheduled') {
                    if (fired) return;
                    fired = true;
                    if (typeof gtag === 'function') {
                      gtag('event', 'conversion', {
                        'send_to': 'AW-17934161576/HFb7CJqnuPMbEKit1udC',
                        'value': 1.0,
                        'currency': 'GBP'
                      });
                    }
                  }
                });
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mind Technica',
              alternateName: ['MindTechnica', 'Mind-Technica'],
              url: 'https://mindtechnica.com',
              logo: 'https://mindtechnica.com/images/Asset1.png',
              description: 'Mind Technica builds advanced AI, automation and data systems that help organisations scale efficiently.',
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
