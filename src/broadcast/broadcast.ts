let broadcast: any

function createBroadcast(client: any) {
  if (!client) throw new Error('Client is required when creating Broadcast')

  broadcast = client
}

export {
  broadcast,
  createBroadcast
}
