import { Typeplayer } from './entities/typeplayer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTypeplayerDto } from './dto/create-typeplayer.dto';
import { UpdateTypeplayerDto } from './dto/update-typeplayer.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TypeplayersService {
  constructor (
    @InjectRepository (Typeplayer)
    private typeplayerRepository:Repository <Typeplayer>
  ){}


  async create(createTypeplayerDto: CreateTypeplayerDto) {
    const typeCreated = await this.typeplayerRepository.save(createTypeplayerDto) 
    return typeCreated
  }

  async findAll() {
    return await this.typeplayerRepository.find();
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
