import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter
export interface ILoggerAdapter {
  file: string;
  writeLog(message: string): void;
  writeError(message: string): void;
  writeWarning(message: string): void;
}

export class LoggerAdapter implements ILoggerAdapter {
  file: string;
  private logger: Logger = new Logger();
  constructor(file: string) {
    this.file = file;
  }

  writeLog(message: string) {
    this.logger.info(message);
  }

  writeError(message: string) {
    this.logger.error(message);
  }

  writeWarning(message: string) {
    this.logger.warn(message);
  }
}