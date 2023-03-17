import db from '../appDatabase';
import logger from '../appLogger';
import { redisClient } from '../appStore';

export default async function waitApp() {

  /* Postgresql */
  logger.info('Waiting database...');
  await new Promise<void>((resolve) => {
    const interval = setInterval(async () => {
      let isConnected = false;
      try {
        await db.query('SELECT * FROM users');
        isConnected = true;
      } catch {
        isConnected = false;
      }
      if (isConnected) {
        clearInterval(interval);
        resolve();
      }
    }, 1000);
  });
  logger.info('Connected to database !');

  /* Redis */
  if (redisClient) {
    logger.info('Waiting redis...');
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        const isConnected = redisClient?.ping();
        if (isConnected) {
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });
    logger.info('Connected to redis !');
  }
}
