import { Injectable } from '@nestjs/common';
import { CreateTypeplayerDto } from './dto/create-typeplayer.dto';
import { UpdateTypeplayerDto } from './dto/update-typeplayer.dto';

@Injectable()
export class TypeplayersService {
  create(createTypeplayerDto: CreateTypeplayerDto) {
    return 'This action adds a new typeplayer';
  }

  findAll() {
    return `This action returns all typeplayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeplayer`;
  }

  update(id: number, updateTypeplayerDto: UpdateTypeplayerDto) {
    return `This action updates a #${id} typeplayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeplayer`;
  }
}
