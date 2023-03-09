import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { key, store } from './utils/store';

const app = createApp(App);
app.use(store, key)
app.mount("#app")