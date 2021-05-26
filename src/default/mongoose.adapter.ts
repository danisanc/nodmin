import * as Interfaces from '../interfaces';

class MongooseAdapter implements Interfaces.ORMAdapter {
  public findOne(model, param, value) { }

  public findAll(model) { }

  public create(model, body) { }

  public update(model, param, value, body) { }

  public delete(model, param, value) { }
}

export default MongooseAdapter;
