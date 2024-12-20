import type { IModelParams } from '../src/model/IModelParams.js'

export interface IUser extends IModelParams {
  id: number
  name: string
}
