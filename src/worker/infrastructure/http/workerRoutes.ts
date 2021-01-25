import { Express } from 'express';
import workerController from '../../application/workerController';

export default (app: Express) => {
  app.get('/', workerController.getWorkers);
};
