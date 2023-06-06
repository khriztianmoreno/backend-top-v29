import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

function configExpress(app: Application) {
  // This function will configure the express
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
}

export default configExpress;
