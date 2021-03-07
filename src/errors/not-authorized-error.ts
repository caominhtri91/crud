import { CustomError } from './custom-error';
import { ResponseStatus, BusinessError } from '../handler/status-code';

export class NotAuthorizedError extends CustomError {
  statusCode = ResponseStatus.UNAUTHORIZED;

  constructor(public message: string, public businessCode: BusinessError) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): {
    code: number;
    messages: string[];
    field?: string | undefined;
  } {
    return { code: this.businessCode, messages: [this.message] };
  }
}
