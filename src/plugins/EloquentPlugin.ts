import Validate from '../directives/Validate'

export default {
  install: (app: any /*, options*/) => {
    // v-validate directive
    app.directive('validate', Validate)
  }
}
