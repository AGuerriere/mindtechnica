import { pageMetadata } from '@/lib/metadata'
import { bayon, inter } from '@/lib/fonts'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'

export const metadata = pageMetadata('/kitchen-quotation-workflow')

const problems = [
  { title: 'Entering details twice', text: 'Client details and measurements copied between emails, spreadsheets and quotes.' },
  { title: 'Checking prices by hand', text: 'Hunting down supplier prices and checking calculations for every quote.' },
  { title: 'Waiting on someone else', text: 'Quotes held up by missing details, price checks or approvals.' },
  { title: 'Losing track of follow-ups', text: 'Client history, sent quotes and follow-up dates scattered across different places.' },
  { title: 'Sales slipping through the gaps', text: 'No clear view of each enquiry, who owns it or what happens next.' },
  { title: 'Systems that don’t connect', text: 'Re-entering an accepted quote into accounts, ordering or project tools.' },
]

const faqs = [
  { question: 'Do I need to prepare anything?', answer: 'No technical brief needed. Just bring an idea of how your sales process works. Invite a colleague if they know the day-to-day details better.' },
  { question: 'Will you design a system on the call?', answer: 'The call helps us understand the problem and agree a next step. Detailed design is separate work, scoped and priced with you beforehand.' },
  { question: 'What if we only need a small change?', answer: 'We will say if an existing tool or a small improvement looks more suitable. A bespoke system is unlikely to be worth the cost for a few simple quotes.' },
  { question: 'How much would development cost?', answer: 'It depends on the scope and integrations. We will discuss the likely budget before you commit to further work.' },
]

const ctaClass = 'inline-block bg-green text-bgBlack font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-center'
const headingClass = `${bayon.className} text-white text-3xl md:text-5xl leading-tight`

