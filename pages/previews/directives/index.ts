import { type App } from "vue";
import { lazyImg } from "./lazyImg";
import { lazyData } from "./lazyData";

/** 挂载自定义指令 */
export function loadDirectives(app: App) {
  app.directive("lazy-img", lazyImg);
  app.directive("lazy-data", lazyData);
}
