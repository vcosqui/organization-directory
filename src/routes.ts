import { Express } from 'express';
import workerRoutes from './worker/infrastructure/http/workerRoutes';
import { Dependencies } from './config/projectDependencies';

export default (app: Express, dependencies: Dependencies): void => {
  workerRoutes(app, dependencies);
};
