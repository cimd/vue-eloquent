import { createApp } from 'vue'
import App from './App.vue'
import RpaJobEvent from '../test/mocks/RpaJobEvent'

createApp(App).mount('#app')

const event = new RpaJobEvent()
console.log(event)