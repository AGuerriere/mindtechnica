import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mind Technica | Engineering Intelligence for Real-World Impact',
  description: 'Mind Technica builds advanced AI, automation and data systems that help organisations scale efficiently by reducing manual work, increasing throughput and enabling faster, more informed decision-making.',
  keywords: [
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
      follow: false,
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
      <body className={`${inter.className} text-greyLight02 ml-5 mr-5 md:ml-24 md:mr-24`}>{children}</body>
    </html>
  )
}
