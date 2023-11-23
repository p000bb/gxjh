// core
import { createApp } from "vue";
import App from "@admin/App.vue";
import store from "@admin/store";
import router from "@admin/router";
import "@admin/router/permission";
// load
import { loadSvg } from "@admin/icons";
import { loadPlugins } from "@admin/plugins";
import { loadDirectives } from "@admin/directives";
// css
import "normalize.css";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@admin/styles/index.scss";

/* vue-cropper */
import "vue-cropper/dist/index.css";

// viewerjs
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

const app = createApp(App);

/** 加载插件 */
loadPlugins(app);
/** 加载全局 SVG */
loadSvg(app);
/** 加载自定义指令 */
loadDirectives(app);

app.use(VueViewer);
app.use(store).use(router);
router.isReady().then(() => {
  app.mount("#app");
});
