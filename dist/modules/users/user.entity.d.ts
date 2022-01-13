export declare enum UserRoleEnum {
    STUDENT = 0,
    TEACHER = 1,
    ADMIN = 2,
    SUPER_ADMIN = 3
}
export declare enum UserAccountStatusEnum {
    DEACTIVATED = 0,
    ACTIVATED = 1,
    BLOCKED = 2,
    DELETED = 3
}
export declare class UserEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthday: Date;
    role: UserRoleEnum;
    confirmationCode: number;
    accountStatus: UserAccountStatusEnum;
    parent?: UserEntity;
    hashPassword(): Promise<void>;
}
