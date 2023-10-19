import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'
import Image from "next/image"
import Header from "@/components/Header"
import AboutUs from '@/components/AboutUs'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import OurClients from '@/components/OurClients'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})


export default function Home(){
  return (
    <>  
    <Head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link
      rel="apple-touch-icon"
      href="/apple-icon.png"
      type="image/<generated>"
      sizes="<generated>"
      />
      <link
        rel="canonical"
        href="https://mindtechnica.com"
        key="canonical"
      />
    </Head>
      <Header />
      <main>
        <AboutUs />
        <WhyUs />
        <Services />
        <OurWork />
        <OurClients />
        <GetInTouch />
      </main>
      <Footer />
    </>
  )
}