import { ApplicationResult } from '../../entities/AplicationResult';

export interface IUseCase<Input> {
  execute(input: Input): Promise<ApplicationResult> | ApplicationResult;
}
