import { createApp } from "vue";
import router from "@/router";
import store from "@/store";
import "./scss/styles.scss";
import App from "./App.vue";
import { loadDirectives } from "@/directives";
import { loadPlugins } from "./plugins";
//
// 引入图标
import { loadElementPlusIcon } from "@admin/plugins/element-plus-icon";

import { loadSvg } from "@admin/icons";
// i18n
import i18n from "@/lang/index";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 100,
  duration: 1500,
  delay: 0,
  easing: "ease-in-out"
});

const app = createApp(App);

// 加载element-plus-icon
loadElementPlusIcon(app);

// 加载svg
loadSvg(app);

// 加载自定义指令
loadDirectives(app);

// 加载插件
loadPlugins(app);

app.use(store).use(router).use(i18n());

// 判断环境
if (process.env.NODE_ENV == "development") {
  app.mount("#app");
} else {
  setTimeout(() => {
    app.mount("#app");
  }, 4000);
}
