import { ICreateUserRepository } from "../contracts/infrastructure/repositories/ICreateUserRepository";
import { ICreateUserUseCase } from "../../domain/contracts/usecases/ICreateUserUseCase";
import User from "../../domain/entities/user";

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async execute({ name, email, password }: User): Promise<User> {
    const user = await this.createUserRepository.createUser({
      name,
      email,
      password,
    });
    return user;
  }
}
