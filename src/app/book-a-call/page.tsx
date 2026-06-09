import { Metadata } from 'next'
import { Bayon, Inter } from 'next/font/google'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'

const bayon = Bayon({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book a Call | Mind Technica',
  description: 'Tell us about your project and choose a time for a free consultation with the Mind Technica team.',
  alternates: { canonical: '/book-a-call' },
}

export default function BookACall() {
  return (
    <>
      <Navbar />

      <div className="2xl:flex 2xl:justify-center">
        <main className="2xl:w-[1400px]">
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

          <section className="mt-16 md:mt-24 mb-12 md:mb-16">
            <h1 className={`${bayon.className} uppercase text-4xl md:text-[4.5vw] leading-relaxed text-center`}>
              Book a <span className={`${bayon.className} highlightsTitle`}>free call</span>
            </h1>
            <p className={`${inter.className} text-center text-stone-300 text-base md:text-xl font-normal leading-8 max-w-2xl mx-auto mt-4`}>
              Tell us a bit about your organisation and what you&apos;re looking to achieve. We&apos;ll come prepared and make the most of your time.
            </p>
          </section>

          <section className="flex flex-col items-center mb-24 md:mb-32">
            <BookingForm />
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
