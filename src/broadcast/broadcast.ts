let broadcast: any

function createBroadcast(client: any) {
  if (!client) throw new Error('Client is required')

  broadcast = client
}

export {
  broadcast,
  createBroadcast
}
