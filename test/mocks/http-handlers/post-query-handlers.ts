import { rest } from 'msw'

export const PostQueryHandlers = [
  rest.get('http://localhost:8000/api/posts-query',
    (req, _res, _ctx) => {
      console.log(req)
      return req
    }),
]
