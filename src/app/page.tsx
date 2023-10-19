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
    <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
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