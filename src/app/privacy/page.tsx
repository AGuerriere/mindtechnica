import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Bayon } from 'next/font/google'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const PrivacyPage = () => {
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
            <section className="mt-16 md:mt-28 mb-20">
              <h1 className={`${bayon.className} uppercase text-4xl md:text-6xl lg:text-8xl text-white mb-8`}>
                Privacy <span className="highlightsTitle">Policy</span>
              </h1>
              <p className="text-base md:text-xl text-stone-400 mb-12">
                Last updated: January 2025
              </p>
              <p className="text-base md:text-xl text-stone-300 mb-12 max-w-4xl leading-relaxed">
                Mind Technica (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard personal information when you visit our website or contact us. Mind Technica is the data controller responsible for your personal data.
              </p>

              <div className="h-24">
                <Image
                  src="/images/triangle.svg"
                  width={100}
                  height={100}
                  alt="Triangle"
                  className="absolute right-0 -z-50"
                />
              </div>

              {/* Information We Collect Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Information We Collect</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">Analytics Data</h3>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  We use Cloudflare Web Analytics to understand how visitors interact with our website and to improve its performance and content. Cloudflare Web Analytics does not use cookies, does not store personal identifiers, and does not track users across websites. Analytics data is processed in an aggregated and anonymised form and is used solely for statistical purposes.
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-8">
                  Further information about Cloudflare Web Analytics is available at:{' '}
                  <a href="https://www.cloudflare.com/web-analytics/" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">
                    https://www.cloudflare.com/web-analytics/
                  </a>
                </p>

                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">Information You Provide</h3>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  When you contact us through our website, we may collect:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company name (optional)</li>
                  <li>Message content</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  This information is collected solely to respond to your enquiry or request.
                </p>
              </div>

              <Image
                src="/images/circle.svg"
                width={20}
                height={20}
                alt="Circle"
                className="absolute right-20 -z-50"
              />

              {/* How We Use Your Information Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>How We Use Your Information</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  We use personal information to:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li>Respond to enquiries and provide requested services</li>
                  <li>Improve our website and user experience</li>
                  <li>Understand how our website is used</li>
                  <li>Communicate with you regarding your enquiry or, where applicable, with your consent</li>
                </ul>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Our legal basis for processing personal data is:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li>Legitimate interests (responding to enquiries and operating our website)</li>
                  <li>Consent, where required for specific communications</li>
                </ul>
              </div>

              {/* Data Storage and Security Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Data Storage and Security</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-3">
                  <li>Contact form submissions are processed securely</li>
                  <li>We do not sell, trade, or rent personal information to third parties</li>
                  <li>Personal data is retained only as long as necessary to respond to enquiries and maintain appropriate records</li>
                  <li>We implement appropriate technical and organisational measures to protect personal data</li>
                  <li>Analytics data is aggregated and anonymised</li>
                </ul>
              </div>

              <Image
                src="/images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative -z-50"
              />

              {/* Third-Party Services Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Third-Party Services</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Our website uses:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li>Cloudflare Pages for website hosting and delivery</li>
                  <li>Cloudflare Web Analytics for privacy-focused website analytics</li>
                </ul>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  Cloudflare acts as a data processor on our behalf and processes data in accordance with its own privacy policies.
                </p>
              </div>

              {/* Cookies Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Cookies</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  Our website does not use tracking or marketing cookies. Cloudflare may use strictly necessary cookies for security and performance purposes only. These cookies do not require user consent under applicable data protection laws.
                </p>
              </div>

              {/* Your Rights Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Your Rights</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Lodge a complaint with the relevant data protection authority</li>
                </ul>
              </div>

              {/* Contact Us Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Contact Us</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-6">
                  For privacy-related questions or to exercise your rights, contact us at:
                </p>
                <div className="bg-blueFaded rounded-xl p-6 md:p-8">
                  <p className="text-base md:text-lg text-stone-300 mb-2">
                    <span className="text-white font-semibold">Email:</span>{' '}
                    <a href="mailto:projects@mindtechnica.com" className="text-green hover:underline">
                      projects@mindtechnica.com
                    </a>
                  </p>
                  <p className="text-base md:text-lg text-stone-300 mb-2">
                    <span className="text-white font-semibold">Company:</span> Mind Technica
                  </p>
                  <p className="text-base md:text-lg text-stone-300">
                    <span className="text-white font-semibold">Location:</span> Northern Ireland, United Kingdom
                  </p>
                </div>
              </div>

              {/* Changes to This Policy Section */}
              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Changes to This Policy</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </header>
    </>
  );
};

export default PrivacyPage;
