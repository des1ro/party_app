import { AwilixContainer, Lifetime, asClass, asFunction } from "awilix";
import { exampleRouting } from "../app/features/example/routing";

export const registerRouting = async (container: AwilixContainer) => {
  // container.loadModules(["src/app/features/**/*.controller.ts"], {
  //   formatName: "camelCase",
  //   resolverOptions: {
  //     lifetime: Lifetime.SCOPED,
  //     register: asClass,
  //   },
  // });

  container.register({
    exampleRouting: asFunction(exampleRouting),
  });
};
