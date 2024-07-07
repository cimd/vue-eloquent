import type { ModelState } from '@/model/IModelState'
import { reactive } from 'vue'
import { ModelParams } from '@/model/IModelParams'
import ValidatorV2 from '@/model/ValidatorV2'
import { addModelInspector } from '@/model/modelInspector'
import { addTimelineEvent, refreshInspector } from '@/devtools/devtools'
import { v4 as uuid } from 'uuid'
import ModelError from '@/model/ModelError'
import ApiV2 from '@/api/ApiV2'
import Action from '@/enums/Action'
import Actioned from '@/enums/Actioned'
import { ApiResponse, IApiResponse } from '@/api/IApiResponse'

export default abstract class ModelV2<T extends ModelParams> extends ValidatorV2 {

  /**
   * Loading, success and error messages from API requests
   */
  $state: ModelState = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })
  /**
   * Added for devtools support
   */
  $uuid: string
  /**
   * To check if model is dirty / has been modified
   */
  protected $originalModel = reactive<T>({})

  protected constructor() {
    super()
    this.$uuid = uuid()
    addModelInspector(this).then()
    addTimelineEvent({ title: 'Model Initialized', data: { uuid: this.$uuid }})
  }

  /**
   * Creates instance of the model from API
   *
   * @async
   * @static
   * @param { Number } id - Model ID
   * @return { Promise<this> } An instance of the model
   */
  static async find<T>(id: number): Promise<ModelV2<T>>
  {
    const self = new this()
    await self.find<T>(id)

    return self
  }

  api() {
    return ApiV2
  }

  /**
   * Creates instance of the model from API
   *
   * @async
   * @param { Number } id - Model ID
   */
  async find<T>(id: number): Promise<void>
  {
    this.setStateLoading()
    // if (typeof this.defaultModel === 'undefined') Object.assign(this.defaultModel, this.model)

    try {
      this.retrieving()
      const result = await this.api().show<T>(id)
      this.setModel(result.data)

      addTimelineEvent({ title: 'Model Retrieved', data: { model: result.data }})

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
  async save(action?: Action): Promise<{ model: T, actioned: Actioned.CREATED | Actioned.UPDATED }>
  {
    let model: T
    let actioned = '' as Actioned
    this.saving()
    try {
      if (!this.model.id || (action === Action.CREATE)) {
        model = await this.create()
        actioned = Actioned.CREATED
      }
      else {
        model = await this.update()
        actioned = Actioned.UPDATED
      }
      this.saved(model)
      addTimelineEvent({ title: actioned, data: { model: model }})
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
  async create<T>(): Promise<T>
  {
    try {
      this.creating()
      this.setStateLoading()
      const response = await this.api().store<T>(this.model)
      this.setOriginal()
      this.setModel(response.data)
      addTimelineEvent({ title: 'Created', data: { model: response.data }})
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
  async update<T>(): Promise<T>
  {
    try {
      this.setStateLoading()
      this.updating()
      const response: IApiResponse<T> = await this.api().update<T>(this.model)
      this.setOriginal()
      this.setModel(response.data)
      addTimelineEvent({ title: 'Updated', data: { model: response.data }})
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
  async delete<T>(): Promise<T>
  {
    try {
      this.deleting()
      this.setStateLoading()
      const response: IApiResponse<T> = await this.api().destroy<T>(this.model)
      this.setOriginal()
      this.setModel(response.data)
      addTimelineEvent({ title: 'Deleted', data: { model: response.data }})
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
  async logs(): Promise<ApiResponse<any[]>>
  {
    this.setStateLoading()
    try {
      const response: any = await this.api().logs(this.model.id)
      this.setStateSuccess()
      return response.data
    }
    catch (e) {
      this.setStateError()
      throw new ModelError('Logs', e)
    }
  }

  /**
   * Creates new instance of the model with default values
   *
   * @return { void }
   */
  fresh(): void
  {
    this.setModel(this.defaultModel)
    addTimelineEvent({ title: 'Fresh Model', data: { model: this.defaultModel }})
  }

  /**
   * Refresh model from API
   *
   * @async
   * @param { number? } id - Model id
   * @return { Promise<void> }
   */
  async refresh(id?: number): Promise<void>
  {
    try {
      this.setStateLoading()
      this.retrieving()
      const modelId = id ? id : this.model.id
      const response: IApiResponse<T> = await this.api().show<T>(modelId)
      this.setOriginal()
      this.setStateSuccess()
      this.factory(response.data)
      this.retrieved(response.data)
      addTimelineEvent({ title: 'Refreshed', data: { model: response.data }})
    }
    catch (e: any) {
      this.setStateError()
      this.retrievingError(e)
      throw new ModelError('Refresh', e)
    }
  }

  protected factory(model: T) {
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        if (this.hasCast(key)) {
          this[ key ] = this.castTo(
            this.getCast(key),
            key,
            model[ key ]
          )
        } else {
          this[ key ] = model[ key ]
        }

      }
    }
  }

  /**
   * Updates the model property with new data
   *
   * @protected
   * @param { any } data - new model data
   * @return { VoidFunction }
   */
  protected setModel(data: T): void {
    Object.assign(this.model, data)
    refreshInspector().then()
  }

  protected casts() {
    return {
      'created_at': 'date',
      'updated_at': 'date',
      'deleted_at': 'date'
    }
  }

  protected castTo(cast: string | Function, key: string, value: any)
  {
    switch (cast) {
    case 'date':
      return new Date(value)
    case 'number':
      return Number(value)
    default:
      return cast(this, key, value, this.casts())
    }
  }

  /**
   * Creates a copy of the original model instance for refreshing if needed
   *
   * @return { VoidFunction }
   */
  protected setOriginal(): void {
    Object.assign(this.$originalModel, this.model)
    refreshInspector().then()
  }

  protected retrieving(): void

  /**
   * Retrieved runs after show method
   */
  protected retrieved(payload: any): void

  protected retrievingError(err?: any): void

  /**
   * Runs before model is created
   */
  protected creating(): void

  /**
   * Runs after model is created
   */
  protected created(payload: any): void


  /**
   * Runs before model is updated
   */
  protected updating(): void

  /**
   * Runs after model is updated
   */
  protected updated(payload: any): void

  /**
   * Runs before model is saved
   */
  protected saving(): void

  /**
   * Runs after model is saved
   */
  protected saved(payload: any): void

  /**
   * Runs before model is deleted
   */
  protected deleting(): void

  /**
   * Runs after model is created
   */
  protected deleted(payload: any): void

  /**
   * API starts loading state
   */
  protected setStateLoading(): void
  {
    this.$state.isLoading = true
    this.$state.isSuccess = true
    this.$state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading', data: this.$state })
  }

  /**
   * API returned success response
   */
  protected setStateSuccess(): void
  {
    this.$state.isLoading = false
    this.$state.isSuccess = true
    this.$state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading success', data: this.$state })
  }

  /**
   * API return error response
   */
  protected setStateError(): void
  {
    this.$state.isLoading = false
    this.$state.isSuccess = false
    this.$state.isError = true
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading error', data: this.$state })
  }

  private hasCast(key: string)
  {
    // console.log('hasCast: ', key, Object.prototype.hasOwnProperty.call(this.casts(), key))
    return Object.prototype.hasOwnProperty.call(this.casts(), key)
  }

  private getCast(key: string)
  {
    if (!this.hasCast(key)) return

    return this.casts()[ key ]
  }
}