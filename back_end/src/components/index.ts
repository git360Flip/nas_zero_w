import express from 'express';

import user from './user/userRoutes';
import file from './file/fileRoutes';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Welcome to NAS Zero W Back End');
});

router.use(user);
router.use(file);

export default router;
