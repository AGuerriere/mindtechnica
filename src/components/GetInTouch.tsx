import Image from "next/image"
import { Bayon } from 'next/font/google'
import { useForm, useWatch } from "react-hook-form";
import Form from "./Form";

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function GetInTouch() {
  return (
    <>
      <div id="contacts">
        <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit pb-8 mt-3`} >Get in touch</h2>
        <div className="flex md:flex-row flex-col justify-start">
          <div className="flex flex-col justify-between w-1/2">
            <p className="pb-3 text-xs md:text-base">Contact us today to discuss your project requirements and let us bring your vision to life!</p>
            <div>
              <h5 className="text-white font-semibold pb-3">Email</h5>
              <p className="pb-3 text-xs md:text-base">projects@mindtechnica.com </p>
            </div>
            <div>
              <h5 className="text-white font-semibold pb-3">Schedule a call</h5>
              <p className="pb-3 text-xs md:text-base"><a href="https://calendly.com/mindtechnica/30min">Schedule a free Google Meet video consultation</a></p>
            </div>
            <div>
              <h5 className="text-white font-semibold pb-3">Phone and Whatsapp:</h5>
              <p>+44 (0) 7561 037904</p>
            </div>
            <h5 className="text-green md:text-lg pb-5">Get in Touch
              <Image
                src="./images/arrow.svg"
                width={70}
                height={9}
                alt="Arrow"
                className="inline-block pl-1"
              />
            </h5>
          </div>

          <Form />
        </div>
      </div>
    </>
  )
}