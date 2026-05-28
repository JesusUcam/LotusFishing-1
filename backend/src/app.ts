import express from 'express'
import { usersRouter } from './modules/users/routes/users.routes.js'

export const createApp = () => {
  const app = express()

  app.use(express.json())

  app.get('/health', (_request, response) => {
    response.status(200).json({ status: 'ok' })
  })

  app.use('/api/users', usersRouter)

  app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
    console.error(error)

    response.status(500).json({
      message: 'Unexpected server error'
    })
  })

  return app
}

