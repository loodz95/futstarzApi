import { Savedplayer } from './entities/savedplayer.entity';
import { Module } from '@nestjs/common';
import { SavedplayersService } from './savedplayers.service';
import { SavedplayersController } from './savedplayers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [TypeOrmModule.forFeature([Savedplayer])],
  controllers: [SavedplayersController],
  providers: [SavedplayersService]
})
export class SavedplayersModule {}
