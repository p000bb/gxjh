import { type App } from "vue";
import { loadComponents } from "./components";
import { loadViewer } from "./viewer";

export function loadPlugins(app: App) {
  loadComponents(app);
  loadViewer(app);
}
