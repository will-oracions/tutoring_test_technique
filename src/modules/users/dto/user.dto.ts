import { UserAccountStatusEnum, UserRoleEnum } from '@Users/user.entity';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty() id?: string;

  @IsNotEmpty() firstName: string;

  @IsNotEmpty() lastName: string;

  @IsNotEmpty() email: string;

  @IsNotEmpty() birthday: Date;

  @IsNotEmpty() role?: UserRoleEnum;

  @IsNotEmpty() accountStatus: UserAccountStatusEnum;

  parent?: UserDto;
}
