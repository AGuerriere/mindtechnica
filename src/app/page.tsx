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
    title: "AI Systems",
    description: "Designing and deploying AI-driven systems that streamline operations and expand capacity",
    color: "text-pink",
    bgColor: "bg-pinkFaded"
  },
  {
    icon: "./images/laptop.svg",
    title: "Data Intelligence",
    description: "Building automated pipelines to process and normalise large, high-volume data sources",
    color: "text-green",
    bgColor: "bg-greenFaded"
  },
  {
    icon: "./images/mobile.svg",
    title: "Computer Vision",
    description: "Extracting information from documents and images with high accuracy at scale",
    color: "text-blue",
    bgColor: "bg-blueFaded"
  }
]

const whyUsItems = [
  {
    icon: "./images/settings.svg",
    title: "AI that enables scaling",
    description: "Our systems increase operational capacity by improving processing speed, accuracy and insight, without requiring proportional growth in staff or overhead."
  },
  {
    icon: "./images/pen.svg",
    title: "Engineering-first approach",
    description: "Every solution is built on robust, maintainable architectures designed to operate reliably under real-world load."
  },
  {
    icon: "./images/pressure.svg",
    title: "Designed for long-term growth",
    description: "We build modular systems that evolve with your organisation, allowing AI capabilities to expand as demand increases."
  },
  {
    icon: "./images/piggybank.svg",
    title: "Focus on measurable outcomes",
    description: "We prioritise efficiency gains that can be clearly measured, including reduced manual effort, faster turnaround times and improved decision quality."
  },
  {
    icon: "./images/pc.svg",
    title: "Commercial awareness",
    description: "We combine deep technical expertise with commercial understanding to ensure every system delivers practical, operational value."
  },
  {
    icon: "./images/useradd.svg",
    title: "Independent and agile",
    description: "As an independent consultancy, we move quickly, adapt to your needs and maintain focus on outcomes that matter to your organisation."
  }
]

const sectorsItems = [
  {
    image: "./images/brand1.webp",
    brand: "SMEs and Scale-ups",
    description: "We help small and medium enterprises scale operations using AI, enabling them to increase capacity without proportional growth in headcount or costs."
  },
  {
    image: "./images/brand2.webp",
    brand: "Public Sector",
    description: "Supporting government and public sector organisations handling large volumes of documents and data with automated processing and intelligence systems."
  },
  {
    image: "./images/brand3.webp",
    brand: "Technology Companies",
    description: "Partnering with research-driven and frontier technology initiatives in robotics, advanced automation and next-generation AI development."
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
            Engineering <span className={`${bayon.className} highlightsTitle`}>intelligence</span> for real-world <span className={`${bayon.className} highlightsTitle`}>impact</span>
          </h1>
          <div className="flex justify-center mt-9 mb-10 md:mb-40">
            <p className={`${inter.className} w-3/4 opacity-90 text-center text-stone-300 text-base md:text-2xl font-normal leading-9`}>
              Mind Technica builds advanced AI, automation and data systems that help organisations scale efficiently by reducing manual work, increasing throughput and enabling faster, more informed decision-making
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
                    Mind Technica is an independent, engineering-led AI consultancy focused on helping organisations scale through automation, intelligent systems and data-driven decision making. Our work spans AI engineering, automation pipelines, document intelligence, computer vision, robotics research and predictive analytics. We help SMEs, public sector teams and technology-driven companies transform raw data into operational intelligence, using AI as a practical force multiplier.
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
              <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Sectors We Support</h2>
              <div className="border-b-2 border-white w-full"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3">
              {sectorsItems.map((item, index) => (
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
              <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit pb-8 mt-3`}>Let&apos;s Work Together</h2>
              <div className="flex md:flex-row flex-col justify-start">
                <div className="flex flex-col justify-between w-1/2">
                  <p className="pb-3 text-xs md:text-base">If your organisation wants to scale efficiently using AI, we can help you design and implement the systems that make it possible. Tell us what you are trying to achieve and we will identify the most effective technical approach.</p>
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
                  Scalable <span className="text-green">intelligence</span>. Practical results.
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
