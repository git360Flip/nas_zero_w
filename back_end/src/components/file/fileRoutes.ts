import express from 'express';
import handler from 'express-async-handler';
import * as controllers from './fileControllers';
import authMiddleware from '../../middlewares/authMiddleware';

const router = express.Router();

router.get(
  '/file',
  authMiddleware,
  handler(async (req, res) => {
    let diskPath: string | undefined = undefined
    try {
      diskPath = req.query.diskPath as string
    } catch {
      diskPath = undefined
    }
    const files = controllers.getFiles(diskPath);
    res.send(files);
  }),
)

export default router;