import HardcodeDatabase from './hardcodeDatabaseService';
import HardcodeWorkerRepository from './hardcodeWorkerRepository';

const mockWorkers = [{ id: 1, name: 'Carl' }];
jest.mock('./database.json', () => ({
  workers: [{ id: 1, name: 'Carl' }]
}));

const mockAddWorkers = jest.fn();

jest.mock('./hardcodeWorkerRepository', () => {
  return jest.fn().mockImplementation(() => {
    return { addWorkers: mockAddWorkers };
  });
});

describe('Hardcode database', () => {
  test('should create the hardcode worker repository', () => {
    new HardcodeDatabase();

    expect(HardcodeWorkerRepository).toBeCalledTimes(1);
  });

  test('should initialize the database', async () => {
    const hardcodeDatabase = new HardcodeDatabase();

    await hardcodeDatabase.initDatabase();

    expect(mockAddWorkers).toBeCalledWith(mockWorkers);
  });
});
