import type { ModelState } from './IModelState'
import { reactive } from 'vue'
import { ModelParams } from './IModelParams'
import ValidatorV2 from './ValidatorV2'
import { addModelInspector } from './modelInspector'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'
import { v4 as uuid } from 'uuid'
import ModelError from './ModelError'
import ApiV2 from '../api/ApiV2'
import Action from '../enums/Action'
import Actioned from '../enums/Actioned'
import { ApiResponse } from '../api/IApiResponse'
import diff from '../helpers/objects/diff'

export default abstract class ModelV2<T extends ModelParams> extends ValidatorV2<T> {

  /**
   * Loading, success and error messages from API requests
   */
  $state = reactive<ModelState>({
    isLoading: false,
    isSuccess: true,
    isError: false
  })
  /**
   * Added for devtools support
   */
  $uuid: string

  /**
   * Instance of ApiV2 class
   */
  $api: ApiV2<T>

  /**
   * Reactive model instance, to be used inside Vue components
   */
  $model = reactive<T>(this)
  /**
   * To check if model is dirty / has been modified
   */
  protected $originalModel = reactive<T>({})

  protected constructor() {
    super()

    Object.defineProperties(this, {
      $model: {
        enumerable: false,
        writable: true,
      },
      $api: {
        enumerable: false,
        writable: true,
      },
      $originalModel: {
        enumerable: false,
        writable: true,
      },
      $uuid: {
        enumerable: false,
        writable: true,
      },
      $state: {
        enumerable: false,
        writable: true,
      },
    })

    this.$uuid = uuid()
    addModelInspector(this).then()
    addTimelineEvent({ title: 'Model Initialized', data: { uuid: this.$uuid } })
  }

  /**
   * Creates instance of the model from API
   *
   * @async
   * @static
   * @param { Number } id - Model ID
   * @return { Promise<this> } An instance of the model
   */
  static async find (id: number): Promise<ModelV2<T>> {
    const self = new this()
    await self.find<T>(id)

    return self
  }

  /**
   * Creates instance of the model from API
   *
   * @async
   * @param { Number } id - Model ID
   */
  async find (id: number): Promise<void> {
    this.setStateLoading()
    // if (typeof this.defaultModel === 'undefined') Object.assign(this.defaultModel, this.model)

    try {
      this.retrieving()
      const result = await this.$api.show<T>(id)
      this.factory(result.data)

      addTimelineEvent({ title: 'Model Retrieved', data: { model: result.data } })

      this.setOriginal()
      this.setStateSuccess()
      this.retrieved(result.data)
    }
    catch (e: any) {
      this.setStateError()
      this.retrievingError(e)
      throw new ModelError('Find', e)
    }
  }

  /**
   * Saves the model to database
   * If model has no id, it will be created (POST)
   * Otherwise it will be updated (PATCH)
   *
   * @async
   * @static
   * @param { Action } action - Action from enum
   * @return { Promise<{ model: any, actioned: Actioned.CREATED | Actioned.UPDATED }> } Actioned enum and Model
   */
  async save (action?: Action): Promise<{ model: T, actioned: Actioned.CREATED | Actioned.UPDATED }> {
    let model: T
    let actioned = '' as Actioned
    this.saving()
    try {
      if (!this.id || (action === Action.CREATE)) {
        model = await this.create()
        actioned = Actioned.CREATED
      }
      else {
        model = await this.update()
        actioned = Actioned.UPDATED
      }
      this.saved(model)
      addTimelineEvent({ title: actioned, data: { model: model } })
      return {
        actioned,
        model
      }
    }
    catch (e: any) {
      throw new ModelError('Find', e)
    }
  }

  /**
   * Create a new model on the API
   *
   * @async
   * @template T
   * @return { Promise<T> } Model
   */
  async create (): Promise<T> {
    try {
      this.creating()
      this.setStateLoading()
      const response = await this.$api.store<T>(this)
      this.factory(response.data)
      this.setOriginal()
      addTimelineEvent({ title: 'Created', data: { model: response.data } })
      this.setStateSuccess()
      this.created(response.data)

      return response.data
    }
    catch (e: any) {
      this.setStateError()

      throw new ModelError('Create', e)
    }
  }

  /**
   * Updates the model
   *
   * @async
   * @template T
   * @return { Promise<T> } Model
   */
  async update (): Promise<T> {
    try {
      const dirty = diff(this.$model, this.$originalModel)
      if (Object.keys(dirty).length === 0) return

      this.setStateLoading()
      this.updating()
      dirty.id = this.$model.id

      const response: ApiResponse<T> = await this.$api.update<T>(dirty)
      this.factory(response.data)
      this.setOriginal()

      addTimelineEvent({ title: 'Updated', data: { model: response.data } })
      this.setStateSuccess()
      this.updated(response.data)

      return response.data
    }
    catch (e: any) {
      this.setStateError()

      throw new ModelError('Update', e)
    }
  }

