import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { User } from './../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      signOptions: { expiresIn: '5h' },
      secret: process.env.SECRET_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
