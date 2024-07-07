import useVuelidate from '@vuelidate/core'
import { computed, reactive } from 'vue'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'

export default abstract class ValidatorV2 {

  model: any
  /**
   * Holds the validation error states and messages
   * @param { any } v$ Validations
   */
  $v: any
  /**
   * Returns true if any errors are found
   */
  $invalid = reactive({})
  $model = reactive({})
  /**
   * Validations as per Vuelidate
   * https://vuelidate-next.netlify.app/guide.html#basics
   * Should be a computed property
   */
  protected $validations = computed(() => ({}))

  protected constructor()
  {
    Object.defineProperties(this, {
      $v: {
        enumerable: false,
        writable: true,
      },
      $model: {
        enumerable: false,
        writable: true,
      },
      $invalid: {
        enumerable: false,
        writable: true,
      },
      $validations: {
        enumerable: false,
        writable: true,
      },
    })
  }

  /**
   * Creates the validator
   * Sets Vuelidate
   */
  initValidations(): void
  {
    const model = this.model
    this.$v = useVuelidate(this.$validations, { model })
    this.set$Model(this.$v.value.model)

    addTimelineEvent({ title: 'Validation Initialized', data: this.$v.value.model })
  }

  /**
   * Validates the model and sets error messages
   */
  $validate(): boolean
  {
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
  $reset(): void
  {
    this.$v.value.$reset()
    this.$invalid = reactive(this.$v.value.$invalid)

    refreshInspector().then()
    addTimelineEvent({ title: 'Validation Reset', data: this.$v.value.model })
  }

  protected set$Model(model: any): void
  {
    this.$model = reactive(model)
    refreshInspector().then()
  }
}
