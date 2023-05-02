import { PostHandlers } from './post-handlers'
import { UserHandlers } from './user-handlers'
import { ErrorHandlers } from './error-handlers'

export const handlers = [
  ...PostHandlers,
  ...UserHandlers,
  ...ErrorHandlers
]
