import Image from "next/image"

export default function Navbar() {
  return (
    <>
    <nav className="flex flex-row justify-between mt-10 items-center">
      <div className="logo flex items-center">
      <Image
      src="/images/Asset 50@4x.png"
      width={136}
      height={54}
      alt="Picture of the author"
    />
      </div>
      <div className="navLinks flex justify-evenly w-1/2">
        <div className="home">Home</div>
        <div className="services">Services</div>
        <div className="ourWork">Our Work</div>
        <div className="contacts">Contact Us</div>
      </div>
    </nav>
    </>
  )
}