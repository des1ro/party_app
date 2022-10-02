import { AwilixContainer, asClass } from "awilix";
import { Service as ExampleService } from "../app/features/example/example.service";

export const registerServices = async (container: AwilixContainer) => {
  container.register({
    exampleService: asClass(ExampleService),
  });
};
