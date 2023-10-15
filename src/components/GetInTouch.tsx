import Image from "next/image"
import { Bayon } from 'next/font/google'
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function GetInTouch() {
  return (
    <>
      <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit pb-8 mt-3`}>Get in touch</h2>
      <p className="pb-3 text-xs md:text-base">Contact us today to discuss your project requirements and let us bring your vision to life!</p>
      <h5 className="text-white font-semibold pb-3">Email</h5>
      <p className="pb-3 text-xs md:text-base">projects@mindtechnica.com </p>
      <h5 className="text-white font-semibold pb-3">Schedule a call</h5>
      <p className="pb-3 text-xs md:text-base">Schedule a free Google Meet video consultation</p>
      <h5 className="text-green md:text-lg">Get in Touch
        <Image
          src="/images/arrow.svg"
          width={70}
          height={9}
          alt="Arrow"
          className="inline-block pl-1"
        />
      </h5>

    </>
  )
}