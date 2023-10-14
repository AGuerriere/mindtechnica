import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greyLight02: '#C5C5C5',
        pink: '#F07EF2',
        green: '#0DD99F',
        blue: '#4A6DD9',
        pinkFaded: "rgba(240, 126, 242, 0.10)",
        greenFaded: "rgba(13, 217, 159, 0.10)",
        blueFaded: "rgba(74, 109, 217, 0.10)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
