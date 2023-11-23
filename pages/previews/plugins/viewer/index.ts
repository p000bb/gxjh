import { type App } from "vue";
import VueViewer from "v-viewer";

const options = {
  defaultOptions: {
    url: "data-src"
  }
};

export function loadViewer(app: App) {
  app.use(VueViewer, options);
}
