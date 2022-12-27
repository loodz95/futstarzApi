import { Module } from '@nestjs/common';
import { TypeplayersService } from './typeplayers.service';
import { TypeplayersController } from './typeplayers.controller';

@Module({
  controllers: [TypeplayersController],
  providers: [TypeplayersService]
})
export class TypeplayersModule {}
