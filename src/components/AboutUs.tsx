import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function AboutUs() {
  return (
      <>
        <div className="h-36">
            <Image
              src="/images/triangle.svg"
              width={100}
              height={100}
              alt="Triangle"
              className="absolute right-0 -z-50"
            />
          </div>
          <div className="aboutUs">
          <Image
              src="/images/circle.svg"
              width={20}
              height={20}
              alt="Circle"
              className="absolute right-20 -z-50"
            />
        </div>
          <section className="lg:pb-32">
              <div className="flex flex-col md:flex-row ">
                <h2 className={`${bayon.className} text-white min-w-fit text-4xl pb-2 md:text-6xl lg:text-8xl`}>About Us</h2>
                {/* about Us Flex Right */}
                <div className="pl-10">
                  <p className="text-xs md:text-2xl pb-3 md:max-w-4xl">At MindTechnica we specialise in creating beautiful handcrafted and high-performance websites that turn visitors into leads and leads into sales. Our focus is on beautiful designs, lightning-fast web apps, and infinitely customizable solutions that are easily maintained.</p>
                  <h5 className="text-green md:text-lg">Get in Touch
                  <Image
                    src="/images/arrow.svg"
                    width={40}
                    height={4}
                    alt="Arrow"
                    className="inline-block"
                  />
                  </h5>
                </div>
              </div>
            <Image
                src="/images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative bottom-0 -z-50"
              />
          </section></>
  )
}