import Image from "next/image"

type propsType = {
  image:string,
  brand:string,
  description:string
}

export default function OurWorkItem(props:propsType) {
  return(
    <div className="flex flex-col items-center w-40 h-40">
     <Image
        src={props.image}
        width={100}
        height={40}
        alt="Brand 1"
      />
      <h5>{props.brand}</h5>
      <p>{props.description}</p>
    </div>
  )
}