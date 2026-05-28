import type { User } from '../domain/user.js'
import { PostgresUsersDatasource } from '../datasources/postgres-users.datasource.js'

export class UsersService {
  constructor(private readonly usersDatasource: PostgresUsersDatasource) {}

  async getUsers(): Promise<User[]> {
    return this.usersDatasource.getAll()
  }
}

