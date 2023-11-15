/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./pages/previews/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"]
  }
};
