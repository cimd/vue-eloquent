import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { PiniaApiPlugin } from './index'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// give the plugin to pinia
pinia.use(PiniaApiPlugin)

app.mount('#app')
