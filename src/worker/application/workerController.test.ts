import { workerControllerBuilder } from './workerController';
import { Request, Response } from 'express-serve-static-core';
import { WorkerService } from './workerService';
import { Worker } from '../domain/worker';

describe('workerController', () => {
  test('it should return the list of workers', () => {
    const expectedWorkers: Array<Worker> = [{ id: 1, name: 'Carl' }];
    const workerServiceMock: WorkerService = { getWorkers: jest.fn().mockReturnValue(expectedWorkers) };
    const workerController = workerControllerBuilder({ workerService: workerServiceMock });
    const reqMock: Partial<Request> = {};
    const resMock: Partial<Response> = { json: jest.fn() };

    workerController.getWorkers(reqMock as Request, resMock as Response);

    expect(workerServiceMock.getWorkers).toBeCalledTimes(1);
    expect(resMock.json).toBeCalledTimes(1);
    expect(resMock.json).toBeCalledWith(expectedWorkers);
  });
});
