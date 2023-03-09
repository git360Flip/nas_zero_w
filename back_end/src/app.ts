import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import router from './components';
import requestLogger from './middlewares/requestLogger';
import errorMiddleware from './middlewares/errorMiddleware';
import notFoundMiddleware from './middlewares/notFoundMiddleware';

// Production and developement servers
const corsOptions = {
  origin: ['http://localhost:5173', 'https://127.0.0.1' ],
  credentials: true,
};
const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API NAS ZERO W',
      version: '1.0.0',
      description: 'REST API used by the front-end nas zero w.',
    },
    servers: [
      {
        url: 'https://127.0.0.1:8000',
      },
    ],
    components: {},
  },
  apis: [
    `${__dirname}/components/friend/friendRoutes.ts`,
    `${__dirname}/components/log/logRoutes.ts`,
    `${__dirname}/components/device/deviceRoutes.ts`,
    `${__dirname}/components/shop/shopRoutes.ts`,
    `${__dirname}/components/user/userRoutes.ts`,
    `${__dirname}/components/fcmToken/fcmTokenRoutes.ts`,
    `${__dirname}/components/ia/iaRoutes.ts`,
    `${__dirname}/components/friend/friendRoutes.js`,
    `${__dirname}/components/log/logRoutes.js`,
    `${__dirname}/components/device/deviceRoutes.js`,
    `${__dirname}/components/shop/shopRoutes.js`,
    `${__dirname}/components/user/userRoutes.js`,
    `${__dirname}/components/fcmToken/fcmTokenRoutes.js`,
    `${__dirname}/components/ia/iaRoutes.js`,
  ],
};

const specs = swaggerJSDoc(options);

app.use(cors(corsOptions));
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
app.set('trust proxy', true);
app.use(router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
