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

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {}
  },
  created() {
    // this.testHttp()
    // this.testBroadcast()
    // const e = this.testEvent()
    // this.testListener(e)
    this.getFilter()
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
