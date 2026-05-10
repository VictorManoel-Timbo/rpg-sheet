import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./main.css";

import App from './App.vue'
import router from './router'
import setCompoent from './modules/components.module';

const app = createApp(App)

setCompoent(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
