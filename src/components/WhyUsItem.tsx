import Image from "next/image"

type propsType = {
  title: string,
  description: string,
  icon:string,
}

export default function WhyUsItem(props:propsType) {
  return (
    <div className="flex flex-col bg-blueFaded rounded-xl w-auto sm:h-auto text-xs lg:text-base lg:w-auto p-3 sm:p-7 sm:min-h-64">
      <Image
        src={props.icon}
        width={40}
        height={40}
        alt="Icon"
      />
      <h5 className="font-bold text-white pt-1 md:pt-3 pb-2">{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}