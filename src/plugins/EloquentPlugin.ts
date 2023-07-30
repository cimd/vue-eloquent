import Validate from 'src/directives/Validate'

export default {
    install: (app /*, options*/) => {
      // v-validate directive
      app.directive('validate', Validate)
    }
  }