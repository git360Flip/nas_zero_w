import express from 'express';

import user from './user/userRoutes';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Welcome to NAS Zero W Back End');
});

router.use(user);

export default router;
