'use client'

import Image from "next/image"
import React, { useState } from "react";
import { Bayon } from 'next/font/google'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function Services(){
  const [content, changeContent] = useState('We design and deploy AI-driven systems that streamline operations, eliminate repetitive tasks and expand organisational capacity, allowing companies to scale without increasing cost or headcount.')
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
      <div className="flex flex-row align-center mt-20 mb-7">
        <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>What We Do</h2>
        <div className="border-b-2 border-white w-full"></div>
      </div>
      <section className="flex flex-col justify-center md:flex-row">
      <div className="md:w-2/6 mb-5">
        <ul className="leading-10 md:text-lg">
          <li className={`${activeElement === 0 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`We design and deploy AI-driven systems that streamline operations, eliminate repetitive tasks and expand organisational capacity, allowing companies to scale without increasing cost or headcount.`, 0)}>AI and Automation Systems</li>
          <li className={`${activeElement === 1 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`Scalability depends on clean, structured data. We build automated pipelines to ingest, process and normalise large, messy and high-volume data sources, enabling reliable workflows at scale.`, 1)}>Data Extraction and Intelligence Pipelines</li>
          <li className={`${activeElement === 2 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`We develop systems that read, classify and extract information from documents and images, supporting large-scale processing with high accuracy and minimal human involvement.`, 2)}>Computer Vision and Document Processing</li>
          <li className={`${activeElement === 3 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`We build models that forecast trends, identify risk and support planning, helping organisations scale strategically rather than reactively.`, 3)}>Predictive Analytics and Decision Support</li>
          <li className={`${activeElement === 4 ? 'text-yellow' : '' } cursor-pointer`} onClick={()=> updateContent(`We support companies exploring robotics, advanced automation and next-generation AI, providing technical validation, prototyping and feasibility assessment.`, 4)}>Research and Development for Robotics and Emerging Technologies</li>
        </ul>
      </div>
      <div className="w-fit h-52 text-xs md:text-base">{content}</div>
    </section>
    </>

  )
}