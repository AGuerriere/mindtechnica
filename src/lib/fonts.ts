import localFont from 'next/font/local'

// Keep fonts in the repository so builds do not depend on Google Fonts.
export const bayon = localFont({
  src: '../fonts/Bayon-Latin.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
})

export const inter = localFont({
  src: '../fonts/Inter-Latin.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
})
