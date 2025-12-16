import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Services from '@/components/Services'
import OurClients from '@/components/OurClients'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

const heroItems = [
  {
    icon: "./images/bulb.svg",
    title: "Branding",
    description: "Crafting compelling brand identities that captivate, resonate and drive success",
    color: "text-pink",
    bgColor: "bg-pinkFaded"
  },
  {
    icon: "./images/laptop.svg",
    title: "Web Design",
    description: "Elevating online presence with innovative, user-centric web solutions",
    color: "text-green",
    bgColor: "bg-greenFaded"
  },
  {
    icon: "./images/mobile.svg",
    title: "App Design",
    description: "Creating seamless and intuitive app experience that delight users",
    color: "text-blue",
    bgColor: "bg-blueFaded"
  }
]

const whyUsItems = [
  {
    icon: "./images/settings.svg",
    title: "Bespoke Solution",
    description: "We are committed to crafting every aspect of your website from the ground up. This ensures the delivery of a fully customized website tailored precisely to your unique requirements."
  },
  {
    icon: "./images/pen.svg",
    title: "Unique Designs",
    description: "We believe in the power of creativity. Our team of talented designers will work closely with you to create stunning designs that reflect your brand identity and captivate your audience."
  },
  {
    icon: "./images/pressure.svg",
    title: "Performance-driven",
    description: "We understand the importance of speed and performance in today's digital world. Our websites are optimised for super-fast loading times, ensuring a seamless user experience."
  },
  {
    icon: "./images/piggybank.svg",
    title: "Cost-Effective",
    description: "Pre-made solutions can be expensive and take a cut of your sales. Our custom solutions have no hidden costs. This means that you can save money in the long run."
  },
  {
    icon: "./images/pc.svg",
    title: "Optimised for all devices",
    description: "Our websites are optimised for both desktop and mobile devices, ensuring that your users have a seamless experience across all platforms."
  },
  {
    icon: "./images/useradd.svg",
    title: "Lead Generation",
    description: "We specialise in crafting websites and landing pages that effectively transform visitors into valuable leads, and ultimately, into profitable sales."
  }
]

