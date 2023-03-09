import db from '../appDatabase';
import { config } from '../appConfig';
import logger from '../appLogger';
import { hashPassword } from './hash';

export default async function seedAdminUser() {
  logger.info('Seeding root user...');

  const user = await db.user.findUnique({
    where: {
      id: config.rootId
    }
  });

  if (user != null) {
    logger.info('Root user already exists. Skipping database seeding');
    return;
  }

  const hashedPassword = await hashPassword(config.pinCode);
  await db.user.create({
    data: {
      id: config.rootId,
      password: hashedPassword,
      lastLoggedInDate: "Never"
    },
  });
}
