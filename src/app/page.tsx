import { Inter } from 'next/font/google'
import { Bayon } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getAllPosts } from '@/lib/blog'
import OurClients from '@/components/OurClients'
import BookingForm from '@/components/BookingForm'

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
    icon: "./images/mobile.svg",
    title: "Automation & Agents",
    description: "Deploying AI agents that automate multi-step tasks, from data processing to decision support.",
    color: "text-green",
    bgColor: "bg-greenFaded"
  },
  {
    icon: "./images/pc-yellow.svg",
    title: "Software Development",
    description: "Building custom web applications, APIs and platforms tailored to your workflow and requirements.",
    color: "text-yellow",
    bgColor: "bg-yellowFaded"
  },
  {
    icon: "./images/settings.svg",
    title: "Cloud & Security",
    description: "Designing secure AWS infrastructure that scales cleanly and keeps operating costs under control.",
    color: "text-pink",
    bgColor: "bg-pinkFaded"
  },
  {
    icon: "./images/mobile.svg",
    title: "AI Voice Agents",
    description: "Building phone agents that answer calls, qualify leads, book appointments and hand off with context.",
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
      <header className="flex flex-col min-h-screen justify-between">
        <Navbar />
        <div className="hero flex-grow flex flex-col justify-center">
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
              Mind Technica builds advanced AI, automation, data systems, cloud infrastructure and custom software that help organisations scale efficiently by reducing manual work, increasing throughput and enabling faster, more informed decision-making
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 w-screen -ml-5 -mr-5 md:ml-0 md:mr-0 md:w-auto gap-4 pb-10 md:pb-16">
          {heroItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-2">
              <div className={`flex justify-center icon-container rounded-full ${item.bgColor} w-16 h-16`}>
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt="Icon"
                />
              </div>
              <h5 className={`${bayon.className} uppercase text-2xl text-center ${item.color}`}>{item.title}</h5>
              <p className="text-center p-3 text-xs md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Promo CTA Banner */}
      <div className="bg-gradient-to-r from-greenFaded to-blueFaded py-8 md:py-12 -mt-10">
        <div className="2xl:mx-auto 2xl:w-[1400px] px-5">
          <div className="text-center">
            <p className="text-green text-sm md:text-base font-semibold uppercase tracking-wider mb-3">Limited Time Offer — 30 Days Only</p>
            <h3 className={`${bayon.className} text-white text-2xl md:text-4xl lg:text-5xl mb-4`}>
              Free AI &amp; Software <span className="highlightsTitle">Automation Audit</span>
            </h3>
            <p className="text-stone-300 text-sm md:text-lg mb-6 max-w-3xl mx-auto">
              A complimentary expert assessment of where AI and automation could reduce overhead in your business. Limited places available.
            </p>
            <Link
              href="/promo"
              className="inline-block bg-green text-bgBlack font-semibold text-base md:text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
            >
              Book Your Free Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Releases Section */}
      {(() => {
        const latestPosts = getAllPosts().slice(0, 4)
        if (latestPosts.length === 0) return null
        return (
          <div className="2xl:flex 2xl:justify-center">
            <section className="2xl:w-[1400px] py-16 md:py-20">
              <div className="flex flex-row align-center mb-10">
                <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>Latest Releases</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {latestPosts.map(post => (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="group block border border-grey/20 rounded-xl p-6 hover:border-green/40 transition-colors"
                  >
                    <div className={`${inter.className} flex items-center gap-3 text-xs text-grey mb-3`}>
                      <time dateTime={post.frontmatter.date}>
                        {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className={`${bayon.className} text-lg md:text-xl text-white group-hover:text-green transition-colors mb-2`}>
                      {post.frontmatter.title}
                    </h3>
                    <p className={`${inter.className} text-sm text-mediumGrey leading-relaxed line-clamp-3`}>
                      {post.frontmatter.description}
                    </p>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.frontmatter.tags.map(tag => (
                          <span key={tag} className={`${inter.className} text-xs px-2 py-1 rounded bg-greenFaded text-green`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/news"
                  className="inline-block text-green hover:text-green/80 font-semibold transition-colors"
                >
                  View all articles &rarr;
                </Link>
              </div>
            </section>
          </div>
        )
      })()}

      <div className='2xl:flex 2xl:justify-center'>
        <main className='2xl:w-[1400px]'>
          {/* How We Work Section */}
          <>
            <div className="h-24 md:h-32">
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
            <section className="relative lg:pb-32">
              <div className="flex flex-row align-center mb-8 md:mb-12">
                <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>How We Work</h2>
                <div className="border-b-2 border-white w-full"></div>
              </div>

              <div className="flex flex-col gap-5 md:gap-7 md:max-w-4xl">
                <p className={`${inter.className} text-stone-300 text-base md:text-lg leading-relaxed`}>
                  Most businesses we talk to aren&apos;t struggling because their people aren&apos;t good enough. They&apos;re struggling because the systems around those people haven&apos;t kept pace. Quoting takes longer than it should, data lives in the wrong place, and too much depends on someone manually moving information from one system to another.
                </p>
                <p className={`${inter.className} text-stone-300 text-base md:text-lg leading-relaxed`}>
                  We&apos;re a team of engineers, and our starting point is always the problem rather than the technology. Depending on what&apos;s actually needed, that might mean building a custom software solution, deploying AI that reads documents and handles routine decisions, setting up agentic systems that complete multi-step tasks without human intervention, or putting the right cloud infrastructure in place to make all of it reliable and scalable.
                </p>
                <p className={`${inter.className} text-stone-300 text-base md:text-lg leading-relaxed`}>
                  We work out where the gaps are actually costing you, and then we build something that closes them properly, designed around the way your business genuinely operates rather than adapted from something generic.
                </p>
                <p className={`${inter.className} text-stone-300 text-base md:text-lg leading-relaxed`}>
                  When it works well, the impact tends to be straightforward: your team spends less time on work that shouldn&apos;t need them, your client-facing processes get faster and more consistent, and the information you need to make good decisions is actually available when you need it.
                </p>
                <p className={`${inter.className} text-white text-lg md:text-xl font-semibold leading-relaxed`}>
                  If any of that sounds familiar, let&apos;s talk.
                </p>
              </div>

              <a href="/promo" className="group mt-8 md:mt-10 inline-flex w-fit items-center text-green md:text-lg font-semibold transition-colors hover:text-green/80">
                Book a free audit
                <Image
                  src="./images/arrow.svg"
                  width={70}
                  height={9}
                  alt=""
                  className="inline-block pl-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

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

          {/* Our Work Section */}
          {/* <>
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
          </> */}

          {/* Our Clients Section */}
          {/* <OurClients /> */}

          {/* Get In Touch Section */}
          <>
            <div id="contacts" className="mt-20">
              <h2 className={`${bayon.className} text-white text-4xl md:text-6xl lg:text-8xl min-w-fit pb-8`}>Let&apos;s Work Together</h2>
              <div className="flex flex-col justify-start gap-8">
                <div className="flex flex-col justify-start">
                  <p className="pb-8 text-xs md:text-base">If your organisation wants to scale efficiently using AI and custom software, we can help you design and implement the systems that make it possible. Tell us what you are trying to achieve and we will identify the most effective technical approach.</p>
                  <h3 className={`${bayon.className} text-green text-2xl md:text-4xl lg:text-5xl uppercase`}>Book a free consultation now</h3>
                </div>
                <BookingForm />
              </div>
              <div className="mb-8">
                <h5 className="text-white font-semibold pb-3 text-lg md:text-xl pt-20">Alternatively, contact us by email</h5>
                <p className="pb-3 text-base md:text-lg text-stone-300">
                  <a href="mailto:projects@mindtechnica.com" className="text-green hover:underline">projects@mindtechnica.com</a>
                </p>
                <p className="text-xs md:text-sm text-stone-400">We typically respond within 24 hours</p>
              </div>
            </div>
          </>

          {/* Footer Section */}
          <Footer />
        </main>
      </div>
    </>
  )
}
