import { Api, IApi } from './api/IApi'
import { AxiosError, IAxiosError } from './api/IAxiosError'
import { Collection, ICollection } from './collection/ICollection'
import { IQuery, Query } from './collection/IQuery'
import { IQueryPage, QueryPage } from './collection/IQueryPage'
import { IModel, Model } from './model/IModel'
import { IModelState, ModelState } from './model/IModelState'
import { IModelParams, ModelParams } from './model/IModelParams'
import { ApiResponse, IApiResponse } from './api/IApiResponse'
import { Permissions, Policy } from './policy/IPolicy'

export {
  Api,
  ApiResponse,
  AxiosError,
  Collection,
  Model,
  ModelParams,
  ModelState,
  Permissions,
  Policy,
  Query,
  QueryPage,

  // Deprecated
  IApi,
  IApiResponse,
  IAxiosError,
  ICollection,
  IQuery,
  IQueryPage,
  IModel,
  IModelParams,
  IModelState
}
