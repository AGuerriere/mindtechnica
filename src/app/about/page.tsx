import { Metadata } from 'next'
import { Bayon } from 'next/font/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_KEYWORDS, SITE_NAME, SITE_URL } from '@/lib/site'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    'Mind Technica is an engineering-led consultancy building bespoke software and AI around the way businesses already work, primarily for growing and mid-sized businesses, with support for larger organisations on defined transformation projects.',
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description:
      'Learn about Mind Technica: an engineering-led consultancy building bespoke software and AI that free teams from repetitive work.',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  return (
    <>
      <Navbar />

      <div className="2xl:flex 2xl:justify-center">
        <main className="2xl:w-[1400px]">

          {/* Top shapes — positioned to viewport edges */}
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

          {/* Hero */}
          <section className="mt-16 md:mt-24 mb-20 md:mb-32">
            <h1 className={`${bayon.className} uppercase text-4xl md:text-[4.5vw] leading-relaxed text-center`}>
              About <span className={`${bayon.className} highlightsTitle`}>Mind Technica</span>
            </h1>
            <p className={`${inter.className} text-center text-stone-300 text-base md:text-2xl font-normal leading-9 max-w-3xl mx-auto mt-6`}>
              Mind Technica is an engineering-led consultancy building bespoke software and AI around the way businesses already work. We help our clients free up their teams&apos; time, reduce the manpower each task needs, and scale without proportional growth in cost or headcount.
            </p>
          </section>

          {/* Our Vision — two-column layout */}
          <section className="mb-20 md:mb-32">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                Our Vision
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl">
              <p className="text-sm md:text-lg leading-relaxed">
                We believe growing businesses deserve the same advantage from
                software and AI that large enterprises get, without enterprise
                budgets, timelines or complexity. Our work is about making that
                advantage practical: systems that free people from repetitive
                work so they can focus on what genuinely moves the business
                forward.
              </p>
              <p className="text-sm md:text-lg leading-relaxed text-stone-400">
                We build for the long term. Every system we deliver is
                engineered to be maintainable, to scale with the organisation
                it serves, and to keep earning its place, because tools built
                around a business keep getting used, where generic tools are
                abandoned.
              </p>
            </div>
          </section>

          {/* Mid-page shape — triangle right */}
          <div className="h-24">
            <Image
              src="/images/triangle.svg"
              width={100}
              height={100}
              alt=""
              className="absolute right-0 -z-50"
            />
          </div>

          {/* How we work — left-bordered principle cards */}
          <section className="mb-20 md:mb-32">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                How we work
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              <div className="border-l-2 border-green pl-6">
                <h3 className={`${bayon.className} text-white text-xl md:text-2xl mb-3`}>Engineering-first</h3>
                <p className="text-sm md:text-base leading-relaxed text-stone-300">
                  We start with a clear understanding of the problem, build on robust and maintainable architecture, and deliver systems that perform reliably under real-world conditions.
                </p>
              </div>
              <div className="border-l-2 border-green pl-6">
                <h3 className={`${bayon.className} text-white text-xl md:text-2xl mb-3`}>Independent &amp; focused</h3>
                <p className="text-sm md:text-base leading-relaxed text-stone-300">
                  We work independently, which means we move quickly, stay focused on outcomes, and have no incentive to recommend tools or platforms beyond what is right for your organisation.
                </p>
              </div>
            </div>
          </section>

          {/* What we believe — highlighted callout */}
          <section className="mb-20 md:mb-32">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                What we believe
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="bg-blueFaded border-l-4 border-green rounded-xl p-8 md:p-12 max-w-4xl">
              <p className="text-base md:text-xl leading-relaxed text-stone-200">
                AI is most valuable when it solves a specific, well-understood problem. The organisations that benefit most from it are not those that adopt it earliest, but those that apply it most deliberately. We work with clients who want to understand what AI can genuinely do for their operations and build accordingly. And we believe software should be built around the business, not the other way round. It is the difference between tools that get adopted and tools that get abandoned.
              </p>
            </div>
          </section>

          {/* Lower shape — triangle2 left */}
          <div className="h-16">
            <Image
              src="/images/triangle2.svg"
              width={70}
              height={70}
              alt=""
              className="absolute left-0 -z-50"
            />
          </div>

          {/* Who we work with — colour-coded cards */}
          <section className="mb-20 md:mb-32">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                Who we work with
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <p className={`${inter.className} text-sm md:text-lg leading-relaxed max-w-4xl mb-10 text-stone-300`}>
              We primarily work with growing and mid-sized businesses, while also supporting larger organisations and public-sector bodies on clearly defined transformation projects. Most of our clients are in the UK and Ireland, but we work with organisations wherever the problem is well defined.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-greenFaded rounded-xl p-6 md:p-8">
                <h3 className={`${bayon.className} text-green text-xl md:text-2xl mb-3`}>Growing and mid-sized businesses</h3>
                <p className="text-sm md:text-base leading-relaxed text-stone-300">
                  Our core focus: businesses that have outgrown their current processes and need systems that scale without adding headcount, built around the way they already work.
                </p>
              </div>
              <div className="bg-blueFaded rounded-xl p-6 md:p-8">
                <h3 className={`${bayon.className} text-blue text-xl md:text-2xl mb-3`}>Larger organisations and public sector</h3>
                <p className="text-sm md:text-base leading-relaxed text-stone-300">
                  We support larger organisations and public-sector bodies on clearly defined transformation projects: document processing, automation and AI systems with a measurable outcome.
                </p>
              </div>
              <div className="bg-pinkFaded rounded-xl p-6 md:p-8">
                <h3 className={`${bayon.className} text-pink text-xl md:text-2xl mb-3`}>Teams held back by manual work</h3>
                <p className="text-sm md:text-base leading-relaxed text-stone-300">
                  Whatever the size or sector: if your people spend their days moving information between systems, chasing approvals or re-keying data, that is the problem we solve.
                </p>
              </div>
            </div>
          </section>

          {/* Let's work together — standalone CTA */}
          <section className="mb-16 md:mb-24">
            <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl mb-6`}>
              Let&apos;s work together
            </h2>
            <p className={`${inter.className} text-sm md:text-lg leading-relaxed max-w-2xl mb-8 text-stone-300`}>
              If you want to free your team&apos;s time and scale efficiently, we can help you identify the right opportunities and build the systems to act on them.
            </p>
            <a
              href="/book-a-call"
              className="inline-block bg-green text-bgBlack font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-center"
            >
              Book a free consultation
            </a>
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
