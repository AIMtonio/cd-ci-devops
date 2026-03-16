import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PythonRunnerService } from './python-runner.service';
import { CreatePythonRunnerDto } from './dto/create-python-runner.dto';
import { UpdatePythonRunnerDto } from './dto/update-python-runner.dto';

@Controller('python-runner')
export class PythonRunnerController {
  constructor(private readonly pythonRunnerService: PythonRunnerService) {}

}
