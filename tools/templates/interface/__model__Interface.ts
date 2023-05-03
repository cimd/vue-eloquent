import { IModel } from 'src/app/models/ModelInterface'

export interface I__model__ extends IModel {
    sep_id: number | undefined
    scope_id: number | undefined
    etm: number[] | undefined | null
    description: string | undefined
    delivery_planner_id: number | null | undefined
    workshop_hours: null | undefined
    wbs: null | undefined
    comments: null | undefined
    start_date: Date | undefined | null
    finish_date: Date | undefined | null
    status_id: number | undefined
    created_by: string | undefined
}
