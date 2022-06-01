import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  getUser(): string {
    return 'hi';
  }
}
