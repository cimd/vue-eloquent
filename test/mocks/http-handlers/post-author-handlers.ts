import { http, HttpResponse } from 'msw'

export const authors = [
  {
    id: 1,
    name: 'John Smith',
    created_at: '2020-06-12T18:19:32.000000Z',
    updated_at: '2022-06-13T01:43:59.000000Z',
    deleted_at: null
  },
  {
    id: 2,
    name: 'Jane Doe',
    created_at: '2020-06-15T18:19:32.000000Z',
    updated_at: '2022-06-16T01:43:59.000000Z',
    deleted_at: null
  }
]

export const PostAuthorHandlers = [
  http.get('http://localhost:8000/api/posts/1/users', () => {
    return HttpResponse.json(
      {
        data: [authors[ 0 ]]
      },
      { status: 200 }
    )
  }),
  http.get('http://localhost:8000/api/posts/1/users/1', () => {
    return HttpResponse.json(
      {
        data: authors[ 0 ]
      },
      { status: 200 }
    )
  }),
  http.patch('http://localhost:8000/api/posts/1/users/1', () => {
    return HttpResponse.json(
      {
        data: authors[ 0 ]
      },
      { status: 200 }
    )
  }),
  http.post('http://localhost:8000/api/posts/1/users', () => {
    return HttpResponse.json(
      {
        data: authors[ 0 ]
      },
      { status: 200 }
    )
  }),
  http.delete('http://localhost:8000/api/posts/1/users/1', () => {
    return HttpResponse.json(
      {
        data: { ...authors[ 0 ], deleted_at: '2022-06-17T01:43:59.000000Z' }
      },
      { status: 200 }
    )
  })
]
