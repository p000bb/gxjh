import { createApp } from "vue"
import router from "@/router"
import store from "@/store"
import "./style.css"
import App from "./App.vue"

// 引入图标
import { loadElementPlusIcon } from "@admin/plugins/element-plus-icon"

import { loadSvg } from "@admin/icons"
// i18n
import i18n from "@/lang/index"

// animate
import "animate.css"

const app = createApp(App)

loadElementPlusIcon(app)

loadSvg(app)

app.use(store).use(router).use(i18n()).mount("#app")
