import httpStatus from 'http-status-codes';
import createError from 'http-errors';
import { config } from "../../appConfig";
import { DB_ERROR, getUserById, updateUserConnection } from "../../appDatabase";
import { UserLoginDto, UserRo } from "./userTypes";
import { verifyPassword } from '../../utils/hash';
import { jwtr } from '../../appStore';

function getCurrentConnectionTime(): string {
  return new Date()
  .toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
  })
  .replace(',', ' -');
}

export async function getLastConnectionDate(): Promise<UserRo | undefined> {
  try {
    const user = await getUserById(config.rootId);
    return {
      connection: user.connection
    }
  } catch (error) {
    if (error === DB_ERROR.NOT_FOUND) {
      throw createError(httpStatus.NOT_FOUND, error);
    } else if (error === DB_ERROR.GET_USER_ERROR) {
      throw createError(httpStatus.INTERNAL_SERVER_ERROR, error);
    }
  }
}

export async function logout() {
  if (jwtr != null) {
    try {
      await jwtr.destroy(config.rootId);
    } catch {
      throw createError(httpStatus.NOT_FOUND, 'Invalid token');
    }
  }
}

export async function login(userLoginDto: UserLoginDto, res: any) {
  try {
    const user = await getUserById(config.rootId);
    if (await verifyPassword(userLoginDto.password, user.password) === false) {
      throw DB_ERROR.INVALID_PASSWORD;
    } else {
      const now = getCurrentConnectionTime();
      try {
        await updateUserConnection(user.id, now);
        if (jwtr != null) {
          const expireIn = 24 * 60 * 60;
          const token = await jwtr.sign({
            jti: config.rootId
          },
          config.secretKey,
          {
            expiresIn: expireIn
          });
          res.header('Authorization', 'Bearer ' + token);
        }
      } catch (error: any) {
        throw error;
      }
    }
  } catch (error) {
    if (error === DB_ERROR.NOT_FOUND) {
      throw createError(httpStatus.NOT_FOUND, error);
    } else if (error === DB_ERROR.GET_USER_ERROR || error === DB_ERROR.UPDATE_USER_ERROR) {
      throw createError(httpStatus.INTERNAL_SERVER_ERROR, error);
    } else if (error === DB_ERROR.INVALID_PASSWORD) {
      throw createError(httpStatus.UNAUTHORIZED, error);
    }
  }
}