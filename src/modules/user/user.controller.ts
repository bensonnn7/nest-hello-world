import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hi')
  getUser() {
    return 'get user';
  }

  @Post('signup')
  signup(@Body() body: CreateUserDto): any {
    return this.userService.signup();
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto): any {
    return this.userService.update();
  }
}
