/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./pages/previews/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      custom: {
        "header-height": "6rem",
        "menu-width": "300px"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"]
  }
};
