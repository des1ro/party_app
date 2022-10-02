import {
  asFunction,
  asValue,
  AwilixContainer,
  createContainer as createAwilixContainer,
  InjectionMode,
} from "awilix";
import http from "http";
import { createApp } from "./app/app";
import { registerCommonDependencies } from "./container/common";
import { registerControllers } from "./container/controllers";
import { registerRouting } from "./container/routing";
import { registerServices } from "./container/services";

export const createContainer = async () => {
  const container: AwilixContainer = createAwilixContainer({
    injectionMode: InjectionMode.PROXY,
  });

  await registerCommonDependencies(container);
  await registerRouting(container);
  await registerControllers(container);
  await registerServices(container);

  container.register({
    app: asFunction(createApp).singleton(),
  });

  const { app } = container.cradle;

  container.register({
    server: asValue(http.createServer(await app)),
  });

  return container;
};
