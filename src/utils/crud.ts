import * as Interfaces from '../interfaces';

export default class CRUD {
  private server: Interfaces.ServerAdapter;

  private orm: Interfaces.ORMAdapter;

  constructor(server: Interfaces.ServerAdapter, orm: Interfaces.ORMAdapter) {
    this.server = server;
    this.orm = orm;
  }

  private createViewRoutes(resource) {
    console.log(resource, this.server, this.orm);

    // /photo - index
    // /photo/create - create
    // /photo/{photo} - show
    // /photo/{photo}/edit - edit
  }

  private createServerRoutes(resource) {
    console.log(resource, this.server, this.orm);

    // /photo - store
    // /photo - update
    // /photo - destroy
  }

  public create(resources) {
    resources.forEach((element) => {
      this.createViewRoutes(element);
      this.createServerRoutes(element);
    });
  }
}
