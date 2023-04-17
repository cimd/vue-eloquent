import handleErrors from '../helpers/handleErrors'
import Model from '../model/Model'

export default class BatchModel extends Model {

  constructor()
  {
    super()
  }

  public async batchCreate(): Promise<any>
  {
    try {
      this.batchCreating()
      this.setStateLoading()
      const response: any = await this.api.batchStore(this.model)
      this.setOriginal()
      Object.assign(this.model, response.data)
      this.setStateSuccess()
      return response.data
    }
    catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  public async batchUpdate(): Promise<any>
  {
    try {
      this.setStateLoading()
      this.batchUpdating()
      const response: any = await this.api.batchUpdate(this.model)
      this.setOriginal()
      Object.assign(this.model, response.data)
      this.setStateSuccess()
      return response.data
    }
    catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  protected batchCreating(): void
  {
    return
  }

  protected batchUpdating(): void
  {
    return
  }
}
