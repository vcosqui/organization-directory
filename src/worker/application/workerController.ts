import { Request, Response } from 'express-serve-static-core';
import GetWorkers from '../domain/getWorkers';
import { Dependencies } from '../../config/projectDependencies';

export interface WorkerController {
  getWorkers: (req: Request, res: Response) => void;
}

export default ({ databaseService }: Dependencies): WorkerController => {
  const { workerRepository } = databaseService;

  const getWorkers = (req: Request, res: Response) => {
    try {
      const response = GetWorkers(workerRepository).Execute();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  };
  return { getWorkers };
};
