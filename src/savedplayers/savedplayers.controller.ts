import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SavedplayersService } from './savedplayers.service';
import { CreateSavedplayerDto } from './dto/create-savedplayer.dto';
import { UpdateSavedplayerDto } from './dto/update-savedplayer.dto';
import { User } from 'src/users/entities/user.entity';
import { Savedplayer } from './entities/savedplayer.entity';
@Controller('savedplayers')
export class SavedplayersController {
  constructor(private readonly savedplayersService: SavedplayersService) {}

  @Post()
  create(@Body() createSavedplayerDto: CreateSavedplayerDto) {
    return this.savedplayersService.create(createSavedplayerDto);
  }

  @Get()
  findAll(){
    return this.savedplayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, user: User) {
    return this.savedplayersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavedplayerDto: UpdateSavedplayerDto) {
    return this.savedplayersService.update(+id, updateSavedplayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savedplayersService.remove(+id);
  }
}
