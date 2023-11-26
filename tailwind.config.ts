/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./pages/previews/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "font-gxjh-thin": {}["font-gxjh-thin"],
      "font-gxjh-medium": ["font-gxjh-medium"]
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".font-gxjh-thin": {
          fontFamily: "font-gxjh-thin"
        },
        ".font-gxjh-black": {
          fontFamily: "font-gxjh-black"
        },
        ".font-gxjh-bold": {
          fontFamily: "font-gxjh-bold"
        },
        ".font-gxjh-demlight": {
          fontFamily: "font-gxjh-demlight"
        },
        ".font-gxjh-light": {
          fontFamily: "font-gxjh-light"
        },
        ".font-gxjh-medium": {
          fontFamily: "font-gxjh-medium"
        },
        ".font-gxjh-regular": {
          fontFamily: "font-gxjh-regular"
        }
      });
    })
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"]
  }
};
