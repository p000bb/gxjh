import { type App } from "vue";
import { loadComponents } from "./components";

export function loadPlugins(app: App) {
  loadComponents(app);
}
