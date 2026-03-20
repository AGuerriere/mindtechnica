import { Metadata } from 'next'
import { Bayon } from 'next/font/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Services | Mind Technica',
  description:
    'Mind Technica delivers business process automation, agentic AI systems, data science, custom AI software, and AI strategy to help organisations scale intelligently.',
  openGraph: {
    title: 'Services | Mind Technica',
    description:
      'Mind Technica delivers business process automation, agentic AI systems, data science, custom AI software, and AI strategy to help organisations scale intelligently.',
    url: 'https://mindtechnica.com/services',
    siteName: 'Mind Technica',
  },
  alternates: {
    canonical: '/services',
  },
}

const services = [
  {
    number: '01',
    title: 'AI strategy and advisory',
    tagline: 'Discover where AI can make a real difference in your business.',
    body: 'Most AI projects fail not because of bad technology, but because of unclear objectives, poor data foundations, or the wrong problem being solved. We work with leadership teams to identify the highest-impact opportunities, assess readiness, and build a practical roadmap so that when you do invest, you invest in the right things.',
    color: 'text-green',
    bgColor: 'bg-greenFaded',
  },
  {
    number: '02',
    title: 'Agentic AI and generative AI',
    tagline: "AI that doesn\u2019t just answer questions. It gets things done.",
    body: 'Agentic and generative AI systems go further than standard AI tools. They reason through multi-step problems, use APIs and databases as tools, generate content and insights, and complete tasks autonomously, with human oversight built in at the points that matter. We design and deploy agents and generative AI solutions tailored to your operations, from internal research assistants to customer-facing copilots.',
    color: 'text-pink',
    bgColor: 'bg-pinkFaded',
  },
  {
    number: '03',
    title: 'Business process automation',
    tagline: 'Automate the repetitive. Redirect the time.',
    body: 'Most businesses are running on a patchwork of manual steps: copying data between systems, chasing approvals, generating reports by hand. We replace those bottlenecks with reliable automated workflows that run without intervention, scale without headcount, and free your team to focus on work that actually requires them.',
    color: 'text-blue',
    bgColor: 'bg-blueFaded',
  },
  {
    number: '04',
    title: 'Data science and engineering',
    tagline: 'Your data is only valuable if you can use it.',
    body: 'We work across the full data stack, from cleaning and structuring raw data to building predictive models and production pipelines. Whether you need a one-off analysis or an infrastructure your team can rely on week to week, we deliver work that is rigorous, reproducible, and built to last.',
    color: 'text-green',
    bgColor: 'bg-greenFaded',
  },
  {
    number: '05',
    title: 'Custom AI software',
    tagline: 'Purpose-built software for problems off-the-shelf tools cannot solve.',
    body: 'When existing products do not fit your workflow, we build from scratch. That might mean an internal tool that connects your systems in a way no SaaS product supports, or a client-facing application with AI at its core. We handle the full build, from architecture to deployment, with a focus on maintainability and real-world performance.',
    color: 'text-pink',
    bgColor: 'bg-pinkFaded',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <div className="2xl:flex 2xl:justify-center">
        <main className="2xl:w-[1400px]">

          {/* Hero */}
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
          <section className="mt-16 md:mt-24 mb-16 md:mb-24">
            <h1 className={`${bayon.className} uppercase text-4xl md:text-[4.5vw] leading-relaxed text-center`}>
              What we <span className={`${bayon.className} highlightsTitle`}>do</span>
            </h1>
            <p className={`${inter.className} text-center text-stone-300 text-base md:text-2xl font-normal leading-9 max-w-3xl mx-auto mt-6`}>
              We design and build AI systems, automation workflows, and data infrastructure that help organisations scale without proportional growth in headcount or cost.
            </p>
          </section>

          {/* Service cards */}
          <section className="space-y-8 md:space-y-12 mb-16 md:mb-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative border border-grey/20 rounded-2xl p-8 md:p-12 overflow-hidden"
              >
                {/* Background shape accent */}
                {index === 0 && (
                  <div className="absolute right-8 top-8 -z-10 opacity-30">
                    <Image src="/images/bigcircle.svg" width={80} height={80} alt="" />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute right-8 bottom-8 -z-10 opacity-30">
                    <Image src="/images/star.svg" width={70} height={70} alt="" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute right-12 top-8 -z-10 opacity-30">
                    <Image src="/images/triangle.svg" width={80} height={80} alt="" />
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute right-8 bottom-8 -z-10 opacity-30">
                    <Image src="/images/circle.svg" width={60} height={60} alt="" />
                  </div>
                )}
                {index === 4 && (
                  <div className="absolute right-8 top-8 -z-10 opacity-30">
                    <Image src="/images/square.svg" width={70} height={70} alt="" />
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:gap-16">
                  {/* Left column */}
                  <div className="md:w-2/5 mb-6 md:mb-0">
                    <span className={`${bayon.className} text-5xl md:text-7xl ${service.color} opacity-20`}>
                      {service.number}
                    </span>
                    <h2 className={`${bayon.className} text-white text-3xl md:text-4xl lg:text-5xl mt-2 leading-tight`}>
                      {service.title}
                    </h2>
                    <p className={`${inter.className} ${service.color} text-base md:text-lg font-semibold mt-4 leading-snug`}>
                      {service.tagline}
                    </p>
                  </div>

                  {/* Right column */}
                  <div className="md:w-3/5 flex items-center">
                    <p className={`${inter.className} text-stone-300 text-sm md:text-base leading-relaxed`}>
                      {service.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Decorative shape break */}
          <div className="h-16 mb-8">
            <Image
              src="/images/triangle2.svg"
              width={70}
              height={70}
              alt=""
              className="absolute left-0 -z-50"
            />
          </div>

          {/* CTA */}
          <section className="mb-16 md:mb-24 border border-grey/20 rounded-2xl p-8 md:p-12 bg-blueFaded">
            <h2 className={`${bayon.className} text-white text-3xl md:text-5xl lg:text-6xl mb-4`}>
              Not sure where to start?
            </h2>
            <p className={`${inter.className} text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8`}>
              We offer a free consultation to help you identify the highest-impact opportunity for AI in your organisation. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/mindtechnica/45min"
                target="_blank"
                className="inline-block bg-green text-bgBlack font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-center"
              >
                Book a free consultation
              </a>
              <Link
                href="/#contacts"
                className="inline-block border border-green text-green font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-greenFaded transition-all text-center"
              >
                Get in touch
              </Link>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  )
}
