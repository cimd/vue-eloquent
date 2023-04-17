import { formatObject } from './helpers/formatObject'
import handleErrors from './helpers/handleErrors'
import { http } from './http/http'

export interface Api {
  resource: string
}

export interface Model {
  model: any
}

export interface Collection {
  data: any[]
}
