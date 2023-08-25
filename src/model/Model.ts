import _forEach from 'lodash/forEach'
import { reactive } from 'vue'
import Action from '../enums/Action'
import Actioned from '../enums/Actioned'
import Validator from './Validator'
import type { IModelState } from '../model/IModelState'
import ModelError from '../model/ModelError'
import { IApi } from '../api/IApi'

export default abstract class Model extends Validator {

  /**
   * Model values
   * Should be a reactive object
   */
  declare public model: any

  /**
   * To check if model is dirty / has been modified
   */
  protected originalModel: any = {}

  /**
   * To return the model to fresh/initial state
   */
  private defaultModel: any = {}

  /**
   * Default values for model paramters
   */
  protected parameters: undefined | any

  /**
   * API class related to the model
   */
  protected api: any

  protected protected: string[] = ['id', 'created_at', 'updated_at', 'deleted_at']

  // Relationships on the model
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
   * @constructor
   */
  protected constructor() {
    super()
  }

  protected getDefault(param: string): any {
    return this.parameters[ param ]
  }

  protected static instance(): Model {
    // @ts-ignore
    return new this
  }

  protected factory(model?: any): void {
    // console.log('factory', model)
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
   * Creates instance of the model from API
   *
   * @async
   * @param { Number } id - Model ID
   */
  async find(id: number): Promise<any> {
    this.setStateLoading()
    if (typeof this.defaultModel === undefined) Object.assign(this.defaultModel, this.model)

    try {
      this.retrieving()
      const result: { data: any } = await this.api.show(id)
      this.setModel(result.data)
      
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
   * Creates instance of the model from API
   *
   * @async
   * @static
   * @param { Number } id - Model ID
   */
  static async find(id: number): Promise<any> {
    const self = this.instance()
    return await self.find(id)
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
  public async save(action?: Action): Promise<{ model: any, actioned: Actioned.CREATED | Actioned.UPDATED }> {
    // console.log('save', this.model, action)
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
   * @return { Promise<any> } Model
   */
  public async create(): Promise<any> {
    try {
      this.creating()
      this.setStateLoading()
      const response: any = await this.api.store(this.model)
      this.setOriginal()
      this.setModel(response.data)
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
   * @return { Promise<any> } Model
   */
  public async update(): Promise<any> {
    try {
      this.setStateLoading()
      this.updating()
      const response: any = await this.api.update(this.model)
      this.setOriginal()
      this.setModel(response.data)
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
   * @return { Promise<any> } Model
   */
  public async delete(): Promise<any> {
    try {
      this.deleting()
      this.setStateLoading()
      const response: any = await this.api.delete(this.model)
      this.setOriginal()
      this.setModel(response.data)
      this.setStateSuccess()
      this.deleted()
      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('Delete', e)
    }
  }


  public async batchCreate(): Promise<any[]> {
    try {
      this.batchCreating()
      this.setStateLoading()
      const response: any = await this.api.batchStore(this.model)
      this.setOriginal()
      Object.assign(this.model, response.data)
      this.setStateSuccess()
      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('BatchCreate', e)
    }
  }

  public async batchUpdate(): Promise<any[]> {
    try {
      this.setStateLoading()
      this.batchUpdating()
      const response: any = await this.api.batchUpdate(this.model)
      this.setOriginal()
      Object.assign(this.model, response.data)
      this.setStateSuccess()
      return response.data
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('BatchUpdate', e)
    }
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
    // console.log('setModel', data)
    Object.assign(this.model, data)
  }

  /**
   * Get model change logs
   */
  public async logs(): Promise<any> {
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
  public fresh(): void {
    // console.log('fresh')
    this.setModel(this.defaultModel)
  }

  /**
   * Refresh model from API
   *
   * @async
   * @param { number } id - Model id
   * @return { Promise<any> } Model
   */
  public async refresh(id?: number): Promise<any> {
    try {
      this.setStateLoading()
      const modelId = id ? id : this.model.id
      const response: any = await this.api.show(modelId)
      this.setOriginal()
      this.setStateSuccess()
      this.factory(response.data)
    }
    catch (e: any) {
      this.setStateError()
      throw new ModelError('Refresh', e)
    }
  }

  /**
   * Creates a copy of the original model instance for refreshing if needed
   *
   * @return { VoidFunction }
   */
  protected setOriginal(): void {
    // console.log('setOriginal')
    Object.assign(this.originalModel, this.model)
  }

  public getOriginal(): any {
    return this.originalModel
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
  }

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
    // console.log('setStateLoading')
    this.state.isLoading = true
    this.state.isSuccess = true
    this.state.isError = false
  }

  /**
   * API returned success response
   */
  protected setStateSuccess() {
    // console.log('setStateSuccess')
    this.state.isLoading = false
    this.state.isSuccess = true
    this.state.isError = false
  }

  /**
   * API return error response
   */
  protected setStateError() {
    // console.log('setStateError')
    this.state.isLoading = false
    this.state.isSuccess = false
    this.state.isError = true
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
    // console.log('hasOne', api, primaryKey)
    const result = await api.show(primaryKey)
    return result.data
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
   * HasMany relationship
   *
   * @async
   * @param { any } api Api class to the relationship
   * @param { string } primaryKey of the relationship
   * @param { number } id of the relationship
   * @return { Promise<any> } Collection of Models
   */
  async hasMany(api: IApi, primaryKey: string, id: number): Promise<any[]> {
    // console.log('hasOne', api, primaryKey, id)
    const result = await api.get({ primary_key: id })
    return result.data
  }
}
