import type { IApi } from '@/api/IApi'
import type { AxiosError, IAxiosError } from '@/api/IAxiosError'
import type { Collection, ICollection } from '@/collection/ICollection'
import type { IQuery, Query } from '@/collection/IQuery'
import type { IQueryPage, QueryPage } from '@/collection/IQueryPage'
import type { IModel, Model } from '@/model/IModel'
import type { IModelState, ModelState } from '@/model/IModelState'
import type { IModelParams, ModelParams } from '@/model/IModelParams'
import type { ApiResponse, IApiResponse } from '@/api/IApiResponse'
import type { Permissions, Policy } from '@/policy/IPolicy'

import Api from '@/api/Api'
import { createHttp } from '@/http/http'
import { createBroadcast } from '@/broadcast/broadcast'
import Action from '@/enums/Action'
import Actioned from '@/enums/Actioned'
import { formatDates } from '@/helpers/formatDates'
import VueEloquentPlugin from '@/devtools/devToolsPlugin'
import ModelError from '@/model/ModelError'
import Auth from '@/auth/Auth'

export {
  Api,
  Auth,
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
  createHttp,
  createBroadcast,
  Action,
  Actioned,
  formatDates,
  VueEloquentPlugin,
  ModelError,

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
