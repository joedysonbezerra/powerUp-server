import { inject, injectable } from 'tsyringe';
import { ApplicationResult } from '../../../shared/domain/entities/AplicationResult';
import { ApplicationEvents } from '../../../shared/domain/enums/ApplicationEvents';
import { ICreateUserRepository } from '../../domain/contracts/infrastructure/repositories/ICreateUserRepository';
import { ICreateUserUseCase } from '../../domain/contracts/usecases/ICreateUserUseCase';
import { User } from '../../domain/entities/user';
@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private createUserRepository: ICreateUserRepository
  ) {}

  async execute(input: Object): Promise<ApplicationResult> {
    const user = User.toDomain(input);
    const inputValidated = user.validate();

    if (inputValidated.length > 0) {
      return new ApplicationResult(ApplicationEvents.INVALID, inputValidated);
    }

    const createdUser = await this.createUserRepository.createUser(user);

    return new ApplicationResult(ApplicationEvents.SUCCESS, createdUser);
  }
}
