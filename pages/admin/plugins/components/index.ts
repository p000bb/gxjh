import { type App } from "vue"
// 分页组件
import Pagination from "@admin/components/Pagination/index.vue"
// 字典标签组件
import DictTag from "@admin/components/DictTag/index.vue"
// 表格
import Table from "@admin/components/Table/index.vue"
// 表单搜索
import FormSearch from "@admin/components/FormSearch/index.vue"

export function loadComponents(app: App) {
  app.component("Pagination", Pagination)
  app.component("DictTag", DictTag)
  app.component("Table", Table)
  app.component("FormSearch", FormSearch)
}
