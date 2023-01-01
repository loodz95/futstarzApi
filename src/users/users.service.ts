
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from "../users/entities/user.entity";




@Injectable()
export class UsersService {
   constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto, user): Promise<User> {
     const userCreate =  await this.usersRepository.save(createUserDto)
     console.log("le user cree",userCreate)
     if(userCreate){
    return userCreate;
     }else{
      throw new BadRequestException("Un champ est manquant")
     }
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({id});
  }

  
  async update(id: string, updateUserDto: UpdateUserDto) {
   const userFound = await this.findOne(id)
   if(updateUserDto.role){
   userFound.role = updateUserDto.role
    return await this.usersRepository.save(userFound)
   }else{
   throw new BadRequestException("Role non défini")
  }
}

  async remove(id:string) {
     const result = this.usersRepository.delete({ id });
     if((await result).affected === 0){
      throw new NotFoundException("cet utilisateur n'existe pas")
     }else{
    return `Vous avez supprimé l'utilisateur avec l'id ${id}`}
  }
}

