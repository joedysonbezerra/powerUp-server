export interface ITokenService {
  generate: (id: string) => Promise<string>;
  decrypt: (value: string) => Promise<string>;
}
