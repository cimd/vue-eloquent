export interface IValidator {
    model: any
    validations: any
    v$: any
    $invalid: any
    $model: any

    initValidations(): void
    $validate(): void
    $reset(): void
    set$Model(model: any): void
}
