import type { AwilixContainer } from "awilix/lib/container";
import { asFunction } from "awilix/lib/resolvers";
import { createRouter } from "../app/router";

export const registerCommonDependencies = (container: AwilixContainer) => {
  container.register({
    router: asFunction(createRouter).singleton(),
  });

  return container;
};
