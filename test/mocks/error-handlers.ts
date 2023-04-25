const errorMessage = {
  code: 404,
  message: 'Not Found'
}

import { rest } from 'msw'

export const ErrorHandlers = [
  rest.get('http://localhost:8000/api/errors', (req, res, ctx) => {
    return res(
      ctx.status(422),
      ctx.json({
        data: errorMessage
      })
    )
  }),
  rest.get('http://localhost:8000/api/errors/:error', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: errorMessage,
      })
    )
  }),
  rest.patch('http://localhost:8000/api/errors/:error', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: errorMessage,
      })
    )
  }),
  rest.post('http://localhost:8000/api/errors', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: errorMessage,
      })
    )
  }),
  rest.delete('http://localhost:8000/api/errors/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: errorMessage,
      })
    )
  }),
  // Batch Routes
  rest.patch('http://localhost:8000/api/errors/batch', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: errorMessage,
      })
    )
  }),
  rest.post('http://localhost:8000/api/errors/batch', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: errorMessage,
      })
    )
  }),
  rest.patch('http://localhost:8000/api/errors/batch-destroy', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: errorMessage,
      })
    )
  }),
]
