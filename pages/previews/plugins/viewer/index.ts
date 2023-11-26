import { type App } from "vue";
import VueViewer from "v-viewer";

export function loadViewer(app: App) {
  app.use(VueViewer);
}
