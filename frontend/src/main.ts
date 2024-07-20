import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BASE_URL } from './configurations/HttpConfiguration'

// Import filter functions
import { numberFormat, serverLinkFormat, truncate } from './filters'

const app = createApp(App)

app.use(router)

app.config.globalProperties.$filters = {
    truncate,
    numberFormat,
    serverLinkFormat: (link: string = "") => {
        return BASE_URL + link;
    }
}

app.mount('#app')