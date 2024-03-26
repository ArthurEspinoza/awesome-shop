import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
// Pinia
import {createPinia} from "pinia";
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    },
  },
})
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(pinia);
app.mount("#app");
