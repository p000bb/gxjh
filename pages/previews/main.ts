import { createApp } from "vue";
import router from "@/router";
import store from "@/store";
import "./style.css";
// import "./scss/styles.scss";
import App from "./App.vue";
import { loadDirectives } from "@/directives";
import { loadPlugins } from "./plugins";
import gsapDefault from "./utils/gsapDefault";
//
// 引入图标
import { loadElementPlusIcon } from "@admin/plugins/element-plus-icon";

import { loadSvg } from "@admin/icons";
// i18n
import i18n from "@/lang/index";

// animate
import "animate.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
  delay: 0,
  easing: "ease-out-expo"
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

// 设置gsap默认参数
// gsapDefault();

app.use(store).use(router).use(i18n()).mount("#app");
