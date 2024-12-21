export default abstract class Validator {
    model: any;
    /**
     * Holds the validation error states and messages
     * @param { any } v$ Validations
     */
    v$: any;
    /**
     * Returns true if any errors are found
     */
    $invalid: any;
    $model: any;
    /**
     * Validations as per Vuelidate
     * https://vuelidate-next.netlify.app/guide.html#basics
     * Should be a computed property
     */
    protected validations: any;
    protected constructor();
    /**
     * Creates the validator
     * Sets Vuelidate
     */
    initValidations(): void;
    /**
     * Validates the model and sets error messages
     */
    $validate(): boolean;
    /**
     * Resets all error messages
     */
    $reset(): void;
    protected set$Model(model: any): void;
}
