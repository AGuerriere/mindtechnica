import Script from 'next/script'

const GoogleTag = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17934161576"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17934161576');
        `}
      </Script>
      <Script id="google-tag-calendly-conversion" strategy="afterInteractive">
        {`
          (function(){
            var fired = false;
            window.addEventListener('message', function(e) {
              if (fired) return;
              if (e.data && e.data.event === 'calendly.event_scheduled') {
                fired = true;
                gtag('event', 'conversion', {
                  'send_to': 'AW-17934161576/HFb7CJqnuPMbEKit1udC',
                  'value': 1.0,
                  'currency': 'GBP'
                });
              }
            });
          })();
        `}
      </Script>
    </>
  )
}

export default GoogleTag
