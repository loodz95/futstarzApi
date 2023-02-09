import { Savedplayer } from './entities/savedplayer.entity';
import { Module } from '@nestjs/common';
import { SavedplayersService } from './savedplayers.service';
import { SavedplayersController } from './savedplayers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
   imports: [TypeOrmModule.forFeature([Savedplayer]),PassportModule, AuthModule
],
  controllers: [SavedplayersController],
  providers: [SavedplayersService]
})
export class SavedplayersModule {}
