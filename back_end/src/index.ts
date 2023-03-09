import https from 'https';
import fs from 'fs';
import app from './app';
import logger from './appLogger';
import { config } from './appConfig';
import waitApp from './utils/waitApp';
import seedAdminUser from './utils/seedRootUser';
import closeApp from './utils/closeApp';

const { port } = config;

async function main() {
  let sigIntCounter = 0;
  await waitApp();
  await seedAdminUser();
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync('./certificates/privkey.pem'),
      cert: fs.readFileSync('./certificates/fullchain.pem'),
    },
    app,
  );
  httpsServer.listen(port, () => {
    logger.info(`Server listening on port ${port} on mode ${config.mode}...`);
  });
  process.on('SIGINT', async () => {
    if (sigIntCounter < 1) {
      logger.info(`Stopping server...`);
      await closeApp();
      setTimeout(() => process.exit(0), 1000);
    }
    sigIntCounter += 1;
  });
}

main().catch((error) => {
  logger.error(error);
  throw error;
});
