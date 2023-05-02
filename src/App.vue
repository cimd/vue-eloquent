<script lang="ts">
import { defineComponent } from 'vue'
import PostsCollection from '../examples/PostsCollection'
import { createHttp } from '../src/index'
import http from '../test/mocks/axios-mock'
import broadcast from '../test/mocks/pusher-mock'
import { createBroadcast } from '../src/broadcast/broadcast'
import EventError from '../src/events/EventError'
import PostsEvent from '../test/mocks/PostsEvent'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {}
  },
  async created() {
    // this.testHttp()
    // this.testBroadcast()
    this.testEvent()
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
