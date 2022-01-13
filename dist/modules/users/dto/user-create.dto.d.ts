import { UserRoleEnum } from '@Users/user.entity';
export declare class UserCreateDto {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthday: Date;
    role?: UserRoleEnum;
    parentId?: string;
}
