# AGENTS.md

Guide for AI agents working **with** or **on** `@konnec/vue-eloquent`: a Vue 3 + TypeScript library that mirrors Laravel Eloquent on the front end. You declare an `Api` class (HTTP access to one REST resource), a `Model` (one record, reactive, validated) and/or a `Collection` (a list, reactive, optionally live via broadcast), and the library handles requests, loading state, date parsing, validation and lifecycle hooks.

The matching Laravel backend package is `konnec/vue-eloquent-api` (Laravel 10+, PHP ^8.1+). Docs: https://vue-eloquent.netlify.app. The runnable reference for everything below is [`examples/`](examples) (Post/PostApi/PostsCollection/Acl and two Vue components).

- Part 1 explains how to **use** the package in an app.
- Part 2 covers **developing** this repo.

---

## Part 1: Using the package

### Mental model

```
Api         static, stateless HTTP calls for one resource  (PostApi.show(1))
Model<T>    one record: reactive `model`, `state`, validation, save/find/delete, lifecycle hooks
Collection  list of records in `data`, `state`, query builder, optional broadcast
Policy      CRUD permission flags + current mode (creating/reading/updating/deleting)
Auth        Sanctum-style login/logout/password reset
```

`Model` and `Collection` never call axios directly. They call `this.api.<method>()`, where `api` is the `Api` subclass you assign. Everything shares one global axios instance configured with `createHttp`.

### 1. Bootstrap (once, before any request)

```ts
import { createHttp, createBroadcast, VueEloquentPlugin } from '@konnec/vue-eloquent'

createHttp({
  baseURL: 'https://example.com',   // or: httpClient: myAxiosInstance
  apiPrefix: 'api',                 // default 'api'; URLs are `${apiPrefix}/${resource}`
  bearerToken: token                // optional; sets the Authorization header
})                                  // throws if neither httpClient nor baseURL is given

createBroadcast(echo)               // optional: a laravel-echo instance, needed for joinChannel()
app.use(VueEloquentPlugin)          // optional: Vue devtools panel (no-op in production)
```

`createHttp` must run before the first `Api`/`Model`/`Collection` call. `Api` reads `apiPrefix` when an instance is created, so call `createHttp` first.

### 2. Api: one class per REST resource

```ts
import { Api } from '@konnec/vue-eloquent'

export default class PostApi extends Api {
  protected override resource = 'posts'
  protected override dates = ['created_at', 'updated_at', 'deleted_at'] // converted to Date; dot notation OK ('author.created_at')

  constructor() { super() }   // keep this: the base constructor is protected and the static helpers do `new this()`
}
```

All methods are **static**; each creates a fresh instance internally.

| Call | Request |
|---|---|
| `PostApi.get<T>()` | `GET api/posts` |
| `PostApi.first<T>()` | `GET api/posts?limit=1`; resolves `{ ...body, data: data[0] ?? null }` |
| `PostApi.show<T>(id)` | `GET api/posts/{id}` |
| `PostApi.store<T>(payload)` | `POST api/posts` |
| `PostApi.update<T>(payload)` | `PATCH api/posts/{payload.id}` |
| `PostApi.destroy<T>(modelOrId, isModel = true)` | `DELETE api/posts/{id}`; with `isModel = false` it sends `DELETE api/posts` with the payload as query params |
| `PostApi.batchStore(items)` | `POST api/posts/batch` body `{ data: items }` |
| `PostApi.batchUpdate(items)` | `PATCH api/posts/batch` body `{ data: items }` |
| `PostApi.batchDestroy(items)` | `PATCH api/posts/batch-destroy` body `{ data: items }` |
| `PostApi.logs(idOrModel)` | `GET api/posts/{id}/logs` |
| `PostApi.hasMany('comments', postId)` | returns `{ get, show({id}), store, update, delete }` on `api/posts/{postId}/comments[/{id}]` |
| `PostApi.hasOne('author', postId)` | same shape; `get()` resolves the first item of `data` |
| `PostApi.url(...segments)` | builds `api/posts/<segments>`; use with `send` |
| `PostApi.send(method, fullUrl, data?, params?)` | escape hatch for custom endpoints |
| `PostApi.getResource()` | returns `'posts'` |
| `PostApi.updateValidationRules(payload)` | `PATCH` with header `Request-Rules: true` (server-side rules dry run) |

