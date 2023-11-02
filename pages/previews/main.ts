import { createApp } from "vue";
import router from "@/router";
import store from "@/store";
import "./style.css";
import App from "./App.vue";
import { loadDirectives } from "@/directives";
import gsapDefault from "./utils/gsapDefault";

// 引入图标
import { loadElementPlusIcon } from "@admin/plugins/element-plus-icon";

import { loadSvg } from "@admin/icons";
// i18n
import i18n from "@/lang/index";

// animate
import "animate.css";

const app = createApp(App);

// 加载element-plus-icon
loadElementPlusIcon(app);

// 加载svg
loadSvg(app);

// 加载自定义指令
loadDirectives(app);

// 设置gsap默认参数
// gsapDefault();

app.use(store).use(router).use(i18n()).mount("#app");
