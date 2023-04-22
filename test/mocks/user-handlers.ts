import { rest } from 'msw'

const users = [
  {
    'id': 1,
    'name': 'John Doe',
    'created_at': '2020-06-12T18:19:32.000000Z',
    'updated_at': '2022-06-13T01:43:59.000000Z',
  },
  {
    'id': 2,
    'name': 'Jane Lines',
    'created_at': '2020-06-15T18:19:32.000000Z',
    'updated_at': '2022-06-16T01:43:59.000000Z'
  }
]

export const UserHandlers = [
  rest.get('http://localhost:8000/api/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: users
      })
    )
  }),
  rest.get('http://localhost:8000/api/users/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: users[ 0 ],
      })
    )
  }),
]
