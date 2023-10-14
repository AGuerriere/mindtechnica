import Image from "next/image"

export default function Navbar() {
  return (
    <>
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
        <div>Services</div>
        <div>Our Work</div>
        <div className="contacts">Contact Us</div>
      </div>
    </nav>
    <nav className="flex justify-between mt-4 md:hidden">
      <Image
        src="/images/Asset 50@4x.png"
        width={110}
        height={40}
        alt="Mind Technica Logo"
      />
            <Image
        src="/images/icons/menu.svg"
        width={50}
        height={31}
        alt="Mind Technica Logo"
      />
    </nav>
    </>
  )
}