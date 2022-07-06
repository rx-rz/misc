/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3CAC",
        secondary: "#784BA0",
        tertiary: "#2B86C5" 
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      }
    },
  },
  plugins: [],
}