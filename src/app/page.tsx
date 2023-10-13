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
        <h1 className={`${bayon.className} uppercase`}>At Mind<span className={`${bayon.className} highlightsTitle`}>Technica</span> We deliver Beautifully handcrafted, customisable and fast <span className={`${bayon.className} highlightsTitle`}>websites</span></h1>
        <div className="flex justify-center mt-10 mb-40">
          <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-2xl font-normal leading-9`}>Our team is made of branding wizards and software mavericks</p>
        </div>
        </div>
        <div className="flex justify-evenly">
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Crafting compelling brand identities that captivate, resonate and drive success"
            color="text-pink"
            />
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Elevating online presence with innovative, user-centric web solutions"
            color="text-green"
            />
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Creating seamless and intuitive app experience that delight users"
            color="text-blue"
            />
        </div>
      </header>
      <div className="h-96">

        </div>
    </>
  )
}