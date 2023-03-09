import { get } from 'env-var';

const env = (name: string, required = true) => get(name).required(required);

export enum MODES {
  TEST = 'test',
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
}

export const config = {
  port: env('PORT').asPortNumber(),
  pinCode: env('PIN_CODE').asString(),
  rootId: env('ROOT_ID').asString(),
  mode: env('MODE').asEnum(Object.values(MODES)),
  secretKey: env('SECRET_KEY').asString(),
  dbUrl: env('DATABASE_URL').asString(),
  saltRounds: 12,
};
