import { Request, Response } from 'express';

import { SuccessTextResponse } from '../../handler/api-response';
import { prefixApiV1 } from '../version';
import { health } from './controllers';

export default [
  {
    path: `${prefixApiV1}/health`,
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        const healthResp = await health();

        return new SuccessTextResponse(healthResp).send(res);
      },
    ],
  },
];
