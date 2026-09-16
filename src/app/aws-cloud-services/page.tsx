import { bayon } from '@/lib/fonts'
import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const title = `AWS cloud services & management | ${SITE_NAME}`
const description = 'AWS assessment, architecture, migration, cost optimisation, security, disaster recovery and managed support, with an AWS-certified Solutions Architect on our team.'

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: '/aws-cloud-services' },
  openGraph: { title, description, url: `${SITE_URL}/aws-cloud-services`, siteName: SITE_NAME, images: '/images/Asset1.png' },
  twitter: { card: 'summary_large_image', title, description, images: '/images/Asset1.png' },
}

const planningServices = [
  { title: 'Infrastructure assessment', description: 'Review your current environment and identify what needs attention. We explain the findings and help you decide which improvements to tackle first.' },
  { title: 'Architecture design', description: 'Design the AWS environment for a new application or service, taking account of how it will be used, protected and maintained.' },
  { title: 'Migration to AWS', description: 'Move servers and applications from your own infrastructure or another provider, with a plan for testing, the changeover and recovery if something goes wrong.' },
]
const ongoingServices = [
  { title: 'Cost optimisation', description: 'Find unused resources and review how services are configured. We assess potential savings alongside performance needs, and explain what is driving your bill.' },
  { title: 'Security & compliance support', description: 'Review access controls, data protection and configuration against your organisation’s security and compliance requirements, then address the agreed gaps.' },
  { title: 'Disaster recovery', description: 'Agree recovery priorities, put backup and restoration procedures in place, and test how your applications and data would be recovered after a failure.' },
  { title: 'Managed support', description: 'Ongoing monitoring, maintenance and support for an agreed recurring fee. We set out what is covered, when support is available and how issues will be handled.' },
]
const steps = [
  { title: 'Review the requirement', description: 'We discuss your applications, current setup and what you need to change.' },
  { title: 'Agree the work and costs', description: 'You get a defined scope, delivery plan and an estimate of the AWS running costs, alongside our fees.' },
  { title: 'Deliver and test', description: 'We carry out the work, test the agreed requirements and document the environment for handover.' },
  { title: 'Plan ongoing support', description: 'Your team can take over, or we can agree a support arrangement to keep the environment maintained.' },
]

export default function AWSCloudServicesPage() {
  return (
    <>
      <Navbar />
      <div className="2xl:flex 2xl:justify-center">
        <main className="w-full max-w-[1400px]">
          <section className="mt-14 md:mt-20 mb-16 md:mb-24">
            <Link href="/services#aws-cloud" className="inline-block text-stone-400 hover:text-green text-sm mb-8">← All services</Link>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-end">
              <div>
                <p className="text-yellow text-sm font-semibold uppercase tracking-[0.2em] mb-5">AWS cloud services</p>
                <h1 className={`${bayon.className} !text-left text-5xl md:text-6xl lg:text-7xl leading-tight`}>
                  AWS infrastructure <span className="text-yellow">built for your business</span>
                </h1>
                <p className="text-stone-300 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
                  We design, secure and manage infrastructure on AWS. Whether you are launching
                  an application, moving to the cloud or improving an existing setup, we help
                  you plan the work and understand what it will cost to run.
                </p>
                <Link href="/book-a-call" className="inline-block mt-8 bg-green text-bgBlack font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 text-center">
                  Discuss your AWS project
                </Link>
              </div>
              <aside className="border-l-2 border-yellow pl-6 lg:mb-4">
                <h2 className={`${bayon.className} text-white text-2xl md:text-3xl mb-3`}>Qualified expertise</h2>
                <p className="text-stone-300 text-base leading-relaxed">
                  Our team includes an AWS-certified Solutions Architect. We explain the
                  decisions behind your infrastructure, including the trade-offs in cost,
                  performance and security.
                </p>
              </aside>
            </div>
          </section>

          <section className="border-t border-white/20 pt-12 md:pt-16 mb-16 md:mb-24">
            <h2 className={`${bayon.className} text-white text-3xl md:text-5xl mb-8 md:mb-12`}>Plan your next step</h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {planningServices.map(service => (
                <div key={service.title}>
                  <h3 className="text-yellow text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-stone-300 text-base leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-white/20 pt-12 md:pt-16 mb-16 md:mb-24">
            <h2 className={`${bayon.className} text-white text-3xl md:text-5xl mb-8 md:mb-12`}>Look after the environment you rely on</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
              {ongoingServices.map(service => (
                <div key={service.title} className="border-l border-yellow/40 pl-6">
                  <h3 className="text-white text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-stone-300 text-base leading-relaxed max-w-xl">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blueFaded rounded-2xl p-7 md:p-12 mb-16 md:mb-24 grid lg:grid-cols-2 gap-6 lg:gap-14">
            <div>
              <p className="text-yellow text-sm font-semibold uppercase tracking-wider mb-3">Generative AI</p>
              <h2 className={`${bayon.className} text-white text-3xl md:text-4xl`}>Build AI features with Amazon Bedrock</h2>
            </div>
            <div>
              <p className="text-stone-300 text-base leading-relaxed">
                We integrate generative AI into your applications and processes using Amazon
                Bedrock. We work through how it will use your data, where its output needs
                review and what it will cost to operate.
              </p>
              <Link href="/services#ai-solutions" className="inline-block mt-5 py-2 text-green font-semibold hover:underline">Explore our AI work →</Link>
            </div>
          </section>

          <section className="mb-16 md:mb-24">
            <h2 className={`${bayon.className} text-white text-3xl md:text-5xl mb-8 md:mb-12`}>How we work with you</h2>
            <ol className="grid md:grid-cols-2 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className={`${bayon.className} text-yellow text-3xl`} aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-stone-400 text-base leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="border-t border-white/20 pt-12 md:pt-16 mb-16 md:mb-24 max-w-3xl">
            <h2 className={`${bayon.className} text-white text-3xl md:text-5xl mb-5`}>Tell us about your AWS setup</h2>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-8">
              Starting from scratch or already using AWS? Tell us what you are working on,
              and we can discuss where you need help.
            </p>
            <Link href="/book-a-call" className="inline-block bg-green text-bgBlack font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 text-center">Discuss your AWS project</Link>
          </section>
          <Footer />
        </main>
      </div>
    </>
  )
}
