import { UserAccountStatusEnum, UserRoleEnum } from '@Users/user.entity';
export declare class UserDto {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    role?: UserRoleEnum;
    accountStatus: UserAccountStatusEnum;
    parent?: UserDto;
}
