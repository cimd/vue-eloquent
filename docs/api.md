# API Class
The API classes are ways to integrate your Vue SPA with Laravel's APIs in an Laravel/Eloquent way

## Instantiating Axios
You need to pass your Axios instance to the package as so

```js{9}
import axios, { AxiosInstance } from 'axios'
import { createHttp } from '@konnec/vue-eloquent'

const http: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.API,
})

createHttp(http)
```

You now have access to the Axios instance from your application

## Creating the class instance
Create a new file called `Post.ts` which extends `Api.ts`

**Example**

```js{4}
import { Api } from '@konnec/vue-eloquent'

export default class PostApi extends Api {
  protected resource = 'posts'

  constructor() {
    super()
  }
}
```

## Using the API
You can now access your laravel `Posts` API through the following methods

```js
PostApi.find(1)
PostApi.get()
PostApi.store({text: 'My New Post})
PostApi.update({id: 1, text: 'My New Post - Updated})
PostApi.delete(1) or PostApi.delete({id: 1, text: 'My New Post - Updated})
```

## Casting Dates
All default laravel dates `created_at`, `updated_at` and `deleted_at` attributes are automatically converted to `Date` objects
You can extend additional attributes by overriding the `dates` property. Dot notation is supported

```js{5-11}
import { Api } from '@konnec/vue-eloquent'

export default class PostApi extends Api {
  protected resource = 'posts'
  protected dates = [
  'created_at',
  'updated_at',
  'deleted_at',
  'published_at',
  'user.last_login_at'
  ]

  constructor() {
    super()
  }
}
```

## Observers
Similar to Laravel, Vue Eloquent also has observers that can be used to extend basic functionality of your application

Get: `fetching`, `fetched` and `errorFetching`

Show: `retriving`, `retrieved` and `errorRetrieving`

Update: `updating`, `updated` and `errorUpdating`

Store: `storing`, `stored` and `errorStoring`

Delete: `deleting`, `deleted` and `errorDeleting`

Those are good placeholders for displaying error messages to the user, or passing values to the Store

**Example**
```js{2,11-13}
import { Api } from '@konnec/vue-eloquent'
import { usePostStore } from 'stores/Post'

export default class PostApi extends Api {
  protected resource = 'posts'

  constructor () {
    super()
  }
  
  fetched (args: IPost[]) {
    const store = usePostStore()
    store.posts = [...args]
  }
}
```

## Custom Class
You can create a custom class which extends the default Api class
**Example**
```js
import { Api } from '@konnec/vue-eloquent'

export default abstract class MyApi extends Api {

  constructor () {
    super()
  }
  
  protected updatingError (err: any) {
    // do something
  }

  protected storingError (err: any) {
    // do something
  }
}
```

::: info
At this point you just use the Api classes on your app or you can continue extending it
:::