`batchDelete` and `delete` are deprecated: use `batchDestroy` and `destroy`.

**Response shape.** The REST methods resolve with the response *body* `{ data, count?, message? }` (type `ApiResponse<T>`), so the record is `(await PostApi.show(1)).data`, and lists are `(await PostApi.get()).data`. `send()` is different: it resolves with the raw body, does **no** date conversion and does **not** call hooks, and `path` is used verbatim (no prefix/resource added):

```ts
await PostApi.send('post', PostApi.url(id, 'publish'), { at: '2026-01-01' })
```

**Errors.** Every REST method rejects with `ApiError` (`error.message` looks like `"Show ||| Request failed with status code 404"`, `error.error` is the original axios error, also available as `error.cause`; use `error.error.response?.data` for Laravel validation messages, and note `response` is `undefined` on network errors and timeouts). `send()` rejects with the raw axios error.

**Query builder.** Chain on the class (static) or an instance, finish with `.get()` (the instance method):

```ts
const res = await PostApi
  .where({ author_id: 1 })          // merges into filter
  .with(['author', 'comments'])     // include=author,comments   (replaces previous)
  .select(['id', 'title'])          // fields=id,title           (replaces)
  .append(['full_title'])           // append[]=full_title       (replaces)
  .sort(['-created_at'])            // sort=-created_at          (replaces)
  .latest('updated_at')             // appends -updated_at to sort (appends)
  .limit(10)                        // limit=10                  (replaces)
  .paginate({ page: 1, pageSize: 20 }) // paginate[page]=1&...   (merges)
  .get()                            // or .first(): sends limit=1, resolves the first record or null
```

`PostApi.get(payload)` (static, with an argument) is deprecated and sends `payload` as the raw query params. The query-builder shape matches `konnec/vue-eloquent-api`; if you target a different backend, `send()` or raw `get(payload)` is safer.

**Hooks.** Override any of these `protected` methods on the Api subclass: `fetching / fetched / fetchingError`, `retrieving / retrieved / retrievingError`, `storing / stored / storingError`, `updating / updated / updatingError`, `destroying / destroyed / destroyingError`, `batchStoringError`, `batchUpdatingError`, `batchDestroyingError`, `fetchingLogsError`. Batch methods only have error hooks. Override `transformResponse(raw: string)` to change how the body is parsed (it calls `JSON.parse`, then converts `dates`).

### 3. Model: one record

```ts
import { reactive, computed } from 'vue'
import { required } from '@vuelidate/validators'
import { Model } from '@konnec/vue-eloquent'
import type { ModelParams } from '@konnec/vue-eloquent'

export interface IPost extends ModelParams {   // ModelParams = { id?, created_at?, updated_at?, deleted_at? }
  title: string | undefined
  author_id: number | undefined
}

export default class Post extends Model<IPost> {
  override model = reactive({ id: undefined, title: undefined, author_id: undefined }) as unknown as IPost
  override api = PostApi                                   // the Api class, not an instance
  protected override parameters = { title: 'New Post' }    // defaults applied to undefined fields
  protected override validations = computed(() => ({ model: { title: { required } } }))   // Vuelidate rules

  constructor(post?: IPost) {
    super()
    super.factory(post)          // applies `parameters` and snapshots the original
    super.initValidations()      // REQUIRED if you use $validate()/$reset()
  }

  protected override saved(payload: any) { /* hook */ }
}
```

Constructors must be called in exactly this order (`super()`, `factory`, `initValidations`). The base constructor is `protected`, so always declare a public constructor in the subclass.

Usage:

```ts
const post = new Post()
post.model.title = 'Hello'
if (!post.$validate()) return                 // use the return value (true = valid)
const { actioned, model } = await post.save() // POST if no id (or save(Action.CREATE)), else PATCH; actioned is 'created' | 'updated'

const p = await Post.find(1)                  // static: new instance + find(id)
await p.refresh()                             // reload from API
await p.delete()                              // DELETE
post.fresh()                                  // back to the default model
post.getOriginal()                            // snapshot from the last load/save
post.state.isLoading / isSuccess / isError    // reactive; bind to spinners and error UI
```

