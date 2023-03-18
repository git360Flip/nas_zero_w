import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { key, store } from './utils/store';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const app = createApp(App);
app.use(store, key)
app.use(LoadingPlugin)
app.mount("#app")