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
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'AW-17934161576');
        `}
      </Script>
      <Script id="google-tag-calendly-conversion" strategy="afterInteractive">
        {`
          (function(){
            var fired = false;
            window.addEventListener('message', function(e) {
              var data = e.data;
              if (data && data.event === 'calendly.event_scheduled') {
                if (fired) return;
                fired = true;
                var g = window.gtag || gtag;
                if (typeof g === 'function') {
                  g('event', 'conversion', {
                    'send_to': 'AW-17934161576/HFb7CJqnuPMbEKit1udC',
                    'value': 1.0,
                    'currency': 'GBP'
                  });
                }
              }
            });
          })();
        `}
      </Script>
    </>
  )
}

export default GoogleTag
