import * as Interfaces from "./interfaces";
import * as Types from "./types";

// import * as CrudHelper from "./helpers/crud.helper";
import * as AdminHelper from "./helpers/admin.helper";

import ExpressAdapter from "./adapters/express.adapter";
import MongooseAdapter from "./adapters/mongoose.adapter";

class Nodmin {
  // Vars
  private options: Types.NodminOptions;

  // Adapters
  private Server: Interfaces.ServerAdapter;
  private ORM: Interfaces.ORMAdapter;

  /**
   * Received options and configure nodmin
   *
   * @param options
   */
  constructor(options: Types.NodminOptions) {
    this.options = options;

    this.Server = new ExpressAdapter();
    this.ORM = new MongooseAdapter();
  }

  /**
   * Prepare base data to navbar, paths and etc...
   *
   * @returns data
   */
  private prepareData(): Types.BaseData {
    return AdminHelper.prepareData(this.options);
  }

  /**
   * @returns
   */
  private makeBaseRoutes(data: Types.BaseData): Types.BaseData {
    return data;
  }

  /**
   * @returns
   */
  private makeCrudRoutes(data: Types.BaseData): Types.BaseData {
    return data;
  }

  /**
   * @returns
   */
  public build(): any {
    const data = this.prepareData();
    this.makeBaseRoutes(data);
    this.makeCrudRoutes(data);

    this.Server.get("/teste", (req, res) => {
      res.send("Rota de teste");
    });

    return this.Server.router;
  }
}

export default Nodmin;
