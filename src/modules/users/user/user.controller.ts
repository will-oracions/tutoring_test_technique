import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserCreateDto } from '@Users/dto/user-create.dto';
import { UserListDto } from '@Users/dto/user-list.dto';
import { UserDto } from '@Users/dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() body: UserCreateDto): Promise<UserDto> {
    return this.service.create(body);
  }

  @Get()
  async getAll(): Promise<UserListDto> {
    return await this.service.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UserDto> {
    return await this.service.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<UserDto>,
  ): Promise<UserDto> {
    return this.service.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.service.delele(id);
  }
}
