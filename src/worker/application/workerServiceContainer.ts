import { workerServiceBuilder } from './workerService';
import { workerControllerBuilder } from './workerController';
import workerRepository from '../infrastructure/database/workerRepository';

const workerService = workerServiceBuilder({ workerRepository });

export default workerControllerBuilder({ workerService });
