import WorkerRepository from './hardcodeWorkerRepository';

describe('Hardcode worker Repository', () => {
  test('should create the repository without workers', () => {
    const workerRepository = new WorkerRepository();

    expect(workerRepository.findAllWorkers()).toStrictEqual([]);
  });

  test('It should add a list of workers', () => {
    const mockWorkers = [{ id: 1, name: 'Carl' }];
    const workerRepository = new WorkerRepository();

    workerRepository.addWorkers(mockWorkers);
    expect(workerRepository.findAllWorkers()).toStrictEqual(mockWorkers);
  });
});
