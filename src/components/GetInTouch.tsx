import Image from "next/image"
import { Bayon } from 'next/font/google'
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function GetInTouch() {
  return (
    <div className="flex md:flex-row flex-col">
     <div>
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
     </div>
      <form name="contact-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" className="md:pl-10 md:w-2/5">
        <div className="flex justify-between pb-3">
          <label className="block" htmlFor="name">Name</label>
          <input name="name" id="name" type="text" className="text-greyLight02 rounded-md bg-blueFaded"/>
        </div>
        <div className="flex justify-between pb-3">
          <label htmlFor="company">Company name</label>
          <input name="company" id="company" type="text" className="text-greyLight02 rounded-md bg-blueFaded" />
        </div>
        <div className="flex justify-between pb-3">
          <label htmlFor="email">Your email</label>
          <input name="email" id="email" type="email" className="text-greyLight02 rounded-md bg-blueFaded" />
        </div>
        <div className="flex justify-between pb-3">
          <label htmlFor="text">Your Message</label>
          <textarea name="text" id="text" className="text-greyLight02 rounded-md bg-blueFaded" />
        </div>
        <div className="captcha" data-netlify-recaptcha="true"></div>
        <button type="submit" className="border-solid border-green border-2 rounded-full h-10 w-20">Submit</button>
      </form>            

    </div>
  )
}