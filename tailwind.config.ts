import type { Config } from 'tailwindcss'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('../public/Pic/Banner.jpeg')",
        "banner1-bg": "url('../public/Pic/Banner1.jpg')",
      },
    },
  },
  plugins: [],
};