import { Module } from '@nestjs/common';
import { TypeplayersService } from './typeplayers.service';
import { TypeplayersController } from './typeplayers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeplayer } from './entities/typeplayer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Typeplayer])],
  controllers: [TypeplayersController],
  providers: [TypeplayersService]
})
export class TypeplayersModule {}
