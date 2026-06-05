import { Metadata } from 'next'
import { Bayon } from 'next/font/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About | Mind Technica',
  description:
    'Mind Technica is an engineering-led consultancy specialising in AI, automation, data systems, and custom software development.',
  openGraph: {
    title: 'About | Mind Technica',
    description:
      'Mind Technica is an engineering-led consultancy specialising in AI, automation, data systems, and custom software development.',
    url: 'https://mindtechnica.com/about',
    siteName: 'Mind Technica',
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
          <section className="mt-16 md:mt-24 mb-16 md:mb-24">
            <h1 className={`${bayon.className} uppercase text-4xl md:text-[4.5vw] leading-relaxed text-center`}>
              About <span className={`${bayon.className} highlightsTitle`}>Mind Technica</span>
            </h1>
            <p className={`${inter.className} text-center text-stone-300 text-base md:text-2xl font-normal leading-9 max-w-3xl mx-auto mt-6`}>
              Mind Technica is an engineering-led consultancy specialising in AI, automation, data systems, and custom software development. We help organisations scale through intelligent systems that reduce manual overhead, improve decision-making, and deliver measurable operational value.
            </p>
          </section>

          {/* Our Vision */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                Our Vision
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm md:text-lg leading-relaxed">
                At Mind Technica, we believe artificial intelligence will
                reshape every industry and profoundly transform society. Our
                vision is to help guide this transformation toward a future
                where AI expands human potential, accelerates scientific
                discovery, and benefits people everywhere.
              </p>
              <p className="text-sm md:text-lg leading-relaxed">
                We aim to push the boundaries of what intelligent systems can
                achieve while ensuring the benefits of AI are accessible,
                practical, and widely shared, from ambitious startups and growing SMEs to large enterprises.
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

          {/* How we work */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                How we work
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm md:text-lg leading-relaxed">
                We take an engineering-first approach to every engagement. That means starting with a clear understanding of the problem, building on robust and maintainable architecture, and delivering systems that perform reliably under real-world conditions.
              </p>
              <p className="text-sm md:text-lg leading-relaxed">
                We work independently, which means we move quickly, stay focused on outcomes, and have no incentive to recommend tools or platforms beyond what is right for your organisation.
              </p>
            </div>
          </section>

          {/* What we believe */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                What we believe
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm md:text-lg leading-relaxed">
                AI is most valuable when it solves a specific, well-understood problem. The organisations that benefit most from it are not those that adopt it earliest, but those that apply it most deliberately. We work with clients who want to understand what AI can genuinely do for their operations and build accordingly.
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

          {/* Who we work with */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                Who we work with
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm md:text-lg leading-relaxed">
                We work with SMEs, public sector teams, and technology-driven organisations across the UK and Ireland. Our engagements range from focused audits and advisory work to full-scale AI and software builds and long-term technical partnerships.
              </p>
            </div>
          </section>

          {/* Let's work together */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                Let&apos;s work together
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm md:text-lg leading-relaxed">
                If you want to scale efficiently using AI, we can help you identify the right opportunities and build the systems to act on them.
              </p>
              <div className="pt-4">
                <a
                  href="https://calendly.com/mindtechnica/45min"
                  target="_blank"
                  className="inline-block bg-green text-bgBlack font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-center"
                >
                  Book a free consultation
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
