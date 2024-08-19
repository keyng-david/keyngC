import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BASE_URL } from './configurations/HttpConfiguration';
import { numberFormat, serverLinkFormat, truncate } from './filters';

const app = createApp(App);

// Using router
app.use(router);

// Registering filters globally as a plugin
app.config.globalProperties.$filters = {
    truncate,
    numberFormat,
    serverLinkFormat: (link: string = "") => `${BASE_URL}${link}`
};

app.mount('#app');