export default function KitchenQuotationWorkflow() {
  return (
    <>
      <Navbar />
      <div className="2xl:flex 2xl:justify-center">
        <main className="w-full max-w-[1400px]">
          <Image src="/images/polygon.svg" width={61} height={105} alt="" className="absolute left-0 -z-50" />
          <Image src="/images/rectangle.svg" width={156} height={312} alt="" className="absolute right-0 -z-50" />

          <section className="mt-12 md:mt-24 mb-12 md:mb-20 text-center">
            <p className={`${inter.className} text-green text-xs md:text-sm font-semibold uppercase tracking-[0.2em]`}>
              For kitchen, bathroom &amp; bedroom businesses
            </p>
            <h1 className={`${bayon.className} uppercase mt-5 text-4xl md:text-6xl lg:text-7xl leading-tight max-w-5xl mx-auto`}>
              Is sales admin taking too much of <span className="highlightsTitle">your team&apos;s time?</span>
            </h1>
            <p className="text-stone-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mt-5">
              Let&apos;s look at how bespoke software and AI could save your team time
              managing clients, quotes and follow-ups, and connect your systems.
            </p>
            <a href="#book" className={`${ctaClass} mt-7`}>Book a free call</a>
            <p className="text-stone-400 text-sm md:text-base mt-3">20–30 minutes. No obligation to take it further.</p>
          </section>

          <section className="mb-12 md:mb-20" aria-labelledby="problems-heading">
            <h2 id="problems-heading" className={`${headingClass} mb-6 md:mb-8`}>Where does the time go?</h2>
            <p className="text-stone-300 text-base leading-relaxed max-w-3xl mb-6">
              From the first enquiry to ordering and delivery, small admin jobs add up.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {problems.map(problem => (
                <div key={problem.title} className="border-l-2 border-green pl-5">
                  <h3 className="text-white font-semibold text-base md:text-lg mb-2">{problem.title}</h3>
                  <p className="text-stone-300 text-base leading-relaxed">{problem.text}</p>
                </div>
              ))}
            </div>
            <p className="text-stone-300 text-base leading-relaxed max-w-3xl mt-6">
              Customers wait longer, pricing mistakes slip through and your team has less time for new enquiries.
            </p>
          </section>

          <section className="mb-12 md:mb-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 border-t border-white/20 pt-10 md:pt-14">
            <div>
              <h2 className={`${headingClass} mb-5`}>What is the call for?</h2>
              <p className="text-stone-300 text-base leading-relaxed mb-5">
                To work out where sales admin costs you time and whether we can help.
              </p>
              <ol className="list-decimal pl-5 marker:text-green space-y-4 text-stone-300 text-base leading-relaxed">
                <li>
                  <strong className="text-white">Walk us through a sale.</strong>{' '}
                  From enquiry to order: how you track clients, send quotes and follow up.
                </li>
                <li>
                  <strong className="text-white">Spot the repeated work.</strong>{' '}
                  We&apos;ll explore where bespoke software and AI could help and which systems might connect:
                  CRM, email, suppliers, accounts or project tools. We check what&apos;s possible before recommending an integration.
                </li>
                <li>
                  <strong className="text-white">Leave with a clear next step.</strong>{' '}
                  You&apos;ll get our honest view on whether bespoke software or AI is worth exploring.
                  If a simpler change or existing tool fits better, we&apos;ll say so.
                </li>
              </ol>
              <a href="/about#team" className="inline-block text-green hover:underline mt-5 py-2">Meet the team →</a>
            </div>
            <div id="book" className="scroll-mt-6">
              <h2 className={`${headingClass} mb-4`}>Book your free call</h2>
              <p className="text-stone-300 text-base leading-relaxed mb-6">
                A sentence or two about your business is plenty. Then choose a time for your 20–30-minute call.
              </p>
              <BookingForm campaign="kitchen-quotation-workflow" />
              <p className="text-stone-400 text-sm mt-6">
                Prefer to email?{' '}
                <a href="mailto:projects@mindtechnica.com" className="text-green hover:underline">projects@mindtechnica.com</a>
              </p>
            </div>
          </section>

          <section className="mb-12 md:mb-20 max-w-4xl">
            <h2 className={`${headingClass} mb-5`}>If you want to take it further</h2>
            <div className="bg-blueFaded rounded-xl p-6 md:p-8">
              <h3 className={`${bayon.className} text-white text-2xl md:text-3xl mb-3`}>The Blueprint</h3>
              <p className="text-stone-300 text-base leading-relaxed mb-4">A full development plan, when the project needs one:</p>
              <ul className="list-disc pl-5 marker:text-green space-y-2 text-stone-300 text-base leading-relaxed mb-5">
                <li>Scope, integrations and estimated development cost</li>
                <li>Delivery timelines and milestones</li>
                <li>Technical schemas and a UI prototype</li>
              </ul>
              <p className="text-stone-300 text-base leading-relaxed mb-4">
                <strong className="text-white">Usually £4,000</strong>, depending on project size and scope.
                We agree the price first. Not every project needs a Blueprint.
              </p>
              <p className="text-stone-300 text-base leading-relaxed mb-4">
                You can take the plan to another developer or build it internally, with no obligation to use us.
              </p>
              <p className="text-white text-base leading-relaxed">
                If we build it, we deduct the Blueprint fee you paid from the final project price.
              </p>
            </div>
          </section>

          <section className="mb-12 md:mb-20 max-w-4xl">
            <h2 className={`${headingClass} mb-5`}>A few questions</h2>
            <div className="border-t border-white/20">
              {faqs.map(faq => (
                <details key={faq.question} className="group border-b border-white/20">
                  <summary className="cursor-pointer py-5 pr-2 text-white font-semibold text-base md:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-green">
                    {faq.question}
                  </summary>
                  <p className="text-stone-300 text-base leading-relaxed pb-5 max-w-3xl">{faq.answer}</p>
                </details>
              ))}
            </div>
            <a href="#book" className={`${ctaClass} mt-8`}>Book a free call</a>
          </section>
          <Footer />
        </main>
      </div>
    </>
  )
}
