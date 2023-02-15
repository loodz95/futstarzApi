import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
   imports: [TypeOrmModule.forFeature([Player]),PassportModule, AuthModule],
  controllers: [PlayersController],
  providers: [PlayersService]
})
export class PlayersModule {}
