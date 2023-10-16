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
      <h5 className="text-green md:text-lg pb-5">Get in Touch
        <Image
          src="/images/arrow.svg"
          width={70}
          height={9}
          alt="Arrow"
          className="inline-block pl-1"
        />
      </h5>
     </div>
        <form name="contact" method="POST" action="/success" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="pb-2">
          <label htmlFor="yourname">
              Name*
            </label> 
            <br />
            <input className="rounded-md w-full h-9 bg-blueFaded text-gray" placeholder="Enter your name" type="text" name="name" id="yourname" />
          </div>

          <div className="pb-2">
            <label htmlFor="youremail">
              Email*
            </label>
            <br />
            <input className="rounded-md w-full h-9 bg-blueFaded text-gray" placeholder="Email address" type="email" name="email" id="youremail" />
          </div>

          <div className="pb-2">
            <label htmlFor="whatservice">
              What services are you interested in?
            </label> <br />
            <textarea className="rounded-md w-full h-9 bg-blueFaded text-gray" placeholder="Enter the service required" name="whatservice" id="whatservice"></textarea>
          </div>

          <div className="pb-2">
            <label htmlFor="yourmessage">
              Message:
            </label> <br />
            <textarea className="rounded-md w-full h-28 bg-blueFaded text-gray" placeholder="Type your message here" name="message" id="yourmessage"></textarea>
          </div>

          <div className="flex justify-end">
            <button type="submit">Send</button>
          </div>

        </form>
    </div>
  )
}