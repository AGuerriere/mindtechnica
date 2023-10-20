import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mind Technica',
  description: 'Web development and branding agency',
  keywords: ['Web Development', 'Branding', 'Web Agency', 'Software'],
  metadataBase: new URL('https://mindtechnica.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/Asset 44@4x.png',
    title: 'Mind Technica',
    description: 'Web development and branding agencyb',
    url: 'https://nextjs.org',
    siteName: 'Mind Technica',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-greyLight02 ml-5 mr-5 md:ml-24 md:mr-24`}>{children}</body>
    </html>
  )
}
