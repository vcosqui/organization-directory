import { Worker } from './worker';
import { WorkerRepository } from './workerService';

export interface GetWorkersCommand {
  Execute: () => Array<Worker>;
}

export default (workerRepository: WorkerRepository): GetWorkersCommand => {
  const Execute = (): Array<Worker> => workerRepository.findAllWorkers();
  return { Execute };
};
