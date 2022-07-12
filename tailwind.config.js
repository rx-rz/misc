/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00DBDE",
        secondary: "#FC00FF",
        // tertiary: "#2B86C5" 
      },
      height: {
        maximalHeight: "calc(100vh - 3rem)",
        halfHeight: "40vh",
        cartHeight: "calc(100vh - 7.5rem)"
      },
      minHeight: {
        maximalHeight: "calc(100vh - 3rem)",
      },
      width: {
        smallWidth: "90vw",
        mediumWidth: "60vw"
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      },
      fontSize: {
        magicNo: "25.5vw"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

