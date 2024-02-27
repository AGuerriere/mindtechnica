import WhyUsItem from "./WhyUsItem";
import SectionTitle from "./SectionTitle";
export default function WhyUs() {
  return (
    <>
    <SectionTitle title="Why Us"/>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-14">
      <WhyUsItem 
      icon="./images/settings.svg"
      title="Bespoke Solution"
      description="We are committed to crafting every aspect of your website from the ground up. This ensures the delivery of a fully customized website tailored precisely to your unique requirements."
      />
      <WhyUsItem 
      icon="./images/pen.svg"
      title="Unique Designs"
      description="We believe in the power of creativity. Our team of talented designers will work closely with you to create stunning designs that reflect your brand identity and captivate your audience."
      />
      <WhyUsItem 
      icon="./images/pressure.svg"
      title="Performance-driven "
      description="We understand the importance of speed and performance in today’s digital world. Our websites are optimised for super-fast loading times, ensuring a seamless user experience."
      />
      <WhyUsItem 
      icon="./images/piggybank.svg"
      title="Cost-Effective"
      description="Pre-made solutions can be expensive and take a cut of your sales. Our custom solutions have no hidden costs. This means that you can save money in the long run."
      />
      <WhyUsItem 
      icon="./images/pc.svg"
      title="Optimised for all devices"
      description="Our websites are optimised for both desktop and mobile devices, ensuring that your users have a seamless experience across all platforms."
      />
      <WhyUsItem 
      icon="./images/useradd.svg"
      title="Lead Generation"
      description="We specialise in crafting websites and landing pages that effectively transform visitors into valuable leads, and ultimately, into profitable sales."
      />
    </div>
    </>
  )
}