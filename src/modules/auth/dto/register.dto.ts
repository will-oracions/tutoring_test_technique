import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty() firstName: string;
  @IsNotEmpty() lastName: string;
  @IsNotEmpty() birthday: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() parentId: string;
}
