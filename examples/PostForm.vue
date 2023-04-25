<template>
  <q-card style='width:400px;max-width:100%; '>
    <q-card-section class='bg-primary'>
      <span class='text-white text-h6'>My Post</span>
    </q-card-section>
    <q-form @submit='onSubmit'>
      <q-card-section>
        <div class='row'><div class='col'><q-input v-show='false' v-model='post.model.id' label='ID' /></div></div>
        <div class='row'><div class='col'><q-input v-model='post.model.name' :error='post.$model.title.$error' label='Title' /></div></div>
        <div class='row'><div class='col'><q-input v-model='post.model.description' label='Description' /></div></div>
      </q-card-section>
      <q-card-actions>
        <q-space />
        <q-button label='Submit' :loading='post.state.isLoading' type='submit' />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script lang="ts">
import Post from './Post'
import { defineComponent, PropType } from 'vue'
import { Action } from '@konnec/vue-eloquent'

export default defineComponent({
  props: {
    postId: {
      required: true,
      type: Number,
      default: 0
    },
    action: {
      required: true,
      type: String as PropType<Action>
    },
  },
  data() {
    return {
      post: new Post()
    }
  },
  created() {
    // Using the same for form to CREATE, VIEW OR EDIT a Post
    if (this.action !== Action.CREATE) {
      this.post = new Post(this.postId)
    }
  },
  methods: {
    async onSubmit() {
      // Validate the form. Display error messages if invalid, or continue to submitting
      this.post.$validate()
      if (this.post.$invalid) return

      const { actioned, model } = await this.post.save()
      this.$emit(actioned, model)
      this.$emit('close')
    }
  }
})
</script>
