import { PostHandlers } from './post-handlers'
import { UserHandlers } from './user-handlers'

export const handlers = [
  ...PostHandlers,
  ...UserHandlers
]
