import { Item } from './entities/item.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository:Repository<Item>
  ){}

 async create(createItemDto: CreateItemDto) {
 const itemCreate = await this.itemRepository.save(createItemDto);
    return itemCreate;
  }

    async findAll() {
    return await this.itemRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  } 

  async remove(id: number) {
    const result =  await this.itemRepository.delete(id)
    if(result.affected===0){
      throw new NotFoundException("Pas d'utilisateurs avec cet id")
    }
    return `This action removes a #${id} item`;
  }
}
