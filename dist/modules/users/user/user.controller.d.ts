import { UserCreateDto } from '@Users/dto/user-create.dto';
import { UserListDto } from '@Users/dto/user-list.dto';
import { UserDto } from '@Users/dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    create(body: UserCreateDto): Promise<UserDto>;
    getAll(): Promise<UserListDto>;
    getById(id: string): Promise<UserDto>;
    update(id: string, body: Partial<UserDto>): Promise<UserDto>;
    delete(id: string): Promise<boolean>;
}
