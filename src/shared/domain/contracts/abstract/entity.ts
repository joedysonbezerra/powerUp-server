import {
  IsOptional,
  IsUUID,
  ValidationError,
  validateSync,
} from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export abstract class Entity {
  @IsUUID()
  @IsOptional()
  private id?: string;

  static toDomain(_: object) {
    throw new Error('Method not implemented.');
  }

  protected generateId() {
    this.id = !this.id ? uuidv4() : this.id;
  }
  public validate(): ValidationError[] {
    return validateSync(this);
  }
}
