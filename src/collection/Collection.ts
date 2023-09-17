import { onBeforeUnmount, reactive } from 'vue'
import { broadcast } from '../broadcast/broadcast'
import type { IModelState } from '../model/IModelState'
import CollectionError from '../collection/CollectionError'
import ApiQuery from '../api/ApiQuery'
import { addModelInspector } from '../model/modelInspector'
import { v4 as uuid } from 'uuid'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'
import { IApiResponse } from '@/api/IApiResponse'
import { IApi } from '@/api/IApi'

export default abstract class Collection<T> extends ApiQuery {
  /**
   * Collection data source
   */
  declare public data: T[]
  /**
   * API class related to the model
   */
  protected api: IApi
  /**
   * Added for devtools support
   */
  public uuid: string

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
   * Broadcast channel name
   */
  protected channel?: string = ''

  protected constructor()
  {
    super()
    this.uuid = uuid()
    addModelInspector(this).then()
    addTimelineEvent({ data: { uuid: this.uuid }, title: 'Collection Initialized' })

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
      addTimelineEvent({
        title: 'Fetching',
        data: {
          query: queryString,
        }
      })

      this.fetching(queryString)
      const response: IApiResponse = await this.api.get(queryString)
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
   * Fetching runs before get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetching(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingError(err?: any): void { return }
  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetched(payload?: any): void { return }

  /**
   * Joins the broadcast channel
   * @param { string } channel Will join the default channel if null
   */
  joinChannel(channel?: string): void
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
    refreshInspector().then()
    addTimelineEvent({ title: 'Broadcasting', data: { channel: this.channel }})
  }

  /**
   * Leaves the broadcast channel
   */
  leaveChannel(): void
  {
    if (this.isBroadcasting) {
      broadcast.leave(this.channel)
      this.isBroadcasting = false
    }
    refreshInspector().then()
    addTimelineEvent({ title: 'Leaving Broadcast Channel', data: { channel: this.channel }})
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
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading', data: this.state })
  }

  /**
   * API returned success response
   */
  protected setStateSuccess(): void
  {
    this.state.isLoading = false
    this.state.isSuccess = true
    this.state.isError = false
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading success', data: this.state })
  }

  /**
   * API return error response
   */
  protected setStateError(): void
  {
    this.state.isLoading = false
    this.state.isSuccess = false
    this.state.isError = true
    refreshInspector().then()
    addTimelineEvent({ title: 'Loading error', data: this.state })
  }

  protected updateDataSource(data: T[]): void
  {
    Object.assign(this.data, data)
    refreshInspector().then()
    addTimelineEvent({ title: 'Data Update', data: data })
  }
}
