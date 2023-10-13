import { PostHandlers } from './post-handlers'
import { UserHandlers } from './user-handlers'
import { ErrorHandlers } from './error-handlers'
import { PostQueryHandlers } from './post-query-handlers'
import { PiniaApiHandlers } from './pinia-api-handlers'

export const handlers = [
  ...PiniaApiHandlers,
  ...PostHandlers,
  ...PostQueryHandlers,
  ...UserHandlers,
  ...ErrorHandlers
]
