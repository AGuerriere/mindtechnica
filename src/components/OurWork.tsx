import OurWorkItem from "./OurWorkItem";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function OurWork(){
  return(
    <>
      <div className="h-24 pt-3" id="ourwork">
        <Image
          src="/images/triangle2.svg"
          width={70}
          height={70}
          alt="Big circle"
          className="absolute left-0 -z-50"
        />
      </div>
    <SectionTitle title="Our Work"/>
    <div className="flex flex-col md:flex-row justify-between gap-3">
      <OurWorkItem 
        image="/images/brand1.webp"
        brand="GetSociable"
        description="Delivered a website that looks great on all devices, so whether you're on a computer or a phone, it always looks fantastic"
        />
      <OurWorkItem 
        image="/images/brand2.webp"
        brand="Watsons Opticians"
        description="We are proud to have created a brand new identity for our client, which is reflected in the stunning design of their website. Our team worked tirelessly to ensure that the website is not only visually appealing but also user-friendly and easy to navigate"
        />
      <OurWorkItem 
        image="/images/brand3.webp"
        brand="McHenry Bros Ltd"
        description="We helped our client to redefine their brand identity by focusing on their core values, which is reflected in the updated branding of their website. Additionally, we created a faster and more responsive website that has been generating more leads for our client."
        />
        
    </div>
    </>
  )
}