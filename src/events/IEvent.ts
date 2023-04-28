import { Subject } from 'rxjs'
import Echo from 'laravel-echo'

export interface IEvent {
  $broadcast: Echo
  event: typeof Subject<number>

  initBroadcast(): void
  initObservable(): Subject<number>
  disconnect(): void
  disconnecting(): void
  broadcastOn(): string
  broadcastAs(): string | string[]
  broadcastWhen(): boolean
  onError(error: any): void
  onMessage(message: any)
}
