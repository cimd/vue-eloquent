import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    favouritePosts: [1, 2],
    token: 'asjdlkfjaZH:Hhkjhlkhk',
  }),
  actions: {
  },
  persist: {
    sync: true,
    suffix: 1,
    name: 'user'
  }
})
