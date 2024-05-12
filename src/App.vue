<script lang="ts">
import { defineComponent } from 'vue'
import PostsCollection from '../examples/PostsCollection'
import { createHttp } from '../src/index'
import http from '../test/mocks/axios-mock'
import broadcast from '../test/mocks/pusher-mock'
import PostApi from '../examples/PostApi'
import Post from '../examples/Post'

export default defineComponent({
  data() {
    return {}
  },
  created() {
    // this.testHttp()
    // this.testBroadcast()
    // const e = this.testEvent()
    // this.testListener(e)
    // this.getFilter()
    // this.testStore()
    // console.log(this.posts)
    createHttp({ httpClient: http })
    // const store = usePostStore()
    // console.log(store.secret)
    // console.log(store.test)
    // store.setName()
    // store.$sync(false)
    // store.name = 'Heitor'
    // store.posts.push({ id: 3, title: 'title 3', body: 'body 3' })
    // store.$sync()
    // store.name = 'Carla'
    // store.$get()
    // this.testError()
    this.testRelations()
  },
  methods: {
    async testHttp() {
      createHttp({ httpClient: http })
      const posts = new PostsCollection()
      await posts
        .where({ author_id: 1 })
        .with(['author', 'comments'])
        .sort(['title'])
      // .page({ number: 1, limit: 15 })
        .get()
      console.log(posts)
    },
    testBroadcast() {
      // createBroadcast(broadcast)
      broadcast
        .channel('test')
        .error((_error: any) => {
          // throw new EventError('Event', error)
        })
        .listen('.created', (e: any) => {
          console.log(e)
        })
    },
    async getFilter() {
      createHttp({ httpClient: http })
      // const post = new PostApi()
      const result = await PostApi.where({ author_id: 1 }).with(['test']).get()
      console.log(result)
    },
    testStore() {
      // createHttp({ httpClient: http })
      // console.log('testStore')
      // const _store = new UserStore()
      // setTimeout(() => {
      //   // console.log('timout')
      //   // store.state.id = 1
      //   // store.state.user.name = 'Heitor'
      //   // store.delete()
      // }, 2000)
      // store.test = 'test'
      // console.log(store.test)
      // store.state = { id: 1 }
      // console.log(store.state)
      // store.state.id = 1
      // store.state.user.age = 10
      // console.log(store.state)
      // store.get()
    },
    testError() {
      PostApi.show(100)
        .then(() => {
        })
        .catch((err: any) => {
          console.log(err)
        })
    },
    async testRelations() {
      const post = new Post({ id: 1, author_id: 10 })

      await post.load(['author', 'comments'])

      // const comments = post.comments()
      // console.log(comments)
      //
      // const author = post.author()
      // console.log(author)

      console.log('testing')
    }
  }
})
</script>

<template>
  <header>
  </header>

  <main>
  </main>
</template>
