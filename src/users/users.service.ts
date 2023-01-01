
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

  async create(createUserDto: CreateUserDto, user): Promise<User> {
     const userCreate =  await this.usersRepository.save(createUserDto)
     console.log("le user cree",userCreate)
    return userCreate;
  }

  findAll() {
    return this.usersRepository.find();
  }



  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({email});
  }

  
  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id:string) {
     const result = this.usersRepository.delete({ id });
     if((await result).affected === 0){
      throw new NotFoundException("cet utilisateur n'existe pas")
     }else{
    return `Vous avez supprimé l'utilisateur avec l'id ${id}`}
  }
}

