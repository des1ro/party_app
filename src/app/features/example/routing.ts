import * as express from "express";
import { ExampleController } from "./example.controller";

export interface ExampleRoutingDependencies {
  exampleController: ExampleController;
}

export const exampleRouting = ({
  exampleController,
}: ExampleRoutingDependencies) => {
  const router = express.Router();
  router.get("/test", exampleController.test);

  return router;
};
