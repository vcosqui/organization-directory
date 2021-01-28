import { Request, Response } from 'express-serve-static-core';
import { WorkerRepository } from '../domain/workerService';
import { Worker } from '../domain/worker';
import workerController from './workerController';
import { Dependencies } from '../../config/projectDependencies';
import getWorkers from '../domain/getWorkers';

const expectedWorkers: Array<Worker> = [{ id: 1, name: 'Carl' }];
const getWorkersMock = jest.fn().mockReturnValue(expectedWorkers);
const getWorkersCommand: typeof getWorkers = jest.fn().mockReturnValue({ Execute: getWorkersMock });

jest.mock('../domain/getWorkers', () => ({
  __esModule: true,
  default: (workerRepository: WorkerRepository) => getWorkersCommand(workerRepository),
  namedExport: jest.fn()
}));

describe('workerController', () => {
  test('it should return the list of workers', () => {
    const workerRepositoryMock: WorkerRepository = {
      findAllWorkers: jest.fn().mockReturnValue(expectedWorkers),
      addWorkers: jest.fn()
    };
    const dependenciesMock: Dependencies = {
      databaseService: { workerRepository: workerRepositoryMock, initDatabase: jest.fn() }
    };
    const controller = workerController(dependenciesMock);
    const reqMock: Partial<Request> = {};
    const resMock: Partial<Response> = { json: jest.fn() };

    controller.getWorkers(reqMock as Request, resMock as Response);

    expect(getWorkersCommand).toBeCalledWith(workerRepositoryMock);
    expect(getWorkersMock).toBeCalledTimes(1);
    expect(resMock.json).toBeCalledTimes(1);
    expect(resMock.json).toBeCalledWith(expectedWorkers);
  });
});
