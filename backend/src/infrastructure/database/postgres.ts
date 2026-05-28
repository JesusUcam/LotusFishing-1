import pg from 'pg'
import { env } from '../../config/env.js'

const { Pool } = pg

export const postgresPool = new Pool({
  host: env.postgresHost,
  port: env.postgresPort,
  database: env.postgresDatabase,
  user: env.postgresUser,
  password: env.postgresPassword
})

