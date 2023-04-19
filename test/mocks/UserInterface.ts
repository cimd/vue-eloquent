import { IModel } from '../../src/model/ModelInterface'

export interface IUser extends IModel {
    id: number
    name: string
}
