import type { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import CountdownTimer from "@/components/CountdownTimer"
import { Bayon } from 'next/font/google'
import CalendlyWidget from '@/components/CalendlyWidget'

export const metadata: Metadata = {
  title: 'Free AI & Software Automation Audit | Mind Technica',
  description: 'A complimentary expert assessment of where AI and software automation could reduce operational overhead in your business. Limited places available for 30 days.',
  alternates: {
    canonical: '/promo',
  },
  openGraph: {
    title: 'Free AI & Software Automation Audit | Mind Technica',
    description: 'A complimentary expert assessment of where AI and software automation could reduce operational overhead in your business. Limited places available for 30 days.',
    url: 'https://mindtechnica.com/promo',
    siteName: 'Mind Technica',
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

              <div className="bg-blueFaded rounded-xl p-6 md:p-10 mb-8 max-w-4xl mx-auto">
                <ul className="space-y-4 text-base md:text-xl text-stone-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>A dedicated discovery session to understand your requirements and explore your ideas in depth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>Collaborative working sessions with your teams and management to identify what can be automated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>Prioritised automation opportunities with effort and savings estimates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>A written summary report, yours to retain regardless of what comes next</span>
                  </li>
                </ul>
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

              <div className="max-w-4xl mx-auto mb-16">
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  We are looking to work with organisations tackling real operational challenges, and we believe the most productive working relationships begin with demonstrated value.
                </p>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed">
                  If we proceed to an engagement, we would welcome a testimonial. If not, the report remains yours.
                </p>
              </div>

              {/* Who This Is For Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Who This Is For</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mx-auto mb-16">
                <p className="text-base md:text-xl text-stone-300 leading-relaxed">
                  Business owners and operations leaders who recognise that their teams are capable of more, but are losing meaningful hours each week to work that does not require human effort to complete.
                </p>
              </div>

              {/* Book Your Free Audit Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Book Your Free Audit</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mx-auto mb-8 text-center">
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-8">
                  A limited number of places are available over the next 30 days.
                </p>
              </div>

              <CalendlyWidget />

              <div className="max-w-4xl mx-auto mb-16 text-center mt-8">
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
