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
}


function HeroTitles(props: PropsTypes) {

  return (
    <div className="flex flex-col w-1/6 sm:1/3 items-center">
      <Image
        src={props.icon}
        width={40}
        height={40}
        alt="Icon"
      />
      <h5 className={`${bayon.className} uppercase text-2xl ${props.color}`}>{props.title}</h5>
      <p className="text-center">{props.description}</p>
    </div>
  )

}

export default HeroTitles