import useVuelidate from '@vuelidate/core'
import { reactive } from 'vue'

export default abstract class Validator {

  public model: any

  /**
   * Validations as per Vuelidate
   * https://vuelidate-next.netlify.app/guide.html#basics
   * Should be a computed property
   */
  protected validations: any = {}

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
    // console.log('initValidations')
    const model = this.model
    this.v$ = useVuelidate(this.validations, { model })
    // this.$model = this.v$.value.model
    this.set$Model(this.v$.value.model)
  }

  /**
   * Validates the model and returns error messages
   */
  $validate(): void
  {
    // console.log('$validate')
    this.v$.value.$validate()
    this.$invalid = this.v$.value.$invalid
  }

  /**
   * Resets all error messages
   */
  $reset(): void
  {
    // console.log('$reset')
    this.v$.value.$reset()
    Object.assign(this.$invalid, this.v$.value.$invalid)
  }

  protected set$Model(model: any): void
  {
    // console.log('set$Model', model)
    Object.assign(this.$model, model)
  }
}
