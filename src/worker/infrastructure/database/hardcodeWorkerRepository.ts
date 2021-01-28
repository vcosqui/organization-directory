import { Worker } from '../../domain/worker';
import { WorkerRepository } from '../../domain/workerService';

export default class HardcodeWorkerRepository implements WorkerRepository {
  private workers: Array<Worker> = [];

  constructor() {
    this.workers = [];
  }

  findAllWorkers(): Array<Worker> {
    return this.workers;
  }

  addWorkers(newWorkers: Array<Worker>): void {
    this.workers.push(...newWorkers);
  }
}