  /**
   * Deletes the model
   *
   * @async
   * @template T
   * @return { Promise<T> } Model
   */
  async delete (): Promise<T> {
    try {
      this.deleting()
      this.setStateLoading()
      const response: ApiResponse<T> = await this.$api.destroy<T>(this)
      this.factory(response.data)
      this.setOriginal()
      addTimelineEvent({ title: 'Deleted', data: { model: response.data } })
      this.setStateSuccess()
      this.deleted(response.data)

      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('Delete', e)
    }
  }

  /**
   * Get model change logs
   * @async
   */
  async logs (): Promise<ApiResponse<any[]>> {
    this.setStateLoading()
    try {
      const response: any = await this.$api.logs(this.id)
      this.setStateSuccess()
      return response.data
    }
    catch (e) {
      this.setStateError()
      throw new ModelError('Logs', e)
    }
  }

  /**
   * Refresh model from API
   *
   * @async
   * @param { number? } id - Model id
   * @return { Promise<void> }
   */
  async refresh (id?: number): Promise<void> {
    try {
      this.setStateLoading()
      this.retrieving()
      const modelId = id ? id : this.id
      const response: ApiResponse<T> = await this.$api.show<T>(modelId)
      this.setStateSuccess()
      this.factory(response.data)
      this.setOriginal()
      this.retrieved(response.data)
      addTimelineEvent({ title: 'Refreshed', data: { model: response.data } })
    }
    catch (e: any) {
      this.setStateError()
      this.retrievingError(e)
      throw new ModelError('Refresh', e)
    }
  }

  /**
   * Serializes the model
   *
   * @param model
   * @protected
   */
  protected factory (model: T) {
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        if (this.hasCast(key)) {
          this[key] = this.castTo(
            this.getCast(key),
            key,
            model[key]
          )
        } else {
          this[key] = model[key]
        }
      }
    }
  }


  protected casts () {
    return {
      'created_at': 'date',
      'updated_at': 'date',
      'deleted_at': 'date'
    }
  }

  protected castTo (cast: string | Function, key: string, value: any) {
    switch (cast) {
      case 'date':
        if (value) {
          return new Date(value)
        }
        return value
      case 'number':
        if (value) {
          return Number(value)
        }
        return value
      default:
        return cast(this, key, value, this.casts())
    }
  }

  /**
   * Creates a copy of the original model instance for refreshing if needed
   *
   * @return { VoidFunction }
   */
  protected setOriginal (): void {
    this.$originalModel = reactive(Object.assign({}, this))
    refreshInspector().then()
  }

  protected retrieving (): void { return }

  /**
   * Retrieved runs after show method
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieved (payload: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrievingError (err?: any): void { return }

  // Laravel validation testing

  /**
   * Runs before model is created
   */
  protected creating (): void { return }

  /**
   * Runs after model is created
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected created (payload: any): void { return }

  /**
   * Runs before model is updated
   */
  protected updating (): void { return }

  /**
   * Runs after model is updated
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated (payload: any): void { return }

  /**
   * Runs before model is saved
   */
  protected saving (): void { return }

  /**
   * Runs after model is saved
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected saved (payload: any): void { return }

  /**
   * Runs before model is deleted
   */
  protected deleting (): void { return }

  /**
   * Runs after model is created
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected deleted (payload: any): void { return }

  /**
   * API starts loading state
   */
  protected setStateLoading (): void {
    this.$state.isLoading = true
    this.$state.isSuccess = true
    this.$state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading', data: this.$state })
  }

  /**
   * API returned success response
   */
  protected setStateSuccess (): void {
    this.$state.isLoading = false
    this.$state.isSuccess = true
    this.$state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading success', data: this.$state })
  }

  /**
   * API return error response
   */
  protected setStateError (): void {
    this.$state.isLoading = false
    this.$state.isSuccess = false
    this.$state.isError = true
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading error', data: this.$state })
  }

  private hasCast (key: string) {
    // console.log('hasCast: ', key, Object.prototype.hasOwnProperty.call(this.casts(), key))
    return Object.prototype.hasOwnProperty.call(this.casts(), key)
  }

  private getCast (key: string) {
    if (!this.hasCast(key)) return

    return this.casts()[key]
  }
}
