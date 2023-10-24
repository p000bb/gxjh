import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@tailwind': path.resolve(__dirname, 'node_modules/tailwind'),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    server: {
      host: "localhost",
      hmr: true, // 开启热更新
    },
  },
})
