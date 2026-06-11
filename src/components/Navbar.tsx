'use client'

import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home', active: pathname === '/' },
    { href: '/services', label: 'Services', active: pathname === '/services' },
    { href: '/about', label: 'About', active: pathname === '/about' },
    { href: '/news', label: 'News', active: pathname.startsWith('/news') },
    { href: '/careers', label: 'Careers', active: pathname === '/careers' },
  ]

  return (
    <>
    {/* Desktop navbar */}
    <nav className="hidden md:flex flex-row justify-between mt-10 items-center">
      <div className="logo flex items-center">
        <Image src="./images/Asset6.png" width={136} height={54} alt="Logo" />
      </div>
      <div className="navLinks flex justify-evenly w-1/2 hidden">
        <a href="/" className={pathname === '/' ? 'text-green border-b-2 border-green' : ''}>Home</a>
        <a href="/services" className={pathname === '/services' ? 'text-green border-b-2 border-green' : ''}>Services</a>
        <a href="/about" className={pathname === '/about' ? 'text-green border-b-2 border-green' : ''}>About</a>
        <a href="/news" className={pathname.startsWith('/news') ? 'text-green border-b-2 border-green' : ''}>News</a>
        <a href="/careers" className={pathname === '/careers' ? 'text-green border-b-2 border-green' : ''}>Careers</a>
        <a href="/book-a-call" className="contacts">Book a call</a>
      </div>
    </nav>

    {/* Mobile top bar */}
    <nav className="flex justify-between items-center mt-4 md:hidden">
      <Image src="./images/Asset6.png" width={110} height={40} alt="Logo" />
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg active:bg-white/10"
        aria-label="Open menu"
      >
        <Image src="./images/menu.svg" width={32} height={22} alt="Menu" />
      </button>
    </nav>

    {/* Mobile menu overlay */}
    <div
      className={`${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-200 fixed inset-0 z-[100] bg-bgBlack flex flex-col px-6 pt-6 pb-10 md:hidden`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <Image src="./images/Asset6.png" width={120} height={48} alt="Logo" />
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 text-base font-medium hover:border-white/40 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col mt-8 gap-1">
        {navLinks.map(({ href, label, active }) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={`text-xl font-semibold py-4 px-4 rounded-xl transition-colors ${
              active
                ? 'text-green bg-green/10'
                : 'text-white/80 active:bg-white/5'
            }`}
          >
            {label}
          </a>
        ))}

        {/* Book a call CTA */}
        <div className="pt-4 mt-2 border-t border-white/10">
          <a
            href="/book-a-call"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-[43px] bg-green py-4 text-base font-semibold text-bgBlack shadow-[0px_7px_18px_0px_rgba(7,39,25,0.40)] active:scale-95 transition-transform"
          >
            Book a call
          </a>
        </div>
      </div>
    </div>
    </>
  )
}