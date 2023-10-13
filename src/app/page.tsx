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
        <h1 className={`${bayon.className} uppercase`}>At Mind<span className={`${bayon.className} highlightsTitle`}>Technica</span> We deliver Beautifully handcrafted, customisable and fast <span className={`${bayon.className} highlightsTitle`}>websites</span></h1>
        <div className="flex justify-center mt-10 mb-20">
          <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-2xl font-normal leading-9`}>Our team is made of branding wizards and software mavericks</p>
        </div>
        </div>
        <div className="flex justify-evenly">
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Crafting compelling brand identities that captivate, resonate and drive success"
            color="pink"
            />
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Elevating online presence with innovative, user-centric web solutions"
            color="green"
            />
          <HeroTitles 
            icon="/images/Asset 50@4x.png"
            title="Branding"
            description="Creating seamless and intuitive app experience that delight users"
            color="blue"
            />
        </div>


      </header>
    </>
  )
}