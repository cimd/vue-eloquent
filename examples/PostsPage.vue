<template>
  <q-page>

    <span class='text-white text-h6'>Posts Page</span>

    <div class='row'>
      <!--  Display your posts here -->
    </div>

    <q-dialog v-model='open'>
      <post-form
        :action='action'
        :post-id='postId'
        @close='open = false'
        @created='onCreated'
        @deleted='onDeleted'
        @updated='onUpdated' />
    </q-dialog>

  </q-page>
</template>

<script lang="ts">
import PostsCollection from './PostsCollection'
import { defineComponent } from 'vue'
import PostForm from './PostForm.vue'
import { Action } from '@konnec/vue-eloquent'

export default defineComponent({
  components: {
    PostForm
  },
  data() {
    return {
      posts: new PostsCollection(),
      open: false,
      action: Action.CREATE as Action,
    }
  },
  created() {
    this.posts.where({ author_id: 1 }).get()
  },
  methods: {
    onCreated(_args) {
      // do something
    },
    onUpdated(_args) {
      // do something
    },
    onDeleted(_args) {
      // do something
    },
  },
})
</script>
