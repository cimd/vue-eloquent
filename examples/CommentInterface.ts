import type { ModelParams } from '@/model/IModelParams'

export interface IComment extends ModelParams {
  id: number
  user_id: number
  comment: string
}
