import { IUser } from './UserInterface'
import { IModelParams } from '@/model/IModelParams'

export interface IPost extends IModelParams {
    id: undefined | number
    title: string | undefined
    text: string | undefined
    author_id: number | undefined
    author: IUser | undefined
    readers: IUser[] | undefined
}
