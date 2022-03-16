import { notImplemented } from '../../../interfaces/utils/http/httpHelpers';
import { IHttpRequest, IHttpResponse } from './IHttp';

export abstract class IController {
  async handle(
    method: string,
    httpRequest: IHttpRequest
  ): Promise<IHttpResponse> {
    switch (method) {
      case 'index':
        const index = await this.index(httpRequest);
        return index;
      case 'show':
        const show = await this.show(httpRequest);
        return show;
      case 'store':
        const store = await this.store(httpRequest);
        return store;
      case 'update':
        const update = await this.update(httpRequest);
        return update;
      case 'destroy':
        const destroy = await this.destroy(httpRequest);
        return destroy;

      default:
        return this.error();
    }
  }

  async index(_: IHttpRequest): Promise<IHttpResponse> {
    return this.error();
  }

  async show(_: IHttpRequest): Promise<IHttpResponse> {
    return this.error();
  }

  async store(_: IHttpRequest): Promise<IHttpResponse> {
    return this.error();
  }

  async update(_: IHttpRequest): Promise<IHttpResponse> {
    return this.error();
  }

  async destroy(_: IHttpRequest): Promise<IHttpResponse> {
    return this.error();
  }

  error(): IHttpResponse {
    return notImplemented();
  }
}
