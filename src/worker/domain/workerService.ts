import { Worker } from './worker';

export interface WorkerService {
  getWorkers: () => Array<Worker>;
}

export interface WorkerRepository {
  findAllWorkers: () => Array<Worker>;
  addWorkers: (workers: Array<Worker>) => void;
}

export default (workerRepository: WorkerRepository): WorkerService => {
  const getWorkers = (): Array<Worker> => workerRepository.findAllWorkers();
  return { getWorkers };
};
