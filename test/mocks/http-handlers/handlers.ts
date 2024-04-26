import { PostHandlers } from './post-handlers'
import { UserHandlers } from './user-handlers'
import { ErrorHandlers } from './error-handlers'
import { PiniaApiHandlers } from './pinia-api-handlers'
import { PostCommentHandlers } from './post-comment-handlers'
import { PostAuthorHandlers } from './post-author-handlers'
import { ModelApiHandlers } from './model-api-handlers.js'

export const handlers = [
  ...ModelApiHandlers,
  ...PiniaApiHandlers,
  ...PostHandlers,
  ...PostCommentHandlers,
  ...PostAuthorHandlers,
  ...UserHandlers,
  ...ErrorHandlers
]
