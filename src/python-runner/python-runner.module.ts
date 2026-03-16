import { Module } from '@nestjs/common';
import { PythonRunnerService } from './python-runner.service';
import { PythonRunnerController } from './python-runner.controller';

@Module({
  controllers: [PythonRunnerController],
  providers: [PythonRunnerService],
})
export class PythonRunnerModule {}
