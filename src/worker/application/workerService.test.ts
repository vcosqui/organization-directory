import workerService, { WorkerService, workerServiceBuilder } from './workerService';

// di, the motor that create each dependency is main
// auto di, export de di to inject and the instance of the service
// not di // jest.mock etc

const mockFindAllWorkers = jest.fn();
jest.mock('../infrastructure/database/workerRepository', () => ({
  __esModule: true,
  default: {
    findAllWorkers: () => mockFindAllWorkers()
  }
}));

describe('Worker Service', () => {
  describe('no di', () => {
    test('it should return the list of workers', () => {
      const expectedWorkers = [{ id: 1, name: 'Carl' }];
      mockFindAllWorkers.mockReturnValue(expectedWorkers);

      const workers = workerService.getWorkers();

      expect(workers).toStrictEqual(expectedWorkers);
    });
  });

  // ----------------------------------------------------- //

  describe('di', () => {
    const workerRepositoryMock = { findAllWorkers: jest.fn() };
    const workerService: WorkerService = workerServiceBuilder({ workerRepository: workerRepositoryMock });

    beforeEach(() => {
      jest.resetAllMocks();
    });

    test('it should return the list of workers (di)', () => {
      const expectedWorkers = [{ id: 1, name: 'Carl' }];
      workerRepositoryMock.findAllWorkers.mockReturnValue(expectedWorkers);

      const workers = workerService.getWorkers();

      expect(workers).toStrictEqual(expectedWorkers);
    });
  });
});
