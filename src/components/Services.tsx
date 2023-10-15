import Image from "next/image"
import SectionTitle from "./SectionTitle"
import React, { useState } from "react";

export default function Services(){
  return (
    <>
      <div className="h-36">
        <Image
          src="/images/bigcircle.svg"
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
          <li className="text-yellow">Web Design</li>
          <li>High-Performance Web Apps</li>
          <li>Progressive Web Apps - PWA</li>
          <li>Branding and Marketing</li>
          <li>Logo Design</li>
          <li>SEO</li>
        </ul>
      </div>
      <div className="w-fit text-xs md:text-base">We create visually stunning and user-friendly websites that are tailored to your business needs. Our websites are optimised for the desktop and for mobile. Our team of experienced designers will work with you to create a website that is both aesthetically pleasing and  highly functional.</div>
    </section>
    </>
    
  )
}