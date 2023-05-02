import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

(<any>window).Pusher = Pusher

const broadcast = new Echo({
  broadcaster: 'pusher',
  // encrypted: true,
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true,
})

export default broadcast
