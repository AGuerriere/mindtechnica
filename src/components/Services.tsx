'use client'

import Image from "next/image"
import SectionTitle from "./SectionTitle"
import React, { useState } from "react";

export default function Services(){
  const [content, changeContent] = useState('We create visually stunning and user-friendly websites that are tailored to your business needs. Our websites are optimised for the desktop and for mobile. Our team of experienced designers will work with you to create a website that is both aesthetically pleasing and  highly functional.')
  const [activeElement, changeActiveElement] = useState(0)

  function updateContent(content:string, item:number) {
    changeContent(content)
    changeActiveElement(item)
  }

  return (
    <>
      <div className="h-36" id="services">
        <Image
          src="./images/bigcircle.svg"
          width={70}
          height={70}
          alt="Big circle"
          className="absolute right-0 -z-50"
        />
      </div>
      <SectionTitle title="Services"/>
      <section className="flex flex-col justify-center md:flex-row">
      <div className="md:w-2/6 mb-5">
        <ul className="leading-10 md:text-lg">
          <li className={`${activeElement === 0 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`Our team of experienced designers will work closely with you to create visually stunning and user-friendly websites that are tailored to your business needs. We’ll ensure that your website is not only aesthetically pleasing but also functional and easy to navigate. We’ll take care of everything from layout design to color schemes and typography.`, 0)}>Web Design</li>
          <li className={`${activeElement === 1 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`Our team of developers specializes in building high-performing web applications that are fast, reliable, and scalable. We use the latest technologies to ensure that your web app is optimized for performance and can handle heavy traffic without compromising on user experience.`, 1)}>High-Performance Web Apps</li>
          <li className={`${activeElement === 2 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`We develop cross-platform apps for iPhone iOS and Android devices that offer native-like experiences. Our PWAs are designed to work seamlessly across all devices and platforms, providing your users with a consistent experience. They can be installed on users’ devices, just like native apps, and offer offline functionality.`, 2)}>Progressive Web Apps - PWA</li>
          <li className={`${activeElement === 3 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`We help you build a strong brand identity that resonates with your target audience. Our digital marketing services include social media marketing, email marketing, content marketing, and more. We’ll work with you to create engaging content that drives traffic to your website and increases brand awareness.`, 3)}>Branding and Marketing</li>
          <li className={`${activeElement === 4 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`Our team of designers will create a unique and memorable logo that represents your brand’s values and personality. We’ll take into account your target audience and industry to design a logo that stands out from the competition.`, 4)}>Logo Design</li>
          <li className={`${activeElement === 5 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`We’ll help you improve your website’s visibility on search engines like Google, Bing, and Yahoo. Our SEO services include keyword research, on-page optimization, link building, and more. We’ll ensure that your website ranks higher in search engine results, driving organic traffic to your site.`, 5)}>SEO</li>
        </ul>
      </div>
      <div className="w-fit h-52 text-xs md:text-base">{content}</div>
    </section>
    </>
    
  )
}