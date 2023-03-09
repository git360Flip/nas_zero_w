import type { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status-codes';

import logger from '../appLogger';
import { ErrorRo } from '../appRo';

/**
 * Error middleware
 * Every error thrown in a route ends up here to be sent to the user
 * They are formatted into a generic RO, to have uniform error replies
 *
 * Not wanted errors (for example, a crash in the route) are
 * converted into a 500 - Internal server errors
 */
const errorMiddleware: ErrorRequestHandler = (err, _1, res, _2) => {
  logger.error(err.message);
  const status = err.status ?? httpStatus.INTERNAL_SERVER_ERROR;
  res.status(status).send(ErrorRo(status, err.message));
};

export default errorMiddleware;