import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PythonRunnerService } from 'src/python-runner/python-runner.service';

@Module({
  controllers: [AppController],
  providers: [PythonRunnerService],
})
export class AppModule {}