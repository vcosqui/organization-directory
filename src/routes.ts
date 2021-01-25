import { Express } from 'express';
import workerRoutes from './worker/infrastructure/http/workerRoutes';

export default (app: Express): void => {
  workerRoutes(app);
};
