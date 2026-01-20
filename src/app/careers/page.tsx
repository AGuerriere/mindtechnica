import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Bayon } from 'next/font/google'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const CareersPage = () => {
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
              <h1 className={`${bayon.className} uppercase text-4xl md:text-6xl lg:text-8xl text-white mb-8`}>
                Join Our <span className="highlightsTitle">Team</span>
              </h1>
              <p className="text-base md:text-2xl text-stone-300 opacity-90 mb-12 max-w-4xl">
                We are always looking for passionate and talented individuals to join our team. At MindTechnica, we are committed to fostering a collaborative and innovative environment where you can grow your skills and make a real impact.
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

              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Open Positions</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>
         <p className="text-base md:text-xl text-stone-300 mb-6">
          We are building a highly capable team and welcome full-time, part-time, and self-employed professionals who take ownership, drive outcomes, and value flexible, self-managed working arrangements.
        </p>

        <ul className="list-disc ml-8 mb-12 text-base md:text-xl text-stone-300 space-y-3">
          <li>Artificial Intelligence & Applied ML</li>
          <li>Automation & Intelligent Systems</li>
          <li>Data Analytics & Decision Systems</li>
          <li>Software Engineering</li>
          <li>Sales & Growth Lead</li>
          <li>Marketing & Brand Strategy</li>
        </ul>

              <Image
                src="/images/circle.svg"
                width={20}
                height={20}
                alt="Circle"
                className="absolute right-20 -z-50"
              />

              <div className="flex flex-row align-center mt-20 mb-7">
                <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>How to Apply</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>
              <p className="text-base md:text-2xl text-stone-300 opacity-90 mb-12">
                If you are interested in any of these roles, please send your CV or portfolio to <span className="highlightsTitle"><a href="mailto:careers@mindtechnica.com">careers@mindtechnica.com</a></span>. We look forward to hearing from you!
              </p>

              <Image
                src="/images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative -z-50 mt-10 mb-20"
              />
            </section>

            <Footer />
          </main>
        </div>
      </header>
    </>
  );
};

export default CareersPage;
