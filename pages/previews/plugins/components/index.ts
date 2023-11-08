import { type App } from "vue";
// 分页组件
import LazySection from "@/components/LazySection/index.vue";

export function loadComponents(app: App) {
  app.component("gxjh", LazySection);
}
