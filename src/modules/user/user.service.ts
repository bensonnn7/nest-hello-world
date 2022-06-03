import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './user.dto';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async getUser() {
    // const user = await this.userRepo.findOne({
    //   where: {
    //     email,
    //   },
    // });
    // if (!user) {
    //   throw new NotFoundException(`User not found`);
    // }
    // return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepo.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }
    return user;
  }

  async getUserById(id: number) {
    // const user = await this.userRepo.findOne(id);

    const user = await this.userRepo.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async update(data: UpdateUserDto) {
    // const user = await this.userRepo.create(data);
    // return this.userRepo.save(user);
    return 'update';
  }
}
