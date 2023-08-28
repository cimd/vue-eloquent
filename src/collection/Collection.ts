import { onBeforeUnmount, reactive } from 'vue'
import { broadcast } from '../broadcast/broadcast'
import type { IModelState } from '../model/IModelState'
import CollectionError from '../collection/CollectionError'
import ApiQuery from '../api/ApiQuery'
import { addModelInspector } from '../model/modelInspector'
import uuid from '../helpers/uuid'
import { addTimelineEvent, refreshInspector } from '../devtools/devtools'

export default abstract class Collection extends ApiQuery {
  /**
   * Collection data source
   */
  declare public data: any[]
  /**
   * API class related to the model
   */
  protected api: any
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
    addTimelineEvent({ name: 'Collection Initialized' })

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
        name: 'Fetching',
        query: queryString,
      })
      const response: any = await this.api.get(queryString)
      this.updateDataSource(response.data)
      addTimelineEvent({ name: 'Fetched', data: response.data })
      this.setStateSuccess()
      return response.data
    } catch (e: any) {
      this.setStateError()
      throw new CollectionError('Get', e)
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
    this.isBroadcasting = true
    refreshInspector().then()
    addTimelineEvent({ name: 'Broadcasting' })
  }

  /**
   * Leaves the broadcast channel
   */
  public leaveChannel(): void
  {
    if (this.isBroadcasting) {
      broadcast.leave(this.channel)
      this.isBroadcasting = false
    }
    refreshInspector().then()
    addTimelineEvent({ name: 'Leaving Broadcast Channel' })
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
    addTimelineEvent({ name: 'Loading' })
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
    addTimelineEvent({ name: 'Loading success' })
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
    addTimelineEvent({ name: 'Loading error' })
  }

  protected updateDataSource(data: any[]): void
  {
    this.data = [...data]
    refreshInspector().then()
    addTimelineEvent({ name: 'Updating Data', data: data })
  }
}
