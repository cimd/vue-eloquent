import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [
      { id: 1, title: 'title 1', body: 'body 1' },
      { id: 2, title: 'title 2', body: 'body 2' }
    ],
    name: 'Ingo',
  }),
  actions: {
    getPosts() {
      return this.posts
    },
    setName() {
      this.name = 'Heitor'
    }
  },
  persist: {
    sync: true,
    suffix: '1',
    // name: 'posts'
  }
})
