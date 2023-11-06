import { type App } from "vue";
// import { loadElementPlus } from "./element-plus"
import { loadComponents } from "./components";

export function loadPlugins(app: App) {
  loadComponents(app);
}
