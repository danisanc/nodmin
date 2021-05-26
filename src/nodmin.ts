import MongooseAdapter from './default/mongoose.adapter';
import ExpressAdapter from './default/express.adapter';

import * as Types from './types';
import * as Interfaces from './interfaces';
import * as CrudFunctions from './utils/crud';

export class Nodmin implements Interfaces.NodminInterface {
  private properties: Types.Properties;

  private server: Interfaces.ServerAdapter;

  private orm: Interfaces.ORMAdapter;

  constructor(properties: Types.Properties) {
    this.properties = properties;
    this.server = new ExpressAdapter();
    this.orm = new MongooseAdapter();
  }

  private buildCrudFromResources() {
    return CrudFunctions.createCrud(
      this.properties.resources,
      this.server,
      this.orm,
    );
  }

  public build() {
    // const crudProperties = this.buildCrudFromResources();
    this.buildCrudFromResources();

    // 2. create crud for every resource
    // 1. create navigation for every resource
    // 3. mount dashboard with navigation and crud routes
    // 4. return mounted router
  }
}

const dashboard = new Nodmin({
  resources: [
    {
      model: 'teste',
    },
    {
      model: 'teste 2',
    },
  ],
});
dashboard.build();

export default Nodmin;
