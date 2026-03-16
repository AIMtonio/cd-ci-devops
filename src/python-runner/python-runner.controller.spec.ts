import { Test, TestingModule } from '@nestjs/testing';
import { PythonRunnerController } from './python-runner.controller';
import { PythonRunnerService } from './python-runner.service';

describe('PythonRunnerController', () => {
  let controller: PythonRunnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PythonRunnerController],
      providers: [PythonRunnerService],
    }).compile();

    controller = module.get<PythonRunnerController>(PythonRunnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
