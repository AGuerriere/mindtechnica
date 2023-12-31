import Image from "next/image"
import { Bayon } from 'next/font/google'
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

type PropsTypes = {
  icon: string
  title: string
  description: string
  color: string
  bgColor: string
}


function HeroTitles(props: PropsTypes) {

  return (
    <div className="flex flex-col max-w-[32%] md:max-w-md sm:1/3 items-center">
      <div className={`flex justify-center align center icon-container rounded-full ${props.bgColor} w-16 h-16`}>
      <Image
        src={props.icon}
        width={40}
        height={40}
        alt="Icon"
      />
      </div>
      <h5 className={`${bayon.className} uppercase text-2xl ${props.color}`}>{props.title}</h5>
      <p className="text-center p-3 text-xs md:text-base">{props.description}</p>
    </div>
  )

}

export default HeroTitles