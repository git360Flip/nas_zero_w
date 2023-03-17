import express from 'express';
import handler from 'express-async-handler';
import * as controllers from './userControllers';
import validate from '../../middlewares/validationMiddleware';
import { UserLoginDto } from './userTypes';
import httpStatus from 'http-status-codes';
import authMiddleware from '../../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     UserLoginDto:
 *       description: User Data Object
 *       type: object
 *       required:
 *         - password
 *       properties:
 *         password:
 *           type: string
 *           description: Pin code set in environment
 *       example:
 *         password: 4242
 *     UserRo:
 *       description: User Response Object
 *       type: object
 *       required:
 *         - connection
 *       properties:
 *         connection:
 *           type: string
 *           description: Date of the latest connection
 *       example:
 *         connection: 03/03/2023 16:43
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The user managing API
 */

router.post(
  '/user/login',
  validate(UserLoginDto),
  handler(async (req, res) => {
    await controllers.login(req.body, res);
    res.sendStatus(httpStatus.OK);
  }),
);

router.post(
  '/user/logout',
  authMiddleware,
  handler(async (_, res) => {
    await controllers.logout();
    res.sendStatus(httpStatus.OK);
  }),
);

router.get(
  '/user',
  handler(async (_, res) => {
    const user = await controllers.getLastConnectionDate();
    res.send(user);
  }),
)

export default router;