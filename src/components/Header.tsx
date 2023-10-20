import Image from "next/image"
import Navbar from "./Navbar"
import HeroTitles from "@/components/HeroTitles"
import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})  


  
  export default function Header() {
    return(
      <header className="flex flex-col align-center justify-evenly min-h-screen">
      <Navbar></Navbar>
      <div className="hero">
      <div className="absolute top-40 left-0 -z-50">
          <Image
        src="/images/polygon.svg"
        width={61}
        height={105}
        alt="Polygon"
      />
      </div>
      <div className="absolute right-0 -z-50">
        <Image
          src="/images/rectangle.svg"
          width={156}
          height={312}
          alt="Rectangle"
        />
      </div>
      <h1 className={`${bayon.className} mt-16 md:mt-28 uppercase text-4xl md:text-[4.5vw] leading-relaxed`}>At Mind<span className={`${bayon.className} highlightsTitle`}>Technica</span> we craft beautiful brands and we build high performing <span className={`${bayon.className} highlightsTitle`}>web apps</span></h1>
      <div className="flex justify-center mt-9 mb-10 md:mb-40">
        <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-base md:text-2xl font-normal leading-9`}>Our team combines the magic of branding with the power of software to create amazing solutions</p>
      </div>
      </div>
      <div className="flex w-screen -ml-5 -mr-5 md:ml-0 md:mr-0 md:w-auto justify-evenly">
        <HeroTitles 
          icon="/images/bulb.svg"
          title="Branding"
          description="Crafting compelling brand identities that captivate, resonate and drive success"
          color="text-pink"
          bgColor="bg-pinkFaded"
          />
        <HeroTitles 
          icon="/images/laptop.svg"
          title="Web Design"
          description="Elevating online presence with innovative, user-centric web solutions"
          color="text-green"
          bgColor="bg-greenFaded"
          />
        <HeroTitles 
          icon="/images/mobile.svg"
          title="App Design"
          description="Creating seamless and intuitive app experience that delight users"
          color="text-blue"
          bgColor="bg-blueFaded"
          />
      </div>
    </header>
    )
  }