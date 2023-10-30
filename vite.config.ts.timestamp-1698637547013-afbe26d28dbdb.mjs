// vite.config.ts
import { loadEnv } from "file:///D:/xmbb/gxjh/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.7_sass@1.69.4/node_modules/vite/dist/node/index.js";
import path from "path";
import vue from "file:///D:/xmbb/gxjh/node_modules/.pnpm/@vitejs+plugin-vue@4.4.0_vite@4.5.0_vue@3.3.5/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/xmbb/gxjh/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@4.5.0_vue@3.3.5/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/xmbb/gxjh/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.5.0/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import svgLoader from "file:///D:/xmbb/gxjh/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import tailwindcss from "file:///D:/xmbb/gxjh/node_modules/.pnpm/tailwindcss@3.3.5/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/xmbb/gxjh/node_modules/.pnpm/autoprefixer@10.4.16_postcss@8.4.31/node_modules/autoprefixer/lib/autoprefixer.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_dirname = "D:\\xmbb\\gxjh";
var __vite_injected_original_import_meta_url = "file:///D:/xmbb/gxjh/vite.config.ts";
var viteEnv = loadEnv(configEnv.mode, process.cwd());
var { VITE_PUBLIC_PATH } = viteEnv;
var vite_config_default = defineConfig({
  base: VITE_PUBLIC_PATH,
  plugins: [
    vue(),
    vueJsx(),
    /** 将 SVG 静态图转化为 Vue 组件 */
    svgLoader({ defaultImport: "url" }),
    /** SVG */
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "pages/admin/icons/svg")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  server: {
    /** 是否开启 HTTPS */
    https: false,
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true,
    // host: "0.0.0.0"
    /** 端口号 */
    port: 3333,
    /** 是否自动打开浏览器 */
    open: false,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    /** 接口代理 */
    proxy: {
      "/api/v1": {
        target: "https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538",
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@tailwind": path.resolve(__vite_injected_original_dirname, "node_modules/tailwind"),
      "@": fileURLToPath(new URL("./pages/previews", __vite_injected_original_import_meta_url)),
      "@admin": fileURLToPath(new URL("./pages/admin", __vite_injected_original_import_meta_url))
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    server: {
      host: "localhost",
      hmr: true
      // 开启热更新
    }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: {
        index: path.resolve(__vite_injected_original_dirname, "index.html"),
        admin: path.resolve(__vite_injected_original_dirname, "admin.html")
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  },
  /** 混淆器 */
  esbuild: {
    /** 打包时移除 console.log */
    pure: ["console.log"],
    /** 打包时移除 debugger */
    drop: ["debugger"],
    /** 打包时移除所有注释 */
    legalComments: "none"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx4bWJiXFxcXGd4amhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHhtYmJcXFxcZ3hqaFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDoveG1iYi9neGpoL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdHlwZSBDb25maWdFbnYsIHR5cGUgVXNlckNvbmZpZ0V4cG9ydCwgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCBwYXRoLCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIlxuaW1wb3J0IHN2Z0xvYWRlciBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuXG5jb25zdCB2aXRlRW52ID0gbG9hZEVudihjb25maWdFbnYubW9kZSwgcHJvY2Vzcy5jd2QoKSkgYXMgSW1wb3J0TWV0YUVudlxuY29uc3QgeyBWSVRFX1BVQkxJQ19QQVRIIH0gPSB2aXRlRW52O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBWSVRFX1BVQkxJQ19QQVRILFxuICBwbHVnaW5zOiBbdnVlKCksIHZ1ZUpzeCgpLFxuICAvKiogXHU1QzA2IFNWRyBcdTk3NTlcdTYwMDFcdTU2RkVcdThGNkNcdTUzMTZcdTRFM0EgVnVlIFx1N0VDNFx1NEVGNiAqL1xuICBzdmdMb2FkZXIoeyBkZWZhdWx0SW1wb3J0OiBcInVybFwiIH0pLFxuICAvKiogU1ZHICovXG4gIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInBhZ2VzL2FkbWluL2ljb25zL3N2Z1wiKV0sXG4gICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIlxuICB9KSxdLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MsIGF1dG9wcmVmaXhlcl0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRiBIVFRQUyAqL1xuICAgIGh0dHBzOiBmYWxzZSxcbiAgICAvKiogXHU4QkJFXHU3RjZFIGhvc3Q6IHRydWUgXHU2MjREXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4IE5ldHdvcmsgXHU3Njg0XHU1RjYyXHU1RjBGXHVGRjBDXHU0RUU1IElQIFx1OEJCRlx1OTVFRVx1OTg3OVx1NzZFRSAqL1xuICAgIGhvc3Q6IHRydWUsIC8vIGhvc3Q6IFwiMC4wLjAuMFwiXG4gICAgLyoqIFx1N0FFRlx1NTNFM1x1NTNGNyAqL1xuICAgIHBvcnQ6IDMzMzMsXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OCAqL1xuICAgIG9wZW46IGZhbHNlLFxuICAgIC8qKiBcdThERThcdTU3REZcdThCQkVcdTdGNkVcdTUxNDFcdThCQjggKi9cbiAgICBjb3JzOiB0cnVlLFxuICAgIC8qKiBcdTdBRUZcdTUzRTNcdTg4QUJcdTUzNjBcdTc1MjhcdTY1RjZcdUZGMENcdTY2MkZcdTU0MjZcdTc2RjRcdTYzQTVcdTkwMDBcdTUxRkEgKi9cbiAgICBzdHJpY3RQb3J0OiBmYWxzZSxcbiAgICAvKiogXHU2M0E1XHU1M0UzXHU0RUUzXHU3NDA2ICovXG4gICAgcHJveHk6IHtcbiAgICAgIFwiL2FwaS92MVwiOiB7XG4gICAgICAgIHRhcmdldDogXCJodHRwczovL3d3dy5mYXN0bW9jay5zaXRlL21vY2svNzYxZTJkZGEyYjg4OTBhYjg2YzkyOGE3NGU4ZjY1MzhcIixcbiAgICAgICAgd3M6IHRydWUsXG4gICAgICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUxNDFcdThCQjhcdThERThcdTU3REYgKi9cbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC8vIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgJ0B0YWlsd2luZCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMvdGFpbHdpbmQnKSxcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3BhZ2VzL3ByZXZpZXdzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQGFkbWluJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3BhZ2VzL2FkbWluJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbXCIubWpzXCIsIFwiLmpzXCIsIFwiLnRzXCIsIFwiLmpzeFwiLCBcIi50c3hcIiwgXCIuanNvblwiLCBcIi52dWVcIl0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICAgICAgaG1yOiB0cnVlLCAvLyBcdTVGMDBcdTU0MkZcdTcwRURcdTY2RjRcdTY1QjBcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBpbmRleDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgYWRtaW46IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdhZG1pbi5odG1sJylcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gaWRcbiAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXVxuICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpWzBdXG4gICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgLyoqIFx1NkRGN1x1NkRDNlx1NTY2OCAqL1xuICBlc2J1aWxkOiB7XG4gICAgLyoqIFx1NjI1M1x1NTMwNVx1NjVGNlx1NzlGQlx1OTY2NCBjb25zb2xlLmxvZyAqL1xuICAgIHB1cmU6IFtcImNvbnNvbGUubG9nXCJdLFxuICAgIC8qKiBcdTYyNTNcdTUzMDVcdTY1RjZcdTc5RkJcdTk2NjQgZGVidWdnZXIgKi9cbiAgICBkcm9wOiBbXCJkZWJ1Z2dlclwiXSxcbiAgICAvKiogXHU2MjUzXHU1MzA1XHU2NUY2XHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU2Q0U4XHU5MUNBICovXG4gICAgbGVnYWxDb21tZW50czogXCJub25lXCJcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTROLFNBQWdELGVBQWU7QUFDM1IsT0FBTyxVQUF1QjtBQUM5QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMs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
