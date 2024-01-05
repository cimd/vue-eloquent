import { rest } from 'msw'

export const authors = [
  {
    'id': 1,
    'name': 'John Smith',
    'created_at': '2020-06-12T18:19:32.000000Z',
    'updated_at': '2022-06-13T01:43:59.000000Z',
    'deleted_at': null
  },
  {
    'id': 2,
    'name': 'Jane Doe',
    'created_at': '2020-06-15T18:19:32.000000Z',
    'updated_at': '2022-06-16T01:43:59.000000Z',
    'deleted_at': null
  }
]

export const PostAuthorHandlers = [
  rest.get('http://localhost:8000/api/posts/1/authors', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: authors[ 0 ],
      })
    )
  }),
  rest.get('http://localhost:8000/api/posts/1/authors/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: authors[ 0 ],
      })
    )
  }),
  rest.patch('http://localhost:8000/api/posts/1/authors/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: authors[ 0 ],
      })
    )
  }),
  rest.post('http://localhost:8000/api/posts/1/authors', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: authors[ 0 ],
      })
    )
  }),
  rest.delete('http://localhost:8000/api/posts/1/authors/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: { ...authors[ 0 ], 'deleted_at': '2022-06-17T01:43:59.000000Z' },
      })
    )
  }),
]
