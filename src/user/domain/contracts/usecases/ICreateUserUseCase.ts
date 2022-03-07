import User from "../../entities/user";

export interface ICreateUserUseCase {
  execute: ({ name, email, password }: User) => Promise<User>;
}
