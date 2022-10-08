import { AwilixContainer, asClass } from "awilix";
import { Controller as ExampleController } from "../app/features/example/example.controller";

export const registerControllers = async (container: AwilixContainer) => {
  container.register({
    exampleController: asClass(ExampleController),
  });
};
