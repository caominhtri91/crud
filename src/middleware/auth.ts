import { NextFunction, Request, Response } from 'express';

import { NotAuthorizedError } from '../errors/not-authorized-error';
import { BusinessError } from '../handler/status-code';

/**
 * permissionUserLogin check if user authorized or not
 * @param req
 * @param res
 * @param next
 */
export const permissionUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let authorization: string = req.headers['auth-service'] as string;

    if (!authorization) {
      throw new NotAuthorizedError('Unauthorized', BusinessError.AUTH_ERROR);
    }

    const dataJSON = Buffer.from(authorization, 'base64').toString();
    const data = JSON.parse(dataJSON);

    if (!data.id || !data.email) {
      throw new NotAuthorizedError(
        'Unauthorized',
        BusinessError.MALFORMED_REQUEST_ERROR
      );
    } else {
      req.user = data;
      return next();
    }
  } catch (error) {
    throw error;
  }
};
