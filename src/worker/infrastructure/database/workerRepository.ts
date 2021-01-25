import database from './database.json';
import { Worker } from '../../domain/worker';

const findAllWorkers = (): Array<Worker> => database.workers;

export interface WorkerRepository {
  findAllWorkers: () => Array<Worker>;
}

export default {
  findAllWorkers
};
