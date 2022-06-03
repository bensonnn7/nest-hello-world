import { Controller, Get, Post, Body, Param, Patch, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('/signup')
  // signup(@Body() body: CreateUserDto): any {
  //   return this.userService.signup(body);
  // }

  // @Post('login')
  // login(@Body() body: { email: string; password: string }) {
  //   return this.userService.login(body);
  // }

  // @Get(':id')
  // getUser(@Param('id') id: number) {
  //   return this.userService.getUser(id);
  // }

  @Put('')
  updateUser(@Body() body: UpdateUserDto): any {
    return this.userService.update(body);
  }
}
