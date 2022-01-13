import { UserRoleEnum } from '@Users/user.entity';
import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class UserCreateDto {
  id?: string;

  @IsNotEmpty() firstName: string;

  @IsNotEmpty() lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty() password: string;

  @IsNotEmpty() birthday: Date;

  role?: UserRoleEnum;

  parentId?: string;
}
