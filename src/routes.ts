/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheckRouter from './api/healthcheck';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheckRouter);

  // users
  // app.use('/api/users', userRouter);
  // app.use('/api/payments', paymentRouter);
}

export default routes;
