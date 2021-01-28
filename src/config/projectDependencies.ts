import { DatabaseService } from '../worker/application/contracts/databaseService';
import HardcodeDatabase from '../worker/infrastructure/database/hardcodeDatabaseService';

export interface Dependencies {
  databaseService: DatabaseService;
}

export default {
  databaseService: new HardcodeDatabase()
} as Dependencies;
