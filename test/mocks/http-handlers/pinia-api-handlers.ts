import { http, HttpResponse } from 'msw'

export const posts = [
  {
    id: 1,
    title: 'My First Post',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    author_id: 1,
    created_at: '2020-06-12T18:19:32.000000Z',
    updated_at: '2022-06-13T01:43:59.000000Z',
    deleted_at: null
  },
  {
    id: 2,
    title: 'My Second Post',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    author_id: 2,
    created_at: '2020-06-15T18:19:32.000000Z',
    updated_at: '2022-06-16T01:43:59.000000Z',
    deleted_at: null
  }
]

export const PiniaApiHandlers = [
  http.get('http://localhost:8000/api/eloquent-api/stores', () => {
    return HttpResponse.json(
      {
        data: {
          posts: posts,
          name: 'John Doe'
        },
        store: 'state-posts-1'
      },
      { status: 200 }
    )
  }),
  http.post('http://localhost:8000/api/eloquent-api/stores', () => {
    return HttpResponse.json(
      {
        data: {
          posts: posts,
          name: 'John Doe'
        },
        store: 'state-posts-1'
      },
      { status: 200 }
    )
  }),
  http.delete('http://localhost:8000/api/eloquent-api/stores/state-posts-1', () => {
    return HttpResponse.json(
      {
        data: null
      },
      { status: 204 }
    )
  })
]
