<script lang="ts">
import { defineComponent } from 'vue'
import PostsCollection from '../test/mocks/PostsCollection'
import { createHttp } from '@/http/http'
import http from '../test/mocks/axios'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {}
  },
  async created() {
    createHttp({ httpClient: http })
    const posts = new PostsCollection()
    await posts
      .where({ author_id: 1 })
      .with(['author', 'comments'])
      .sort(['title'])
      // .page({ number: 1, limit: 15 })
      .get()
    console.log(posts)
  }
})
</script>

<template>
  <header>
  </header>

  <main>
  </main>
</template>
