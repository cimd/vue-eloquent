import { IModel } from '../src/model/ModelInterface'
import { IUser } from '../test/mocks/UserInterface'

export interface IPost extends IModel {
    title: string | undefined
    text: string | undefined
    author_id: number | undefined
    author: IUser | undefined
    readers: IUser[] | undefined
}
