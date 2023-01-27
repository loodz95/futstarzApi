import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './../users/entities/user.entity';
import { Repository } from 'typeorm';
import { timeStamp } from 'console';



@Injectable()
export class AuthService {
constructor(@InjectRepository(User) private  usersRepository:Repository<User>, private  jwtservice: JwtService){}

  async signin(createAuthDto: CreateAuthDto) {
    // destructure le dto pour utiliser ses propriétés en tant que variable dans le hashage
   const {userName, email,password, role} =createAuthDto

   const salt = await bcrypt.genSalt();
const hashedPassword = await bcrypt.hash(password, salt);
const user = await this.usersRepository.save({userName, email, password :hashedPassword, role});

try{
  return user
}catch(error){
  if(error === '23505'){
  throw new ConflictException('username already exists');
 } else {
        throw new InternalServerErrorException();
      }
    }
  
}

async login(loginDto: LoginAuthDto){
 
  const user = await this.usersRepository.findOneBy({userName : loginDto.userName})
  
  if (user && (await bcrypt.compare(loginDto.password, user.password))){
    const payload = {userName :loginDto.userName,  role : user.role};
    const accessToken = await this.jwtservice.sign(payload)
    return {accessToken, payload};
  }else{
    throw new UnauthorizedException("Identifiants incorrects")
  };

}


async update(updateAuthDto: UpdateAuthDto, id){
const userUpdate = await this.usersRepository.findOneBy(id)
console.log(userUpdate)
if(userUpdate.email !==undefined){
userUpdate.email= updateAuthDto.email;
}
if(userUpdate.userName!==undefined){
userUpdate.userName= updateAuthDto.userName;
}


if(userUpdate.password!==undefined){
userUpdate.password= updateAuthDto.password;
}




return await this.usersRepository.save(userUpdate)
// return "thats ok"

}
}
