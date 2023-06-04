import express from 'express';
import cors from 'cors';
import router from './components';
import requestLogger from './middlewares/requestLogger';
import errorMiddleware from './middlewares/errorMiddleware';
import notFoundMiddleware from './middlewares/notFoundMiddleware';

const app = express();

app.use(cors({
  exposedHeaders: 'Authorization',
  // Development and production servers
  origin: ['http://localhost:5173', 'https://nas.local', 'https://127.0.0.1' ],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
app.set('trust proxy', true);
app.use(router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
