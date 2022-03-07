import { CreateUserUseCase } from './application/usecases/CreateUserUseCase';
import { UserRespositoryMemory } from './infrastructure/repository/memory/UserRespositoryMemory';
import UserHttpController from './interfaces/http/controller/User';

export default function userFactory() {
  const repository = new UserRespositoryMemory();

  const useCase = new CreateUserUseCase(repository);

  const userController = new UserHttpController(useCase);

  return userController;
}
