export default class Channel {
  _channel: string

  constructor(name: string)
  {
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
