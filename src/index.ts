import dotenv from 'dotenv';
dotenv.config();

import './global';

import 'express-async-errors';

import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { createConnection } from 'typeorm';

import { applyMiddleware, applyRoutes } from './lib';
import Logger from './lib/Logger';
import middleware from './middleware';
import errorHandlers from './middleware/error-handler';
import routes from './routes';
import { NotFoundError } from './errors/not-found-error';
import { prefixApiV1 } from './routes/version';

(async () => {
  await createConnection();

  const app = express();
  applyMiddleware(middleware, app);
  applyRoutes(routes, app);

  const doc = require('../swagger.json');
  app.use(`${prefixApiV1}/docs`, swaggerUI.serve, swaggerUI.setup(doc));

  app.get('*', async () => {
    throw new NotFoundError();
  });

  applyMiddleware(errorHandlers, app);

  const { PORT = 3979 } = process.env;

  app.listen(PORT, () => {
    const used_memory = process.memoryUsage().heapUsed / 1024 / 1024;
    Logger.info({
      method: 'service start',
      data: `${new Date().toDateString()} - Server is running at http://localhost:${PORT}. The process uses approximately ${used_memory} MB`,
    });
  });
})();
