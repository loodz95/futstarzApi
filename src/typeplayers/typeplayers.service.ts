import { Typeplayer } from './entities/typeplayer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number) {
    const userFound  =  await this.typeplayerRepository.findOneBy({id})
    return userFound
  }

  async update(id: number, updateTypeplayerDto: UpdateTypeplayerDto) {
    const typeFound =  await this.findOne(id)
    if(updateTypeplayerDto.nom_type){
      typeFound.nom_type = updateTypeplayerDto.nom_type
    }
    return typeFound;
  }

  async remove(id: number) {
   const result = await this.typeplayerRepository.delete({id});
  if(result.affected===0){
     throw new NotFoundException("cet utilisateur n'existe pas")
     }else{
    return `Vous avez supprimé l'utilisateur avec l'id ${id}`}
}
}
