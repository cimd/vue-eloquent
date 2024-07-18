import useVuelidate from '@vuelidate/core'
import { computed, reactive } from 'vue'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'

export default abstract class ValidatorV2<T> {

  declare $model: T
  /**
   * Holds the validation error states and messages
   * @param { any } v$ Validations
   */
  $v: any
  /**
   * Returns true if any errors are found
   */
  $invalid = reactive({})
  $validation = reactive({})

  protected constructor() {
    Object.defineProperties(this, {
      $v: {
        enumerable: false,
        writable: true,
      },
      $invalid: {
        enumerable: false,
        writable: true,
      },
      $validation: {
        enumerable: false,
        writable: true,
      },
    })
  }

  /**
   * Creates the validator
   * Sets Vuelidate
   */
  initValidations (): void {
    console.log('Rules: ', this.rules())

    this.$v = useVuelidate(this.rules(), this.$model)
    this.set$Validation(this.$v.value)

    addTimelineEvent({ title: 'Validation Initialized', data: this.$v.value })
  }

  /**
   * Validates the model and sets error messages
   */
  $validate (): boolean {
    this.$v.value.$validate()
    this.$invalid = this.$v.value.$invalid

    refreshInspector().then()
    addTimelineEvent({
      title: 'Validation Response',
      data: {
        valid: !this.$v.value.$invalid,
        invalid: this.$v.value.$invalid,
        model: this.$v.value.model
      }
    })

    return !this.$v.value.$invalid
  }

  /**
   * Resets all error messages
   */
  $reset (): void {
    this.$v.value.$reset()
    this.$invalid = reactive(this.$v.value.$invalid)

    refreshInspector().then()
    addTimelineEvent({ title: 'Validation Reset', data: this.$v.value.model })
  }

  /**
   * Validations as per Vuelidate
   * https://vuelidate-next.netlify.app/guide.html#basics
   * Should be a computed property
   */
  protected rules (): any {
    return computed(() => ({}))
  }

  protected set$Validation (model: any): void {
    this.$validation = reactive(model)
    refreshInspector().then()
  }
}
