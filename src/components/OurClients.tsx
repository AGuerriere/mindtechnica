'use client'

import Image from "next/image"
import { Bayon } from 'next/font/google'
import { useState } from "react"
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function OurClients(){
  const [hidden, toggleHidden] = useState(1)

  function triggerToggle() {
    const toggle = hidden === 1 ? 0 : 1;
    toggleHidden(toggle);
  }
  return (
    <div className="flex flex-col items-center pt-20 min-h-[35rem] md:min-h-[50rem]">
      <Image
          src="/images/smallcircle.svg"
          width={18}
          height={18}
          alt="Circle"
          className="absolute right-20 md:right-10 -z-50"
        />
      <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit pb-8`}>Our Clients</h2>
      <div className={`${hidden === 1 ? 'hidden' : ''} flex flex-col items-center justify-center text-center`}>
        <p className="pb-4 w-full lg:w-1/2 text-xs md:text-base">“I had an amazing experience with MindTechnica! They are a fantastic web development agency that helped us take our tech startup off the ground quickly by building our branding and delivering an MVP quickly. Their team of experienced developers are skilled in web development, branding, and digital marketing. They delivered our project on time and within budget. I would highly recommend MindTechnica to anyone looking for a reliable web development agency that can help them take their business to the next level.”</p>
        <h5 className="text-white text-base font-semibold">Peter McCleery</h5>
        <p className="pb-7">CEO, GetSociable</p>
      </div>
      <div className={`${hidden === 0 ? 'hidden' : ''} flex flex-col items-center justify-center text-center`}>
        <p className="pb-4 w-full lg:w-1/2 text-xs md:text-base">“Mind Technica is a fantastic company that helped us transform our brand and website. They listened to our needs and delivered a stunning, user-friendly, and responsive design. They also created a new great looking logo that reflects our identity and values. Since we launched our new website, we have seen a significant increase in sales and phone calls from potential customers. We highly recommend Mind Technica for anyone looking for a professional and creative web design service.”</p>
        <h5 className="text-white text-base font-semibold">Darren McHenry</h5>
        <p className="pb-7">Director, McHenry Bros Ltd</p>
      </div>
      <div className="flex w-32 justify-evenly">
      <Image
        src="/images/square.svg"
        width={196}
        height={196}
        alt="Square"
        className="absolute left-0 md:left-10 -z-50"
      />
      <Image
        src="/images/circlebuttonleft.svg"
        width={40}
        height={40}
        alt="Icon"
        onClick={() => triggerToggle()}
      />
       <Image
        src="/images/right.svg"
        width={40}
        height={40}
        alt="Icon"
        onClick={() => triggerToggle()}
      />
      </div>
    </div>
  )
}