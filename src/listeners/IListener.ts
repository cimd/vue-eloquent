import { Subject } from 'rxjs'

export interface IListener {
  event: typeof Subject<number>
  constructor(e: Subject<number>)
  subscribe(): void
  unsubscribe(): void
  handle(event: any): void | any
  onError(error: any): void
  onComplete(): void
}
