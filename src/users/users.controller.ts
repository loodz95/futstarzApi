import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
import { User } from './entities/user.entity';





@Controller('users') 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(AuthGuard())
  // avec passport, la methode validate cree un objet user a la requete, que nous allons chercher avec req.user sans avoir a creer de 
  // decorateurs personnalises. l'user authentifié va etre verifie dans la base de donnes.
  
  create(@Body() createUserDto: CreateUserDto, @Request() req) {
    if(createUserDto.firstName && createUserDto.lastName && createUserDto.email && createUserDto.password && createUserDto.nickName){
    return this.usersService.create(createUserDto, req.user)}
    else{
      throw new BadRequestException("Veuillez remplir tous les champs correctement") 
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
