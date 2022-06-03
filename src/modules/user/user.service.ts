import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  getUser() {
    return 'this is service';
  }

  signup() {
    return 'sign up server';
  }

  update() {
    return 'update user';
  }
}
