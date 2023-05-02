import Channel from './Channel'

export default class PrivateChannel extends Channel{
  constructor(name: string)
  {
    super(name)
  }

  set channel(name: string)
  {
    this._channel = name
  }

  get channel(): string
  {
    return 'private-' + this._channel
  }
}
