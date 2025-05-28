import { COLORS } from '../../helpers/colors.ts';

// TODO: Implementar el LocalLogger Class

export class LocalLogger {
  constructor(private file: string) {}

  writeLog(message: string) {
    console.log(`[${this.file}] ${message}`);
  }

  writeError(message: string) {
    console.log(`[${this.file} ERROR] %c${message}`, COLORS.red);
  }

  writeWarning(message: string) {
    console.log(`[${this.file} WARNING] %c${message}`, COLORS.yellow);
  }

  writeInfo(message: string) {
    console.log(`[${this.file} INFO] %c${message}`, COLORS.blue);
  }
}