import { inject, injectable } from 'tsyringe';
import { IController } from '../../../../shared/domain/contracts/http/IController';
import {
  IHttpRequest,
  IHttpResponse,
} from '../../../../shared/domain/contracts/http/IHttp';
import {
  serverError,
  success,
} from '../../../../shared/interfaces/utils/http/httpHelpers';
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
      const { name, email, password } = httpRequest.body;

      const user = await this.createUser.execute({
        name,
        email,
        password,
      });

      return success(user);
    } catch (error) {
      return serverError();
    }
  }
}
