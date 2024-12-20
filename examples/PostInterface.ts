import type { IUser } from './UserInterface'
import type { IModelParams } from '@/model/IModelParams'
import type { IComment } from './CommentInterface'

export interface IPost extends IModelParams {
  id: undefined | number
  title: string | undefined
  text: string | undefined
  author_id: number | undefined
  author?: IUser | undefined
  readers?: IUser[] | undefined
  comments?: IComment[] | undefined
}
