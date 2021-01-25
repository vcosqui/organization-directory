import workerRepository from './workerRepository';

const mockWorkers = [{ id: 1, name: 'Carl' }];
jest.mock('./database.json', () => ({
  workers: [{ id: 1, name: 'Carl' }]
}));

describe('Worker Repository', () => {
  test('It should find all the workers', () => {
    const workers = workerRepository.findAllWorkers();

    expect(workers).toStrictEqual(mockWorkers);
  });
});
