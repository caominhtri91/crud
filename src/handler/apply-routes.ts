import { NextFunction, Request, Response, Router } from 'express';

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any> | any;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};
