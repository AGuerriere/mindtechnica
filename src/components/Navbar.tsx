'use client'

import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [hidden, toggleHidden] = useState(1)

  function triggerToggle() {
    const toggle = hidden === 1 ? 0 : 1;
    toggleHidden(toggle);
  }

  return (
    <>
    {/* Desktop navbar */}
    <nav className="hidden md:flex flex-row justify-between mt-10 items-center">
      <div className="logo flex items-center">
      <Image
      src="/images/Asset6.png"
      width={136}
      height={54}
      alt="Logo"
    />
      </div>
      <div className="navLinks flex justify-evenly w-1/2 hidden">
        <div className="text-green border-b-2 border-green">Home</div>
        <a href="#services">Services</a>
        <a href="#ourwork">Our Work</a>
        <a href="#contacts" className="contacts">Contact Us</a>
      </div>
    </nav>
    {/* Mobile navbar */}
    <nav className="flex justify-between mt-4 md:hidden">
      <Image
        src="/images/Asset6.png"
        width={110}
        height={40}
        alt="Logo"
      />
      <div onClick={()=>triggerToggle()}>
        <Image
          src="/images/menu.svg"
          width={50}
          height={31}
          alt="Logo"
        />
      </div>
    </nav>
    {/* Opened Mobile Navbar */}
    <div className={`${hidden === 1 ? 'hidden' : ''} bg-bgBlack text-xl pt-5 text-center h-full w-full fixed top-0 z-100 -ml-5`}>
      <div className="pt- 5 flex h-64 justify-between flex-col">
        <div className="fixed top-0 pr-7" onClick={()=>triggerToggle()}>X</div>
        <a href="#home" onClick={() => triggerToggle()}>Home</a>
        <a href="#services" onClick={() => triggerToggle()}>Services</a>
        <a href="#ourwork" onClick={() => triggerToggle()}>Our Work</a>
        <a href="#contacts" onClick={() => triggerToggle()}>Contact Us</a>
      </div>     
    </div>
    </>
  )
}