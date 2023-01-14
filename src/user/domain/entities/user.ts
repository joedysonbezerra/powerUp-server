import { Exclude, Expose, plainToClass } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { Entity } from '../../../shared/domain/contracts/abstract/entity';

export class User extends Entity {
  @Expose({ name: 'first_name' })
  @IsString()
  private firstName!: string;

  @Expose({ name: 'last_name' })
  @IsString()
  private lastName!: string;

  @IsEmail()
  private email!: string;

  @Exclude({ toPlainOnly: true })
  @MinLength(6)
  private password!: string;

  @Expose({ name: 'date_of_birth' })
  private dateOfBirth!: Date;

  @IsString()
  private profession!: boolean;

  @IsString()
  @IsOptional()
  private avatar?: string;

  @Expose({ name: 'fullName' })
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Expose({ name: 'isCustomer' })
  isCustomer() {
    return !this.profession;
  }

  static toDomain(input: object): User {
    const value = plainToClass(User, input);
    value.generateId();
    return value;
  }
}
