import { onBeforeUnmount, reactive } from 'vue'
import { broadcast } from '../broadcast/broadcast'
import type { IModelState } from '../model/IModelState'
import CollectionError from '../collection/CollectionError'
import ApiQuery from '../api/ApiQuery'

export default abstract class Collection extends ApiQuery {

  declare public data: any[]

  /**
   * API class related to the model
   */
  protected api: any

  /**
   * Loading, success and error messages from API requests
   */
  public state: IModelState = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })

  protected isBroadcasting: boolean = false

  // /**
  //  * Filters used on GET request
  //  */
  // protected filter: any = reactive({})
  // /**
  //  * Relations used on GET request
  //  */
  // protected include: string[] = reactive([])
  // /**
  //  * Fields to requested through API
  //  */
  // protected fieldsSelection: string[] = reactive([])
  // /**
  //  * Pagination used on GET request
  //  */
  // protected paging: IQueryPage = reactive({ })
  // /**
  //  * Sorting used on GET request
  //  */
  // protected sorting: string[] = reactive([])

  /**
   * Broadcast channel name
   */
  protected channel?: string = ''

  protected constructor()
  {
    super()
    onBeforeUnmount(() => {
      this.leaveChannel()
    })
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
    let queryString: any
    this.setStateLoading()
    try {
      filter ? queryString = filter : queryString = this.queryString()
      const response: any = await this.api.get(queryString)
      this.updateDataSource(response.data)
      this.setStateSuccess()
      return response.data
    } catch (e: any) {
      this.setStateError()
      throw new CollectionError('Get', e)
    }
  }

  // public where(filter: any): this
  // {
  //   Object.assign(this.filter, filter)
  //   return this
  // }
  //
  // public with(relationships: string[]): this
  // {
  //   this.include = [...relationships]
  //   return this
  // }
  // public select(fields: string[]): this
  // {
  //   this.fieldsSelection = [...fields]
  //   return this
  // }
  // public sort(sorting: string[]): this
  // {
  //   this.sorting = [...sorting]
  //   return this
  // }
  // public page(paging: IQueryPage): this
  // {
  //   Object.assign(this.paging, paging)
  //   return this
  // }

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
    this.isBroadcasting = true
  }

  /**
   * Leaves the broadcast channel
   */
  public leaveChannel(): void
  {
    if (this.isBroadcasting) broadcast.leave(this.channel)
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
    this.data = [...data]
  }

  // protected queryString(): IQuery
  // {
  //   const qs: IQuery = {}
  //   if (this.filter) {
  //     qs.filter = this.filter
  //   }
  //   if (this.include.length) {
  //     qs.include = this.include.join(',')
  //   }
  //   if (this.fieldsSelection.length) {
  //     qs.fields = this.fieldsSelection.join(',')
  //   }
  //   if (this.sorting.length) {
  //     qs.sort = this.sorting.join(',')
  //   }
  //   if (this.paging) {
  //     qs.page = this.paging
  //   }
  //
  //   return qs
  // }
}
