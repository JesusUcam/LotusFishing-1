import type { User } from '../domain/user.js'
import { postgresPool } from '../../../infrastructure/database/postgres.js'

export class PostgresUsersDatasource {
  async getAll(): Promise<User[]> {
    const query = `
      SELECT email, username
      FROM users
      ORDER BY username ASC;
    `

    const result = await postgresPool.query<User>(query)
    return result.rows
  }
}

