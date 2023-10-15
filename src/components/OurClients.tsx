import Image from "next/image"
import { Bayon } from 'next/font/google'
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function OurClients(){
  return (
    <div className="flex flex-col items-center pt-20 h-[35rem] md:h-[50rem]">
      <Image
          src="/images/smallcircle.svg"
          width={18}
          height={18}
          alt="Circle"
          className="absolute right-20 md:right-10 -z-50"
        />
      <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit pb-8`}>Our Clients</h2>
      <p className="pb-4 w-full md:w-1/3 text-xs md:text-base">“I had an amazing experience with MindTechnica! They are a fantastic web development agency that helped us take our tech startup off the ground quickly by building our branding and delivering an MVP quickly. Their team of experienced developers are skilled in web development, branding, and digital marketing. They delivered our project on time and within budget. I would highly recommend MindTechnica to anyone looking for a reliable web development agency that can help them take their business to the next level.”</p>
      <h5 className="text-white text-base font-semibold">Peter McCleery</h5>
      <p className="pb-7">CEO, GetSociable - Belfast</p>
      <div className="flex w-32 justify-evenly">
      <Image
        src="/images/square.svg"
        width={196}
        height={196}
        alt="Square"
        className="absolute left-0 md:left-10 -z-50"
      />
      <Image
        src="/images/icons/circlebuttonleft.svg"
        width={40}
        height={40}
        alt="Icon"
      />
       <Image
        src="/images/icons/right.svg"
        width={40}
        height={40}
        alt="Icon"
      />
      </div>
    </div>
  )
}