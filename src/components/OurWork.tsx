import OurWorkItem from "./OurWorkItem";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function OurWork(){
  return(
    <>
      <div className="h-24 pt-3">
        <Image
          src="/images/triangle2.svg"
          width={70}
          height={70}
          alt="Big circle"
          className="absolute left-0 -z-50"
        />
      </div>
    <SectionTitle title="Our Work"/>
    <div className="flex justify-evenly">
      <OurWorkItem 
        image="/images/brand1.webp"
        brand="GetSociable"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <OurWorkItem 
        image="/images/brand2.webp"
        brand="GetSociable"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <OurWorkItem 
        image="/images/brand3.webp"
        brand="GetSociable"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        
    </div>
    </>
  )
}