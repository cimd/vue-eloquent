let broadcast: any

function createBroadcast(client: any) {
  if (!client) throw new Error('client is required')

  broadcast = client
}

export {
  broadcast,
  createBroadcast
}
