import { rest } from 'msw'

export const posts = [
  {
    'id': 1,
    'title': 'My First Post',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    'author_id': 1,
    'created_at': '2020-06-12T18:19:32.000000Z',
    'updated_at': '2022-06-13T01:43:59.000000Z',
    'deleted_at': null
  },
  {
    'id': 2,
    'title': 'My Second Post',
    'text': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    'author_id': 2,
    'created_at': '2020-06-15T18:19:32.000000Z',
    'updated_at': '2022-06-16T01:43:59.000000Z',
    'deleted_at': null
  }
]

export const PiniaApiHandlers = [
  rest.get('http://localhost:8000/api/v1/eloquent-api/stores', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          posts: posts,
          name: 'John Doe'
        },
        store: 'state-posts-1'
      })
    )
  }),
  rest.post('http://localhost:8000/api/v1/eloquent-api/stores', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          posts: posts,
          name: 'John Doe'
        },
        store: 'state-posts-1'
      })
    )
  }),
]
