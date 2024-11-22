import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { db } from './services/firebase';

const app = createApp(App);

app.use(router);

app.provide('db', db);

app.mount('#app');
