import { UserCreateDto } from '@Users/dto/user-create.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegislationStatus } from './interfaces/regislation-status.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: UserCreateDto): Promise<RegislationStatus>;
    login(body: LoginDto): Promise<LoginStatus>;
}
