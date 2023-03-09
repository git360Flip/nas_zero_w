import { RequestHandler } from "express";
import { config } from '../appConfig';
import httpStatus from 'http-status-codes';
import createError from 'http-errors';
import { jwtr } from "../appStore";
import logger from "../appLogger";

/**
 * Auth middleware
 * Used to verify if the user is connected and has a JWT token
 *
 * Send 401 -- Unauthorized if the user has not a valid JWT token
 */
const authMiddleware: RequestHandler = async (req, res, next) => {
  let token: string | null = null;
  let headers = req.headers['x-access-token'] || req.headers['authorization'];

  if (headers != null) {
    if (typeof headers === "string" && headers.startsWith('Bearer ')) {
      token = headers.slice(7, headers.length);
    } else {
      for (let i = 0; i < headers.length; i += 1) {
        if (headers[i].startsWith('Bearer ')) {
          token = headers[i].slice(7, headers[i].length);
          break;
        }
      }
    }
  }

  if (token != null && jwtr != null) {
    try {
      const tokenData = await jwtr.verify(token, config.secretKey);
      const expiresIn = 24 * 60 * 60;
      const newToken  = await jwtr.sign({
        jti: tokenData.jti
      },
      config.secretKey,
      {
        expiresIn: expiresIn
      });
      res.header('Authorization', 'Bearer ' + newToken);
      next();
    } catch {
      next(createError(httpStatus.UNAUTHORIZED, 'You must be logged in'))
    }
  } else {
    next(createError(httpStatus.UNAUTHORIZED, 'You must be logged in'))
  }
};

export default authMiddleware;