import { Injectable } from '@nestjs/common';
import { CreateSavedplayerDto } from './dto/create-savedplayer.dto';
import { UpdateSavedplayerDto } from './dto/update-savedplayer.dto';

@Injectable()
export class SavedplayersService {
  create(createSavedplayerDto: CreateSavedplayerDto) {
    return 'This action adds a new savedplayer';
  }

  findAll() {
    return `This action returns all savedplayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} savedplayer`;
  }

  update(id: number, updateSavedplayerDto: UpdateSavedplayerDto) {
    return `This action updates a #${id} savedplayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} savedplayer`;
  }
}
