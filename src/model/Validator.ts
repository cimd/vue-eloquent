import useVuelidate from '@vuelidate/core'
import { reactive } from 'vue'
import { refreshInspector } from '../devtools/devtools'

export default abstract class Validator {

  public model: any
  /**
   * Holds the validation error states and messages
   * @param { any } v$ Validations
   */
  public v$: any
  /**
   * Returns true if any errors are found
   */
  public $invalid: any = reactive({})
  public $model: any = reactive({})
  /**
   * Validations as per Vuelidate
   * https://vuelidate-next.netlify.app/guide.html#basics
   * Should be a computed property
   */
  protected validations: any = {}

  protected constructor()
  {
    return
  }

  /**
   * Creates the validator
   * Sets Vuelidate
   */
  initValidations(): void
  {
    const model = this.model
    this.v$ = useVuelidate(this.validations, { model })
    this.set$Model(this.v$.value.model)
  }

  /**
   * Validates the model and sets error messages
   */
  $validate(): boolean
  {
    this.v$.value.$validate()
    this.$invalid = this.v$.value.$invalid
    refreshInspector().then()
    return this.v$.value.$valid
  }

  /**
   * Resets all error messages
   */
  $reset(): void
  {
    this.v$.value.$reset()
    Object.assign(this.$invalid, this.v$.value.$invalid)
    refreshInspector().then()
  }

  protected set$Model(model: any): void
  {
    Object.assign(this.$model, model)
    refreshInspector().then()
  }
}
