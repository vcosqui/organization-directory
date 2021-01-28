import { Express } from 'express';
import workerController from '../../application/workerController';
import { Dependencies } from '../../../config/projectDependencies';

export default (app: Express, dependencies: Dependencies) => {
  const controller = workerController(dependencies);
  app.get('/', controller.getWorkers);
};
