<script lang="ts">
import { defineComponent } from 'vue'
import PostsCollection from '../examples/PostsCollection'
import { createHttp } from '../src/index'
import http from '../test/mocks/axios-mock'
import broadcast from '../test/mocks/pusher-mock'
import { createBroadcast } from '../src/broadcast/broadcast'
import EventError from '../src/events/EventError'
import PostsEvent from '../test/mocks/PostsEvent'
import PostsListener from '../test/mocks/PostsListener'
import PostApi from '../examples/PostApi'
import UserStore from '../examples/UserStore'
import { usePostStore } from '../examples/PostStore'
import { mapState } from 'pinia'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {}
  },
  computed: {
    ...mapState(usePostStore, ['posts'])
  },
  created() {
    // this.testHttp()
    // this.testBroadcast()
    // const e = this.testEvent()
    // this.testListener(e)
    // this.getFilter()
    // this.testStore()
    console.log(this.posts)
    createHttp({ httpClient: http })
    const store = usePostStore()
    // console.log(store.secret)
    // console.log(store.test)
    // store.setName()
    // store.$sync(false)
    // store.name = 'Heitor'
    // store.posts.push({ id: 3, title: 'title 3', body: 'body 3' })
    // store.$sync()
    // store.name = 'Carla'
    store.$get()
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
        .error((error: any) => {
          throw new EventError('Event', error)
        })
        .listen('.created', (e: any) => {
          console.log(e)
        })
    },
    testEvent() {
      createBroadcast(broadcast)
      const event = new PostsEvent()
      console.log(event)
      return event
    },
    testListener(event) {
      const posts = new PostsCollection()
      console.log(posts)
      const listener = new PostsListener(event, posts)
      console.log(listener)
      console.log(posts.data)
      setTimeout(() => {
        console.log(posts.data)
      }, 5000)
    },
    async getFilter() {
      createHttp({ httpClient: http })
      // const post = new PostApi()
      const result = await PostApi.where({ author_id: 1 }).with(['test']).get()
      console.log(result)
    },
    testStore() {
      createHttp({ httpClient: http })
      console.log('testStore')
      const store = new UserStore()
      setTimeout(() => {
        // console.log('timout')
        // store.state.id = 1
        // store.state.user.name = 'Heitor'
        // store.delete()
      }, 2000)
      // store.test = 'test'
      // console.log(store.test)
      // store.state = { id: 1 }
      // console.log(store.state)
      // store.state.id = 1
      // store.state.user.age = 10
      // console.log(store.state)
      // store.get()
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
