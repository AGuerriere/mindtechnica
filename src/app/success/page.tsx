import { Metadata } from 'next'
import { Bayon, Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_NAME } from '@/lib/site'

const bayon = Bayon({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Thank You | ${SITE_NAME}`,
  description: 'Thanks for booking a consultation with Mind Technica about AI, automation, software, cloud infrastructure or voice agent systems.',
  alternates: { canonical: '/success' },
  robots: { index: false, follow: false },
}

export default function Success() {
  return (
    <>
      <Navbar />

      <div className="2xl:flex 2xl:justify-center">
        <main className="2xl:w-[1400px]">
          {/* Background shapes — positioned to viewport edges */}
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

          <section className="flex flex-col items-center justify-center text-center min-h-[60vh] mt-16 md:mt-24 mb-20 md:mb-32">
            <div className="flex justify-center items-center bg-greenFaded rounded-full w-20 h-20 md:w-24 md:h-24 mb-8">
              <Image
                src="/images/arrow.svg"
                width={48}
                height={48}
                alt=""
                className="opacity-90"
              />
            </div>

            <h1 className={`${bayon.className} uppercase text-4xl md:text-[4.5vw] leading-relaxed`}>
              Thanks for <span className={`${bayon.className} highlightsTitle`}>booking</span>
            </h1>

            <p className={`${inter.className} text-stone-300 text-base md:text-2xl font-normal leading-9 max-w-2xl mx-auto mt-6`}>
              Thanks for booking a call with Mind Technica. We look forward to chatting with you. You&apos;ll receive a calendar invite with a video call link shortly.
            </p>

            <p className={`${inter.className} text-stone-400 text-sm md:text-base max-w-xl mx-auto mt-4`}>
              In the meantime, if anything comes up you can always reach us at{' '}
              <a href="mailto:projects@mindtechnica.com" className="text-green hover:underline">
                projects@mindtechnica.com
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/"
                className="inline-block bg-green text-bgBlack font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-center"
              >
                Back to Home
              </Link>
              <Link
                href="/news"
                className="inline-block border-2 border-green text-green font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-green hover:text-bgBlack transition-all text-center"
              >
                Read our latest insights
              </Link>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
