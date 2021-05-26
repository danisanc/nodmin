export interface NodminInterface {
  build(): void
}

export interface ServerAdapter {
  render(): void
  get(): void
  post(): void
  put(): void
  delete(): void
}

export interface ORMAdapter {
  findOne(model, param, value): any
  findAll(model): any
  create(model, body): any
  update(model, param, value, body): any
  delete(model, param, value): any
}
