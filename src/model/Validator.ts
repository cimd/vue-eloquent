import useVuelidate from '@vuelidate/core'
import { computed, reactive } from 'vue'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'

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
  protected validations: any = computed(() => ({}))

  protected constructor() {
    return
  }

  /**
   * Creates the validator
   * Sets Vuelidate
   */
  initValidations(): void {
    const model = this.model
    this.v$ = useVuelidate(this.validations, { model })
    this.set$Model(this.v$.value.model)

    addTimelineEvent({ title: 'Validation Initialized', data: this.v$.value.model })
  }

  /**
   * Validates the model and sets error messages
   */
  public $validate(): boolean {
    this.v$.value.$validate()
    this.$invalid = this.v$.value.$invalid

    refreshInspector().then()
    addTimelineEvent({
      title: 'Validation Response',
      data: {
        valid: !this.v$.value.$invalid,
        invalid: this.v$.value.$invalid,
        model: this.v$.value.model
      }
    })

    return !this.v$.value.$invalid
  }

  /**
   * Resets all error messages
   */
  $reset(): void {
    this.v$.value.$reset()
    Object.assign(this.$invalid, this.v$.value.$invalid)
    refreshInspector().then()
    addTimelineEvent({ title: 'Validation Reset', data: this.v$.value.model })
  }

  protected set$Model(model: any): void {
    Object.assign(this.$model, model)
    refreshInspector().then()
  }
}
