import { UserCreateDto } from '@Users/dto/user-create.dto';
import { UserDto } from '@Users/dto/user.dto';
import { UserService } from '@Users/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegislationStatus } from './interfaces/regislation-status.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register(userDto: UserCreateDto): Promise<RegislationStatus>;
    login(loginUserDto: LoginDto): Promise<LoginStatus>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}
