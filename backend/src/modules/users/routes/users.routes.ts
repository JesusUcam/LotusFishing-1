import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'

const router = Router()
const usersController = new UsersController()

router.get('/', async (request, response, next) => {
  try {
    await usersController.getUsers(request, response)
  } catch (error) {
    next(error)
  }
})

export { router as usersRouter }

