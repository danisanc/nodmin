export type NodminOptions = {
  resources: Array<{
    model: any;
  }>;
};

export type BaseData = {
  base: {
    paths: {
      dashboard: string;
      login: string;
      logout: string;
    };
  };
  resources?: Array<{
    model: any;
    name: string;
    label: string;
    path: string;
  }>;
};
