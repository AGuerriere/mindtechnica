"use client"
import Script from 'next/script'

const CalendlyWidget = () => {
  return (
    <div className="w-full">
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/mindtechnica/45min" 
        style={{ minWidth: '320px', height: '700px' }} 
      />
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    </div>
  )
}

export default CalendlyWidget;
