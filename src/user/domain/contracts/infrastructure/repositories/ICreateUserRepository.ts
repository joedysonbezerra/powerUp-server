import { User } from '../../../entities/user';

export interface ICreateUserRepository {
  createUser: (input: User) => Promise<User>;
}
