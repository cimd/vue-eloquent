# Model

Models allows you to connect your laravel models with your front end forms.

## Generating Model Classes
Create a `Post` model that extends the default `Model` class. Note we're using the `PostApi` created previously.

**Example**

```js
import { Model } from '@konnec/vue-eloquent'
import PostApi from './PostApi'
import { IPost } from 'PostInterface'
import { computed, reactive } from 'vue'

export default class Post extends Model {
  protected api = PostApi

  public model = reactive({
    id: undefined,
    title: undefined,
    description: undefined,
    created_at: undefined,
    deleted_at: undefined,
    updated_at: undefined,
  } as IPost)

  constructor(post?: any){
    super()
    this.factory(post)
  }
}
```

And now you can use it in our component:

```js{3-5,11,16,21-22}
<template>
    <div>
        <q-input v-model='post.model.id' label='ID' />
        <q-input v-model='post.model.title' label='Title' />
        <q-input v-model='post.model.description' label='Description' />
        <q-btn label='Submit' @click='onSubmit />
    </div>
</template>

<script lang="ts">
import Post from './Post'

export default defineComponent({
  data() {
    return {
      post: new Post(),
    }
  },
  methods: {
    onSubmit() {
        // save() will update or create a new post
        this.post.save()
    }
  }
})
</script>
```


::: info
Note that we're linking `post.model` properties to the form models
:::


## Available methods

This will **fetch** the `post` with id = 1 from the API and attach it to the `post.model` property
```js
this.post.find(1)
```

**Create** a new instance of the post
```js
this.post.create()
```

**Update** the existing instance of the post
```js
this.post.update()
```

Alternatively, you can also use the convenient `post.save()`. If your `post.model` has a defined `id` attribute, it will send a `PATCH` to the update to update it. Otherwise, 
it will send a `POST` request to create a new `post`
```js
this.post.save()
```

You can **delete** the existing post by calling
```js
this.post.delete()
```

::: tip
The **API** methods connect to Laravel controllers and hence use the same terminology: `get`, `show`, `store`, `update`, `delete`

The **Model** methods connect to Laravel Models, hence use Laravel Eloquent's terminology: 
`create`, `find`, `update`, `delete`, `save`
:::

## Default Attribute Values

You can pass default values directly to the model property:

```js
  public model = reactive({
    id: undefined,
    title: 'Default Title',
    description: undefined,
    created_at: undefined,
    deleted_at: undefined,
    updated_at: undefined,
  } as IPost)
```

## Refreshing Models

If you already have an instance of a model taht was retrived from the API, you can "refresh" the model using the
`refresh` method.

```js
this.post.find(1)

this.post.refresh()
```
Or you can call the `fresh` method to re-retrive a new model from the API:

```js
this.post.find(1)

this.post.fresh(2)
```


## Validation
`Vue Eloquent` uses [Vuelidate](https://vuelidate-next.netlify.app/) which is a great model validation library for 
Vue.
You need to define the validation rules in your Model class:
```js{1,22,25-34}
import { required } from '@vuelidate/validators'
import { Model } from '@konnec/vue-eloquent'
import PostApi from './PostApi'
import { IPost } from 'PostInterface'
import { computed, reactive } from 'vue'

export default class Post extends Model {
  protected api = PostApi

  public model = reactive({
    id: undefined,
    title: undefined,
    description: undefined,
    created_at: undefined,
    deleted_at: undefined,
    updated_at: undefined,
  } as IPost)

  constructor(post?: any){
    super()
    this.factory(post)
    super.initValidations()
  }

  protected validations = computed(() => ({
    model: {
      title: {
        required
      },
      description: {
        required
      }
    }
  }))
}
```

You then need to initialize the validations in your component.
From there on you can access your `Vuelidate` model through `this.post.$model`

```js{3-6,11,16,20,24-25}
<template>
    <div>
        <q-input v-model='post.model.id' label='ID' />
        <q-input v-model='post.model.title' label='Title' />
        <q-input v-model='post.model.description' label='Description' />
        <q-btn label='Submit' @click='onSubmit />
    </div>
</template>

<script lang="ts">
import Post from './Post'

export default defineComponent({
  data() {
    return {
      post: new Post(),
    }
  },
  created() {
    this.model.initValidations()
  },
  methods: {
    async onSubmit() {
        this.post.$validate()
        if (this.post.$invalid) return
        
        const { actioned, model } = await this.post.save()
        // Do something here, e.g: emit the value to a parent component
        // this.$emit(actioned, model)
        // actioned = 'created' or 'updated'
    }
  }
})
</script>
```

### Validation messages
```js{7-8,13-14}
<template>
    <div>
        <q-input v-model='post.model.id' label='ID' />
        <q-input 
            v-model='post.model.title' 
            label='Title' 
            :error='post.$model.title.$error' 
            :error-message='post.$model.title.$errorMessage'
        />
        <q-input 
            v-model='post.model.description' 
            label='Description'
            :error='post.$model.description.$error' 
            :error-message='post.$model.description.$errorMessage'
        />
        <q-btn label='Submit' @click='onSubmit />
    </div>
</template>
```

## States
The `Model` has 3 states which are available and updated during the API requests. You can use them to display
state changes on you UI, e.g. a `loading` indicator on a button

```js
state: {
    isLoading: boolean,
    isSucess: boolean,
    isError: boolean
}
```

```js{16}
<template>
    <div>
        <q-input v-model='post.model.id' label='ID' />
        <q-input 
            v-model='post.model.title' 
            label='Title' 
            :error='post.$model.title.$error' 
            :error-message='post.$model.title.$errorMessage'
        />
        <q-input 
            v-model='post.model.description' 
            label='Description'
            :error='post.$model.description.$error' 
            :error-message='post.$model.description.$errorMessage'
        />
        <q-btn label='Submit' @click='onSubmit :loading='post.state.isLoading'/>
    </div>
</template>
```

## Observers
Similarly to the API class, the Model also has Observers

**Find**: `retriving` and `retrieved`

**Update**: `updating` and `updated`

**Create**: `storing` and `stored`

**Delete**: `deleting` and `deleted`

Those are good placeholders for displaying error messages to the user, or passing values to the Store

::: tip
The `save` method will trigger the `Create` or `Update` observers accordingly
:::
