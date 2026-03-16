import { PartialType } from '@nestjs/mapped-types';
import { CreatePythonRunnerDto } from './create-python-runner.dto';

export class UpdatePythonRunnerDto extends PartialType(CreatePythonRunnerDto) {}
