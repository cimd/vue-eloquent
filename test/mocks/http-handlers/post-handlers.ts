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

export const PostHandlers = [
  http.get('http://localhost:8000/api/posts', () => {
    return HttpResponse.json(
      {
        data: posts
      },
      { status: 200 }
    )
  }),
  http.get('http://localhost:8000/api/posts/1', () => {
    return HttpResponse.json(
      {
        data: posts.find((post) => post.id === 1)
      },
      { status: 200 }
    )
  }),
  http.get('http://localhost:8000/api/posts/2', () => {
    return HttpResponse.json(
      {
        data: posts.find((post) => post.id === 2)
      },
      { status: 200 }
    )
  }),
  http.get('http://localhost:8000/api/posts/:post/logs', ({ params }) => {
    return HttpResponse.json(
      {
        data: posts.find((post) => post.id === parseInt(<string>params.post))
      },
      { status: 200 }
    )
  }),
  http.patch('http://localhost:8000/api/posts/1', () => {
    return HttpResponse.json(
      {
        data: posts.find((post) => post.id === 1)
      },
      { status: 200 }
    )
  }),
  http.post('http://localhost:8000/api/posts', () => {
    return HttpResponse.json(
      {
        data: posts[ 0 ]
      },
      { status: 200 }
    )
  }),
  http.delete('http://localhost:8000/api/posts/1', () => {
    return HttpResponse.json(
      {
        data: { ...posts[ 0 ], deleted_at: '2022-06-17T01:43:59.000000Z' }
      },
      { status: 200 }
    )
  }),
  // Batch Routes
  http.patch('http://localhost:8000/api/posts/batch', () => {
    return HttpResponse.json(
      {
        data: posts
      },
      { status: 200 }
    )
  }),
  http.post('http://localhost:8000/api/posts/batch', () => {
    return HttpResponse.json(
      {
        data: posts
      },
      { status: 200 }
    )
  }),
  http.patch('http://localhost:8000/api/posts/batch-destroy', () => {
    return HttpResponse.json(
      {
        data: posts
      },
      { status: 200 }
    )
  })
]
