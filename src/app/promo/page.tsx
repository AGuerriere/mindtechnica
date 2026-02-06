import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import CountdownTimer from "@/components/CountdownTimer"
import { Bayon } from 'next/font/google'
import CalendlyWidget from '@/components/CalendlyWidget'
import GoogleTag from '@/components/GoogleTag'


const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const PromoPage = () => {
  return (
    <>
      <GoogleTag />
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
                <h1 className={`${bayon.className} uppercase text-3xl md:text-5xl lg:text-7xl text-white mb-8`}>
                  <span className="highlightsTitle">Limited Time Offer</span>
                </h1>

                {/* Countdown Timer */}
                <div className="bg-blueFaded rounded-xl p-8 mb-8 max-w-4xl mx-auto">
                  <p className="text-stone-300 text-lg md:text-xl mb-6 text-center">Offer ends in:</p>
                  <CountdownTimer />
                </div>

                <h2 className={`${bayon.className} text-white text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight`}>
                  We&apos;ll Build Your <span className="highlightsTitle">AI System</span>.
                </h2>
                <h3 className={`${bayon.className} text-white text-2xl md:text-4xl lg:text-5xl mb-8`}>
                  You Only Cover Delivery Costs
                </h3>
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
                  Mind Technica is taking on <span className="text-white font-semibold">5 founding clients</span> for the next 60 days.
                </p>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  We&apos;re waiving every fee we&apos;d normally charge: no strategy fees, no founder time, no service markup. You pay only what it costs to build and run your solution—engineering hours, infrastructure, APIs, tools. Nothing more.
                </p>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  <span className="text-white font-semibold">Why we&apos;re doing this:</span> We need real case studies. You need a partner who&apos;ll treat your business like it&apos;s ours. This is the trade.
                </p>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed">
                  You get enterprise-grade AI automation built without the enterprise price tag. We get proof of what we can do and permission to share it.
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
                    <span>Full discovery and solution design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>Custom AI automation development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>System integration and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>Testing and iteration until it works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>Ongoing technical support during the engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green text-2xl mr-3">✓</span>
                    <span>Blueprint project (normally a separate paid phase—included at no cost)</span>
                  </li>
                </ul>
                <p className="text-lg md:text-xl text-white font-semibold mt-8">
                  All founder time, strategy sessions, and service fees waived.
                </p>
              </div>

              {/* What You Cover Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>What You Cover</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  You&apos;ll pay only the direct costs to build and deliver your solution:
                </p>
                <ul className="list-disc ml-8 mb-8 text-base md:text-xl text-stone-300 space-y-3">
                  <li>Engineering time (billed at cost, no markup)</li>
                  <li>Cloud infrastructure and hosting</li>
                  <li>Third-party APIs (OpenAI, data providers, etc.)</li>
                  <li>Essential software and tools required for your project</li>
                </ul>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  These costs vary by project scope but we&apos;ll provide a clear budget before we begin.
                </p>
                <p className="text-lg md:text-2xl text-white font-semibold">
                  No hidden fees. No margin. No markup. Just what it costs to make it real.
                </p>
              </div>

              <Image
                src="/images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative -z-50"
              />

              {/* The Commitment Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>The Commitment</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mx-auto mb-16">
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-6">
                  In exchange, you agree to:
                </p>
                <ul className="list-disc ml-8 mb-8 text-base md:text-xl text-stone-300 space-y-3">
                  <li>Provide a detailed testimonial upon successful delivery</li>
                  <li>Participate in a case study (with approval over what&apos;s shared)</li>
                  <li>Give honest feedback that helps us improve</li>
                </ul>
              </div>

              {/* Apply Now Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Apply Now</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mx-auto mb-8 text-center">
                <p className="text-2xl md:text-4xl text-white font-semibold mb-8">
                  <span className="highlightsTitle">5 spots</span>. <span className="highlightsTitle">60 days</span>. First come, first committed.
                </p>
                <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-8">
                  If you&apos;ve been waiting for the right time to automate a broken process, eliminate repetitive work, or finally put AI to use in your business—this is it.
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
                    This is a free, no-strings-attached introduction. We&apos;ll discuss your challenges, explore potential solutions, and you can decide if it makes sense to move forward.                  </p>
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
