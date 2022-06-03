import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { 
  RegisterDto, 
  LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async localLogin(dto: LoginDto) {
    const user = await this.userService.getUserByEmail(dto.email);
    return user;
  }

  async localRegister(dto: RegisterDto) {
    return console.log('123123123');
  }
}
