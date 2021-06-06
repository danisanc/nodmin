import { Router, RequestHandler } from "express";

export interface ServerAdapter {
  router: Router;
  middleware(handler: RequestHandler): void;
  get(path: string, handler: RequestHandler): void;
  get(path: string, handler: RequestHandler): void;
  put(path: string, handler: RequestHandler): void;
  delete(path: string, handler: RequestHandler): void;
}

export interface ORMAdapter {
  find(): void;
  list(): void;
  update(): void;
  delete(): void;
}
