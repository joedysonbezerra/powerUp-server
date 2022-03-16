import { container, delay } from 'tsyringe';
import { CreateUserUseCase } from './application/usecases/CreateUserUseCase';
import { ICreateUserRepository } from './domain/contracts/infrastructure/repositories/ICreateUserRepository';
import { ICreateUserUseCase } from './domain/contracts/usecases/ICreateUserUseCase';
import { UserRespositoryMemory } from './infrastructure/repository/memory/UserRespositoryMemory';

// UseCases
container.registerSingleton<ICreateUserUseCase>(
  'CreateUserUseCase',
  delay(() => CreateUserUseCase)
);

// Repositories
container.registerSingleton<ICreateUserRepository>(
  'UserRepository',
  delay(() => UserRespositoryMemory)
);
