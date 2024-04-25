import _forEach from 'lodash/forEach'
import { reactive } from 'vue'
import Action from '../enums/Action'
import Actioned from '../enums/Actioned'
import Validator from './Validator'
import type { ModelState } from '../model/IModelState'
import ModelError from '../model/ModelError'
import { addModelInspector } from './modelInspector'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'
import { v4 as uuid } from 'uuid'
import { ApiResponse, IApiResponse } from '../api/IApiResponse'
import { mapRules } from './MapRules'
import { Api } from '../api/IApi'
import { ModelParams } from 'src/model/IModelParams'

export default abstract class Model<T extends ModelParams> extends Validator {
  /**
   * Model values
   * Should be a reactive object
   */
  declare model: T
  /**
   * Model relationships
   */
  relations: undefined | any[]
  /**
   * Loading, success and error messages from API requests
   */
  state: ModelState = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })
  /**
   * Added for devtools support
   */
  uuid: string
  /**
   * Laravel Precognition's error messages
   */
  errors: any[] = []
  isValid: boolean = true
  isInvalid: boolean = false
  /**
   * To check if model is dirty / has been modified
   */
  protected originalModel = {}
  /**
   * Default values for model paramters
   */
  protected parameters: undefined | Partial<T>
  /**
   * API class related to the model
   */
  protected api: Api
  protected protected: string[] = ['id', 'created_at', 'updated_at', 'deleted_at']
  /**
   * To return the model to fresh/initial state
   */
  private defaultModel = {}

  /**
   * @constructor
   */
  protected constructor() {
    super()
    this.uuid = uuid()
    addModelInspector(this).then()
    addTimelineEvent({ title: 'Model Initialized', data: { uuid: this.uuid }})
  }

  /**
   * Creates instance of the model from API
   *
   * @async
   * @static
   * @param { Number } id - Model ID
   * @return { Promise<this> } An instance of the model
   */
  static async find<T>(id: number): Promise<Model<T>>
  {
    const self = this.instance()
    await self.find<T>(id)

    return self
  }

  protected static instance(): Model<T>
  {
    // @ts-ignore
    return new this
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
    if (typeof this.defaultModel === 'undefined') Object.assign(this.defaultModel, this.model)

    try {
      this.retrieving()
      const result = await this.api.show<T>(id)
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
      const response = await this.api.store<T>(this.model)
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
      const response: IApiResponse<T> = await this.api.update<T>(this.model)
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
      const response: IApiResponse<T> = await this.api.destroy<T>(this.model)
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
      const response: any = await this.api.logs(this.model.id)
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
      const response: IApiResponse<T> = await this.api.show<T>(modelId)
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

  getOriginal(): T
  {
    return this.originalModel
  }

  /**
   * Loads the model relationships
   *
   * @param { String | String[] } args - Relationships to load
   * @return { Promise<any> } Model or Models
   */
  async load(args?: string | string[]): Promise<any>
  {
    switch (typeof args) {
    case 'string':
      this.model[ args ] = await this[ args ]().get()
      break
    case 'object':
      for (const arg of args) {
        this.model[ arg ] = await this[ arg ]().get()
      }
      break
    default:
      break
    }
    refreshInspector().then()
  }

  /**
   * HasOne relationship
   *
   * @async
   * @param { any } api Api class to the relationship
   * @param { string } primaryKey of the relationship
   * @return { Promise<any> } Model
   */
  async hasOne(api: Api, primaryKey: number): any
  {
    const childResource = api.getResource()
    return await this.api.hasOne(childResource, primaryKey).get()
  }

  /**
   * HasMany relationship
   *
   * @async
   * @param { Api } api Api class to the relationship
   * @param { number } primaryKey of the relationship
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  hasMany(api: Api, primaryKey: number): any[]
  {
    const childResource = api.getResource()

    return {
      get: async () => await this.api.hasMany(childResource, primaryKey).get(),
      show: async (id: number) => await this.api.hasMany(childResource, primaryKey).show(id),
      create: async (data: any) => await this.api.hasMany(childResource, primaryKey).store(data),
      update: async (data: any) => await this.api.hasMany(childResource, primaryKey).update(data),
      delete: async (data: any) => await this.api.hasMany(childResource, primaryKey).delete(data.id)
    }
  }

  async getValidationRules(action?: Action)
  {
    let rules: unknown = []
    try {
      if (!this.model.id || (action === Action.CREATE)) {
        const resp = await this.api.storeValidationRules(this.model)
        rules = resp.data
      }
      else {
        const resp = await this.api.updateValidationRules(this.model)
        rules = resp.data
      }
      this.errors = []
      this.isValid = true
      this.isInvalid = false
      console.log(rules)
      this.setRulesFromServer(rules)

      return rules
    }
    catch (e: any) {
      this.errors = e.data.errors
      this.isValid = false
      this.isInvalid = true
      // console.log(this.errors)
      return false
    }
  }

  setRulesFromServer(rules: any): void
  {
    console.log(this.validations)
    _forEach(rules, (fieldRules, field) => {
      console.log(field, fieldRules)
      const mappedRules = mapRules(fieldRules)
      console.log(mappedRules)
    })
  }

  /**
   * Validates model from Laravel's Precognition API
   *
   * @return { boolean }
   */
  async validate(action?: Action): Promise<boolean>
  {
    try {
      if (!this.model.id || (action === Action.CREATE)) {
        await this.api.validateStore(this.model)
      }
      else {
        await this.api.validateUpdate(this.model)
      }
      this.errors = []
      this.isValid = true
      this.isInvalid = false

      return true
    }
    catch (e: any) {
      this.errors = e.data.errors
      this.isValid = false
      this.isInvalid = true
      // console.log(this.errors)
      return false
    }
  }

  protected getDefault(param: string): any
  {
    return this.parameters[ param ]
  }

  /**
   * Creates a new instance of the model based on existing Object
   *
   * @param { any } model Model object
   * @protected
   */
  protected factory(model?: T): void
  {
    this.defaultModel = Object.assign({}, this.model)
    if (model) this.setModel(model)
    _forEach(this.parameters, (value, key) => {
      if (this.model[ key ] === undefined) {
        this.model[ key ] = value
      }
    })
    this.setOriginal()
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

  /**
   * Creates a copy of the original model instance for refreshing if needed
   *
   * @return { VoidFunction }
   */
  protected setOriginal(): void {
    Object.assign(this.originalModel, this.model)
    refreshInspector().then()
  }

  protected retrieving(): void { return }

  /**
   * Retrieved runs after show method
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieved(payload: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrievingError(err?: any): void { return }

  // Laravel validation testing

  /**
   * Runs before model is created
   */
  protected creating(): void { return }

  /**
   * Runs after model is created
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected created(payload: any): void { return }

  /**
   * Runs before model is updated
   */
  protected updating(): void { return }

  /**
   * Runs after model is updated
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated(payload: any): void { return }

  /**
   * Runs before model is saved
   */
  protected saving(): void { return }

  /**
   * Runs after model is saved
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected saved(payload: any): void { return }

  /**
   * Runs before model is deleted
   */
  protected deleting(): void { return }

  /**
   * Runs after model is created
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected deleted(payload: any): void { return }

  /**
   * API starts loading state
   */
  protected setStateLoading(): void
  {
    this.state.isLoading = true
    this.state.isSuccess = true
    this.state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading', data: this.state })
  }

  /**
   * API returned success response
   */
  protected setStateSuccess(): void
  {
    this.state.isLoading = false
    this.state.isSuccess = true
    this.state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading success', data: this.state })
  }

  /**
   * API return error response
   */
  protected setStateError(): void
  {
    this.state.isLoading = false
    this.state.isSuccess = false
    this.state.isError = true
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading error', data: this.state })
  }
}