const workItems = [
  {
    image: "./images/brand1.webp",
    brand: "GetSociable",
    description: "Starting from their existing logo, we meticulously crafted GetSociable's branding identity. By revamping the frontend of their app, we not only refined the user experience but also streamlined their codebase, incorporating webpack and advanced caching strategies to markedly increase app speed and efficiency."
  },
  {
    image: "./images/brand2.webp",
    brand: "Watsons Opticians",
    description: "We are proud to have created a brand new identity for our client, which is reflected in the stunning design of their website. Our team worked tirelessly to ensure that the website is not only visually appealing but also user-friendly and easy to navigate"
  },
  {
    image: "./images/brand3.webp",
    brand: "McHenry Bros Ltd",
    description: "We helped our client to redefine their brand identity by focusing on their core values, which is reflected in the updated branding of their website. Additionally, we created a faster and more responsive website that has been generating more leads for our client."
  }
]

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="flex flex-col align-center justify-evenly min-h-screen">
        <Navbar />
        <div className="hero">
          <div className="absolute top-40 left-0 -z-50">
            <Image
              src="./images/polygon.svg"
              width={61}
              height={105}
              alt="Polygon"
            />
          </div>
          <div className="absolute right-0 -z-50">
            <Image
              src="./images/rectangle.svg"
              width={156}
              height={312}
              alt="Rectangle"
            />
          </div>
          <h1 className={`${bayon.className} mt-16 md:mt-28 uppercase text-4xl md:text-[4.5vw] leading-relaxed`}>
            At Mind<span className={`${bayon.className} highlightsTitle`}>Technica</span> we craft beautiful brands and we build high performing <span className={`${bayon.className} highlightsTitle`}>web apps</span>
          </h1>
          <div className="flex justify-center mt-9 mb-10 md:mb-40">
            <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-base md:text-2xl font-normal leading-9`}>
              Our team combines the magic of branding with the power of software to create amazing solutions
            </p>
          </div>
        </div>
        <div className="flex w-screen -ml-5 -mr-5 md:ml-0 md:mr-0 md:w-auto justify-evenly">
          {heroItems.map((item, index) => (
            <div key={index} className="flex flex-col max-w-[32%] md:max-w-md sm:1/3 items-center">
              <div className={`flex justify-center align center icon-container rounded-full ${item.bgColor} w-16 h-16`}>
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt="Icon"
                />
              </div>
              <h5 className={`${bayon.className} uppercase text-2xl ${item.color}`}>{item.title}</h5>
              <p className="text-center p-3 text-xs md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </header>

      <div className='2xl:flex 2xl:justify-center'>
        <main className='2xl:w-[1400px]'>
          {/* About Us Section */}
          <>
            <div className="h-36">
              <Image
                src="./images/triangle.svg"
                width={100}
                height={100}
                alt="Triangle"
                className="absolute right-0 -z-50"
              />
            </div>
            <div className="aboutUs">
              <Image
                src="./images/circle.svg"
                width={20}
                height={20}
                alt="Circle"
                className="absolute right-20 -z-50"
              />
            </div>
            <section className="lg:pb-32">
              <div className="flex flex-col md:flex-row ">
                <h2 className={`${bayon.className} text-white min-w-fit text-4xl pb-2 md:text-6xl lg:text-8xl`}>About Us</h2>
                <div className="pl-10">
                  <p className="text-xs md:text-2xl pb-3 md:max-w-4xl">
                    At MindTechnica we specialise in creating beautiful handcrafted and high-performance websites that turn visitors into leads and leads into sales. Our focus is on beautiful designs, lightning-fast web apps, and infinitely customizable solutions that are easily maintained.
                  </p>
                  <a href="#contacts">
                    <h5 className="text-green md:text-lg">
                      Get in Touch
                      <Image
                        src="./images/arrow.svg"
                        width={70}
                        height={9}
                        alt="Arrow"
                        className="inline-block pl-1"
                      />
                    </h5>
                  </a>
                </div>
              </div>
              <Image
                src="./images/star.svg"
                width={70}
                height={70}
                alt="Star"
                className="relative bottom-0 -z-50 mt-10"
              />
            </section>
          </>

          {/* Why Us Section */}
          <>
            <div className="flex flex-row align-center mt-20 mb-7">
              <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Why Us</h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-14">
              {whyUsItems.map((item, index) => (
                <div key={index} className="flex flex-col bg-blueFaded rounded-xl w-auto sm:h-auto text-xs lg:text-base lg:w-auto p-3 sm:p-7 sm:min-h-64">
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt="Icon"
                  />
                  <h5 className="font-bold text-white pt-1 md:pt-3 pb-2">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </>

          {/* Services Section */}
          <Services />

          {/* Our Work Section */}
          <>
            <div className="h-24 pt-3" id="ourwork">
              <Image
                src="./images/triangle2.svg"
                width={70}
                height={70}
                alt="Big circle"
                className="absolute left-0 -z-50"
              />
            </div>
            <div className="flex flex-row align-center mt-20 mb-7">
              <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Our Work</h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3">
              {workItems.map((item, index) => (
                <div key={index} className="flex flex-col items-start md:w-2/6 lg:w-1/4 pb-3">
                  <div className="h-auto w-full aspect-[4/3] relative p-5">
                    <Image
                      src={item.image}
                      fill
                      alt={item.brand}
                      className="rounded-3xl object-fill"
                    />
                  </div>
                  <h5 className="text-sm pb-5 pt-5 md:text-xl text-white font-semibold">{item.brand}</h5>
                  <p className="text-xs md:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </>

          {/* Our Clients Section */}
          <OurClients />

          {/* Get In Touch Section */}
          <>
            <div id="contacts">
              <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit pb-8 mt-3`}>Get in touch</h2>
              <div className="flex md:flex-row flex-col justify-start">
                <div className="flex flex-col justify-between w-1/2">
                  <p className="pb-3 text-xs md:text-base">Contact us today to discuss your project requirements and let us bring your vision to life!</p>
                  <div>
                    <h5 className="text-white font-semibold pb-3">Email</h5>
                    <p className="pb-3 text-xs md:text-base">projects@mindtechnica.com </p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold pb-3">Schedule a call</h5>
                    <p className="pb-3 text-xs md:text-base"><a href="https://calendly.com/mindtechnica/30min">Schedule a free Google Meet video consultation</a></p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold pb-3">Phone and Whatsapp:</h5>
                    <p>+44 (0) 7561 037904</p>
                  </div>
                  <h5 className="text-green md:text-lg pb-5">
                    Get in Touch
                    <Image
                      src="./images/arrow.svg"
                      width={70}
                      height={9}
                      alt="Arrow"
                      className="inline-block pl-1"
                    />
                  </h5>
                </div>
                <Form />
              </div>
            </div>
          </>

          {/* Footer Section */}
          <>
            <div className="flex justify-start flex-col md:flex-row mt-20 mb-20">
              <div>
                <Image
                  src="./images/Asset5.png"
                  width={150}
                  height={40}
                  alt="Icon"
                  className="-ml-5"
                />
                <p className={`${bayon.className} text-xl w-2/5 mb-5 mb-5`}>
                  Let&apos;s transform your <span className="text-green">vision</span> into an extraordinary digital reality that captivates, converts, and conquers.
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <p>Business Hours:</p>
                <br />
                <p>Monday - Friday: 9 - 5</p>
                <br />
                <p>Phone and Whatsapp: +44 &#40;0&#41; 7561 037904</p>
                <br />
              </div>
            </div>
            <footer className="text-xs text-center p-8">&copy; 2023 Mind Technica Ltd - NI698488 - 6 Bayview Terrace, BT48 7EE, Derry, United Kingdom. All rights reserved</footer>
          </>
        </main>
      </div>
    </>
  )
}
