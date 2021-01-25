import { Request, Response } from 'express-serve-static-core';
import workerService, { WorkerService } from './workerService';

type WorkerControllerDependencies = {
  workerService: WorkerService;
};

export interface WorkerController {
  getWorkers: (req: Request, res: Response) => void;
}

export const workerControllerBuilder = ({ workerService }: WorkerControllerDependencies): WorkerController => {
  const getWorkers = (req: Request, res: Response) => {
    try {
      const response = workerService.getWorkers();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message);
    }
  };
  return { getWorkers };
};

export default workerControllerBuilder({ workerService });
