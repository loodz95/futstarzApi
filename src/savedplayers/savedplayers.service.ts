
import { Savedplayer } from './entities/savedplayer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateSavedplayerDto } from './dto/create-savedplayer.dto';
import { UpdateSavedplayerDto } from './dto/update-savedplayer.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SavedplayersService {
  constructor(
    @InjectRepository(Savedplayer)
    private savedplayerRepository:Repository<Savedplayer>
  ){}
  
  async create(createSavedplayerDto: CreateSavedplayerDto, user:User) {
 const users = {id:user.id}
const savedPlayer = {...createSavedplayerDto, users}
return await this.savedplayerRepository.save(savedPlayer)

  }

async findAll() {
 return await this.savedplayerRepository.find()   
  }

  findOne(id: number, user : User) {
    return `This action returns a #${id} savedplayer`;
  }

  update(id: number, updateSavedplayerDto: UpdateSavedplayerDto) {
    return `This action updates a #${id} savedplayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} savedplayer`;
  }
}
