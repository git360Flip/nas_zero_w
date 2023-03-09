import db from '../appDatabase';
import logger from '../appLogger';
import { config } from '../appConfig';
import { redisClient } from '../appStore';

export default async function waitApp() {
  /*  Prisma  */
  logger.info('Waiting database...');
  await db
    .$connect()
    .then(() => {
      logger.info('Connected to database !');
    })
    .catch((error: any) => {
      logger.error(error);
      logger.error(`Can't connect to database at url ${config.dbUrl}`);
      throw error;
    });

  /*  Redis */
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
