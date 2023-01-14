import jwt from 'jsonwebtoken';
import { ITokenService } from '../../domain/contracts/infrastructure/service/ITokenService';

export class JwtService implements ITokenService {
  constructor(private readonly secret: string) {}

  async generate(id: string): Promise<string> {
    const token = await jwt.sign({ id }, this.secret);
    return token;
  }

  async decrypt(token: string): Promise<string> {
    const result: any = await jwt.verify(token, this.secret);
    return result;
  }
}
