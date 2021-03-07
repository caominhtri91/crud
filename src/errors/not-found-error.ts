import { CustomError } from './custom-error';
import { ResponseStatus, BusinessError } from '../handler/status-code';

export class NotFoundError extends CustomError {
  statusCode = ResponseStatus.NOT_FOUND;
  busCode = BusinessError.ROUTE_NOTFOUND_ERROR;

  constructor() {
    super('Route Not Found');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): {
    code: number;
    messages: string[];
    field?: string | undefined;
  } {
    return {
      code: this.busCode,
      messages: ['Not Found'],
    };
  }
}
