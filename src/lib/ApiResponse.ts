import { Response } from 'express';
import { ResponseStatus } from './status-code';

interface ObjSucess {
  success: boolean;
  data: any;
  error: object | null;
}

export class SuccessResponse {
  private status: number = ResponseStatus.SUCCESS;
  private objSuccess: ObjSucess = { success: true, data: null, error: null };
  constructor(data: any, status?: number) {
    this.objSuccess.data = data || null;
    this.status = status || this.status;
  }

  send(res: Response): Response {
    return res.status(this.status).json(this.objSuccess);
  }
}

export class SuccessNoResponse {
  private status: number = ResponseStatus.SUCCESS;
  private objSuccess: ObjSucess = { success: true, data: null, error: null };
  constructor(status?: number) {
    this.status = status || this.status;
  }

  send(res: Response): Response {
    return res.status(this.status).json(this.objSuccess);
  }
}

export class SuccessTextResponse {
  private message: string = 'ok';
  constructor(message: string) {
    this.message = message;
  }

  send(res: Response): Response {
    return res.status(ResponseStatus.SUCCESS).send(this.message);
  }
}
