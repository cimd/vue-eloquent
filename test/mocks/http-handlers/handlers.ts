import { PostHandlers } from './post-handlers'
import { UserHandlers } from './user-handlers'
import { ErrorHandlers } from './error-handlers'
import { PostQueryHandlers } from './post-query-handlers'

export const handlers = [
  ...PostHandlers,
  ...PostQueryHandlers,
  ...UserHandlers,
  ...ErrorHandlers
]
