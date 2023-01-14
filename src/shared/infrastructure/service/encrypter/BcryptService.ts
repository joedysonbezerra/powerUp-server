import bcrypt from 'bcrypt';
import { inject } from 'tsyringe';
import { IEncrypterService } from '../../../domain/contracts/infrastructure/service/IEncrypter';

export class BcryptService implements IEncrypterService {
  private salt: number;
  constructor(@inject('salt') value: number) {
    this.salt = value;
  }
  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt);
    return hash;
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash);
    return isValid;
  }
}
