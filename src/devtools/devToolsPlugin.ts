import { setupDevtools } from '@/devtools/devtools'
import type { App } from 'vue'

export default {
  install(app: App) {
    if (process.env.NODE_ENV !== 'production') {
      setupDevtools(app)
    }
  }
}
