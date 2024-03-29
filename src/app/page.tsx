import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'
import Header from "@/components/Header"
import AboutUs from '@/components/AboutUs'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import OurClients from '@/components/OurClients'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <>
      <Header />
      <div className='2xl:flex 2xl:justify-center'>
        <main className='2xl:w-[1400px]'>
          <AboutUs />
          <WhyUs />
          <Services />
          <OurWork />
          <OurClients />
          <GetInTouch />
          <Footer />
        </main>
      </div>
    </>
  )
}