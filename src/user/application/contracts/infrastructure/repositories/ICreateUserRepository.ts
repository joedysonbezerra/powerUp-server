import User from "../../../../domain/entities/user";

export interface ICreateUserRepository {
  createUser: ({ name, email, password }: User) => Promise<User>;
}
