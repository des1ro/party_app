export interface ExampleService {
  test(): Promise<string>;
}

export class Service implements ExampleService {
  test = async () => {
    return "test";
  };
}
