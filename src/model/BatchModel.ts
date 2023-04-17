import handleErrors from 'src/app/models/handleErrors'
import Model from 'src/app/models/Model'
import { useAuthStore } from 'src/modules/Application/stores/Auth'

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
    this.model.updated_by = useAuthStore().user.username
  }

  protected batchUpdating(): void
  {
    this.model.updated_by = useAuthStore().user.username
  }
}