- Methods: `find(id)`, `save(action?)`, `create()`, `update()`, `delete()`, `refresh(id?)`, `fresh()`, `logs()`, `load(rel | rel[])`, `hasOne(Api, id)`, `hasMany(Api, id)`, `getOriginal()`, `$validate()`, `$reset()`.
- `Model.getState(key?)` manages state through the model: it returns one instance per class (and key) that lives for the whole session, so a page opened again finds the previous `model` and `state` while it fetches fresh data (stale-while-revalidate, no store needed). The instance is created without arguments, so it suits models such as an account, not records built from a payload. `Model.forgetState(key?)` clears it; `flushState()` clears all of them and `Auth.logout()` calls it. The state is global: reset it in tests (`flushState()` in `afterEach`).
- Failures throw `ModelError` (message such as `"Create ||| ..."`); the wrapped `ApiError` is `err.error` (also for `save()`, which rethrows the `ModelError` from `create()`/`update()` as is). `state.isError` is set.
- Hooks (protected, override as needed): `retrieving/retrieved/retrievingError`, `creating/created`, `updating/updated`, `saving/saved`, `deleting/deleted`.
- Relationships: define methods on the model that return `this.hasMany(CommentApi, this.model.id)` (an object with `get/show/create/update/delete`) or `await this.hasOne(UserApi, this.model.author_id)`. `load('comments')` / `load(['a', 'b'])` calls `this[name]().get()` and stores the result on `model[name]`, so it only works for relationship methods that return an object with `.get()` (the `hasMany` style). For a `hasOne`, call it directly: `post.model.author = await post.author()`.
- `Model.setRulesFromServer()` is unfinished (it only `console.log`s). Do not use it.
- Vuelidate state is exposed as `v$` and `$model` (e.g. `post.$model.title.$error` in templates).

### 4. Collection: lists

```ts
export default class PostsCollection extends Collection {
  override data = reactive<IPost[]>([])
  override api = PostApi
  protected override channel = 'posts'          // broadcast channel, optional

  constructor(posts?: IPost[]) {
    super()
    if (posts) super.factory(posts)
  }

  protected override async broadcastCreated(e: any) {   // no-op by default; implement to react
    this.data.push((await this.api.show<IPost>(e.id)).data)
  }
}

const posts = new PostsCollection()
await posts.where({ author_id: 1 }).sort(['-id']).paginate({ page: 1, pageSize: 10 }).get()
posts.data         // reactive array, replaced on each get()
posts.state        // { isLoading, isSuccess, isError }
posts.joinChannel() // needs createBroadcast(); listens to .created/.updated/.deleted → broadcastCreated/Updated/Deleted
posts.leaveChannel()
```

