import { Bayon } from 'next/font/google'
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
})

type propType = {
  title:string,
}

export default function SectionTitle(prop:propType) {
  return(
    <div className="flex flex-row align-center mt-20">
      <h2 className={`${bayon.className} pb-0 text-white text-4xl md:text-6xl lg:text-8xl min-w-fit`}>{prop.title}</h2>
      <div className="border-b-2 border-white w-full md:w-2/3 lg:w-3/5"></div>
    </div>
  )
}