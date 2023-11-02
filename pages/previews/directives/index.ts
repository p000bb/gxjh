import { type App } from "vue";
import { lazyImg } from "./lazyImg";

/** 挂载自定义指令 */
export function loadDirectives(app: App) {
  app.directive("lazy-img", lazyImg);
}
