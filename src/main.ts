import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router/index';

const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .use(router)
  .mount('#app');
