import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'
import Image from "next/image"
import Header from "@/components/Header"
import AboutUs from '@/components/AboutUs'
import SectionTitle from '@/components/SectionTitle'

const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})


export default function Home(){
  return (
    <>  
      <Header />
      <main>
        <AboutUs />
        <SectionTitle title="Why Us"/>

      </main>
    </>
  )
}