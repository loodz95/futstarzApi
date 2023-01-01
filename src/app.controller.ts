import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { User } from './users/entities/user.entity';

@Controller()
export class AppController {
 
  @Post()
  async login(@Request() req) {
    console.log(req.user);
    return req.user;
  }
}
