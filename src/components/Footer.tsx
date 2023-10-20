import Image from "next/image"
import { Bayon } from 'next/font/google'
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
  return (
    <>
    <div className="flex justify-start flex-col md:flex-row mt-20 mb-20">
      <div>
      <Image
        src="/images/Asset5.png"
        width={150}
        height={40}
        alt="Icon"
        className="-ml-5"
      />
      <p className={`${bayon.className} text-xl w-2/5 mb-5 mb-5`}>Let&apos;s transform your <span className="text-green">vision</span> into an extraordinary digital reality that captivates, converts, and conquers.</p>
      </div>
      <div className="flex flex-col justify-between">
        <p>Business Hours:</p>
        <br />
        <p>Monday - Friday: 9 - 5</p>
        <br />
        <p>Phone Number:</p>
        <br />
        </div>
    </div>
    <footer className="text-xs text-center p-8">&copy; 2023 Mind Technica Ltd. All rights reserved</footer>
    </>
  )
}