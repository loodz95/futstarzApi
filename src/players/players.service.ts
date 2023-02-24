import { Savedplayer } from './../savedplayers/entities/savedplayer.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Not, Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto) {
  const playerCreated = await this.playersRepository.save(createPlayerDto)
  return playerCreated
  }

  async findAll() {
    return await this.playersRepository.find();
  }



  async findOne(id: number) {
   const foundPlayer= await this.playersRepository.findOneBy({id});
   if (!foundPlayer){
    throw new NotFoundException(`Pas de joueur avec l'id #${id}`)
   }
   return foundPlayer
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
   const playerUpdate = await this.findOne(id)
   playerUpdate.defence = updatePlayerDto.defence
   playerUpdate.dribbles=updatePlayerDto.dribbles
   playerUpdate.pass=updatePlayerDto.pass
   playerUpdate.power=updatePlayerDto.power
   playerUpdate.rate=updatePlayerDto.rate
   playerUpdate.shots=updatePlayerDto.shots
   playerUpdate.speed=updatePlayerDto.speed

   return await this.playersRepository.save(playerUpdate)
  }

  async remove(id: number) {
   const playerFound =  await this.findOne(id);
   if(!playerFound){
    throw new NotFoundException("pas de player trouvé avec cet id")
   }else{
   await this.playersRepository.delete(playerFound)
   return "player bien effacé"
   }
  }
}
