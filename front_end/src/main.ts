import { createApp } from 'vue'
import App from './App.vue'
import LoginPage from './components/LoginPage.vue'
import FilePage from './components/FilePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import './assets/main.css'
import { key, store } from './utils/store';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/files', component: FilePage }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App);
app.use(store, key)
app.use(router)
app.use(LoadingPlugin)
app.mount("#app")