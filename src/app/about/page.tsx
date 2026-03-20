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
    'Learn about Mind Technica — an AI consultancy focused on helping organisations harness the power of modern artificial intelligence.',
  openGraph: {
    title: 'About | Mind Technica',
    description:
      'Learn about Mind Technica — an AI consultancy focused on helping organisations harness the power of modern artificial intelligence.',
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
              We are an engineering-led AI consultancy helping organisations scale through automation, intelligent systems, and data-driven decision-making. Independent, rigorous, and focused on outcomes that last.
            </p>
          </section>

          {/* Our Vision */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h1
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                Our Vision
              </h1>
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
                practical, and widely shared.
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

          {/* About Mind Technica */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                About Mind Technica
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm md:text-lg leading-relaxed">
                Mind Technica is an AI consultancy focused on helping
                organisations harness the power of modern artificial
                intelligence. We design and build intelligent systems that
                automate complex processes, unlock insights from data, and
                enable organisations to operate more efficiently and make better
                decisions.
              </p>
              <p className="text-sm md:text-lg leading-relaxed">
                Our work spans machine learning, large language models, data
                science, and automation, translating cutting-edge AI research
                into practical solutions for businesses. From intelligent
                assistants and predictive analytics to custom AI platforms, we
                build technology that delivers real, measurable impact.
              </p>
              <p className="text-sm md:text-lg leading-relaxed">
                We work closely with organisations to identify high-value
                opportunities for AI adoption and deliver solutions that are
                robust, scalable, and aligned with their strategic goals.
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

          {/* Our Mission */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2
                className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}
              >
                Our Mission
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="max-w-4xl space-y-6">
              <p className="text-sm md:text-lg leading-relaxed">
                Artificial intelligence has the potential to disrupt and
                transform every industry. At Mind Technica, our mission is to
                ensure that this transformation benefits as many people as
                possible.
              </p>
              <p className="text-sm md:text-lg leading-relaxed">
                We aim to democratise access to AI, helping organisations of all
                sizes leverage technologies that were once available only to
                large research labs and major technology companies. By making
                advanced AI more accessible, innovation can spread faster and
                deliver broader benefits across the economy.
              </p>
              <p className="text-sm md:text-lg leading-relaxed">
                At the same time, we are driven by a deeper ambition: to
                contribute to the advancement of science and human knowledge.
                Through the development and application of intelligent systems,
                we aim to help push the boundaries of what technology and
                humanity can achieve.
              </p>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
