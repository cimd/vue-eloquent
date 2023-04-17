import { broadcast } from '../broadcast/broadcast'
import handleErrors from '../helpers/handleErrors'
import { reactive } from 'vue'

export default abstract class Collection {

  declare public data: any[]

  /**
   * API class related to the model
   */
  protected api: any

  /**
   * Loading, success and error messages from API requests
   */
  public state = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })

  /**
   * Filters used on GET request
   */
  public filter = reactive({} as any)

  /**
   * Broadcast channel name
   */
  protected channel = '' as string

  protected constructor()
  {
    return
  }

  protected factory(collection?: any[]): void
  {
    if (collection) {
      this.data = [...collection]
    }
  }

  /**
   * Creates instance of the model from API
   */
  public async get(filter?: any): Promise<any>
  {
    this.setStateLoading()
    try {
      filter ? this.filter = filter : null
      const response: any = await this.api.get(this.filter)
      // this.data = [...response.data]
      this.updateDataSource(response.data)
      this.setStateSuccess()
      return response.data
    } catch (e) {
      handleErrors(e)
      this.setStateError()
    }
  }

  /**
   * Joins the broadcast channel
   * @param { string } channel Will join the default channel if null
   */
  public joinChannel(channel?: string): void
  {
    if (channel) {
      this.channel = channel
    }
    broadcast
      .join(this.channel)
      .error((error: any) => {
        console.error(error)
      })
      .listen('.created', (e: any) => {
        this.broadcastCreated(e)
      })
      .listen('.updated', (e: any) => {
        this.broadcastUpdated(e)
      })
      .listen('.deleted', (e: any) => {
        this.broadcastDeleted(e)
      })
  }

  /**
   * Leaves the broadcast channel
   */
  public leaveChannel(): void
  {
    broadcast.leave(this.channel)
  }

  /**
   * Broadcast created event
   * @param { any } e Broadcast event
   */
  protected abstract broadcastCreated(e: any): void

  /**
   * Broadcast updated event
   * @param { any } e Broadcast event
   */
  protected abstract broadcastUpdated(e: any): void

  /**
   * Broadcast deleted event
   * @param { any } e Broadcast event
   */
  protected abstract broadcastDeleted(e: any): void

  /**
   * API starts loading state
   */
  protected setStateLoading(): void
  {
    this.state.isLoading = true
    this.state.isSuccess = true
    this.state.isError = false
  }

  /**
   * API returned success response
   */
  protected setStateSuccess(): void
  {
    this.state.isLoading = false
    this.state.isSuccess = true
    this.state.isError = false
  }

  /**
   * API return error response
   */
  protected setStateError(): void
  {
    this.state.isLoading = false
    this.state.isSuccess = false
    this.state.isError = true
  }

  protected abstract initRefresh(data: any[]): void
  protected abstract updateDataSource(data: any[]): void
}
