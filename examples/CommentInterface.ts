import type { IModelParams } from '../src/model/IModelParams.js'

export interface IComment extends IModelParams {
  id: number
  user_id: number
  comment: string
}
