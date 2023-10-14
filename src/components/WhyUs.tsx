import WhyUsItem from "./WhyUsItem";

export default function WhyUs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 ">
      <WhyUsItem 
      icon="/images/icons/settings.svg"
      title="Bespoke Solution"
      description="We are committed to crafting every aspect of your website from the ground up. This ensures the delivery of a fully customized website tailored precisely to your unique requirements."
      />
      <WhyUsItem 
      icon="/images/icons/pen.svg"
      title="Unique Designs"
      description="We believe in the power of creativity. Our team of talented designers will work closely with you to create stunning designs that reflect your brand identity and captivate your audience."
      />
      <WhyUsItem 
      icon="/images/icons/pressure.svg"
      title="Performance-driven "
      description="We understand the importance of speed and performance in today’s digital world. Our websites are optimised for super-fast loading times, ensuring a seamless user experience."
      />
      <WhyUsItem 
      icon="/images/icons/piggybank.svg"
      title="Cost-Effective"
      description="Pre-made solutions can be expensive and take a cut of your sales. Our custom solutions have no hidden costs. This means that you can save money in the long run."
      />
      <WhyUsItem 
      icon="/images/icons/pc.svg"
      title="Optimised for all devices"
      description="Our websites are optimised for both desktop and mobile devices, ensuring that your users have a seamless experience across all platforms."
      />
      <WhyUsItem 
      icon="/images/icons/useradd.svg"
      title="Lead Generation"
      description="We specialise in crafting websites and landing pages that effectively transform visitors into valuable leads, and ultimately, into profitable sales."
      />
    </div>
  )
}