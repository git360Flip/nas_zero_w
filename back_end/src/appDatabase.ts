import { Pool } from 'pg';
import { config, MODES } from './appConfig';
import logger from './appLogger';
import { User } from './components/user/userTypes';
import { hashPassword } from './utils/hash';

export enum DB_ERROR {
  NOT_FOUND = 'Not found',
  INVALID_PASSWORD = 'Invalid password',
  CREATE_USER_ERROR = 'An error occurred when creating the root user',
  GET_USER_ERROR = 'An error occurred when finding the root user',
  UPDATE_USER_ERROR = 'An error occurred when updating the root user',
}

const db = new Pool({
  user: config.dbUser,
  host: config.mode === MODES.PROD ? "db" : config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
});

export async function createUser(id: string, password: string) {
  const hashedPassword = await hashPassword(password);
  db.query('INSERT INTO users (id, password, connection) VALUES ($1, $2, $3)', [id, hashedPassword, "Never"], (error: any) => {
    if (error) {
      throw DB_ERROR.CREATE_USER_ERROR
    }
  })
}

export async function getUserById(id: string): Promise<User> {
  try {
    const results = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (results.rowCount !== 1) {
      throw DB_ERROR.NOT_FOUND
    }
    return results.rows[0];
  } catch (error: any) {
    if (error === DB_ERROR.NOT_FOUND) {
      throw DB_ERROR.NOT_FOUND
    } else {
      throw DB_ERROR.GET_USER_ERROR
    }
  }
}

export async function updateUserConnection(id: string, lastLoggedInDate: string) {
  try {
    const results = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (results.rowCount !== 1) {
      throw DB_ERROR.NOT_FOUND
    } else {
      const user = results.rows[0];
      try {
        await db.query('UPDATE users SET connection = $1 WHERE id = $2', [lastLoggedInDate, user.id]);
      } catch {
        throw DB_ERROR.UPDATE_USER_ERROR
      }
    }
  } catch {
    throw DB_ERROR.GET_USER_ERROR
  }
}

export default db;
