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
    dot: 'bg-green',
    hoverBorder: 'hover:border-green/40',
    span: 'md:col-span-3',
  },
  {
    number: '02',
    title: 'Agentic AI and generative AI',
    tagline: 'AI that doesn’t just answer questions. It gets things done.',
    body: 'Agentic and generative AI systems go further than standard AI tools. They reason through multi-step problems, use APIs and databases as tools, generate content and insights, and complete tasks autonomously, with human oversight built in at the points that matter. We design and deploy agents and generative AI solutions tailored to your operations, from internal research assistants to customer-facing copilots.',
    color: 'text-pink',
    bgColor: 'bg-pinkFaded',
    dot: 'bg-pink',
    hoverBorder: 'hover:border-pink/40',
    span: 'md:col-span-3',
  },
  {
    number: '03',
    title: 'Business process automation',
    tagline: 'Automate the repetitive. Redirect the time.',
    body: 'Most businesses are running on a patchwork of manual steps: copying data between systems, chasing approvals, generating reports by hand. We replace those bottlenecks with reliable automated workflows that run without intervention, scale without headcount, and free your team to focus on work that actually requires them.',
    color: 'text-blue',
    bgColor: 'bg-blueFaded',
    dot: 'bg-blue',
    hoverBorder: 'hover:border-blue/40',
    span: 'md:col-span-2',
  },
  {
    number: '04',
    title: 'Data science and engineering',
    tagline: 'Your data is only valuable if you can use it.',
    body: 'We work across the full data stack, from cleaning and structuring raw data to building predictive models and production pipelines. Whether you need a one-off analysis or an infrastructure your team can rely on week to week, we deliver work that is rigorous, reproducible, and built to last.',
    color: 'text-green',
    bgColor: 'bg-greenFaded',
    dot: 'bg-green',
    hoverBorder: 'hover:border-green/40',
    span: 'md:col-span-2',
  },
  {
    number: '05',
    title: 'Custom software development',
    tagline: 'Purpose-built software for problems off-the-shelf tools cannot solve.',
    body: 'When existing products do not fit your workflow, we build from scratch. That might mean a web application, an internal tool, a backend API, or a client-facing platform — with or without AI at its core. We handle the full build, from architecture to deployment, with a focus on maintainability and real-world performance.',
    color: 'text-pink',
    bgColor: 'bg-pinkFaded',
    dot: 'bg-pink',
    hoverBorder: 'hover:border-pink/40',
    span: 'md:col-span-2',
  },
  {
    number: '06',
    title: 'Cloud infrastructure and security',
    tagline: 'The foundation your software runs on — built to scale, secured by design.',
    body: 'Custom software is only as reliable as the infrastructure beneath it. We design, provision and manage cloud environments on AWS that are secure, cost-efficient and built to grow with your business. From infrastructure-as-code provisioning to security hardening and compliance-aligned deployments, we handle the full cloud layer — whether you are starting from scratch, migrating, or looking to reduce what you spend on AWS.',
    color: 'text-yellow',
    bgColor: 'bg-yellowFaded',
    dot: 'bg-yellow',
    hoverBorder: 'hover:border-yellow/40',
    span: 'md:col-span-3',
  },
  {
    number: '07',
    title: 'AI voice agents',
    tagline: 'Your phones answered. Your leads qualified. Your business always on.',
    body: 'Most businesses miss calls they should never miss — enquiries after hours, overflow during busy periods, leads that go cold because no one followed up. We build and deploy voice agents that handle real phone conversations, inbound and outbound: answering calls, resolving enquiries, booking appointments, following up with leads and qualifying prospects. When a conversation needs a human, the agent transfers it with full context captured.',
    color: 'text-blue',
    bgColor: 'bg-blueFaded',
    dot: 'bg-blue',
    hoverBorder: 'hover:border-blue/40',
    span: 'md:col-span-3',
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
              We design and build AI systems, automation workflows, data infrastructure and custom software that help organisations scale without proportional growth in headcount or cost.
            </p>
          </section>

          {/* Service bento grid */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-row align-center mb-10">
              <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-7xl min-w-fit`}>
                Our Services
              </h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border border-grey/20 ${service.bgColor} ${service.hoverBorder} ${service.span} p-8 md:p-10 transition-colors`}
                >
                  {/* Oversized watermark number */}
                  <span
                    className={`${bayon.className} pointer-events-none select-none absolute -top-8 -right-2 text-[8rem] md:text-[10rem] leading-none ${service.color} opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.16]`}
                  >
                    {service.number}
                  </span>

                  {/* Index marker */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`h-2 w-2 rounded-full ${service.dot}`}></span>
                    <span className={`${inter.className} ${service.color} text-xs font-semibold tracking-[0.2em]`}>
                      {service.number}
                    </span>
                  </div>

                  <h3 className={`${bayon.className} text-white text-2xl md:text-3xl lg:text-4xl leading-tight relative`}>
                    {service.title}
                  </h3>
                  <p className={`${inter.className} ${service.color} text-base md:text-lg font-semibold mt-3 leading-snug relative`}>
                    {service.tagline}
                  </p>
                  <p className={`${inter.className} text-stone-300 text-sm md:text-base leading-relaxed mt-5 relative`}>
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
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
              We offer a free consultation to help you identify the highest-impact opportunity for AI and custom software in your organisation. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book-a-call"
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
