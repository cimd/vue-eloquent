# API Class
The API classes are ways to integrate your Vue SPA with Laravel's APIs in an Laravel/Eloquent way

## Instantiating Axios
You need to pass your `Axios` instance to the package as so:

```js{9}
import axios, { AxiosInstance } from 'axios'
import { createHttp } from '@konnec/vue-eloquent'

const http: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000',
})

createHttp({ httpClient: http })
```

You now have access to the `Axios` instance from your application

This will append an `api` prefix to all requests to the `baseUrl`. You can customize the api prefix while through the 
`createHttp` method:

```js
createHttp({ 
    httpClient: http,
    apiPrefix: 'api/v1'
})
```

## Generating Api Class
Create a new file called `PostApi.ts` which extends `Api`. Define your api endpoint through the `resource` property:

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

In this example, your accessing your `posts` endpoint through:
```txt
http://localhost:8000/api/posts
```

## Using the API
You can now access your laravel `Posts` API through the following methods

```js
PostApi.find(1)

PostApi.get()

PostApi.store({text: 'My New Post})
    
PostApi.update({id: 1, text: 'My New Post - Updated})
        
PostApi.delete(1) OR PostApi.delete({id: 1, text: 'My New Post - Updated})
```

### Mass Updates

You can perform mass assignments through the following methods:

**batchStore**
```js
const posts = [
    { title: 'My New Post', description: 'Lorem ipsum dolor sit amet, consectetur adipis' },
    { title: 'My Second Post', description: 'Lorem ipsum dolor sit amet, consectetur adipis'},
]
PostApi.batchStore(posts)
```

**batchUpdate**
```js
const posts = [
    { id: 1, title: 'My New Post - UPDATED', description: 'Lorem ipsum dolor sit amet, consectetur adipis' },
    { id: 2, title: 'My Second Post - UPDATED', description: 'Lorem ipsum dolor sit amet, consectetur adipis'},
]
PostApi.batchUpdate(posts)
```

**batchDestroy**
```js
const posts = [
    { id: 1, title: 'My New Post - UPDATED', description: 'Lorem ipsum dolor sit amet, consectetur adipis' },
    { id: 2, title: 'My Second Post - UPDATED', description: 'Lorem ipsum dolor sit amet, consectetur adipis'},
]
PostApi.batchDestroy(posts)
```

::: warning
This requires your backend application to implement the required routes as per below. The arguments are packed
into a data param sent:
:::
```php
Route::post('posts/batch', [PostController::class, 'storeBatch']);
Route::patch('posts/batch', [PostController::class, 'updateBatch']);
Route::patch('posts/batch-destroy', [PostController::class, 'destroyBatch']);
```
Note that the `batch-destroy` route is defined as `PATCH` instead of `DELETE` as it does not accept any parameters

## Casting Dates
All default laravel timestamps (`created_at`, `updated_at` and `deleted_at`) attributes are automatically converted 
to `Date` objects. You can extend additional attributes by overriding the `dates` property. Dot notation is supported

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
Similar to Laravel, `Vue Eloquent` also has observers that can be used to extend basic functionality of your 
application:

**Get**: `fetching`, `fetched` and `errorFetching`

**Show**: `retriving`, `retrieved` and `errorRetrieving`

**Update**: `updating`, `updated` and `errorUpdating`

**Store**: `storing`, `stored` and `errorStoring`

**Delete**: `deleting`, `deleted` and `errorDeleting`

Those are good placeholders for displaying error messages to the user, or passing values to the `stores`.

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
You can also create a custom class which extends the default `Api` class.

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

::: tip
At this point you can start using the Api Class on your app or you can continue extending it through the following
steps
:::
