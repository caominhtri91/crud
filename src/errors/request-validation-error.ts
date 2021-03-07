import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { ResponseStatus, BusinessError } from '../handler/status-code';

export class RequestValidationError extends CustomError {
  statusCode = ResponseStatus.BAD_REQUEST;

  constructor(
    public errors: ValidationError[],
    public businessCode: BusinessError
  ) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    const messages = this.errors.map((err) => {
      return err.msg;
    });

    return { code: this.businessCode, messages };
  }
}
