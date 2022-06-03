import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto, LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async localLogin(dto: LoginDto) {
    const user = await this.userService.getUserByEmail(dto.email);
    if (user.password !== dto.password) {
      throw new UnauthorizedException('email and password not match');
    }
    return this.signUser(user.id, user.email, 'user');
  }

  async localRegister(dto: RegisterDto) {
    return console.log('123123123');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
    // return this.jwtService.sign({});
  }
}
