import { PostHandlers } from './post-handlers'
import { UserHandlers } from './user-handlers'
import { ErrorHandlers } from './error-handlers'
import { PiniaApiHandlers } from './pinia-api-handlers'
import { PostCommentHandlers } from './post-comment-handlers'
import { PostAuthorHandlers } from './post-author-handlers'

export const handlers = [
  ...PiniaApiHandlers,
  ...PostHandlers,
  ...PostCommentHandlers,
  ...PostAuthorHandlers,
  ...UserHandlers,
  ...ErrorHandlers
]
