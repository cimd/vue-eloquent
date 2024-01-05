import { rest } from 'msw'

export const comments = [
  {
    'id': 1,
    'post_id': 1,
    'user_id': 1,
    'comment': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    'created_at': '2020-06-12T18:19:32.000000Z',
    'updated_at': '2022-06-13T01:43:59.000000Z',
    'deleted_at': null
  },
  {
    'id': 2,
    'post_id': 1,
    'user_id': 1,
    'comment': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    'created_at': '2020-06-15T18:19:32.000000Z',
    'updated_at': '2022-06-16T01:43:59.000000Z',
    'deleted_at': null
  }
]

export const PostCommentHandlers = [
  rest.get('http://localhost:8000/api/posts/1/comments', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: comments,
      })
    )
  }),
  rest.get('http://localhost:8000/api/posts/1/comments/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: comments[ 0 ],
      })
    )
  }),
  rest.patch('http://localhost:8000/api/posts/1/comments/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: comments[ 0 ],
      })
    )
  }),
  rest.post('http://localhost:8000/api/posts/1/comments', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: comments[ 0 ],
      })
    )
  }),
  rest.delete('http://localhost:8000/api/posts/1/comments/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: { ...comments[ 0 ], 'deleted_at': '2022-06-17T01:43:59.000000Z' },
      })
    )
  }),
]
