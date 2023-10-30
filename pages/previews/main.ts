import { createApp } from 'vue'
import router from "@/router";
import './style.css'
import App from './App.vue'

// i18n
import i18n from '@/lang/i18n'

// animate
import 'animate.css';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
