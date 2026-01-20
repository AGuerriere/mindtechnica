import Image from "next/image"
import Link from "next/link"
import { Bayon } from 'next/font/google'

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
  return (
    <>
      <div className="flex justify-start flex-col md:flex-row mt-20 mb-10 gap-8 md:gap-16">
        <div>
          <Image
            src="/images/Asset5.png"
            width={150}
            height={40}
            alt="Mind Technica Logo"
            className="-ml-5"
          />
          <p className={`${bayon.className} text-xl w-2/5 mb-5`}>
            Scalable <span className="text-green">intelligence</span>. Practical results.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <p>Business Hours:</p>
          <br />
          <p>Monday - Friday: 9 - 5</p>
          <br />
          <p>Email: projects@mindtechnica.com</p>
          <br />
        </div>
      </div>
      <footer className="text-xs text-center p-8 border-t border-stone-800">
        <p className="mb-3">
          &copy; 2023 Mind Technica Ltd - NI698488 - 6 Bayview Terrace, BT48 7EE, Derry, United Kingdom. All rights reserved
        </p>
        <p>
          <Link href="/privacy" className="text-green hover:underline">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </>
  )
}
