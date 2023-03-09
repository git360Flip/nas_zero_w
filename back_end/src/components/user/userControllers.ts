import httpStatus from 'http-status-codes';
import createError from 'http-errors';
import { config } from "../../appConfig";
import db from "../../appDatabase";
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

export async function getLastConnectionDate(): Promise<UserRo> {
  const user = await db.user.findUnique({where: { id: config.rootId }});
  if (user == null) {
    throw createError(httpStatus.NOT_FOUND, `No user has been set`);
  }
  return {
    lastLoggedInDate: user.lastLoggedInDate
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

export async function login(userLoginDto: UserLoginDto, res: any): Promise<UserRo> {
  const now = getCurrentConnectionTime(); 
  const user = await db.user.update({where: {id: config.rootId}, data: {
    lastLoggedInDate: now
  }});
  if (user == null) {
    throw createError(httpStatus.NOT_FOUND, `No user has been set`);
  } else if (await verifyPassword(userLoginDto.password, user.password) === false) {
    throw createError(httpStatus.UNAUTHORIZED, 'Invalid password');
  }
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
  return {
    lastLoggedInDate: user.lastLoggedInDate
  };
}