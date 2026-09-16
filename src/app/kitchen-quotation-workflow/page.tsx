import { bayon, inter } from '@/lib/fonts'
import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const title = `Manage your sales process with less admin | ${SITE_NAME}`
const description = 'A free 20–30-minute consultation for kitchen, bathroom and bedroom businesses to improve sales, track clients and quotes, and connect existing systems.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/kitchen-quotation-workflow' },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/kitchen-quotation-workflow`,
    siteName: SITE_NAME,
    images: '/images/Asset1.png',
  },
  twitter: { card: 'summary_large_image', title, description, images: '/images/Asset1.png' },
}

const problems = [
  { title: 'Entering the same details twice', text: 'Customer details and measurements get copied from emails into spreadsheets, quotes and other systems.' },
  { title: 'Checking prices by hand', text: 'Your team has to find the latest supplier prices and check calculations before a quote can go out.' },
  { title: 'Waiting on someone else', text: 'A quote stalls while someone tracks down a missing detail, checks a price or approves a change.' },
  { title: 'Losing track of clients and quotes', text: 'Client history, quotes sent and follow-up dates live in different places, making it hard to see who needs a response.' },
  { title: 'Sales slipping through the gaps', text: 'Your team cannot easily see where each enquiry stands, who is responsible or what needs to happen next.' },
  { title: 'Systems that do not talk to each other', text: 'An accepted quote means entering the same details again in your CRM, accounts package, ordering system or project tools.' },
]

const faqs = [
  { question: 'What should I bring to the call?', answer: 'Just an idea of how your team manages enquiries, clients, quotes and follow-ups, and which systems you use. You do not need a technical brief. If a colleague knows the day-to-day process better, invite them too.' },
  { question: 'Will you design a system on the free call?', answer: 'No. We will talk through the problem and whether it is worth looking into further. Detailed planning and technical design are separate work, agreed with you beforehand.' },
  { question: 'Do we have to start with a Blueprint?', answer: 'Not always. It depends on what is already clear and how much needs to be worked out. If a Blueprint would help, we will explain why and agree its scope and price with you first.' },
  { question: 'How much would development cost?', answer: 'That depends on what the system needs to do and which existing tools it needs to connect to. We will discuss the likely budget with you before you commit to further work.' },
]

const ctaClass = 'inline-block bg-green text-bgBlack font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-center'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className={`${bayon.className} pb-4 text-white text-3xl md:text-5xl leading-tight max-w-4xl`}>{children}</h2>
      <div className="border-b-2 border-white w-full" />
    </div>
  )
}

export default function KitchenQuotationWorkflow() {
  return (
    <>
      <Navbar />
      <div className="2xl:flex 2xl:justify-center">
        <main className="2xl:w-[1400px]">
          <Image src="/images/polygon.svg" width={61} height={105} alt="" className="absolute left-0 -z-50" />
          <Image src="/images/rectangle.svg" width={156} height={312} alt="" className="absolute right-0 -z-50" />

          <section className="mt-16 md:mt-24 mb-20 md:mb-28 text-center">
            <p className={`${inter.className} text-green text-xs md:text-sm font-semibold uppercase tracking-[0.2em]`}>
              For kitchen, bathroom &amp; bedroom businesses
            </p>
            <h1 className={`${bayon.className} uppercase mt-5 text-4xl md:text-6xl lg:text-7xl leading-tight max-w-5xl mx-auto`}>
              Is sales admin taking too much of <span className="highlightsTitle">your team&apos;s time?</span>
            </h1>
            <p className={`${inter.className} text-stone-300 text-base md:text-xl leading-8 max-w-3xl mx-auto mt-7`}>
              From the first enquiry to an accepted quote and the handover to your team, there is
              a lot to keep track of. We build software to manage your sales process, keep client
              details and quotes together, and connect the systems you already use.
            </p>
            <a href="#book" className={`${ctaClass} mt-8`}>Book a free consultation</a>
            <p className="text-stone-400 text-sm md:text-base mt-4">A free 20–30-minute call. No obligation to take it further.</p>
          </section>

          <section className="mb-20 md:mb-28">
            <SectionHeading>Where does the time go?</SectionHeading>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              Preparing a quote is one part of the job. Keeping client details up to date, following
              up on quotes and moving a sale into ordering or delivery can take just as much work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problems.map((problem, index) => (
                <div key={problem.title} className={`${index % 2 === 0 ? 'bg-greenFaded' : 'bg-blueFaded'} rounded-xl p-6 md:p-8`}>
                  <h3 className={`${bayon.className} text-white text-2xl mb-3`}>{problem.title}</h3>
                  <p className="text-stone-300 text-base leading-relaxed">{problem.text}</p>
                </div>
              ))}
            </div>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mt-8">
              These delays can leave customers waiting, make pricing mistakes harder to catch and
              limit how many enquiries your team can handle.
            </p>
          </section>

          <section className="mb-20 md:mb-28">
            <SectionHeading>What we&apos;ll talk about</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8 md:gap-14">
              <p className="text-white text-lg md:text-2xl leading-relaxed">
                Walk us through your sales process, from the first enquiry to a confirmed order.
                How do you track clients, see which quotes have been sent and know when to follow up?
              </p>
              <div className="text-stone-300 text-base md:text-lg leading-relaxed space-y-5">
                <p>We&apos;ll look at where work gets repeated and how your CRM, email, accounting, supplier and project systems could connect. That includes checking what each system allows before recommending an integration.</p>
                <p>You&apos;ll leave with our view on whether tailored software is worth exploring and an agreed next step if it is. If a simpler change or an existing tool looks more suitable, we&apos;ll say so.</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm md:text-base mt-6">
              Get to know Mind Technica.{' '}
              <a href="/about#team" className="text-green hover:underline">Meet the team</a>.
            </p>
          </section>

          <section className="mb-20 md:mb-28">
            <SectionHeading>Is this for your business?</SectionHeading>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-4xl mb-6">
              This call is for established kitchen, bathroom and bedroom businesses in the UK and
              Ireland, including fitted-interiors teams. It is particularly useful when several
              people handle enquiries, prepare quotes or manage client relationships, and keeping
              everything up to date across separate systems is becoming hard to manage.
            </p>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-4xl">
              You might run the business, lead the sales team or look after operations. What matters
              is that your sales process is causing recurring work or delays and you want to fix it.
              For a few simple quotes or a small spreadsheet change, a bespoke system is unlikely
              to be worth the cost.
            </p>
          </section>

          <section className="mb-20 md:mb-28">
            <SectionHeading>What happens after the call?</SectionHeading>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-4xl mb-8">
              If there is a useful next step, we&apos;ll discuss it together. Sometimes the work is
              clear enough to scope directly. For a more involved project, we may recommend a
              Blueprint to work through the details before development starts.
            </p>
            <div className="bg-blueFaded rounded-xl p-6 md:p-10 max-w-4xl">
              <h3 className={`${bayon.className} text-white text-2xl md:text-3xl mb-4`}>The Blueprint</h3>
              <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-5">
                The Blueprint is a full development plan for your project. We map your sales
                process, agree what the software needs to do and identify the systems that need
                to connect. It includes the project scope, estimated development cost, delivery
                timelines and milestones, technical schemas showing how the system and its data
                fit together, and a UI prototype so you can see how the main screens will look
                and work before development begins.
              </p>
              <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-5">
                A Blueprint <strong className="text-white">usually costs £4,000</strong>. The price
                depends on the size and scope of the project, and we agree it with you before
                starting. It is not a required step for every project.
              </p>
              <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-5">
                You are free to take the Blueprint to another development company or use it with
                your own team. There is no obligation to have Mind Technica build the software.
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed">
                If you decide to go ahead with development with us, we deduct the Blueprint fee
                you have paid from the final project price.
              </p>
            </div>
          </section>

          <section className="mb-20 md:mb-28">
            <SectionHeading>A few questions you might have</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {faqs.map(faq => (
                <div key={faq.question}>
                  <h3 className={`${bayon.className} text-white text-xl md:text-2xl mb-3`}>{faq.question}</h3>
                  <p className="text-stone-300 text-base leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="book" className="mb-16 md:mb-24 scroll-mt-8">
            <SectionHeading>Let&apos;s talk about your sales process</SectionHeading>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              Tell us a little about your business, then choose a time for your free 20–30-minute
              consultation. A sentence or two is plenty.
            </p>
            <BookingForm campaign="kitchen-quotation-workflow" />
            <p className="text-stone-400 text-sm md:text-base mt-10">
              Prefer to ask something first? Email{' '}
              <a href="mailto:projects@mindtechnica.com" className="text-green hover:underline">projects@mindtechnica.com</a>.
              {' '}We usually reply within one working day.
            </p>
          </section>
          <Footer />
        </main>
      </div>
    </>
  )
}
