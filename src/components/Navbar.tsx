'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [hidden, toggleHidden] = useState(1)

  function triggerToggle() {
    const toggle = hidden === 1 ? 0 : 1;
    console.log(1);
    toggleHidden(toggle);
  }

  return (
    <>
    {/* Desktop navbar */}
    <nav className="hidden md:flex flex-row justify-between mt-10 items-center">
      <div className="logo flex items-center">
      <Image
      src="/images/Asset 50@4x.png"
      width={136}
      height={54}
      alt="Mind Technica Logo"
    />
      </div>
      <div className="navLinks flex justify-evenly w-1/2 hidden">
        <div className="text-green border-b-2 border-green">Home</div>
        <Link href="#services">Services</Link>
        <Link href="#ourwork">Our Work</Link>
        <Link href="#contacts" className="contacts">Contact Us</Link>
      </div>
    </nav>
    {/* Mobile navbar */}
    <nav className="flex justify-between mt-4 md:hidden">
      <Image
        src="/images/Asset 50@4x.png"
        width={110}
        height={40}
        alt="Mind Technica Logo"
      />
      <div onClick={()=>triggerToggle()}>
        <Image
          src="/images/icons/menu.svg"
          width={50}
          height={31}
          alt="Mind Technica Logo"
        />
      </div>
    </nav>
    {/* Opened Mobile Navbar */}
    <div className={`${hidden === 1 ? 'hidden' : ''} bg-bgBlack text-xl pt-5 text-center h-full w-full fixed top-0 z-100 -ml-5`}>
      <div className="pt- 5 flex h-64 justify-between flex-col">
        <div className="text-right pr-7" onClick={()=>triggerToggle()}>X</div>
      <div  onClick={()=>triggerToggle()}>Home</div>
        <Link href="#services" onClick={()=>triggerToggle()}>Services</Link>
        <Link href="#ourwork"  onClick={()=>triggerToggle()}>Our Work</Link>
        <div>
          <Link href="#contacts" className="contacts w-2/3" onClick={()=>triggerToggle()}>Contact Us</Link></div>
        </div>     
    </div>
    </>
  )
}