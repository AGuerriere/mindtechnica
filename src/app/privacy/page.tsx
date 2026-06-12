import { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Bayon } from 'next/font/google'

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
}

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const SectionHeading = ({ title, className }: { title: string; className?: string }) => (
  <div className={`flex flex-row align-center mt-20 mb-7 ${className ?? ''}`}>
    <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>{title}</h2>
    <div className="border-b-2 border-white w-full"></div>
  </div>
)

const PrivacyPage = () => {
  return (
    <>
      <header className="flex flex-col min-h-screen">
        <Navbar />

        <div className="absolute top-40 left-0 -z-50">
          <Image src="/images/polygon.svg" width={61} height={105} alt="Polygon" />
        </div>
        <div className="absolute right-0 top-20 -z-50">
          <Image src="/images/rectangle.svg" width={156} height={312} alt="Rectangle" />
        </div>

        <div className="2xl:flex 2xl:justify-center flex-grow">
          <main className="2xl:w-[1400px] px-5">
            <section className="mt-16 md:mt-28 mb-20">
              <h1 className={`${bayon.className} uppercase text-4xl md:text-6xl lg:text-8xl text-white mb-8`}>
                Privacy <span className="highlightsTitle">Policy</span>
              </h1>
              <p className="text-base md:text-xl text-stone-400 mb-12">
                Last updated: 12 June 2026
              </p>

              {/* 1. Who We Are */}
              <SectionHeading title="Who We Are" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Mind Technica is a software development and AI automation consultancy based in the United Kingdom. This Privacy Policy explains how we collect, use, and protect personal data when you visit our website or use the meeting booking form.
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  We are subject to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  <span className="text-white font-semibold">Data controller:</span> Mind Technica
                  <br />
                  <span className="text-white font-semibold">Contact:</span>{' '}
                  <a href="mailto:info@mindtechnica.com" className="text-green hover:underline">info@mindtechnica.com</a>
                </p>
              </div>

              {/* 2. Supervisory Authority */}
              <SectionHeading title="Supervisory Authority" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  You have the right to lodge a complaint with the UK&apos;s data protection supervisory authority:
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Information Commissioner&apos;s Office (ICO):{' '}
                  <a href="https://ico.org.uk" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  We encourage you to contact us first if you have a concern, and we will do our best to resolve it directly.
                </p>
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

              {/* 3. What Data We Collect */}
              <SectionHeading title="What Data We Collect" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  When you submit our meeting booking form, we collect the following information:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your company name (if provided)</li>
                  <li>Any message or notes you include</li>
                  <li>The date and time you selected for a meeting</li>
                </ul>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  This data is saved when you submit the form, even if you do not complete the calendar booking step.
                </p>
              </div>

              {/* 4. How We Use Your Data */}
              <SectionHeading title="How We Use Your Data" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  We use the information you submit solely to:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li>Respond to your enquiry and arrange a meeting</li>
                  <li>Communicate with you about your requested appointment</li>
                  <li>Manage and confirm calendar bookings</li>
                </ul>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  We do not use your data for marketing without your explicit consent, and we do not sell or share your data with third parties for their own marketing purposes.
                </p>
              </div>

              <Image
                src="/images/circle.svg"
                width={20}
                height={20}
                alt="Circle"
                className="absolute right-20 -z-50"
              />

              {/* 5. Legal Basis for Processing */}
              <SectionHeading title="Legal Basis for Processing" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Under UK GDPR, we are required to have a lawful basis for processing your personal data. We rely on legitimate interests (Article 6(1)(f)): processing your meeting request is necessary for our legitimate interest in responding to business enquiries. We have assessed that this interest is not overridden by your rights and freedoms, given the limited nature of the data collected and its direct relevance to your request.
                </p>
              </div>

              {/* 6. International Data Transfers */}
              <SectionHeading title="International Data Transfers" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Some of the third-party services we use involve transferring data outside the United Kingdom. Where this occurs, we ensure that appropriate safeguards are in place as required by UK GDPR:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-3">
                  <li>
                    <span className="text-white font-semibold">Cloudflare, Inc. (USA):</span> Cloudflare operates under the UK Extension to the EU–US Data Privacy Framework and uses Standard Contractual Clauses (SCCs) approved for UK transfers. See{' '}
                    <a href="https://www.cloudflare.com/privacypolicy/" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">cloudflare.com/privacypolicy</a>.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Cal.com:</span> Cal.com operates infrastructure within the EU (cal.eu). International transfer safeguards are detailed in their privacy policy at{' '}
                    <a href="https://cal.com/privacy" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">cal.com/privacy</a>.
                  </li>
                </ul>
              </div>

              {/* 7. Where Your Data Is Stored */}
              <SectionHeading title="Where Your Data Is Stored" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Your form submission data is stored securely on Cloudflare D1, a database service operated by Cloudflare, Inc. Data is encrypted at rest and in transit.
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  Calendar appointments booked through our form are managed via Cal.com (cal.eu), a scheduling platform. Cal.com processes your name and email address to create and manage calendar events.
                </p>
              </div>

              <Image
                src="/images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative -z-50"
              />

              {/* 8. Website Analytics */}
              <SectionHeading title="Website Analytics" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  We use Cloudflare Web Analytics to understand how visitors use our website. Cloudflare Analytics does not use cookies, does not fingerprint individual users, and does not track you across websites. No personally identifiable information is collected through analytics. This means no cookie consent banner is required for analytics purposes.
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  For more information, see Cloudflare&apos;s Privacy Policy at{' '}
                  <a href="https://www.cloudflare.com/privacypolicy/" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">cloudflare.com/privacypolicy</a>.
                </p>
              </div>

              {/* 9. Cookies */}
              <SectionHeading title="Cookies" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  Our website does not use cookies for analytics or advertising. Cloudflare may set strictly necessary technical cookies as part of its infrastructure and security services (for example, to protect against automated bot traffic). These cookies do not track your browsing activity and do not require consent under UK law.
                </p>
              </div>

              {/* 10. How Long We Keep Your Data */}
              <SectionHeading title="How Long We Keep Your Data" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  We retain meeting request submissions for as long as is necessary to fulfil the purpose for which they were collected, or as required by applicable law. If a meeting does not result in an ongoing business relationship, we will delete your data within 12 months of submission.
                </p>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  You may request deletion of your data at any time — see the Your Rights section below.
                </p>
              </div>

              {/* 11. Your Rights */}
              <SectionHeading title="Your Rights" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-4">
                  Under UK GDPR, you have the following rights in relation to your personal data:
                </p>
                <ul className="list-disc ml-8 mb-6 text-base md:text-lg text-stone-300 space-y-2">
                  <li><span className="text-white font-semibold">Right of access</span> — to obtain a copy of the data we hold about you</li>
                  <li><span className="text-white font-semibold">Right to rectification</span> — to correct inaccurate or incomplete data</li>
                  <li><span className="text-white font-semibold">Right to erasure (&apos;right to be forgotten&apos;)</span> — to request deletion of your data</li>
                  <li><span className="text-white font-semibold">Right to restriction</span> — to limit how we use your data in certain circumstances</li>
                  <li><span className="text-white font-semibold">Right to object</span> — to object to processing based on legitimate interests</li>
                  <li><span className="text-white font-semibold">Right to data portability</span> — to receive your data in a structured, machine-readable format</li>
                  <li><span className="text-white font-semibold">Right to withdraw consent</span> — where processing is based on consent, you may withdraw it at any time</li>
                </ul>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:info@mindtechnica.com" className="text-green hover:underline">info@mindtechnica.com</a>.
                  {' '}We will respond within one calendar month as required by UK GDPR. There is no charge for making a request.
                </p>
              </div>

              {/* 12. Security */}
              <SectionHeading title="Security" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Data stored in Cloudflare D1 is encrypted at rest and in transit. Access to stored submissions is restricted to authorised personnel only.
                </p>
              </div>

              {/* 13. Changes to This Policy */}
              <SectionHeading title="Changes to This Policy" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The &quot;Last updated&quot; date at the top of this page reflects when the most recent changes were made.
                </p>
              </div>

              {/* 14. Contact Us */}
              <SectionHeading title="Contact Us" />
              <div className="max-w-4xl mb-12">
                <p className="text-base md:text-lg text-stone-300 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or how we handle your data, or if you wish to exercise your rights, please contact:
                </p>
                <div className="bg-blueFaded rounded-xl p-6 md:p-8 mb-6">
                  <p className="text-base md:text-lg text-stone-300 mb-2">
                    <span className="text-white font-semibold">Company:</span> Mind Technica
                  </p>
                  <p className="text-base md:text-lg text-stone-300 mb-2">
                    <span className="text-white font-semibold">Email:</span>{' '}
                    <a href="mailto:info@mindtechnica.com" className="text-green hover:underline">info@mindtechnica.com</a>
                  </p>
                  <p className="text-base md:text-lg text-stone-300">
                    <span className="text-white font-semibold">Website:</span>{' '}
                    <a href="https://mindtechnica.com" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">mindtechnica.com</a>
                  </p>
                </div>
                <p className="text-base md:text-lg text-stone-300 leading-relaxed">
                  If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner&apos;s Office at{' '}
                  <a href="https://ico.org.uk" className="text-green hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
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
