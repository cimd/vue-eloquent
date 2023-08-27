import Validate from '../directives/Validate'
import { App } from 'vue'

export default {
  install: (app: App /*, options*/) => {
    // v-validate directive
    app.directive('validate', Validate)
  }
}
