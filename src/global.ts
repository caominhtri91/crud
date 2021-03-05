declare namespace Express {
  interface Request {
    user: {
      name?: string;
      id: number | string;
      email: string;
    };
  }
}
