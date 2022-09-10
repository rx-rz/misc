/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f6828c",
        secondary: "#f6828c",
        tertiary: "#ffffff",
      },
      height: {
        maximalHeight: "calc(100vh - 3rem)",
        halfHeight: "40vh",
        cartHeight: "calc(100vh - 7.5rem)",
      },
      minHeight: {
        maximalHeight: "calc(100vh - 3rem)",
      },
      width: {
        smallWidth: "90vw",
        mediumWidth: "60vw",
      },
      fontFamily: {
        Poppins: ["Ranade, sans-serif"],
        AlbertSans: ["Excon, sans-serif"],
      },
    },
  },
  plugins: [],
};
