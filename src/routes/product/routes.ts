import { Request, Response } from 'express';
import { body } from 'express-validator';

import { SuccessResponse, SuccessNoResponse } from '../../lib/ApiResponse';
import { prefixApiV1 } from '../version';
import { create, update, soft_delete, get_list } from './controllers';
import { validateRequest } from '../../middleware/validate-request';
import { ResponseStatus } from '../../lib/status-code';

export default [
  {
    path: `${prefixApiV1}/get_list`,
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        const get_list_data = await get_list();

        return new SuccessResponse(get_list_data).send(res);
      },
    ],
  },
  {
    path: `${prefixApiV1}/create`,
    method: 'post',
    handler: [
      body('name')
        .notEmpty()
        .withMessage(`You must supply product's name`)
        .isString()
        .withMessage(`Product's name must be string`),
      body('category')
        .notEmpty()
        .withMessage(`You must supply product's category`)
        .isString()
        .withMessage(`Product's category must be string`),
      body('price')
        .notEmpty()
        .withMessage(`You must supply product's price`)
        .isNumeric()
        .withMessage(`Product's price must be number`),
      validateRequest,
      async (req: Request, res: Response) => {
        const result = await create(req.body);

        return new SuccessResponse(result, ResponseStatus.CREATED).send(res);
      },
    ],
  },
  {
    path: `${prefixApiV1}/update`,
    method: 'put',
    handler: [
      body('id')
        .notEmpty()
        .withMessage(`You must supply product's id`)
        .isInt()
        .withMessage(`Product's id must be number`),
      body('name')
        .optional()
        .isString()
        .withMessage(`Product's name must be string`),
      body('category')
        .optional()
        .isString()
        .withMessage(`Product's category must be string`),
      body('price')
        .optional()
        .isNumeric()
        .withMessage(`Product's price must be number`),
      validateRequest,
      async (req: Request, res: Response) => {
        const result = await update(req.body);

        return new SuccessResponse(result, ResponseStatus.SUCCESS).send(res);
      },
    ],
  },
  {
    path: `${prefixApiV1}/delete`,
    method: 'delete',
    handler: [
      body('id')
        .notEmpty()
        .withMessage(`You must supply product's id`)
        .isInt()
        .withMessage(`Product's id must be number`),
      async (req: Request, res: Response) => {
        const result = await soft_delete(req.body);

        return new SuccessResponse(result, ResponseStatus.SUCCESS).send(res);
      },
    ],
  },
];
