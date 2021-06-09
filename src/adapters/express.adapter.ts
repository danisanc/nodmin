import { Router, RequestHandler } from 'express';

import * as Interfaces from '../interfaces';

class ExpressAdapter implements Interfaces.ServerAdapter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public middleware(handler: RequestHandler): void {
    this.router.use(handler);
  }

  public get(path: string, handler: RequestHandler): void {
    this.router.get(path, handler);
  }

  public post(path: string, handler: RequestHandler): void {
    this.router.post(path, handler);
  }

  public put(path: string, handler: RequestHandler): void {
    this.router.put(path, handler);
  }

  public delete(path: string, handler: RequestHandler): void {
    this.router.delete(path, handler);
  }
}

export default ExpressAdapter;
