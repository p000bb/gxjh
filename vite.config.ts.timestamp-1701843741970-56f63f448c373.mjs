// vite.config.ts
import { loadEnv } from "file:///D:/xmbb/gxjh/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.7_sass@1.69.4/node_modules/vite/dist/node/index.js";
import path from "path";
import vue from "file:///D:/xmbb/gxjh/node_modules/.pnpm/@vitejs+plugin-vue@4.4.0_vite@4.5.0_vue@3.3.5/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/xmbb/gxjh/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@4.5.0_vue@3.3.5/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/xmbb/gxjh/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.5.0/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import svgLoader from "file:///D:/xmbb/gxjh/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import tailwindcss from "file:///D:/xmbb/gxjh/node_modules/.pnpm/tailwindcss@3.3.5/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/xmbb/gxjh/node_modules/.pnpm/autoprefixer@10.4.16_postcss@8.4.31/node_modules/autoprefixer/lib/autoprefixer.js";
import AutoImport from "file:///D:/xmbb/gxjh/node_modules/.pnpm/unplugin-auto-import@0.16.7/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/xmbb/gxjh/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.5/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/xmbb/gxjh/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.5/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { visualizer } from "file:///D:/xmbb/gxjh/node_modules/.pnpm/rollup-plugin-visualizer@5.9.2/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "D:\\xmbb\\gxjh";
var INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
var DRIVE_LETTER_REGEX = /^[a-z]:/i;
var vite_config_default = (configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd());
  const { VITE_PUBLIC_PATH } = viteEnv;
  return {
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
      }),
      visualizer({
        emitFile: false,
        filename: "analysis-chart.html",
        // 分析图生成的文件名
        open: true
        // 如果存在本地服务端口，将在打包后自动展示
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    optimizeDeps: {
      include: ["vue", "vue-router", "pinia", "axios", "@vueuse/core", "vue-i18n"]
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    },
    server: {
      hmr: true,
      // 开启热更新
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
        // "/api/v1": {
        //   target: "https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538",
        //   ws: true,
        //   /** 是否允许跨域 */
        //   changeOrigin: true
        // },
        "/gxjh-api": {
          target: "http://10.80.101.61:8000/dynamic_home",
          ws: true,
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/gxjh-api/, "")
        }
        // "/gxjh-api": {
        //   target: "http://120.27.223.237/gxjh-api",
        //   ws: true,
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/gxjh-api/, "")
        // }
      }
    },
    resolve: {
      alias: {
        // "@": path.resolve(__dirname, "./src"),
        "@tailwind": path.resolve(__vite_injected_original_dirname, "node_modules/tailwind"),
        "@": path.resolve(__vite_injected_original_dirname, "./pages/previews"),
        "@admin": path.resolve(__vite_injected_original_dirname, "./pages/admin")
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        input: {
          index: path.resolve(__vite_injected_original_dirname, "index.html"),
          admin: path.resolve(__vite_injected_original_dirname, "admin.html")
        },
        output: {
          // manualChunks(id) {
          //   if (id.includes("node_modules")) {
          //     return id
          //       .toString()
          //       .split("node_modules/")[1]
          //       .split("/")[0]
          //       .toString();
          //   }
          // },
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : "";
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
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
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx4bWJiXFxcXGd4amhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHhtYmJcXFxcZ3hqaFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDoveG1iYi9neGpoL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdHlwZSBDb25maWdFbnYsIHR5cGUgVXNlckNvbmZpZ0V4cG9ydCwgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gXCJ2aXRlLXN2Zy1sb2FkZXJcIjtcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XHJcbmNvbnN0IElOVkFMSURfQ0hBUl9SRUdFWCA9IC9bXFx1MDAwMC1cXHUwMDFGXCIjJCYqKyw6Ozw9Pj9bXFxdXmB7fH1cXHUwMDdGXS9nO1xyXG5jb25zdCBEUklWRV9MRVRURVJfUkVHRVggPSAvXlthLXpdOi9pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbmZpZ0VudjogQ29uZmlnRW52KTogVXNlckNvbmZpZ0V4cG9ydCA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHZpdGVFbnYgPSBsb2FkRW52KGNvbmZpZ0Vudi5tb2RlLCBwcm9jZXNzLmN3ZCgpKSBhcyBJbXBvcnRNZXRhRW52O1xyXG4gIGNvbnN0IHsgVklURV9QVUJMSUNfUEFUSCB9ID0gdml0ZUVudjtcclxuICByZXR1cm4ge1xyXG4gICAgYmFzZTogVklURV9QVUJMSUNfUEFUSCxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICAvKiogXHU1QzA2IFNWRyBcdTk3NTlcdTYwMDFcdTU2RkVcdThGNkNcdTUzMTZcdTRFM0EgVnVlIFx1N0VDNFx1NEVGNiAqL1xyXG4gICAgICBzdmdMb2FkZXIoeyBkZWZhdWx0SW1wb3J0OiBcInVybFwiIH0pLFxyXG4gICAgICAvKiogU1ZHICovXHJcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInBhZ2VzL2FkbWluL2ljb25zL3N2Z1wiKV0sXHJcbiAgICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIlxyXG4gICAgICB9KSxcclxuICAgICAgdmlzdWFsaXplcih7XHJcbiAgICAgICAgZW1pdEZpbGU6IGZhbHNlLFxyXG4gICAgICAgIGZpbGVuYW1lOiBcImFuYWx5c2lzLWNoYXJ0Lmh0bWxcIiwgLy8gXHU1MjA2XHU2NzkwXHU1NkZFXHU3NTFGXHU2MjEwXHU3Njg0XHU2NTg3XHU0RUY2XHU1NDBEXHJcbiAgICAgICAgb3BlbjogdHJ1ZSAvLyBcdTU5ODJcdTY3OUNcdTVCNThcdTU3MjhcdTY3MkNcdTU3MzBcdTY3MERcdTUyQTFcdTdBRUZcdTUzRTNcdUZGMENcdTVDMDZcdTU3MjhcdTYyNTNcdTUzMDVcdTU0MEVcdTgxRUFcdTUyQThcdTVDNTVcdTc5M0FcclxuICAgICAgfSksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgfSksXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgaW5jbHVkZTogW1widnVlXCIsIFwidnVlLXJvdXRlclwiLCBcInBpbmlhXCIsIFwiYXhpb3NcIiwgXCJAdnVldXNlL2NvcmVcIiwgXCJ2dWUtaTE4blwiXVxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICBwb3N0Y3NzOiB7XHJcbiAgICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzLCBhdXRvcHJlZml4ZXJdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG1yOiB0cnVlLCAvLyBcdTVGMDBcdTU0MkZcdTcwRURcdTY2RjRcdTY1QjBcclxuICAgICAgLyoqIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRiBIVFRQUyAqL1xyXG4gICAgICBodHRwczogZmFsc2UsXHJcbiAgICAgIC8qKiBcdThCQkVcdTdGNkUgaG9zdDogdHJ1ZSBcdTYyNERcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjggTmV0d29yayBcdTc2ODRcdTVGNjJcdTVGMEZcdUZGMENcdTRFRTUgSVAgXHU4QkJGXHU5NUVFXHU5ODc5XHU3NkVFICovXHJcbiAgICAgIGhvc3Q6IHRydWUsIC8vIGhvc3Q6IFwiMC4wLjAuMFwiXHJcbiAgICAgIC8qKiBcdTdBRUZcdTUzRTNcdTUzRjcgKi9cclxuICAgICAgcG9ydDogMzMzMyxcclxuICAgICAgLyoqIFx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OCAqL1xyXG4gICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgLyoqIFx1OERFOFx1NTdERlx1OEJCRVx1N0Y2RVx1NTE0MVx1OEJCOCAqL1xyXG4gICAgICBjb3JzOiB0cnVlLFxyXG4gICAgICAvKiogXHU3QUVGXHU1M0UzXHU4OEFCXHU1MzYwXHU3NTI4XHU2NUY2XHVGRjBDXHU2NjJGXHU1NDI2XHU3NkY0XHU2M0E1XHU5MDAwXHU1MUZBICovXHJcbiAgICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxyXG4gICAgICAvKiogXHU2M0E1XHU1M0UzXHU0RUUzXHU3NDA2ICovXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgLy8gXCIvYXBpL3YxXCI6IHtcclxuICAgICAgICAvLyAgIHRhcmdldDogXCJodHRwczovL3d3dy5mYXN0bW9jay5zaXRlL21vY2svNzYxZTJkZGEyYjg4OTBhYjg2YzkyOGE3NGU4ZjY1MzhcIixcclxuICAgICAgICAvLyAgIHdzOiB0cnVlLFxyXG4gICAgICAgIC8vICAgLyoqIFx1NjYyRlx1NTQyNlx1NTE0MVx1OEJCOFx1OERFOFx1NTdERiAqL1xyXG4gICAgICAgIC8vICAgY2hhbmdlT3JpZ2luOiB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBcIi9neGpoLWFwaVwiOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzEwLjgwLjEwMS42MTo4MDAwL2R5bmFtaWNfaG9tZVwiLFxyXG4gICAgICAgICAgd3M6IHRydWUsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvZ3hqaC1hcGkvLCBcIlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBcIi9neGpoLWFwaVwiOiB7XHJcbiAgICAgICAgLy8gICB0YXJnZXQ6IFwiaHR0cDovLzEyMC4yNy4yMjMuMjM3L2d4amgtYXBpXCIsXHJcbiAgICAgICAgLy8gICB3czogdHJ1ZSxcclxuICAgICAgICAvLyAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAvLyAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9neGpoLWFwaS8sIFwiXCIpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIC8vIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICAgIFwiQHRhaWx3aW5kXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibm9kZV9tb2R1bGVzL3RhaWx3aW5kXCIpLFxyXG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vcGFnZXMvcHJldmlld3NcIiksXHJcbiAgICAgICAgXCJAYWRtaW5cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3BhZ2VzL2FkbWluXCIpXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4dGVuc2lvbnM6IFtcIi5tanNcIiwgXCIuanNcIiwgXCIudHNcIiwgXCIuanN4XCIsIFwiLnRzeFwiLCBcIi5qc29uXCIsIFwiLnZ1ZVwiXVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICBpbmRleDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleC5odG1sXCIpLFxyXG4gICAgICAgICAgYWRtaW46IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYWRtaW4uaHRtbFwiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAvLyBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIC8vICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XHJcbiAgICAgICAgICAvLyAgICAgcmV0dXJuIGlkXHJcbiAgICAgICAgICAvLyAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgLy8gICAgICAgLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXVxyXG4gICAgICAgICAgLy8gICAgICAgLnNwbGl0KFwiL1wiKVswXVxyXG4gICAgICAgICAgLy8gICAgICAgLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICBzYW5pdGl6ZUZpbGVOYW1lKG5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBEUklWRV9MRVRURVJfUkVHRVguZXhlYyhuYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgZHJpdmVMZXR0ZXIgPSBtYXRjaCA/IG1hdGNoWzBdIDogXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGRyaXZlTGV0dGVyICsgbmFtZS5zbGljZShkcml2ZUxldHRlci5sZW5ndGgpLnJlcGxhY2UoSU5WQUxJRF9DSEFSX1JFR0VYLCBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKiogXHU2REY3XHU2REM2XHU1NjY4ICovXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgIC8qKiBcdTYyNTNcdTUzMDVcdTY1RjZcdTc5RkJcdTk2NjQgY29uc29sZS5sb2cgKi9cclxuICAgICAgcHVyZTogW1wiY29uc29sZS5sb2dcIl0sXHJcbiAgICAgIC8qKiBcdTYyNTNcdTUzMDVcdTY1RjZcdTc5RkJcdTk2NjQgZGVidWdnZXIgKi9cclxuICAgICAgZHJvcDogW1wiZGVidWdnZXJcIl0sXHJcbiAgICAgIC8qKiBcdTYyNTNcdTUzMDVcdTY1RjZcdTc5RkJcdTk2NjRcdTYyNDBcdTY3MDlcdTZDRThcdTkxQ0EgKi9cclxuICAgICAgbGVnYWxDb21tZW50czogXCJub25lXCJcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTROLFNBQWdELGVBQWU7QUFDM1IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxlQUFlO0FBQ3RCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsa0JBQWtCO0FBWDNCLElBQU0sbUNBQW1DO0FBZXpDLElBQU0scUJBQXFCO0FBQzNCLElBQU0scUJBQXFCO0FBRTNCLElBQU8sc0JBQVEsQ0FBQyxjQUEyQztBQUV6RCxRQUFNLFVBQVUsUUFBUSxVQUFVLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDckQsUUFBTSxFQUFFLGlCQUFpQixJQUFJO0FBQzdCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQTtBQUFBLE1BRVAsVUFBVSxFQUFFLGVBQWUsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUVsQyxxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLHVCQUF1QixDQUFDO0FBQUEsUUFDL0QsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBO0FBQUEsUUFDVixNQUFNO0FBQUE7QUFBQSxNQUNSLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsT0FBTyxjQUFjLFNBQVMsU0FBUyxnQkFBZ0IsVUFBVTtBQUFBLElBQzdFO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsUUFDUCxTQUFTLENBQUMsYUFBYSxZQUFZO0FBQUEsTUFDckM7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixLQUFLO0FBQUE7QUFBQTtBQUFBLE1BRUwsT0FBTztBQUFBO0FBQUEsTUFFUCxNQUFNO0FBQUE7QUFBQTtBQUFBLE1BRU4sTUFBTTtBQUFBO0FBQUEsTUFFTixNQUFNO0FBQUE7QUFBQSxNQUVOLE1BQU07QUFBQTtBQUFBLE1BRU4sWUFBWTtBQUFBO0FBQUEsTUFFWixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFPTCxhQUFhO0FBQUEsVUFDWCxRQUFRO0FBQUEsVUFDUixJQUFJO0FBQUEsVUFDSixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxlQUFlLEVBQUU7QUFBQSxRQUNuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUE7QUFBQSxRQUVMLGFBQWEsS0FBSyxRQUFRLGtDQUFXLHVCQUF1QjtBQUFBLFFBQzVELEtBQUssS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLFFBQy9DLFVBQVUsS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNuRDtBQUFBLE1BQ0EsWUFBWSxDQUFDLFFBQVEsT0FBTyxPQUFPLFFBQVEsUUFBUSxTQUFTLE1BQU07QUFBQSxJQUNwRTtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsdUJBQXVCO0FBQUEsTUFDdkIsZUFBZTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0wsT0FBTyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLFVBQzNDLE9BQU8sS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxRQUM3QztBQUFBLFFBQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVU4saUJBQWlCLE1BQU07QUFDckIsa0JBQU0sUUFBUSxtQkFBbUIsS0FBSyxJQUFJO0FBQzFDLGtCQUFNLGNBQWMsUUFBUSxNQUFNLENBQUMsSUFBSTtBQUN2QyxtQkFBTyxjQUFjLEtBQUssTUFBTSxZQUFZLE1BQU0sRUFBRSxRQUFRLG9CQUFvQixFQUFFO0FBQUEsVUFDcEY7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsU0FBUztBQUFBO0FBQUEsTUFFUCxNQUFNLENBQUMsYUFBYTtBQUFBO0FBQUEsTUFFcEIsTUFBTSxDQUFDLFVBQVU7QUFBQTtBQUFBLE1BRWpCLGVBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
