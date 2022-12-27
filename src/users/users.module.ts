// Ce module utilise la forFeature()méthode pour définir quels référentiels sont enregistrés dans la portée actuelle. Avec cela en place, nous 
// pouvons injecter le UsersRepository dans le en UsersService en utilisant le @InjectRepository(). 

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {User} from "../users/entities/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],


})
export class UsersModule {}
