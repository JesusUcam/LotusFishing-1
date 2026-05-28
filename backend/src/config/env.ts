import 'dotenv/config'

const getRequiredEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }

  return value
}

export const env = {
  port: Number(process.env.PORT ?? 3001),
  postgresHost: getRequiredEnv('POSTGRES_HOST', '127.0.0.1'),
  postgresPort: Number(process.env.POSTGRES_PORT ?? 5432),
  postgresDatabase: getRequiredEnv('POSTGRES_DATABASE', 'lotus_fishing'),
  postgresUser: getRequiredEnv('POSTGRES_USER', 'lotus_app'),
  postgresPassword: getRequiredEnv('POSTGRES_PASSWORD')
}

