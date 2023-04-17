import _forEach from 'lodash/forEach'
import handleErrors from 'src/app/models/handleErrors'
import Validator from 'src/app/models/Validator'
import { Action } from 'src/modules/Application/enums/Action'
import { Actioned } from 'src/modules/Application/enums/Actioned'
import { useAuthStore } from 'src/modules/Application/stores/Auth'
import { reactive } from 'vue'

export default class Model extends Validator {

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

  protected protected = ['id', 'created_at', 'updated_at', 'deleted_at'] as string[]

  // Relationships on the model
  public relations: undefined | any

  /**
   * Loading, success and error messages from API requests
   */
  public state = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })

  constructor()
  {
    super()
  }

  protected getDefault(param: string): any
  {
    return this.parameters[ param ]
  }

  protected static instance(): Model
  {
    return new this
  }

  protected factory(model?: any): void
  {
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
   * @param { Number } id Model ID
   */
  public static async find(id: number): Promise<any>
  {
    const self = this.instance()
    self.setStateLoading()
    if (typeof self.defaultModel === undefined) Object.assign(self.defaultModel, self.model)

    try {
      self.retrieving()
      const response: any = await self.api.show(id)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const model = new this(response.data)
      self.setOriginal()
      self.setStateSuccess()
      self.retrieved()
      return model
    }
    catch (e) {
      handleErrors(e)
      self.setStateError()
    }
  }

  /**
   * Saves the model to database
   * If model has no id, it will be created (POST)
   * Otherwise it will be updated (PATCH)
   */
  public async save(action?: Action): Promise<any>
  {
    // console.log('save', this.model, action)
    let data: any
    let actioned = '' as Actioned
    this.saving()

    if (!this.model.id || (action === Action.CREATE)) {
      data = await this.create()
      actioned = Actioned.CREATED
    }
    else {
      data = await this.update()
      actioned = Actioned.UPDATED
    }
    this.saved()
    return {
      actioned,
      data
    }
  }

  /**
   * Creates the model
   */
  public async create(): Promise<any>
  {
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
    catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  /**
   * Updates the model
   */
  public async update(): Promise<any>
  {
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
    catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  /**
   * Deletes the model
   */
  public async delete(): Promise<any>
  {
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
    catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  protected setModel(data: any): void
  {
    // console.log('setModel', data)
    Object.assign(this.model, data)
  }

  /**
   * Get model change logs
   */
  public async logs(): Promise<any>
  {
    this.setStateLoading()
    try {
      const response: any = await this.api.logs(this.model.id)
      this.setStateSuccess()
      return response.data
    }
    catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  /**
   * Creates new instance of the model with default values
   */
  public fresh(): void
  {
    // console.log('fresh')
    this.setModel(this.defaultModel)
  }

  /**
   * Refresh model from API
   */
  public async refresh(id?: number): Promise<any>
  {
    try {
      this.setStateLoading()
      const modelId = id ? id : this.model.id
      const response: any = await this.api.show(modelId)
      this.setOriginal()
      this.setStateSuccess()
      this.factory(response.data)
    }
    catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  protected setOriginal(): void
  {
    // console.log('setOriginal')
    Object.assign(this.originalModel, this.model)
  }

  public getOriginal(): any
  {
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
  protected creating() {
    this.model.updated_by = useAuthStore().user.username
  }

  /**
   * Runs after model is created
   */
  protected created() {
    return
  }

  /**
   * Runs before model is updated
   */
  protected updating() {
    this.model.updated_by = useAuthStore().user.username
  }

  /**
   * Runs after model is updated
   */
  protected updated() {
    return
  }

  /**
   * Runs before model is saved
   */
  protected saving() {
    return
  }

  /**
   * Runs after model is saved
   */
  protected saved() {
    return
  }

  /**
   * Loads the model relationships
   * @param { String | String[] } args Relationships to load
   */
  public load(args?: string | string[]): void
  {
    switch (typeof args) {
    case 'string':
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this[ args ]()
      break
    case 'object':
      args.forEach((arg: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this[ arg ]()
      })
      break
    default:
      break
    }
  }

  /**
   * Runs before model is deleted
   */
  protected deleting() {
    this.model.updated_by = useAuthStore().user.username
  }

  /**
   * Runs after model is created
   */
  protected deleted() {
    return
  }

  /**
   * API starts loading state
   */
  protected setStateLoading(): void
  {
    // console.log('setStateLoading')
    this.state.isLoading = true
    this.state.isSuccess = true
    this.state.isError = false
  }

  /**
   * API returned success response
   */
  protected setStateSuccess()
  {
    // console.log('setStateSuccess')
    this.state.isLoading = false
    this.state.isSuccess = true
    this.state.isError = false
  }

  /**
   * API return error response
   */
  protected setStateError()
  {
    // console.log('setStateError')
    this.state.isLoading = false
    this.state.isSuccess = false
    this.state.isError = true
  }

  /**
   * HasOne relationship
   * @param { any } api Api class to the relationship
   * @param { string } primaryKey of the relationship
   */
  async hasOne(api: any, primaryKey: number): Promise<any>
  {
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
   * @param { any } api Api class to the relationship
   * @param { string } primaryKey of the relationship
   * @param { number } id of the relationship
   */
  async hasMany(api: any, primaryKey: string, id: number): Promise<any[]>
  {
    // console.log('hasOne', api, primaryKey, id)
    const result = await api.get({ primary_key: id })
    return result.data
  }
}
