import _forEach from 'lodash/forEach'
import { reactive } from 'vue'
import Action from '../enums/Action'
import Actioned from '../enums/Actioned'
import Validator from './Validator'
import type { IModelState } from '../model/IModelState'
import ModelError from '../model/ModelError'
import { addModelInspector } from './modelInspector'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'
import { v4 as uuid } from 'uuid'
import { IApiResponse } from '../api/IApiResponse'
import { mapRules } from './MapRules'
import Api from '../api/Api'
import { IApi } from '../api/IApi'

export default abstract class Model<T> extends Validator {
  /**
   * Model values
   * Should be a reactive object
   */
  declare public model: any
  /**
   * Model relationships
   */
  public relations: undefined | any
  /**
   * Loading, success and error messages from API requests
   */
  public state: IModelState = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })
  /**
   * Added for devtools support
   */
  public uuid: string
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
  protected api: IApi
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



  protected static instance(): Model<any>
  {
    // @ts-ignore
    return new this
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
  /**
   * Creates instance of the model from API
   *
   * @async
   * @param { Number } id - Model ID
   */
  async find<T>(id: number): Promise<void>
  {
    this.setStateLoading()
    if (typeof this.defaultModel === undefined) Object.assign(this.defaultModel, this.model)

    try {
      this.retrieving()
      const result = await this.api.show<T>(id)
      this.setModel(result.data)

      addTimelineEvent({ title: 'Model Retrieved', data: { model: result.data }})

      this.setOriginal()
      this.setStateSuccess()
      this.retrieved()
    }
    catch (e: any) {
      this.setStateError()
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
      this.saved()
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

  async create(): Promise<T>
  {
    try {
      this.creating()
      this.setStateLoading()
      const response = await this.api.store<T>(this.model)
      this.setOriginal()
      this.setModel(response.data)
      addTimelineEvent({ title: 'Created', data: { model: response.data }})
      this.setStateSuccess()
      this.created()

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
   * @return { Promise<IApiResponse<any>> } Model
   */
  async update(): Promise<T>
  {
    try {
      this.setStateLoading()
      this.updating()
      const response: IApiResponse<T> = await this.api.update<T>(this.model)
      this.setOriginal()
      this.setModel(response.data)
      addTimelineEvent({ title: 'Updated', data: { model: response.data }})
      this.setStateSuccess()
      this.updated()

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
   * @return { Promise<IApiResponse<any>> } Model
   */
  async delete(): Promise<T>
  {
    try {
      this.deleting()
      this.setStateLoading()
      const response: IApiResponse<T> = await this.api.destroy<T>(this.model)
      this.setOriginal()
      this.setModel(response.data)
      addTimelineEvent({ title: 'Deleted', data: { model: response.data }})
      this.setStateSuccess()
      this.deleted()

      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('Delete', e)
    }
  }

  async batchCreate<T>(): Promise<T[]>
  {
    try {
      this.batchCreating()
      this.setStateLoading()
      const response = await this.api.batchStore<T>(this.model)
      this.setOriginal()
      // Object.assign(this.model, response.data)
      // this.setModel(response.data)
      this.setStateSuccess()

      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('BatchCreate', e)
    }
  }

  async batchUpdate(): Promise<T[]>
  {
    try {
      this.setStateLoading()
      this.batchUpdating()
      const response = await this.api.batchUpdate<T>(this.model)
      this.setOriginal()
      // Object.assign(this.model, response.data)
      // this.setModel(response.data)
      this.setStateSuccess()

      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('BatchUpdate', e)
    }
  }

  /**
   * Get model change logs
   * @async
   */
  async logs(): Promise<IApiResponse<any[]>>
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
   * @return { VoidFunction }
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
   * @param { number } id - Model id
   * @return { Promise<void> }
   */
  async refresh(id?: number): Promise<void>
  {
    try {
      this.setStateLoading()
      const modelId = id ? id : this.model.id
      const response: IApiResponse<T> = await this.api.show<T>(modelId)
      this.setOriginal()
      this.setStateSuccess()
      this.factory(response.data)
      addTimelineEvent({ title: 'Refreshed', data: { model: response.data }})
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('Refresh', e)
    }
  }

  public getOriginal(): any
  {
    return this.originalModel
  }

  /**
   * Loads the model relationships
   *
   * @param { String | String[] } args - Relationships to load
   * @return { Promise<any> } Model or Models
   */
  public async load(args?: string | string[]): Promise<any>
  {
    switch (typeof args) {
    case 'string':
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.model[ args ] = await this[ args ]()
      break
    case 'object':
      await args.forEach(async (arg: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.model[ args ] = await this[ arg ]()
      })
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
  async hasOne<K>(api: typeof Api, primaryKey: number): Promise<K>
  {
    const result = await api.show<K>(primaryKey)
    return result.data
  }

  /**
   * HasMany relationship
   *
   * @async
   * @param { any } api Api class to the relationship
   * @param { string } primaryKey of the relationship
   * @param { number } id of the relationship
   * @return { Promise<any> } Collection of Models
   */
  async hasMany<K>(api: typeof Api, primaryKey: string, id: number): Promise<K[]>
  {
    const result = await api.get<K>({ primary_key: id })
    return result.data
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
  protected factory(model?: any): void
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

  protected batchCreating(): void {
    return
  }

  protected batchUpdating(): void {
    return
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
  protected retrieved(): void { return }

  /**
   * Runs before model is created
   */
  protected creating(): void { return }

  /**
   * Runs after model is created
   */
  protected created(): void { return }

  /**
   * Runs before model is updated
   */
  protected updating(): void { return }

  /**
   * Runs after model is updated
   */
  protected updated(): void { return }

  /**
   * Runs before model is saved
   */
  protected saving(): void { return }

  /**
   * Runs after model is saved
   */
  protected saved(): void { return }

  /**
   * Runs before model is deleted
   */
  protected deleting(): void { return }

  /**
   * Runs after model is created
   */
  protected deleted(): void { return }

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
  protected setStateSuccess()
  {
    this.state.isLoading = false
    this.state.isSuccess = true
    this.state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading success', data: this.state })
  }

  // async hasOne(api: any, primaryKey: number): Promise<any>
  // async hasOne(api: any, fnName: string, primaryKey: number): Promise<any> {
  //   let result = undefined
  //   if (fnName !== undefined) {
  //     console.log(fnName)
  //     result = await (api[ fnName ])(primaryKey)
  //   } else {
  //     result = await api.show(primaryKey)
  //   }
  //   return result.data
  // }

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


  // Laravel validation testing

  /**
   * Laravel Precognition's error messages
   */
  public errors: any[] = []
  public isValid: boolean = true
  public isInvalid: boolean = false

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
}
