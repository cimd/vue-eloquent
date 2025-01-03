import { onBeforeUnmount, reactive } from 'vue'
import { broadcast } from '@/broadcast/broadcast'
import type { ModelState } from '@/model/IModelState'
import CollectionError from '@/collection/CollectionError'
import ApiQuery from '@/api/ApiQuery'
import { addModelInspector } from '@/model/modelInspector'
import { v4 as uuid } from 'uuid'
import { addTimelineEvent, refreshInspector } from '@/devtools/devtools'
import type { ApiResponse } from '@/api/IApiResponse'
import type Api from '@/api/Api'

export default abstract class Collection extends ApiQuery {
  /**
   * Collection data source
   */
  declare public data: any[]
  /**
   * Added for devtools support
   */
  uuid: string
  /**
   * Loading, success and error messages from API requests
   */
  state: ModelState = reactive({
    isLoading: false,
    isSuccess: true,
    isError: false
  })
  /**
   * API class related to the model
   */
  declare api: typeof Api
  protected isBroadcasting = false

  /**
   * Broadcast channel name
   */
  protected channel?: string = ''

  protected constructor() {
    super()
    this.uuid = uuid()
    addModelInspector(this).then()
    addTimelineEvent({ data: { uuid: this.uuid }, title: 'Collection Initialized' })

    /**
     * @todo: Move onBeforeUnmount to the join method? There is an error while running vitest saying:
     * 
     * [Vue warn]: onBeforeUnmount is called when there is no active component instance to be associated with. 
     * Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), 
     * make sure to register lifecycle hooks before the first await statement.
     */
    onBeforeUnmount(() => {
      this.leaveChannel()
    })
  }

  /**
   * Creates instance of the model from API
   *
   * @template T
   * @param { any? } filter - DEPRECATED Use where method instead
   * @return { Promise<T[]> } The data from the API
   */
  async get<T>(filter?: any): Promise<T[]>
  async get<T>(filter?: any): Promise<T[]> {
    let queryString: any
    this.setStateLoading()
    try {
      if (filter) {
        queryString = filter
      } else {
        queryString = this.queryString()
      }
      addTimelineEvent({
        title: 'Fetching',
        data: {
          query: queryString
        }
      })

      this.fetching(queryString)
      const response = (await this.api.get(queryString)) as ApiResponse<T[]>
      this.fetched(response)
      this.updateDataSource(response.data)

      addTimelineEvent({ title: 'Fetched', data: { data: response.data }})
      this.setStateSuccess()

      return response.data
    } catch (e: any) {
      this.fetchingError(e)
      this.setStateError()

      throw new CollectionError('Get', e)
    }
  }

  /**
   * Joins the broadcast channel
   * @param { string } channel Will join the default channel if null
   */
  joinChannel(channel?: string): void {
    if (channel) {
      this.channel = channel
    }
    broadcast
      ?.join(this.channel)
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
    refreshInspector().then()
    addTimelineEvent({ title: 'Broadcasting', data: { channel: this.channel }})
  }

  /**
   * Leaves the broadcast channel
   */
  leaveChannel(): void {
    if (this.isBroadcasting) {
      broadcast?.leave(this.channel)
      this.isBroadcasting = false
    }
    refreshInspector().then()
    addTimelineEvent({ title: 'Leaving Broadcast Channel', data: { channel: this.channel }})
  }

  /**
   * Creates an instance of the collection from a given array
   *
   * @template T
   * @param { T[]? } collection - Use the where method instead
   */
  factory<T>(collection: T[]): void {
    if (collection && collection.length) {
      this.data = reactive([...collection])
    }
  }

  /**
   * Fetching runs before get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetching(payload?: any): void {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingError(err?: any): void {
    return
  }

  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetched(payload: any): void {
    return
  }

  /**
   * Broadcast created event
   * @param { any } e Broadcast event
   */
  protected broadcastCreated(e: any): void
  {
    return
  }

  /**
   * Broadcast updated event
   * @param { any } e Broadcast event
   */
  protected broadcastUpdated(e: any): void
  {
    return
  }

  /**
   * Broadcast deleted event
   * @param { any } e Broadcast event
   */
  protected broadcastDeleted(e: any): void
  {
    return
  }

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
  protected setStateSuccess(): void {
    this.state.isLoading = false
    this.state.isSuccess = true
    this.state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading success', data: this.state })
  }

  /**
   * API return error response
   */
  protected setStateError(): void {
    this.state.isLoading = false
    this.state.isSuccess = false
    this.state.isError = true
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading error', data: this.state })
  }

  updateDataSource<T>(data: T[]): void {
    this.data = reactive([...data])
    refreshInspector().then()
    addTimelineEvent({ title: 'Data Update', data: data })
  }
}
