import User from '../../../entities/user';

export interface ICreateUserRepository {
  createUser: ({ name, email, password }: User) => Promise<User>;
}
