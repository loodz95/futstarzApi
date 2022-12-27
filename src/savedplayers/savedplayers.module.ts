import { Module } from '@nestjs/common';
import { SavedplayersService } from './savedplayers.service';
import { SavedplayersController } from './savedplayers.controller';

@Module({
  controllers: [SavedplayersController],
  providers: [SavedplayersService]
})
export class SavedplayersModule {}
