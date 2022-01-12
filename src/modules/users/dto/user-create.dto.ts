import { UserRoleEnum } from '@Users/user.entity';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from './user.dto';

export class UserCreateDto {
  @IsNotEmpty() id: string;

  @IsNotEmpty() firstName: string;

  @IsNotEmpty() lastName: string;

  @IsNotEmpty() email: string;

  @IsNotEmpty() password: string;

  @IsNotEmpty() birthday: Date;

  @IsNotEmpty() role?: UserRoleEnum;

  parent?: UserDto;
}
