import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail } from 'class-validator';
export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

// return all the type and set to optional
export class UpdateUserDto extends PartialType(CreateUserDto) {
  image?: string;

  bio?: string;
}
