// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: "Open Sans, sans-serif",
      roboto: "Open Sans, sans-serif",      
    },
    container: {
      padding: "1rem",
      center: true,
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1196px"
      }
    },
    extend: {
      fontSize: {
        "11px" : "11px"
      },
      colors:{
        ...colors,
        red: "#E01A1A",
        primary: "#d90e0e",
        gray:{
          100: "#EEEEEE", 
          200: "#D8D8D8", 
          300: "#B9B9B9", 
          400: "#707070", 
          500: "#4D4D4D", 
          600: "#333333"
        }
      },
      boxShadow: {
        DEFAULT: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        floating: "0px -3px 6px rgba(0, 0, 0, 0.16)"
      },
      width:{
        "123px": "123px",
        "140px": "140px",
        "325px": "325px",
        "900px": "900px",
        "1070px": "1070px"
      },
      maxWidth: (theme) => ({
        ...theme("width"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
