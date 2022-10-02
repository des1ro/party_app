import { Request, Response } from "express";
import { ExampleService } from "./example.service";

export interface ExampleControllerDependencies {
  exampleService: ExampleService;
}

export interface ExampleController {
  test(req: Request, res: Response): Promise<void>;
}

export class Controller implements ExampleController {
  private dependencies: ExampleControllerDependencies;

  constructor(dependencies: ExampleControllerDependencies) {
    this.dependencies = dependencies;
  }

  test = async (req: Request, res: Response) => {
    const { exampleService } = this.dependencies;
    const status = await exampleService.test();

    res.status(200).json({
      status,
    });
  };
}
