import { createUser, DB_ERROR, getUserById } from '../appDatabase';
import { config } from '../appConfig';
import logger from '../appLogger';

export default async function seedAdminUser() {
  logger.info('Seeding root user...');

  try {
    await getUserById(config.rootId);
  } catch (error: any) {
    if (error === DB_ERROR.NOT_FOUND) {
      logger.info('Root user not found');
      await createUser(config.rootId, config.pinCode);
    } else {
      logger.error(error);
    }
  }
}
