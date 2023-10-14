import Image from "next/image"

type propsType = {
  title: string,
  description: string,
  icon:string,
}

export default function WhyUsItem(props:propsType) {
  return (
    <div className="flex flex-col bg-blueFaded rounded-lg w-auto md:h-auto text-xs lg:text-xl lg:w-auto m-3 md:m-5 p-5">
      <Image
        src={props.icon}
        width={40}
        height={40}
        alt="Icon"
      />
      <h5 className="font-bold text-white pb-2">{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}