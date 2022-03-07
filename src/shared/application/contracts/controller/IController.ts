export abstract class Controller<Request, Response> {
  async handle(method: string, httpRequest: Request): Promise<Response> {
    switch (method) {
      case "index":
        const index = await this.index(httpRequest);
        return index;
      case "show":
        const show = await this.show(httpRequest);
        return show;
      case "store":
        const store = await this.store(httpRequest);
        return store;
      case "update":
        const update = await this.update(httpRequest);
        return update;
      case "destroy":
        const destroy = await this.destroy(httpRequest);
        return destroy;

      default:
        this.error();
    }
  }

  async index(_: Request): Promise<Response> {
    return this.error();
  }

  async show(_: Request): Promise<Response> {
    return this.error();
  }

  async store(_: Request): Promise<Response> {
    return this.error();
  }

  async update(_: Request): Promise<Response> {
    return this.error();
  }

  async destroy(_: Request): Promise<Response> {
    return this.error();
  }

  error(): Response {
    throw Error("Method not found");
  }
}
