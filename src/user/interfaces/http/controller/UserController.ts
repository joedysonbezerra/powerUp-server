import { inject, injectable } from 'tsyringe';
import { IController } from '../../../../shared/domain/contracts/http/IController';
import {
  IHttpRequest,
  IHttpResponse,
} from '../../../../shared/domain/entities/IHttp';
import { ApplicationEvents } from '../../../../shared/domain/enums/ApplicationEvents';
import {
  badRequest,
  serverError,
  success,
} from '../../../../shared/utils/http/httpHelpers';
import { ICreateUserUseCase } from '../../../domain/contracts/usecases/ICreateUserUseCase';

@injectable()
export class UserController extends IController {
  constructor(
    @inject('CreateUserUseCase')
    private createUser: ICreateUserUseCase
  ) {
    super();
  }

  async store(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      if (httpRequest.body?.id) {
        return badRequest('id is not allowed');
      }

      const result = await this.createUser.execute(httpRequest.body);

      switch (result.event) {
        case ApplicationEvents.SUCCESS:
          return success(result.message);
        case ApplicationEvents.INVALID:
          return badRequest(result.message);
        default:
          return serverError();
      }
    } catch (error) {
      return serverError();
    }
  }
}