- `Collection.getState(key?)` / `forgetState(key?)` work as on `Model` (rows and `state` kept between visits; created without arguments). The query builder state (`where`, `sort`...) is kept too, so set it on every visit. A collection with state does not tie `leaveChannel()` to the component that created it: call it when the page is left, or let `forgetState()`/`flushState()` leave the channel.
- `Collection` has the same query builder as `Api` (`where/with/select/append/sort/paginate`) and then calls `api.get(query)`. `get()` returns `response.data` and also assigns it to `this.data`. Failures throw `CollectionError`.
- Hooks: `fetching`, `fetched`, `fetchingError`, `broadcastCreated`, `broadcastUpdated`, `broadcastDeleted`.
- The constructor registers `onBeforeUnmount(() => leaveChannel())`. Instantiate collections inside component `setup()`/`data()` (or accept Vue's "no active component instance" warning elsewhere, e.g. tests).

### 5. Policy: permissions

```ts
import { Policy, Action } from '@konnec/vue-eloquent'
const acl = new Policy({ create: true, read: true, update: false, delete: false })
acl.can(Action.UPDATE)      // false
acl.cannot(Action.DELETE)   // true
acl.updating()              // false when not permitted; otherwise switches mode and returns true
acl.isUpdating() / isReading() / isCreating() / isDeleting()
```

Pitfall: `new Policy()` (no argument) allows everything, but `new Policy({ read: true })` or `.set(...)` treats every **omitted** key as `false`. Always pass all four flags. Subclass it for app-wide ACLs (see `examples/Acl.ts`). `edit()` and `isReadOnly()` are deprecated.

### 6. Auth

```ts
import { Auth } from '@konnec/vue-eloquent'
const auth = new Auth({ login: 'login', logout: 'logout' })   // optional URL overrides; defaults: login, logout, users/forgot-password, users/reset-password
await auth.login({ email, password })
```

`login()` first calls `GET /api/csrf-cookie` (hardcoded; it does not use `apiPrefix`), then `POST ${apiPrefix}/login`, stores `resp.data.token` in `localStorage['sanctum_token']` and sets the default `Authorization: Bearer` header. Other methods: `logout()`, `isAuthenticated()`, `forgotPassword(email)`, `resetPassword(payload)`; override `loggedIn / loginError / loggedOut / logoutError`. Browser-only (uses `localStorage`).

### 7. Exports

Runtime: `Api, ApiQuery, ApiError, ModelApi, Model, ModelError, Collection, CollectionError, EloquentError, Policy, Auth, Action, Actioned, createHttp, http, createBroadcast, broadcast, VueEloquentPlugin, formatDates, formatObject, flushState`.
Types: `ApiResponse, AxiosError, Query, QueryPage, ModelParams, ModelState, Permissions`.
Enums: `Action` = `create | read | update | delete`; `Actioned` = `created | read | updated | deleted`.

### Common mistakes

- Assigning an instance instead of the class: `override api = PostApi`, not `new PostApi()`.
- Forgetting `constructor() { super() }` in `Api`/`Model`/`Collection` subclasses.
- Forgetting `initValidations()` (then `v$` is undefined and `$validate()` throws).
- Treating `Api.show()` as returning the record: it returns `{ data: record }`.
- Expecting dates to be `Date` objects for fields not listed in `dates`, or in `send()` results.
- Using `Model.find(id)` with a string id: it is typed `number` (`Api.show` accepts `number | string`).
- Calling `createHttp` after the first request, or never.

---

## Part 2: Developing this repo

Package manager is **yarn** (CI uses Node 22).

```bash
yarn test:unit        # vitest watch
yarn test:unit:ci     # single run with coverage (what CI runs)
yarn lint             # eslint --fix over src/
yarn type-check       # vue-tsc, no emit
yarn build            # type-check + vite build → dist/
```

Layout: `src/` is the library (`api/`, `model/`, `collection/`, `policy/`, `auth/`, `http/`, `broadcast/`, `devtools/`, `helpers/`, `enums/`; the public surface is `src/index.ts` and `src/Interfaces.ts`). `examples/` holds reference implementations that the tests also import as fixtures. `test/vitest/__tests__/` holds specs. `test/mocks/` holds the msw handlers and the axios instance used by tests (`test/vitest/setup-file.ts` calls `createHttp` with it). `dist/` is **committed**; release commits include the rebuilt `dist/` plus the `package.json` version and CHANGELOG entry.

Conventions:

- Path aliases: `@/` → `src/`, `test/` → `test/`, `examples/` → `examples/`.
- Style: 2-space indent, single quotes, no semicolons. Match the surrounding file; run `yarn lint`.
- TypeScript is `strict` with `noImplicitOverride`, `exactOptionalPropertyTypes` and `noUncheckedIndexedAccess`, so use `override` on subclass members.
- Lifecycle hooks are empty `protected` methods whose unused parameter is prefixed with an underscore (`protected created(_payload: any): void`), which the lint config allows. Keep that pattern when adding hooks; subclasses can name the parameter anything.
- `Api` static methods create an instance via `ApiQuery.instance()` (`new this()`), so anything new on `Api` should stay static and go through `self = this.instance()`.
- Adding or changing an endpoint: add a handler in `test/mocks/http-handlers/`, a test in `test/vitest/__tests__/`, a `CHANGELOG.md` entry (Keep a Changelog format: Added / Changed / Fixed), and keep the table in Part 1 in sync.
- Do not hand-edit `dist/`. Regenerate it with `yarn build` only when preparing a release.
- Vue devtools hooks (`addTimelineEvent`, `refreshInspector`) are called throughout `Model`/`Collection`/`ApiQuery`; keep them in new state-changing code.
