import Script from 'next/script'

export default function Success() {
  return (
    <>
      <Script id="google-conversion-success" strategy="afterInteractive">
        {`
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
              'send_to': 'AW-17934161576/HFb7CJqnuPMbEKit1udC',
              'value': 1.0,
              'currency': 'GBP'
            });
          }
        `}
      </Script>
      <h1>Thank you for your message! A member of our staff will get in touch with you soon!</h1>
    </>
  )
}