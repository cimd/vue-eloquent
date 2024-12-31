import type { IUser } from './UserInterface'
import type { ModelParams } from '@/model/IModelParams'
import type { IComment } from './CommentInterface'

export interface IPost extends ModelParams {
  id: undefined | number
  title: string | undefined
  text: string | undefined
  author_id: number | undefined
  author?: IUser | undefined
  readers?: IUser[] | undefined
  comments?: IComment[] | undefined
}
