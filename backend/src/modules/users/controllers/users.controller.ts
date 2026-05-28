import type { Request, Response } from 'express'
import { PostgresUsersDatasource } from '../datasources/postgres-users.datasource.js'
import { UsersService } from '../services/users.service.js'

const usersService = new UsersService(new PostgresUsersDatasource())

export class UsersController {
  async getUsers(_request: Request, response: Response): Promise<void> {
    const users = await usersService.getUsers()

    response.status(200).json({
      users
    })
  }
}

