import databaseSeed from './database.json';
import { Worker } from '../../domain/worker';
import HardcodeWorkerRepository from './hardcodeWorkerRepository';
import { WorkerRepository } from '../../domain/workerService';
import { DatabaseService } from '../../application/contracts/databaseService';

export default class HardcodeDatabase implements DatabaseService {
  public workerRepository: WorkerRepository;

  constructor() {
    this.workerRepository = new HardcodeWorkerRepository();
  }

  async initDatabase() {
    const workers: Array<Worker> = databaseSeed.workers;
    this.workerRepository.addWorkers(workers);
  }
}
