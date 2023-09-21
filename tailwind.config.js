/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lt': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: '#807F7C',
      green: '#008069',
      gold: "#cb912f"
    },
    extend: {},
  },
  plugins: [],
}