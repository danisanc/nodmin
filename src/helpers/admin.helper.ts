import * as Types from "../types";

export function prepareData(options: Types.NodminOptions): Types.BaseData {
  const data: Types.BaseData = {
    base: {
      paths: {
        dashboard: "/teste",
        login: "/login",
        logout: "/logout",
      },
    },
  };

  if (options.resources.length > 0) {
    const generatedResources = options.resources.map((resource) => {
      return {
        model: resource.model,
        name: "teste",
        label: "teste",
        path: "/teste",
      };
    });

    data.resources = generatedResources || [];
  }

  return data;
}
