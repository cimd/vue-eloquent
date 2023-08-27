import { setupDevtools } from './devtools'
import { App } from 'vue'

export default {
  install(app: App, _options = {}) {
    if (process.env.NODE_ENV !== 'production') {
      setupDevtools(app)
    }
  }
}
