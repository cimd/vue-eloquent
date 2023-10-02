import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPlugin from './plugins/PiniaPlugin'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// give the plugin to pinia
pinia.use(piniaPlugin)

app.mount('#app')
