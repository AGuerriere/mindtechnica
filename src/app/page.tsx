import Navbar from "@/components/Navbar"
import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home(){
  return (
    <>
    <Navbar></Navbar>
    <div className="hero">
    <h1 className={`${inter.className} uppercase`}>At Mind<span className={`${inter.className} highlightsTitle`}>Technica</span> We deliver Beautifully handcrafted, customisable and fast <span className={`${inter.className} highlightsTitle`}>websites</span></h1>
    <div className="flex justify-center mt-10">
      <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-2xl font-normal leading-9`}>Our team is made of branding wizards and software mavericks</p>
    </div>
    </div>
    </>
  )
}