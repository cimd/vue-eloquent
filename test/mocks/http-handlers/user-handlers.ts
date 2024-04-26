import { http, HttpResponse } from 'msw'

const users = [
  {
    id: 1,
    name: 'John Doe',
    created_at: '2020-06-12T18:19:32.000000Z',
    updated_at: '2022-06-13T01:43:59.000000Z'
  },
  {
    id: 2,
    name: 'Jane Lines',
    created_at: '2020-06-15T18:19:32.000000Z',
    updated_at: '2022-06-16T01:43:59.000000Z'
  }
]

export const UserHandlers = [
  http.get('http://localhost:8000/api/users', () => {
    return HttpResponse.json(
      {
        data: users
      },
      { status: 200 }
    )
  }),
  http.get('http://localhost:8000/api/users/:user', ({ params }) => {
    return HttpResponse.json(
      {
        data: users.find((el) => el.id === parseInt(<string>params.user))
      },
      { status: 200 }
    )
  }),
  http.post('http://localhost:8000/api/users/:user', ({ params }) => {
    return HttpResponse.json(
      {
        data: users.find((el) => el.id === parseInt(<string>params.user))
      },
      { status: 200 }
    )
  }),
  http.patch('http://localhost:8000/api/users/:user', ({ params }) => {
    return HttpResponse.json(
      {
        data: users.find((el) => el.id === parseInt(<string>params.user))
      },
      { status: 200 }
    )
  }),
  http.delete('http://localhost:8000/api/users/:user', ({ params }) => {
    return HttpResponse.json(
      {
        data: users.find((el) => el.id === parseInt(<string>params.user))
      },
      { status: 200 }
    )
  })
]
