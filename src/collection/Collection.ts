import { onUnmounted, reactive, watch } from 'vue'
import { broadcast } from '../broadcast/broadcast'
import type { IQuery } from '../collection/IQuery'
import type { IQueryPage } from '../collection/IQueryPage'
import type { IModelState } from '../model/IModelState'
import CollectionError from '../collection/CollectionError'
import { IApi } from '../api/IApi'

export default abstract class Collection {

  declare public data: any[]

  /**
   * API class related to the model
   */
  protected api: IApi

  /**
   * Loading, success and error messages from API requests
   */
  public state: IModelState = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })

  protected isBroadcasting: boolean = false
  /**
   * Alternative to Broadcasting. Link to a Listener Class
   */
  protected listener: any
  /**
   * Filters used on GET request
   */
  public filter: any = reactive({})
  /**
   * Relations used on GET request
   */
  public include: string[] = reactive([])
  /**
   * Fields to requested through API
   */
  public fieldsSelection: string[] = reactive([])
  /**
   * Pagination used on GET request
   */
  public paging: IQueryPage = reactive({ })
  /**
   * Sorting used on GET request
   */
  public sorting: string[] = reactive([])

  /**
   * Broadcast channel name
   */
  protected channel: string = ''

  protected constructor()
  {
    onUnmounted(() => {
      this.leaveChannel()
    })

    // console.log('Listener at Constructor:', this.listener)
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

  public where(filter: any): this
  {
    Object.assign(this.filter, filter)
    return this
  }

  public with(relationships: string[]): this
  {
    this.include = [...relationships]
    return this
  }
  public select(fields: string[]): this
  {
    this.fieldsSelection = [...fields]
    return this
  }
  public sort(sorting: string[]): this
  {
    this.sorting = [...sorting]
    return this
  }
  public page(paging: IQueryPage): this
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
    this.isBroadcasting = true
  }

  /**
   * Leaves the broadcast channel
   */
  public leaveChannel(): void
  {
    if (this.isBroadcasting) broadcast.leave(this.channel)
  }

  public initListener(): void
  {
    if (this.listener) {
      console.log('Collection Listener', this.listener)
      // this.test = this.listener.handle
      // this.listener.handle = this.test
      this.listener.handle = this.onListenerHandle
      watch(
        () => this.listener.handle,
        (val) => {
          console.log(this.listener.handle)
          console.log('Listener Callback', val)
        }
      )
    }
  }

  protected onListenerHandle(args: any): void
  {
    console.log('onListenerHandle', args)
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

  protected queryString(): IQuery
  {
    const qs: IQuery = {}
    if (this.filter) {
      qs.filter = this.filter
    }
    if (this.include.length) {
      qs.include = this.include.join(',')
    }
    if (this.fieldsSelection.length) {
      qs.fields = this.fieldsSelection.join(',')
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
