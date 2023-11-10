import { type App } from "vue";
// 分页组件
import LazySection from "@/components/LazySection/index.vue";
// 图片悬浮组件
import ImageHover from "@/components/ImageHover/index.vue";
// canvas悬浮组件
import CanvasHover from "@/components/CanvasHover/index.vue";
export function loadComponents(app: App) {
  app.component("gxjh", LazySection);
  app.component("image-hover", ImageHover);
  app.component("canvas-hover", CanvasHover);
}
