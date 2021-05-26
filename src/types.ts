import * as Interfaces from './interfaces';

export type Type = 'orm' | 'server';

export type Adapter = Interfaces.ORMAdapter | Interfaces.ServerAdapter;

export type ResourceProperties = {
  name: String,
  custom?: {
    label?: String,
    placeholder?: String,
    component?: String,
  },
  beforeCreate?(value, resolve, reject): void,
  beforeUpdate?(value, resolve, reject): void,
  beforeDelete?(value, resolve, reject): void
}

export type Properties = {
  config?: {
    basePath: String,
    loginPath: String,
    logoutPath: String,
  },
  resources: Array<{
    model: any,
    properties?: Array<ResourceProperties>,
    navigation?: {
      category?: String,
      label?: String,
      icon?: String
    }
  }>,
  brand?: {
    name?: String,
    logo?: String,
    site?: String
  }
}
