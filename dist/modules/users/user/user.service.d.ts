import { UserCreateDto } from '@Users/dto/user-create.dto';
import { UserListDto } from '@Users/dto/user-list.dto';
import { UserDto } from '@Users/dto/user.dto';
import { UserEntity } from '@Users/user.entity';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly repo;
    constructor(repo: Repository<UserEntity>);
    create(body: UserCreateDto): Promise<UserDto>;
    getAll(): Promise<UserListDto>;
    getById(id: string): Promise<UserDto>;
    findByLogin({ email, password }: LoginDto): Promise<UserDto>;
    update(id: string, body: Partial<UserDto>): Promise<UserDto>;
    delele(id: string): Promise<boolean>;
    findByPayload({ email }: any): Promise<UserDto>;
}
