import { createApp } from "vue";
import App from "./App.vue";
import vue3dLoader from './3dLoader/vue3dLoader.vue'

const app = createApp(App);
app.component('vue3dLoader',vue3dLoader);
app.mount("#app");
