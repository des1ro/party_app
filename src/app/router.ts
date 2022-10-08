import * as express from "express";

export interface RoutingDependencies {
  exampleRouting: express.Router;
}

export const createRouter = ({ exampleRouting }: RoutingDependencies) => {
  const router = express.Router();

  router.use("/example", exampleRouting);
  return router;
};
