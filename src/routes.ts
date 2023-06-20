/**
 * Main application routes
 */
import { Application } from 'express';

import authLocalRouter from './auth/local';
import companyRouter from './api/company';
import healthcheckRouter from './api/healthcheck';
import jobRouter from './api/job';
import paymentRouter from './api/payment';
import uploadRouter from './api/upload';
import userRouter from './api/user';

function routes(app: Application) {
  app.use('/api/companies', companyRouter);
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/jobs', jobRouter);
  app.use('/api/payments', paymentRouter);
  app.use('/api/upload', uploadRouter);
  app.use('/api/users', userRouter);

  // Auth
  app.use('/auth/local', authLocalRouter);
}

export default routes;
