import EventError from '../events/EventError'

export default class Channel {
  _channel: string

  constructor(name: string)
  {
    if (!name) throw new EventError('Channel name is required', new Error)

    this.channel = name
  }

  set channel(name: string)
  {
    this._channel = name
  }

  get channel(): string
  {
    return this._channel
  }
}
