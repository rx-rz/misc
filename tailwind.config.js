/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      },
      fontSize: {
        magicNo: "25.5vw"
      }
    },
  },
  plugins: [],
}

