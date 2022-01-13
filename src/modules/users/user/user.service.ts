import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto } from '@Users/dto/user-create.dto';
import { UserListDto } from '@Users/dto/user-list.dto';
import { UserDto } from '@Users/dto/user.dto';
import { UserEntity } from '@Users/user.entity';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { toUserDto } from 'src/shared/mapper';
import { comparePasswords } from 'src/shared/utils';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly repo: Repository<UserEntity>,
  ) {}

  async create(body: UserCreateDto): Promise<UserDto> {
    const { firstName, lastName, email, password, birthday, role, parentId } =
      body;

      const userInDb = await this.repo.findOne({
        where: { email },
      });
  
      if (userInDb) {
        throw new HttpException(
        'User already exist in database',
          HttpStatus.BAD_REQUEST,
        );
      }
  

    const payload = { firstName, lastName, email, birthday, role, password };

    if (parentId) {
      const parent: UserEntity = await this.repo.findOne({ id: parentId });

      if (!parent) {
        throw new HttpException(
          'Parent user do not exist.',
          HttpStatus.BAD_REQUEST,
        );
      }

      payload['parent'] = parent;
    }

    const user: UserEntity = this.repo.create({ ...payload });

    await this.repo.save(user);
    return toUserDto(user);
  }

  async getAll(): Promise<UserListDto> {
    const users: UserDto[] = await this.repo.find();
    return { users: users.map((user: UserEntity): UserDto => toUserDto(user)) };
  }

  async getById(id: string): Promise<UserDto> {
    const user: UserEntity = await this.repo.findOne({ id });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return toUserDto(user);
  }

  async findByLogin({ email, password }: LoginDto): Promise<UserDto> {
    const user: UserEntity = await this.repo.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isEqual = await comparePasswords(user.password, password);

    if (!isEqual) {
      throw new HttpException('Invalid creadentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async update(id: string, body: Partial<UserDto>): Promise<UserDto> {
    const { firstName, lastName, email, birthday, role, accountStatus } = body;

    let user: UserEntity = await this.repo.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('Model not found', HttpStatus.NOT_FOUND);
    }

    // @ts-ignore
    user = {
      ...user,
      firstName: firstName ? firstName : user.firstName,
      lastName: lastName ? lastName : user.lastName,
      email: email ? email : user.email,
      birthday: birthday ? birthday : user.birthday,
    };

    if (accountStatus) {
      user.accountStatus = accountStatus;
    }

    if (role) {
      user.role = role;
    }

    await this.repo.update({ id }, user);

    return toUserDto(user);
  }

  async delele(id: string): Promise<boolean> {
    const user: UserEntity = await this.repo.findOne({ id });

    if (!user) {
      throw new HttpException('Not exist', HttpStatus.NOT_FOUND);
    }

    await this.repo.delete({ id });

    return true;
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    const user = await this.repo.findOne({ where: { email } });
    return toUserDto(user);
  }
}
