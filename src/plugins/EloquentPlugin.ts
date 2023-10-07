import Validate from '../directives/Validate'
// import Model from '../directives/Model'
import { App } from 'vue'

export default {
  install: (app: App /*, options*/) => {
    // v-validate directive
    app.directive('validate', Validate)
    // app.directive('k-model', Model)
  }
}
