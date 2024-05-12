import PiniaApi from './PiniaApi'
import { App } from 'vue'

export default {
  install(app: App) {
    PiniaApi(app)
  }
}
