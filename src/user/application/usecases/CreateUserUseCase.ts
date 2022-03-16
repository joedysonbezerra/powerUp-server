import { inject, injectable } from 'tsyringe';
import { ICreateUserRepository } from '../../domain/contracts/infrastructure/repositories/ICreateUserRepository';
import { ICreateUserUseCase } from '../../domain/contracts/usecases/ICreateUserUseCase';
import User from '../../domain/entities/user';
@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private createUserRepository: ICreateUserRepository
  ) {}

  async execute({ name, email, password }: User): Promise<User> {
    const user = await this.createUserRepository.createUser({
      name,
      email,
      password,
    });
    return user;
  }
}
