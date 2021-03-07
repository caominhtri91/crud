import { CustomError } from './custom-error';
import { ResponseStatus, BusinessError } from '../handler/status-code';

export class BadRequestError extends CustomError {
  statusCode = ResponseStatus.BAD_REQUEST;

  constructor(public message: string, public businessCode: BusinessError) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return {
      code: this.businessCode,
      messages: [this.message],
    };
  }
}
