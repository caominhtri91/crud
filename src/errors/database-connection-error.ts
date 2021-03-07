import { CustomError } from './custom-error';
import { ResponseStatus, BusinessError } from '../handler/status-code';

export class DatabaseConnectionError extends CustomError {
  statusCode = ResponseStatus.INTERNAL_ERROR;
  reason = 'Error connecting to database';
  busCode = BusinessError.DATABASE_ERROR;

  constructor() {
    super('Error connecting to database');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return { code: this.busCode, messages: [this.reason] };
  }
}
