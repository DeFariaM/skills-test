/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#475467",
        tertiary: "#6941c6",
        brand: {
          primary: "#FFFFFF",
          secondary: "#E9D7FE",
        },
        borderbtn: {
          primary: "#7F56D9",
          secondary: "#E9D7FE",
        },
        txtbtn: {
          primary: "#FFFFFF",
        },
      },
      backgroundColor: {
        btn: {
          primary: "#7F56D9",
          secondary: "#F9F5FF",
        },
        brand: {
          bg: "#53389E",
        },
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
