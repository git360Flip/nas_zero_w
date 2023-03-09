import db from '../appDatabase';
import logger from '../appLogger';

export default async function closeApp() {
  /*  Prisma  */
  logger.info('Disconnecting from database...');
  await db
    .$disconnect()
    .then(() => {
      logger.info('Disconnected from database !');
    })
    .catch((error: any) => {
      logger.error(error);
      throw error;
    });
}
