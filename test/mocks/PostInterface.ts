import { IModel } from '../../src/model/ModelInterface'

export interface IPost extends IModel {
    title: string | undefined
    text: string | undefined
}
