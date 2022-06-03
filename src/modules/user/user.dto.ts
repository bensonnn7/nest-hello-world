import { IsString, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  image?: string;

  bio?: string;
}

// return all the type and set to optional
// export class UpdateUserDto extends PartialType(CreateUserDto) {}
