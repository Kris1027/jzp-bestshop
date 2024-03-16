/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textGrey: "#7A7A7A",
        textBlack: "#222020",
        bgGrey: "#EFEFEF",
        bgDarkGrey: "#767676",
      },
      fontSize: {
        heading: "2rem",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
