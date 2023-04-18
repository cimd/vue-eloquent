# Collection

While the `Model` class provides an eloquent way to manage a single Model,
the `Collection` class provides way of managing a collection (array) of models

## Create a Collection Class
Create a `PostsCollection` class that extends the default `Collection` class. Note we're using the `PostApi` created previously.

**Example**

```js
import { Collection } from '@konnec/vue-eloquent'
import PostApi from './PostApi'
import { IPost } from './IPost'
import { reactive } from 'vue'

export default class PostsGrid extends Collection {
  protected api = PostApi

  protected channel = 'post'

  public data = reactive([] as IPost[])

  public filter = reactive({
    creator_id: undefined as number | undefined,
  })

  constructor(posts?: IPost[]){
    super()
    this.factory(posts)
  }
}
```

You can then access the collection from the `model` attribute

## Usage

```js{3-6,11,16,21-22}
<script lang="ts">
import PostsCollection from './Post'

export default defineComponent({
  data() {
    return {
      posts: new PostsCollection(),
    }
  },
  created: {
    // this will fetch all posts from the API and instantiate them to
    // this.posts.data attribute
    this.posts.get()
  }
})
</script>
```

## States
The `Collection` has 3 states which are available and updated during the API requests. You can use them to display
state changes on you UI, e.g. a `loading` indicator on a button

```js
state: {
    isLoading: boolean,
    isSucess: boolean,
    isError: boolean
}
```

## Broadcast

Vue Eloquent uses Laravel Echo for broadcasting. After defining the channel
name on your Collection you have to initialize the broadcasting on your
component.

```js{11}
<script lang="ts">
import PostsCollection from './Post'

export default defineComponent({
  data() {
    return {
      posts: new PostsCollection(),
    }
  },
  created: {
    this.initBroadcast()
    // this will fetch all posts from the API and instantiate them to
    // this.posts.data attribute
    this.posts.get()
  }
})
</script>
```


### Broadcast Observers

`broadcastCreated(e: any)`

`broadcastUpdated(e: any)`

`broadcastDeleted(e: any)`
