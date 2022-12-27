import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createUserDto: CreateUserDto) {
     const userCreate =  await this.usersRepository.save(createUserDto)
     console.log("le user cree",userCreate)
    return userCreate;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    const userFound = this.usersRepository.findOneBy({id:id}) ;
    if(!userFound){
      throw new NotFoundException(`pas d'utilisateur avec l'id ${id}`)
    }
    return userFound
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id:string) {
     const result = this.usersRepository.delete({ id });
    return `Vous avez supprimé l'utilisateur avec l'id ${id}`
  }
}
