import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail } from 'class-validator';

export class LoginDto {
  // @IsEmail()
  email: string;

  // @IsString()
  password: string;

  toJson() {
    return this.email;
  }
}
// export type LoginDto =  {

//   email: string;

//   password: string;
// }

export class RegisterDto extends PartialType(LoginDto) {
  userName?: string;
}
