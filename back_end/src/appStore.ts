import logger from './appLogger';
import { config, MODES, redisConfig } from './appConfig';
import { createClient, RedisClientType } from 'redis';
import JWTRedis from 'jwt-redis';

export let redisClient: RedisClientType | null = null;
export let jwtr : JWTRedis | null = null;


if (redisConfig.enabled) {
  if (config.mode !== MODES.PROD) {
    redisClient = createClient();
  } else {
    redisClient = createClient({
    url: 'redis://' + redisConfig.host + ':' + redisConfig.port
  });
  }
  redisClient.on('error', (err: any) => logger.error(err));
  redisClient.connect().then(() => {
    if (redisClient != null) {
      jwtr = new JWTRedis(redisClient);
    }
  })
}