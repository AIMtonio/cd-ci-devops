import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class PythonRunnerService {
  runHola(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const py = spawn('python3', ['/opt/scripts/hola.py', name], {
        env: { ...process.env }, // puedes inyectar variables
      });

      let stdout = '';
      let stderr = '';

      py.stdout.on('data', (data) => (stdout += data.toString()));
      py.stderr.on('data', (data) => (stderr += data.toString()));

      // Timeout defensivo (ej. 15s)
      const timeout = setTimeout(() => {
        py.kill('SIGKILL');
        reject(new InternalServerErrorException('Python timeout'));
      }, 15000);

      py.on('close', (code) => {
        clearTimeout(timeout);
        if (code === 0) {
          try {
            const json = JSON.parse(stdout.trim()); // esperamos JSON
            resolve(json);
          } catch {
            resolve({ raw: stdout.trim() }); // por si no es JSON
          }
        } else {
          reject(
            new InternalServerErrorException(
              `Python error (code ${code}): ${stderr || stdout}`,
            ),
          );
        }
      });
    });
  }
}