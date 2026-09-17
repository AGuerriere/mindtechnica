import { pageMetadata } from '@/lib/metadata'
import { bayon, inter } from '@/lib/fonts'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'

export const metadata = pageMetadata('/kitchen-quotation-workflow')

const problems = [
  { title: 'Entering details twice', text: 'Room measurements, product choices and client details copied between design notes, spreadsheets and quotes.' },
  { title: 'Checking prices by hand', text: 'Checking supplier price lists for cabinetry, fittings and finishes whenever a design changes.' },
  { title: 'Waiting on someone else', text: 'Quotes held up while a designer, salesperson or surveyor confirms a measurement or change.' },
  { title: 'Losing track of follow-ups', text: 'Revised designs, sent quotes and follow-up dates scattered across showroom inboxes and spreadsheets.' },
  { title: 'Sales slipping through the gaps', text: 'No clear view of which showroom enquiries need a design, revised quote or follow-up.' },
  { title: 'Systems that don’t connect', text: 'Copying accepted quotes into supplier orders, accounts and fitting schedules.' },
]

const faqs = [
  { question: 'Do I need to prepare anything?', answer: 'No technical brief needed. Think of a recent kitchen, bathroom or bedroom project. Invite a colleague who handles designs, quotes or orders if that would help.' },
  { question: 'Will you design a system on the call?', answer: 'The call helps us understand the problem and agree a next step. Detailed design is separate work, scoped and priced with you beforehand.' },
  { question: 'What if we only need a small change?', answer: 'We will help you work out what would make a useful difference, whether that means improving an existing tool, connecting your systems or building something bespoke.' },
  { question: 'What happens after the call?', answer: 'If there is a useful next step, we will agree it with you. We confirm the scope before providing pricing, so you know what is included before committing.' },
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
              More time for customers.<br /><span className="highlightsTitle">Less showroom admin.</span>
            </h1>
            <p className="text-stone-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mt-5">
              Prepare kitchen, bathroom and bedroom quotes faster, keep track of design
              changes and follow up with customers on time. We build bespoke software and
              AI solutions around your showroom, sales and fitting processes, helping reduce
              errors and handle more enquiries without adding more admin.
            </p>
            <a href="#book" className={`${ctaClass} mt-7`}>Book a free call</a>
            <p className="text-stone-300 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              On a free 20–30-minute call, we&apos;ll explore where work gets held up and
              whether improving it would be worth the investment.
            </p>
            <p className="text-stone-400 text-sm md:text-base mt-3">No obligation to take it further.</p>
          </section>

          <section className="mb-12 md:mb-20" aria-labelledby="problems-heading">
            <h2 id="problems-heading" className={`${headingClass} mb-6 md:mb-8`}>Where does the time go?</h2>
            <p className="text-stone-300 text-base leading-relaxed max-w-3xl mb-6">
              From a showroom enquiry to the final fitting, every project brings measurements, product choices and changes to keep track of.
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
              These delays can keep customers waiting for quotes, eat into project margins and leave less time for new showroom enquiries.
            </p>
          </section>

          <section className="mb-12 md:mb-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 border-t border-white/20 pt-10 md:pt-14">
            <div>
              <h2 className={`${headingClass} mb-5`}>What is the call for?</h2>
              <p className="text-stone-300 text-base leading-relaxed mb-5">
                To understand where your showroom, design or fitting team loses time and whether we can help.
              </p>
              <ol className="list-decimal pl-5 marker:text-green space-y-4 text-stone-300 text-base leading-relaxed">
                <li>
                  <strong className="text-white">Walk us through a sale.</strong>{' '}
                  From showroom enquiry to confirmed order: how you manage designs, quote revisions and customer follow-ups.
                </li>
                <li>
                  <strong className="text-white">Spot the repeated work.</strong>{' '}
                  We&apos;ll explore how bespoke software and AI could reduce rekeying between
                  design tools, supplier information, CRM and accounts. We check what&apos;s
                  possible before recommending an integration.
                </li>
                <li>
                  <strong className="text-white">Leave with a clear next step.</strong>{' '}
                  You&apos;ll get our honest view on whether bespoke software or AI is worth exploring.
                  If a simpler change or existing tool fits better, we&apos;ll say so.
                </li>
              </ol>
              <p className="text-stone-300 text-base leading-relaxed mt-5">
                We can look at any process across your business, including stock, supplier
                orders, deliveries, fitting schedules and aftercare. Tell us where work gets
                held up, and we&apos;ll explore how bespoke software and AI could help.
              </p>
              <a href="/about#team" className="inline-block text-green hover:underline mt-5 py-2">Meet the team →</a>
            </div>
            <div id="book" className="scroll-mt-6">
              <h2 className={`${headingClass} mb-4`}>Book your free call</h2>
              <p className="text-stone-300 text-base leading-relaxed mb-6">
                Tell us briefly about your kitchen, bathroom or bedroom business and what slows your team down. Then choose a time for your 20–30-minute call.
              </p>
              <p className="text-stone-300 text-base leading-relaxed mb-6">
                We have experience working with local kitchen, bathroom and bedroom businesses.
                We can send you a case study before the call. Just mention it in your message below.
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
              <p className="text-stone-300 text-base leading-relaxed mb-4">A full development plan to help you see what will be built, how it will work and what delivery involves:</p>
              <ul className="list-disc pl-5 marker:text-green space-y-2 text-stone-300 text-base leading-relaxed mb-5">
                <li>Your workflow, project scope and system integrations</li>
                <li>Delivery timelines and milestones</li>
                <li>Technical schemas and a UI prototype</li>
              </ul>
              <p className="text-stone-300 text-base leading-relaxed mb-4">
                For more involved projects, a Blueprint helps you make informed decisions before
                development starts. Not every project needs one.
              </p>
              <p className="text-stone-300 text-base leading-relaxed mb-4">
                You can take the plan to another developer or build it internally, with no obligation to use us.
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
