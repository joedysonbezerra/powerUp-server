import { User } from '../../entities/user';
import { IUseCase } from '../../../../shared/domain/contracts/application/IUsecase';
import { ApplicationResult } from '../../../../shared/domain/entities/AplicationResult';
export interface ICreateUserUseCase extends IUseCase<User> {
  execute(input: Object): Promise<ApplicationResult>;
}
