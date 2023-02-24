import { AdminGuard } from './../auth/admin-guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-role.dto';

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
    if (
      createUserDto.userName &&
      createUserDto.email &&
      createUserDto.password
    ) {
      return this.usersService.createForUser(createUserDto);
    } else {
      throw new BadRequestException(
        'Veuillez remplir tous les champs correctement',
      );
    }
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  updateUserRole(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }



  @Delete(':id')
  @UseGuards(AuthGuard(), AdminGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
