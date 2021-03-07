import { NextFunction, Request, Response, Router } from 'express';
import { CustomError } from '../errors/custom-error';
import { BusinessError } from '../handler/status-code';

const handleError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
      return res
        .status(err.statusCode)
        .send({ success: false, data: null, error: err.serializeErrors() });
    }

    res.status(500).send({
      success: false,
      data: null,
      error: { code: BusinessError.UNKNOWN_ERROR, message: err.message },
    });
  });
};

export default [handleError];
