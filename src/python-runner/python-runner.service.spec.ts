import { Test, TestingModule } from '@nestjs/testing';
import { PythonRunnerService } from './python-runner.service';

describe('PythonRunnerService', () => {
  let service: PythonRunnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PythonRunnerService],
    }).compile();

    service = module.get<PythonRunnerService>(PythonRunnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
