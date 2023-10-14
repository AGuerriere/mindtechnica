import Navbar from "@/components/Navbar"
import HeroTitles from "@/components/HeroTitles"
import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})


export default function Home(){
  return (
    <>
      <header className="flex flex-col align-center h-screen">
        <Navbar></Navbar>
        <div className="hero">
        <div className="absolute top-40 left-0 -z-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="105" viewBox="0 0 61 105" fill="none">
              <path d="M-15.529 103.793L-43.0987 0.901363L59.7928 28.4711L-15.529 103.793Z" stroke="#F2E744"/>
            </svg>
        </div>
        <div className="absolute right-0 -z-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="156" height="312" viewBox="0 0 156 312" fill="none">
            <path d="M0.683988 115.22L196.622 0.683961L311.158 196.622L115.22 311.158L0.683988 115.22Z" stroke="#4A6DD9"/>
          </svg>
        </div>
        <h1 className={`${bayon.className} mt-16 md:mt-28 uppercase text-4xl md:text-[4.5vw] leading-relaxed`}>At Mind<span className={`${bayon.className} highlightsTitle`}>Technica</span> We deliver Beautifully handcrafted, customisable and fast <span className={`${bayon.className} highlightsTitle`}>websites</span></h1>
        <div className="flex justify-center mt-9 mb-10 md:mb-40">
          <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-base md:text-2xl font-normal leading-9`}>Our team is made of branding wizards and software mavericks</p>
        </div>
        </div>
        <div className="flex justify-evenly">
          <HeroTitles 
            icon="/images/icons/bulb.svg"
            title="Branding"
            description="Crafting compelling brand identities that captivate, resonate and drive success"
            color="text-pink"
            bgColor="bg-pinkFaded"
            />
          <HeroTitles 
            icon="/images/icons/laptop.svg"
            title="Branding"
            description="Elevating online presence with innovative, user-centric web solutions"
            color="text-green"
            bgColor="bg-greenFaded"
            />
          <HeroTitles 
            icon="/images/icons/mobile.svg"
            title="Branding"
            description="Creating seamless and intuitive app experience that delight users"
            color="text-blue"
            bgColor="bg-blueFaded"
            />
        </div>
      </header>
      <div className="h-96">

        </div>
    </>
  )
}