import { get } from 'env-var';

const env = (name: string, required = true) => get(name).required(required);

export enum MODES {
  TEST = 'test',
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
}

export const config = {
  port: env('API_PORT').asPortNumber(),
  ignoreDSStoreFiles: env('IGNORE_DS_STORE').asBool(),
  diskRootPath: env('DISK_ROOT_PATH').asString(),
  pinCode: env('PIN_CODE').asString(),
  rootId: env('ROOT_ID').asString(),
  mode: env('MODE').asEnum(Object.values(MODES)),
  secretKey: env('SECRET_KEY').asString(),
  dbUser: env('DATABASE_USER').asString(),
  dbName: env('DATABASE_NAME').asString(),
  dbPassword: env('DATABASE_PASSWORD').asString(),
  dbPort: env('DATABASE_PORT').asPortNumber(),
  dbHost: env('DATABASE_HOST').asString(),
  dbUrl: env('DATABASE_URL').asString(),
  saltRounds: 12,
};

const redisEnabled = config.mode !== MODES.LOCAL;

export const redisConfig = {
  enabled: redisEnabled,
  port: env('REDIS_PORT', redisEnabled).asPortNumber(),
  host: env('REDIS_HOST', redisEnabled).asString(),
};