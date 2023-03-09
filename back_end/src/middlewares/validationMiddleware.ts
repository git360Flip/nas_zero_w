import type { RequestHandler } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate as classValidator } from 'class-validator';
import httpStatus from 'http-status-codes';
import createError from 'http-errors';
import handler from 'express-async-handler';

/**
 * Validate the request body
 *
 * @param type The DTO object, defining the shape of the body
 * @throws 400 - Bad request | If at least one constraint is not respected
 *
 * @example
 * import validate from 'middlewares/validationMiddleware'
 * router.post('/user/login', validate(UserLoginDto), ...);
 */
function validate(type: any): RequestHandler {
  return handler(async (req, _, next) => {
    const parsedBody = plainToInstance(type, req.body);
    const errors = await classValidator(parsedBody, { whitelist: true });
    if (errors.length !== 0) {
      const message = errors.join('').trimEnd();
      next(createError(httpStatus.BAD_REQUEST, message));
    } else {
      req.body = parsedBody;
      next();
    }
  });
}

export default validate;
