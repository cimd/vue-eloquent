import Echo from 'laravel-echo'
import { PusherMock } from 'pusher-js-mock'

(<any>window).Pusher = PusherMock

const broadcast = new Echo({
  broadcaster: 'pusher',
  // encrypted: true,
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true,
})

export default broadcast
