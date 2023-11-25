import { type ConfigEnv, type UserConfigExport, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import svgLoader from "vite-svg-loader";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default (configEnv: ConfigEnv): UserConfigExport => {
  // @ts-ignore
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;
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
        filename: "analysis-chart.html", // 分析图生成的文件名
        open: true // 如果存在本地服务端口，将在打包后自动展示
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
      hmr: true, // 开启热更新
      /** 是否开启 HTTPS */
      https: false,
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      host: "localhost", // host: "0.0.0.0"
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
        },
        "/gxjh-admin": {
          target: "http://192.168.0.102:8000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/gxjh-admin/, "")
        }
      }
    },
    resolve: {
      alias: {
        // "@": path.resolve(__dirname, "./src"),
        "@tailwind": path.resolve(__dirname, "node_modules/tailwind"),
        "@": path.resolve(__dirname, "./pages/previews"),
        "@admin": path.resolve(__dirname, "./pages/admin")
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, "index.html"),
          admin: path.resolve(__dirname, "admin.html")
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
