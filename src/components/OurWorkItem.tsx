import Image from "next/image"

type propsType = {
  image: string,
  brand: string,
  description: string
}

export default function OurWorkItem(props: propsType) {
  return (
    <div className="flex flex-col items-start w-1/4">
      <div className="w-full aspect-square relative">
        <Image
          src={props.image}
          fill
          alt="Brand 1"
          // The filler images are already rounded so you might need to fix border raidus to keep same round corners.
          className="rounded-md md:rounded-3xl object-contain"
        />
      </div>
        <h5 className="text-sm pb-5 md:text-xl text-white font-semibold">{props.brand}</h5>
        <p className="text-xs md:text-sm md:w-2/3">{props.description}</p>
    </div>
  )
}