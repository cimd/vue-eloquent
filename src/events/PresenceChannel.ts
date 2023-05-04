import Channel from './Channel'

export default class PresenceChannel extends Channel {
  constructor(name: string) {
    super(name)
  }

  set channel(name: string)
  {
    this._channel = name
  }

  get channel(): string
  {
    return 'presence-' + this._channel
  }
}
