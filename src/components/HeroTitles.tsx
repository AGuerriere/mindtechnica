import Image from "next/image"
import { Bayon } from 'next/font/google'
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

export default function HeroTitles(props:object) {
  return (
    <div className="flex flex-col w-1/6 items-center">
      <Image
        src={props.icon}
        width={40}
        height={40}
        alt="Icon"
      />
      <h5 className={`${bayon.className} uppercase text-2xl text-${props.color}`}>{props.title}</h5>
      <p className="text-center">{props.description}</p>
    </div>
  )

}