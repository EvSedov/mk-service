import './assets/styles/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App);

const yandexMapSettings = {
  apikey: '575191be-8a4a-4eb1-a3c1-13ec18f537aa',
  // apikey: '25673135-3831-4887-bbf6-22f3fc0b7a75',
  lang: 'ru_RU',
};

app.use(createYmaps(yandexMapSettings));

app.mount('#app');
