import Image from "next/image"

type propsType = {
  image: string,
  brand: string,
  description: string
}

export default function OurWorkItem(props: propsType) {
  return (
    <div className="flex flex-col items-start md:w-1/4 pb-3">
      <div className="h-auto w-full aspect-[4/3] relative p-5">
        <Image
          src={props.image}
          fill
          alt="Brand 1"
          // The filler images are already rounded so you might need to fix border raidus to keep same round corners.
          className="rounded-3xl object-fill"
        />
      </div>
        <h5 className="text-sm pb-5 pt-5 md:text-xl text-white font-semibold">{props.brand}</h5>
        <p className="text-xs md:text-sm md:w-2/3">{props.description}</p>
    </div>
  )
}