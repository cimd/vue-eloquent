import { reactive } from 'vue'
import { broadcast } from '../broadcast/broadcast'
import handleErrors from '../helpers/handleErrors'
import type { IQuery } from '@/collection/QueryInterface'
import type { IQueryPage } from '@/collection/QueryPageInterface'

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
   * Relations used on GET request
   */
  public include = reactive([] as any[])
  /**
   * Pagination used on GET request
   */
  public paging = reactive({} as IQueryPage)
  /**
   * Sorting used on GET request
   */
  public sorting = reactive([] as any[])

  /**
   * Broadcast channel name
   */
  protected channel: string = ''

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
   * @param { any } filter - DEPRECATED Use where method instead
   */
  public async get(filter?: any): Promise<any>
  {
    // const queryString = qs.stringify({ ...this.filter, ...this.include })
    // const queryString = this.queryString()
    // console.log(queryString)
    let queryString: any
    this.setStateLoading()
    try {
      filter ? queryString = filter : queryString = this.queryString()
      const response: any = await this.api.get(queryString)
      // this.data = [...response.data]
      this.updateDataSource(response.data)
      this.setStateSuccess()
      return response.data
    } catch (e) {
      handleErrors('fetching', e)
      this.setStateError()
    }
  }

  public where(filter: any)
  {
    Object.assign(this.filter, filter)
    return this
  }

  public with(relationships: any[])
  {
    this.include = [...relationships]
    return this
  }
  public sort(sorting: any[])
  {
    this.sorting = [...sorting]
    return this
  }
  public page(paging: IQueryPage)
  {
    Object.assign(this.paging, paging)
    return this
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

  protected updateDataSource(data: any[]): void
  {
    Object.assign(this.data, data)
  }

  protected queryString(): IQuery
  {
    const qs: IQuery = {}
    if (this.filter) {
      qs.filter = this.filter
    }
    if (this.include.length) {
      qs.include = this.include.join(',')
    }
    if (this.sorting.length) {
      qs.sort = this.sorting.join(',')
    }
    if (this.paging) {
      qs.page = this.paging
    }

    return qs
  }
}
