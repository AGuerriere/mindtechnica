import Image from "next/image"

type propsType = {
  image:string,
  brand:string,
  description:string
}

export default function OurWorkItem(props:propsType) {
  return(
    <div className="flex flex-col items-start w-auto h-auto pr-3">
     <Image
        src={props.image}
        width={370}
        height={270}
        alt="Brand 1"
        // The filler images are already rounded so you might need to fix border raidus to keep same round corners.
        className="pb-5 rounded-md md:rounded-3xl"
      />
      <h5 className="text-sm pb-5 md:text-xl text-white font-semibold">{props.brand}</h5>
      <p className="text-xs md:text-sm md:w-2/3">{props.description}</p>
    </div>
  )
}