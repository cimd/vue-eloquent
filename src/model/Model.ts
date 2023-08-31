import _forEach from 'lodash/forEach'
import { reactive } from 'vue'
import Action from '../enums/Action'
import Actioned from '../enums/Actioned'
import Validator from './Validator'
import type { IModelState } from '../model/IModelState'
import ModelError from '../model/ModelError'
import { IApi } from '../api/IApi'
import { addModelInspector } from './modelInspector'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'
import uuid from '../helpers/uuid'
import { IApiResponse } from '../api/IApiResponse'

export default abstract class Model extends Validator {
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
  protected originalModel: any = {}
  /**
   * Default values for model paramters
   */
  protected parameters: undefined | any
  /**
   * API class related to the model
   */
  protected api: any
  protected protected: string[] = ['id', 'created_at', 'updated_at', 'deleted_at']
  /**
   * To return the model to fresh/initial state
   */
  private defaultModel: any = {}


  /**
   * Laravel Precognition's error messages
   */
  public errors: any[] = []
  public isValid: boolean = true
  public isInvalid: boolean = false

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
   */
  static async find(id: number): Promise<void> {
    const self = this.instance()
    return await self.find(id)
  }

  protected static instance(): Model {
    // @ts-ignore
    return new this
  }

  /**
   * Creates instance of the model from API
   *
   * @async
   * @param { Number } id - Model ID
   */
  async find(id: number): Promise<void> {
    this.setStateLoading()
    if (typeof this.defaultModel === undefined) Object.assign(this.defaultModel, this.model)

    try {
      this.retrieving()
      const result: { data: any } = await this.api.show(id)
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
  async save(action?: Action): Promise<{ model: any, actioned: Actioned.CREATED | Actioned.UPDATED }> {
    let model: any
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

  /**
   * Creates the model
   *
   * @async
   * @return { Promise<IApiResponse<any>> } Model
   */
  async create(): Promise<IApiResponse<any>> {
    try {
      this.creating()
      this.setStateLoading()
      const response: any = await this.api.store(this.model)
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
  async update(): Promise<IApiResponse<any>> {
    try {
      this.setStateLoading()
      this.updating()
      const response: any = await this.api.update(this.model)
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
  async delete(): Promise<IApiResponse<any>> {
    try {
      this.deleting()
      this.setStateLoading()
      const response: any = await this.api.delete(this.model)
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

  async batchCreate(): Promise<IApiResponse<any[]>> {
    try {
      this.batchCreating()
      this.setStateLoading()
      const response: any = await this.api.batchStore(this.model)
      this.setOriginal()
      // Object.assign(this.model, response.data)
      this.setModel(response.data)
      this.setStateSuccess()
      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('BatchCreate', e)
    }
  }

  async batchUpdate(): Promise<IApiResponse<any[]>> {
    try {
      this.setStateLoading()
      this.batchUpdating()
      const response: any = await this.api.batchUpdate(this.model)
      this.setOriginal()
      // Object.assign(this.model, response.data)
      this.setModel(response.data)
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
  async logs(): Promise<IApiResponse<any[]>> {
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
  fresh(): void {
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
  async refresh(id?: number): Promise<void> {
    try {
      this.setStateLoading()
      const modelId = id ? id : this.model.id
      const response: any = await this.api.show(modelId)
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

  public getOriginal(): any {
    return this.originalModel
  }

  /**
   * Loads the model relationships
   *
   * @param { String | String[] } args - Relationships to load
   * @return { Promise<any> } Model or Models
   */
  public async load(args?: string | string[]): Promise<any> {
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
  async hasOne(api: IApi, primaryKey: number): Promise<any> {
    const result = await api.show(primaryKey)
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
  async hasMany(api: IApi, primaryKey: string, id: number): Promise<any[]> {
    const result = await api.get({ primary_key: id })
    return result.data
  }

  protected getDefault(param: string): any {
    return this.parameters[ param ]
  }

  /**
   * Creates a new instance of the model based on existing Object
   *
   * @param { any } model Model object
   * @protected
   */
  protected factory(model?: any): void {
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
  protected setModel(data: any): void {
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
  protected setStateLoading(): void {
    this.state.isLoading = true
    this.state.isSuccess = true
    this.state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading', data: this.state })
  }

  /**
   * API returned success response
   */
  protected setStateSuccess() {
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
  protected setStateError() {
    this.state.isLoading = false
    this.state.isSuccess = false
    this.state.isError = true
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading error', data: this.state })
  }

  /**
   * Validates model from Laravel's Precognition API
   *
   * @return { boolean }
   */
  async validate(action?: Action): Promise<boolean> {
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
