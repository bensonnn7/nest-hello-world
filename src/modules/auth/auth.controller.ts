import { Controller, Request, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/local/login')
  async localLogin(@Body() body: LoginDto) {
    return this.authService.localLogin(body);
  }

  @Post('/local/register')
  async localRegister(@Body() body: RegisterDto) {
    return this.authService.localRegister(body);
  }
}
