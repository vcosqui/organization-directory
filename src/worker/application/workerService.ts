import workerRepository, { WorkerRepository } from '../infrastructure/database/workerRepository';
import { Worker } from '../domain/worker';

export interface WorkerService {
  getWorkers: () => Array<Worker>;
}

type WorkerServiceDependencies = {
  workerRepository: WorkerRepository;
};

export const WorkerServiceBuilder = ({ workerRepository }: WorkerServiceDependencies): WorkerService => {
  const getWorkers = (): Array<Worker> => workerRepository.findAllWorkers();
  return { getWorkers };
};

export default WorkerServiceBuilder({ workerRepository });
// should we do it per each service exporting a builder and an instance
