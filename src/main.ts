import { createApp } from 'vue'
import App from './App.vue'
import PostsEvent from '../test/mocks/PostsEvent'

createApp(App).mount('#app')

const event = new PostsEvent()
console.log(event)
