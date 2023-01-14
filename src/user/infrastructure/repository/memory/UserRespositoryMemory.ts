import { ICreateUserRepository } from '../../../domain/contracts/infrastructure/repositories/ICreateUserRepository';
import { User } from '../../../domain/entities/user';

export class UserRespositoryMemory implements ICreateUserRepository {
  async createUser(input: User): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(input);
      }, 5000);
    });
  }
}
