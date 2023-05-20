import { IModelState } from 'src/model/IModelState'
import Action from 'src/enums/Action'
import Actioned from 'src/enums/Actioned'
import { IApi } from 'src/api/IApi'

export interface IModel {
    model: any
    originalModel: any
    defaultModel: any
    parameters: undefined | any
    api: IApi
    protected: string[]
    relations: undefined | any[]
    state: IModelState

    getDefault(param: string): any
    factory(model?: any): void
    find(id: number): Promise<any>
    save(action?: Action): Promise<{ model: any, actioned: Actioned.CREATED | Actioned.UPDATED }>
    create(): Promise<any>
    update(): Promise<any>
    delete(): Promise<any>

    fresh(): void
    refresh(id?: number): Promise<any>
    setOriginal(): void
    getOriginal(): any

    retrieving(): void
    retrieved(): void
    creating(): void
    created(): void
    updating(): void
    updated(): void
    deleting(): void
    deleted(): void
    saved(): void

    load(args?: string | string[]): Promise<any>

    setStateLoading(): void
    setStateSuccess(): void
    setStateError(): void

    hasOne(api: any, primaryKey: number): Promise<any>
    hasMany(api: any, primaryKey: string, id: number): Promise<any[]>
}
