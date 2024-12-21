import type { ModelParams } from '@/model/IModelParams'

export interface IUser extends ModelParams {
  id: number
  name: string
}
