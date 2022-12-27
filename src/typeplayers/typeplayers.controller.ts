import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeplayersService } from './typeplayers.service';
import { CreateTypeplayerDto } from './dto/create-typeplayer.dto';
import { UpdateTypeplayerDto } from './dto/update-typeplayer.dto';

@Controller('typeplayers')
export class TypeplayersController {
  constructor(private readonly typeplayersService: TypeplayersService) {}

  @Post()
  create(@Body() createTypeplayerDto: CreateTypeplayerDto) {
    return this.typeplayersService.create(createTypeplayerDto);
  }

  @Get()
  findAll() {
    return this.typeplayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeplayersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeplayerDto: UpdateTypeplayerDto) {
    return this.typeplayersService.update(+id, updateTypeplayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeplayersService.remove(+id);
  }
}
