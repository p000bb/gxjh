// core
import { createApp } from "vue"
import App from "@admin/App.vue"
import store from "@admin/store"
import router from "@admin/router"
import "@admin/router/permission"
// load
import { loadSvg } from "@admin/icons"
import { loadPlugins } from "@admin/plugins"
import { loadDirectives } from "@admin/directives"
// css
import "normalize.css"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "@admin/styles/index.scss"

// 分页组件
import Pagination from "@admin/components/Pagination/index.vue";
// 字典标签组件
import DictTag from "@admin/components/DictTag/index.vue";
// 表格
import Table from "@admin/components/Table/index.vue";
// 表单搜索
import FormSearch from "@admin/components/FormSearch/index.vue";

const app = createApp(App)

app.component("Pagination", Pagination);
app.component("DictTag", DictTag);
app.component("Table", Table);
app.component("FormSearch", FormSearch);

/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
loadDirectives(app)

app.use(store).use(router)
router.isReady().then(() => {
    app.mount("#app")
})
