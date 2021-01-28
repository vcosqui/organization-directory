import { WorkerRepository } from './workerService';
import getWorkers from './getWorkers';

describe('Worker Service', () => {
  const workerRepositoryMock = {
    findAllWorkers: jest.fn(),
    addWorkers: jest.fn()
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('it should return the list of workers', () => {
    const expectedWorkers = [{ id: 1, name: 'Carl' }];
    workerRepositoryMock.findAllWorkers.mockReturnValue(expectedWorkers);

    const getWorkersCommand = getWorkers(workerRepositoryMock as WorkerRepository);
    const workers = getWorkersCommand.Execute();

    expect(workers).toStrictEqual(expectedWorkers);
  });
});
