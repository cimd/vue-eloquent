const errorMessage = {
  code: 404,
  message: 'Not Found'
}

import { http, HttpResponse } from 'msw'

export const ErrorHandlers = [
  http.get('http://localhost:8000/api/errors', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 422 }
    )
  }),
  http.get('http://localhost:8000/api/errors/:error', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 403 }
    )
  }),
  http.patch('http://localhost:8000/api/errors/:error', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 404 }
    )
  }),
  http.post('http://localhost:8000/api/errors', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 404 }
    )
  }),
  http.delete('http://localhost:8000/api/errors/:error', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 404 }
    )
  }),
  // Batch Routes
  http.patch('http://localhost:8000/api/errors/batch', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 404 }
    )
  }),
  http.post('http://localhost:8000/api/errors/batch', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 404 }
    )
  }),
  http.patch('http://localhost:8000/api/errors/batch-destroy', () => {
    return HttpResponse.json(
      {
        data: errorMessage
      },
      { status: 404 }
    )
  })
]
