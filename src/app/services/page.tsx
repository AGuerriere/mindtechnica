import { pageMetadata } from '@/lib/metadata'
import { bayon, inter } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = pageMetadata('/services')

const services = [
  {
    id: 'bespoke-software', number: '01', title: 'Bespoke software', color: 'text-green',
    summary: 'Software for the way your business works.',
    body: 'We design and build applications for your staff, customers or a new product. We can also connect the tools you already use, so information moves between them without someone copying it across.',
    examples: [
      ['Applications and platforms', 'Internal tools, customer portals and web applications built around your requirements.'],
      ['System integrations', 'APIs and connections between your CRM, accounting software and other business systems.'],
      ['Process automation', 'Software to handle repeated tasks and keep work moving between teams.'],
    ],
    href: '/book-a-call', cta: 'Discuss a software project',
  },
  {
    id: 'ai-solutions', number: '02', title: 'AI integrations & bespoke AI solutions', color: 'text-pink',
    summary: 'Put AI to work in your applications and processes.',
    body: 'We add AI to existing software and build dedicated AI systems. We help you work out where it could be useful, prepare the data it needs and test how well it performs before putting it into use.',
    examples: [
      ['AI integrations and assistants', 'Document processing, search and generative AI features that work with your own data.'],
      ['Voice agents and automation', 'Agents that handle calls or carry out tasks across your systems, with clear points for human review.'],
      ['Bespoke models and data', 'Data engineering, predictive models and tailored AI solutions for more specific requirements.'],
    ],
    href: '/book-a-call', cta: 'Discuss an AI project',
  },
  {
    id: 'aws-cloud', number: '03', title: 'AWS cloud management', color: 'text-yellow',
    summary: 'Build, move and run your infrastructure on AWS.',
    body: 'We design AWS environments, migrate applications and look after existing infrastructure. Our team includes an AWS-certified Solutions Architect, and we explain the costs and technical choices involved in your project.',
    examples: [
      ['Assessment, design and migration', 'Review an existing setup, plan a new environment or move your applications to AWS.'],
      ['Costs, security and recovery', 'Review spending, strengthen access controls and plan how to recover after a failure.'],
      ['Managed support', 'Ongoing monitoring and maintenance with an agreed scope and recurring fee.'],
    ],
    href: '/aws-cloud-services', cta: 'Explore AWS services',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="2xl:flex 2xl:justify-center">
        <main className="w-full max-w-[1400px]">
          <Image src="/images/polygon.svg" width={61} height={105} alt="" className="absolute left-0 -z-50" />
          <section className="mt-16 md:mt-24 mb-16 md:mb-24">
            <p className="text-green text-sm font-semibold uppercase tracking-[0.2em] mb-5">Our services</p>
            <h1 className={`${bayon.className} !text-left text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-tight`}>
              Software, AI <span className="highlightsTitle">&amp; AWS cloud</span>
            </h1>
            <p className={`${inter.className} text-stone-300 text-lg md:text-xl leading-relaxed max-w-2xl mt-6`}>
              We build bespoke software, develop AI solutions and manage AWS infrastructure.
              Work with us on one part of a project or bring us in for the whole build.
            </p>
            <nav aria-label="Service categories" className="flex flex-wrap gap-x-7 gap-y-3 mt-10">
              {services.map(service => (
                <a key={service.id} href={`#${service.id}`} className={`${service.color} text-sm font-semibold underline underline-offset-8 decoration-current/40 hover:decoration-current py-2`}>
                  {service.number} &nbsp; {service.id === 'ai-solutions' ? 'AI solutions' : service.title}
                </a>
              ))}
            </nav>
          </section>

          <div className="border-t border-white/20">
            {services.map(service => (
              <section key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-10 lg:gap-20 py-14 md:py-20 border-b border-white/20 scroll-mt-8">
                <div>
                  <p className={`${bayon.className} ${service.color} text-2xl mb-4`}>{service.number}</p>
                  <h2 className={`${bayon.className} text-white text-4xl md:text-5xl leading-tight max-w-xl`}>{service.title}</h2>
                  <p className={`${service.color} text-lg md:text-xl mt-5`}>{service.summary}</p>
                  <p className="text-stone-300 text-base leading-relaxed max-w-xl mt-5">{service.body}</p>
                  <Link href={service.href} className={`inline-flex items-center gap-3 mt-8 py-3 font-semibold ${service.color} hover:underline underline-offset-4`}>
                    {service.cta} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="space-y-8 lg:pt-12">
                  {service.examples.map(([heading, text]) => (
                    <div key={heading} className="border-l border-white/20 pl-6">
                      <h3 className="text-white text-lg font-semibold mb-2">{heading}</h3>
                      <p className="text-stone-400 text-base leading-relaxed max-w-lg">{text}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="my-16 md:my-24 max-w-3xl">
            <h2 className={`${bayon.className} text-white text-3xl md:text-5xl mb-5`}>What are you working on?</h2>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-8">
              Tell us what you want to build or improve. We can talk through the options and
              work out whether we can help.
            </p>
            <Link href="/book-a-call" className="inline-block bg-green text-bgBlack font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 text-center">
              Book a free consultation
            </Link>
          </section>
          <Footer />
        </main>
      </div>
    </>
  )
}
