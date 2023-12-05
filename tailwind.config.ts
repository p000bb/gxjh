/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./pages/previews/**/*.{vue,js,ts,jsx,tsx}", "./pages/admin/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".font-gxjh-thin": {
          fontFamily: "NotoSansHans-Thin-Windows"
        },
        ".font-gxjh-black": {
          fontFamily: "NotoSansHans-Black"
        },
        ".font-gxjh-bold": {
          fontFamily: "NotoSansHans-Bold"
        },
        ".font-gxjh-demlight": {
          fontFamily: "NotoSansHans-DemiLight"
        },
        ".font-gxjh-light": {
          fontFamily: "NotoSansHans-Light"
        },
        ".font-gxjh-medium": {
          fontFamily: "NotoSansHans-Medium"
        },
        ".font-gxjh-regular": {
          fontFamily: "NotoSansHans-Regular"
        }
      });
    })
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"]
  }
};
