export interface IEncrypterService {
  encrypt: (value: string) => Promise<string>;
  compare(value: string, hash: string): Promise<boolean>;
}
