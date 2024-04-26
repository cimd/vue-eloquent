import { http, HttpResponse } from 'msw'

export const comments = [
  {
    id: 1,
    post_id: 1,
    user_id: 1,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    created_at: '2020-06-12T18:19:32.000000Z',
    updated_at: '2022-06-13T01:43:59.000000Z',
    deleted_at: null
  },
  {
    id: 2,
    post_id: 1,
    user_id: 1,
    comment:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    created_at: '2020-06-15T18:19:32.000000Z',
    updated_at: '2022-06-16T01:43:59.000000Z',
    deleted_at: null
  }
]

export const PostCommentHandlers = [
  http.get('http://localhost:8000/api/posts/1/comments', () => {
    return HttpResponse.json(
      {
        data: comments
      },
      { status: 200 }
    )
  }),
  http.get('http://localhost:8000/api/posts/1/comments/1', () => {
    return HttpResponse.json(
      {
        data: comments[0]
      },
      { status: 200 }
    )
  }),
  http.patch('http://localhost:8000/api/posts/1/comments/1', () => {
    return HttpResponse.json(
      {
        data: comments[0]
      },
      { status: 200 }
    )
  }),
  http.post('http://localhost:8000/api/posts/1/comments', () => {
    return HttpResponse.json(
      {
        data: comments[0]
      },
      { status: 200 }
    )
  }),
  http.delete('http://localhost:8000/api/posts/1/comments/1', () => {
    return HttpResponse.json(
      {
        data: { ...comments[0], deleted_at: '2022-06-17T01:43:59.000000Z' }
      },
      { status: 200 }
    )
  })
]
