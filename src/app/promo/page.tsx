import type { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import CountdownTimer from "@/components/CountdownTimer"
import { Bayon } from 'next/font/google'
import BookingForm from '@/components/BookingForm'
import { SITE_KEYWORDS, SITE_NAME, SITE_URL } from '@/lib/site'


export const metadata: Metadata = {
  title: `Free AI & Software Automation Audit | ${SITE_NAME}`,
  description: 'A complimentary assessment of where AI strategy, agentic AI, automation, data systems, custom software, AWS cloud infrastructure or AI voice agents could reduce operational overhead.',
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: '/promo',
  },
  openGraph: {
    title: `Free AI & Software Automation Audit | ${SITE_NAME}`,
    description: 'A complimentary expert assessment across AI, automation, data, software, cloud infrastructure and AI voice agent opportunities.',
    url: `${SITE_URL}/promo`,
    siteName: SITE_NAME,
    images: '/images/Asset1.png',
  },
}

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const PromoPage = () => {
  return (
    <>
      <header className="flex flex-col min-h-screen">
        <Navbar />

        {/* Background shapes */}
        <div className="absolute top-40 left-0 -z-50">
          <Image
            src="/images/polygon.svg"
            width={61}
            height={105}
            alt="Polygon"
          />
        </div>
        <div className="absolute right-0 top-20 -z-50">
          <Image
            src="/images/rectangle.svg"
            width={156}
            height={312}
            alt="Rectangle"
          />
        </div>

        <div className="2xl:flex 2xl:justify-center flex-grow">
          <main className="2xl:w-[1400px] px-5">
            <section className="mt-16 md:mt-28">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <p className="text-green text-sm md:text-base font-semibold uppercase tracking-wider mb-4">Limited Time Offer</p>
                <h1 className={`${bayon.className} uppercase text-3xl md:text-5xl lg:text-7xl text-white mb-8`}>
                  Free AI &amp; Software <span className="highlightsTitle">Automation Audit</span>
                </h1>

                {/* Countdown Timer */}
                <div className="bg-blueFaded rounded-xl p-8 mb-8 max-w-4xl mx-auto">
                  <p className="text-stone-300 text-lg md:text-xl mb-6 text-center">Offer ends in:</p>
                  <CountdownTimer />
                </div>
              </div>

              <div className="h-24">
                <Image
                  src="/images/triangle.svg"
                  width={100}
                  height={100}
                  alt="Triangle"
                  className="absolute right-0 -z-50"
                />
              </div>

              {/* Intro Section */}
              <div className="max-w-4xl mx-auto mb-16">
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  For the next 30 days, Mind Technica is offering a <span className="text-white font-semibold">small number of businesses</span> a complimentary audit: an expert assessment of where AI and software automation could meaningfully reduce operational overhead and free your team to focus on higher-value work.
                </p>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  Many organisations carry a significant hidden cost in the form of repetitive tasks, manual processes, and disconnected systems. These inefficiencies accumulate quietly, consuming time and resource that your team could direct toward work that genuinely advances the business.
                </p>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  The audit is designed to identify precisely where those inefficiencies lie and what it would take to address them. You will leave with a clear, prioritised view of your automation opportunities and a realistic assessment of what acting on them would involve.
                </p>
                <p className="text-lg md:text-xl text-white font-semibold">
                  Complimentary and without obligation to proceed.
                </p>
              </div>

              <Image
                src="/images/circle.svg"
                width={20}
                height={20}
                alt="Circle"
                className="absolute right-20 -z-50"
              />

              {/* What's Included Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>What&apos;s Included</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-8">
                <div className="bg-greenFaded rounded-xl p-6 md:p-8">
                  <span className="text-green text-3xl">✓</span>
                  <h3 className={`${bayon.className} text-green text-xl md:text-2xl mt-3 mb-2`}>Discovery Session</h3>
                  <p className="text-sm md:text-base text-stone-300 leading-relaxed">A dedicated discovery session to understand your requirements and explore your ideas in depth.</p>
                </div>
                <div className="bg-blueFaded rounded-xl p-6 md:p-8">
                  <span className="text-blue text-3xl">✓</span>
                  <h3 className={`${bayon.className} text-blue text-xl md:text-2xl mt-3 mb-2`}>Collaborative Working</h3>
                  <p className="text-sm md:text-base text-stone-300 leading-relaxed">Collaborative working sessions with your teams and management to identify what can be automated.</p>
                </div>
                <div className="bg-pinkFaded rounded-xl p-6 md:p-8">
                  <span className="text-pink text-3xl">✓</span>
                  <h3 className={`${bayon.className} text-pink text-xl md:text-2xl mt-3 mb-2`}>Prioritised Opportunities</h3>
                  <p className="text-sm md:text-base text-stone-300 leading-relaxed">Prioritised automation opportunities with effort and savings estimates.</p>
                </div>
                <div className="bg-yellowFaded rounded-xl p-6 md:p-8">
                  <span className="text-yellow text-3xl">✓</span>
                  <h3 className={`${bayon.className} text-yellow text-xl md:text-2xl mt-3 mb-2`}>Written Summary Report</h3>
                  <p className="text-sm md:text-base text-stone-300 leading-relaxed">A written summary report, yours to retain regardless of what comes next.</p>
                </div>
              </div>

              <Image
                src="/images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative -z-50"
              />

              {/* Why We're Doing This Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Why We&apos;re Doing This</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="bg-blueFaded border-l-4 border-green rounded-xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
                <p className="text-base md:text-xl text-stone-200 leading-relaxed mb-6">
                  We are looking to work with organisations tackling real operational challenges, and we believe the most productive working relationships begin with demonstrated value.
                </p>
                <p className="text-base md:text-xl text-stone-200 leading-relaxed">
                  If we proceed to an engagement, we would welcome a testimonial. If not, the report remains yours.
                </p>
              </div>

              {/* Who This Is For Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Who This Is For</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mx-auto mb-16">
                <div className="border-l-2 border-green pl-6 md:pl-8">
                  <p className="text-lg md:text-2xl text-stone-200 leading-relaxed">
                    Business owners and operations leaders who recognise that their teams are capable of more, but are losing meaningful hours each week to work that does not require human effort to complete.
                  </p>
                </div>
              </div>

              {/* Book Your Free Audit Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Book Your Free Audit</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-8">
                  A limited number of places are available over the next 30 days.
                </p>
              </div>

              <div className="max-w-4xl mx-auto flex flex-col gap-8 mb-16">
                <div className="flex flex-col justify-start w-full max-w-2xl">
                  <p className="pb-8 text-xs md:text-base">If your organisation wants to scale efficiently using AI, we can help you design and implement the systems that make it possible. Tell us what you are trying to achieve and we will identify the most effective technical approach.</p>
                  <h3 className={`${bayon.className} text-green text-2xl md:text-4xl lg:text-5xl uppercase`}>Book a free consultation now</h3>
                </div>
                <BookingForm />
              </div>

              <div className="max-w-4xl mx-auto mb-16 text-center mt-20">
                <div className="bg-blueFaded rounded-xl p-8 mb-8">
                  <p className="text-lg md:text-xl text-white font-semibold mb-4">
                    Alternatively email us at:
                  </p>
                  <p className="text-xl md:text-3xl mb-6">
                    <a href="mailto:projects@mindtechnica.com" className="text-green hover:underline">
                      projects@mindtechnica.com
                    </a>
                  </p>
                  <p className="text-sm md:text-base text-stone-400">
                    This is a free, no-obligation introduction. We&apos;ll discuss your challenges, explore potential opportunities, and you can decide if it makes sense to move forward.
                  </p>
                </div>
              </div>

              <div className="mb-20"></div>
            </section>

            <Footer />
          </main>
        </div>
      </header>
    </>
  );
};

export default PromoPage;
