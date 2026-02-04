import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import Image from "next/image"
import { Bayon } from 'next/font/google'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Contact Us | Mind Technica',
  description: 'Get in touch with Mind Technica to discuss your AI and automation needs.',
}

export default function ContactPage() {
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
          <main className="2xl:w-[1400px] px-5 flex flex-col justify-between">
            <section className="mt-16 md:mt-28 mb-12">
              <h1 className={`${bayon.className} uppercase text-4xl md:text-6xl lg:text-8xl text-white mb-8 text-center`}>
                Contact <span className="highlightsTitle">Us</span>
              </h1>
              <div className="flex justify-center">
                <p className="text-base md:text-2xl text-stone-300 opacity-90 mb-12 max-w-4xl text-center">
                  We&apos;d love to hear from you. Please fill out the form below and we&apos;ll get back to you as soon as possible.
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

              <ContactForm />
              
               <Image
                src="/images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative -z-50 mt-10"
              />
            </section>

            <Footer />
          </main>
        </div>
      </header>
    </>
  );
};
