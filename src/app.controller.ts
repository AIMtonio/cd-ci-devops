import { Controller, Get, Query } from '@nestjs/common';
import { PythonRunnerService } from 'src/python-runner/python-runner.service';

@Controller('deploy')
export class AppController {
  constructor(private readonly py: PythonRunnerService) {}

  @Get('back-dinamic-architect')
  async hola(@Query('name') name = 'mundo') {
    // GET /ges?name=Antonio
    return await this.py.runHola(name);
  }
}