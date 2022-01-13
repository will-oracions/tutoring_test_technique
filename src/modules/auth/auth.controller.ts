import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserCreateDto } from '@Users/dto/user-create.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegislationStatus } from './interfaces/regislation-status.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async register(@Body() body: UserCreateDto): Promise<RegislationStatus> {
    const result: RegislationStatus = await this.authService.register(body);

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  @Post('login')
  async login(@Body() body: LoginDto): Promise<LoginStatus> {
    return this.authService.login(body);
  }
}
