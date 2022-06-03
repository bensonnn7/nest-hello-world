import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './user.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getUser(@Request() req: any) {
    return this.userService.getUserByEmail(req.user.email);
  }

  @Put()
  updateUser(@Body() body: UpdateUserDto): any {
    return this.userService.update(body);
  }
}
