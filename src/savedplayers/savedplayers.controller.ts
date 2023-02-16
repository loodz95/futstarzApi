import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SavedplayersService } from './savedplayers.service';
import { CreateSavedplayerDto } from './dto/create-savedplayer.dto';
import { UpdateSavedplayerDto } from './dto/update-savedplayer.dto';
import { User } from 'src/users/entities/user.entity';
import { Savedplayer } from './entities/savedplayer.entity';
import { Request } from '@nestjs/common';
@Controller('savedplayers')
export class SavedplayersController {
  constructor(private readonly savedplayersService: SavedplayersService) {}



  @Post()
   @UseGuards(AuthGuard())
  create(@Body() createSavedplayerDto: CreateSavedplayerDto, @Request() req) {
    console.log(req.user)
    return this.savedplayersService.create(createSavedplayerDto, req.user);
  }

  @Get()
     @UseGuards(AuthGuard())
  findAll(@Request() req){
    return this.savedplayersService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.savedplayersService.findOne(+id, req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavedplayerDto: UpdateSavedplayerDto) {
    return this.savedplayersService.update(+id, updateSavedplayerDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string, @Request() req) {
    return this.savedplayersService.remove(+id, req.user);
  }
}
