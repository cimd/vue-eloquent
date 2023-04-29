import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

(<any>window).Pusher = Pusher

const broadcast = new Echo({
  // Pusher
  broadcaster: 'pusher',
  encrypted: true,
  authEndpoint: '/api/broadcasting/auth',
  key: 'process.env.PUSHER_APP_KEY',
  cluster: 'process.env.PUSHER_APP_CLUSTER',
  forceTLS: true,
  // authorizer: (channel: any) => {
  //   return {
  //     // eslint-disable-next-line @typescript-eslint/ban-types
  //     authorize: (socketId:string, callback: Function) => {
  //       http.defaults.headers.common[ 'X-Socket-Id' ] = socketId
  //       http
  //         .post('/api/broadcasting/auth', {
  //           socket_id: socketId,
  //           channel_name: channel.name,
  //         })
  //         .then((response) => {
  //           // eslint-disable-next-line
  //                           callback(false, response.data)
  //         })
  //         .catch((error) => {
  //           // eslint-disable-next-line
  //                           callback(true, error)
  //         })
  //     },
  //   }
  // },
})

export default broadcast
