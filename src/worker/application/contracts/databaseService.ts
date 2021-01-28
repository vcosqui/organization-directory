import { WorkerRepository } from '../../domain/workerService';

export interface DatabaseService {
  workerRepository: WorkerRepository;
  initDatabase: () => Promise<void>;
}
