import { ICreateUserRepository } from "../../../application/contracts/infrastructure/repositories/ICreateUserRepository";
import User from "../../../domain/entities/user";

export class UserRespositoryMemory implements ICreateUserRepository {
  async createUser({ name, email, password }: User): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name, email, password });
      }, 5000);
    });
  }
}
