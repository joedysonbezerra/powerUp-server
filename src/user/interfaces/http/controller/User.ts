import { Controller } from "../../../../shared/application/contracts/controller/IController";
import {
  IHttpRequest,
  IHttpResponse,
} from "../../../../shared/application/contracts/http/IHttp";
import {
  serverError,
  success,
} from "../../../../shared/interfaces/utils/httpHelpers";
import { ICreateUserUseCase } from "../../../domain/contracts/usecases/ICreateUserUseCase";

export default class UserHttpController extends Controller<
  IHttpRequest,
  IHttpResponse
> {
  constructor(private readonly createUser: ICreateUserUseCase) {
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
